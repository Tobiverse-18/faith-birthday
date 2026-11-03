
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Video,
} from 'lucide-react';
import './OurStory.css';

const moments = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'The conversations',
    description:
      'Somehow, ordinary conversations became something I genuinely look forward to. Even the simplest chats with you have a way of making my day better.',
  },
  {
    number: '02',
    icon: Phone,
    title: 'Hearing your voice',
    description:
      'Those voice calls remind me that distance does not have to stop two people from feeling close. Your voice has become one of my favourite sounds.',
  },
  {
    number: '03',
    icon: Video,
    title: 'Seeing your smile',
    description:
      'Every video call gives me another reason to smile. I love getting to see the person behind the messages and the voice I have grown fond of.',
  },
];

function OurStory({ onContinue }) {
  return (
    <main className="story-page">
      <div className="story-glow story-glow-one" />
      <div className="story-glow story-glow-two" />

      <motion.div
        className="story-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="story-eyebrow">
          <span />
          A LITTLE SOMETHING ABOUT US
          <span />
        </div>

        <header className="story-heading">
          <p className="story-kicker">Two places, one beautiful connection</p>
          <h1>
            Distance has its way
            <br />
            of making <em>moments special.</em>
          </h1>
          <p className="story-intro">
            Faith, I don't know exactly when it happened, but somewhere
            between our conversations, laughter and calls, you became
            someone I genuinely look forward to hearing from.
          </p>
        </header>

        <section className="story-distance">
          <div className="story-location">
            <div className="story-location-icon">
              <MapPin size={19} />
            </div>
            <span className="story-location-label">WHERE I AM</span>
            <h2>Nigeria</h2>
          </div>

          <div className="story-connection">
            <div className="story-line">
              <span className="story-line-dot" />
              <span className="story-line-dot" />
              <span className="story-line-dot" />
              <Heart size={19} />
              <span className="story-line-dot" />
              <span className="story-line-dot" />
              <span className="story-line-dot" />
            </div>
            <p>Different places. One connection.</p>
          </div>

          <div className="story-location">
            <div className="story-location-icon">
              <MapPin size={19} />
            </div>
            <span className="story-location-label">WHERE YOU ARE</span>
            <h2>Cyprus</h2>
          </div>
        </section>

        <section className="story-moments">
          <div className="story-section-heading">
            <span className="story-small-label">THE LITTLE THINGS</span>
            <h2>What makes this special</h2>
            <p>
              It isn't always about grand gestures. Sometimes, it is the
              little moments that mean the most.
            </p>
          </div>

          <div className="story-moment-list">
            {moments.map((moment, index) => {
              const Icon = moment.icon;

              return (
                <motion.article
                  className="story-moment"
                  key={moment.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="story-moment-number">
                    {moment.number}
                  </div>

                  <div className="story-moment-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <div className="story-moment-copy">
                    <h3>{moment.title}</h3>
                    <p>{moment.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <motion.section
          className="story-future"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles size={21} strokeWidth={1.4} />
          <p className="story-small-label">SOMETHING TO LOOK FORWARD TO</p>
          <h2>
            One day, the distance
            <br />
            will become a memory.
          </h2>
          <p>
            I look forward to the day when our conversations don't have
            to end with a goodbye through a screen, and we can create
            memories in the same place. Until then, I'm grateful for
            every moment we get to share.
          </p>
        </motion.section>

        <footer className="story-footer">
          <div className="story-footer-line" />
          <p>And now, Faith, there's something I'd love to ask you...</p>

          <button className="story-continue-button" onClick={onContinue}>
            Continue
            <ArrowRight size={18} />
          </button>

          <span className="story-footer-signature">
            MADE WITH WARMTH, JUST FOR YOU
          </span>
        </footer>
      </motion.div>
    </main>
  );
}

export default OurStory;
