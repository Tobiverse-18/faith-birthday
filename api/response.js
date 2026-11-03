
import { Resend } from 'resend';

const allowedResponses = {
  yes: "YES, I'D LOVE TO",
  time: 'I NEED A LITTLE TIME',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.',
    });
  }

  const { RESEND_API_KEY, NOTIFICATION_EMAIL, RESEND_FROM_EMAIL } =
    process.env;

  if (!RESEND_API_KEY || !NOTIFICATION_EMAIL || !RESEND_FROM_EMAIL) {
    console.error('Email notification environment variables are missing.');

    return res.status(500).json({
      success: false,
      message: 'The notification service is not configured.',
    });
  }

  const { response, website } = req.body || {};

  // Honeypot: silently reject automated submissions.
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!Object.hasOwn(allowedResponses, response)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid response.',
    });
  }

  const selectedResponse = allowedResponses[response];
  const submittedAt = new Date().toLocaleString('en-NG', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Africa/Lagos',
  });

  try {
    const resend = new Resend(RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [NOTIFICATION_EMAIL],
      subject: `Faith's birthday website response: ${selectedResponse}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; color: #35101c;">
          <div style="text-align: center; padding: 25px; background: #3b0b19; color: #f8eee5;">
            <p style="color: #d6b477; letter-spacing: 3px; font-size: 11px;">A SPECIAL MESSAGE</p>
            <h1 style="font-family: Georgia, serif; font-weight: normal;">Faith has responded</h1>
          </div>

          <div style="padding: 30px; background: #fbf5ef; text-align: center;">
            <p style="font-size: 13px; color: #80616a;">HER SELECTED RESPONSE</p>
            <h2 style="font-family: Georgia, serif; color: #641b30;">
              ${selectedResponse}
            </h2>
            <p style="font-size: 13px; color: #80616a;">
              Submitted on ${submittedAt} (Nigeria time)
            </p>
          </div>

          <p style="text-align: center; font-size: 12px; color: #80616a; margin-top: 25px;">
            Sent privately from the Faith birthday website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend delivery error:', error);

      return res.status(502).json({
        success: false,
        message: 'We could not deliver the notification.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Response notification sent.',
      id: data?.id,
    });
  } catch (error) {
    console.error('Notification error:', error);

    return res.status(500).json({
      success: false,
      message: 'Something went wrong while sending the notification.',
    });
  }
}
