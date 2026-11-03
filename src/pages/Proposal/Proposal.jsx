import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Clock } from 'lucide-react';
import './Proposal.css';

function Proposal({
  onYes,
  onTime,
  isSubmitting = false,
}) {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const handleTimeResponse = () => setAnswer('time');

    window.addEventListener(
      'faith-proposal-time-response',
      handleTimeResponse
    );

    return () => {
      window.removeEventListener(
        'faith-proposal-time-response',
        handleTimeResponse
      );
    };
  }, []);

  return (
    <main className="proposal-page">
      <div className="proposal-glow proposal-glow-left" />
      <div className="proposal-glow proposal-glow-right" />

      <motion.div
        className="proposal-container"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="proposal-top-label">
          <span />
          JUST ONE QUESTION
          <span />
        </div>

        <AnimatePresence mode="wait">
          {!answer && (
            <motion.section
              className="proposal-content"
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="proposal-heart">
                <Heart size={34} strokeWidth={1.2} />
                <span className="proposal-heart-ring" />
              </div>

              <p className="proposal-pretitle">MY DEAR BABY BEAR</p>

              <h1>
                Faith, will you
                <br />
                <em>be my girlfriend?</em>
              </h1>

              <p className="proposal-message">
                Getting to know you has become one of the sweetest parts
                of my days. I know we still have so much to discover about
                each other, but I would love the chance to make this
                connection something more.
              </p>

              <p className="proposal-question">
                So, what do you say?
              </p>

              <div className="proposal-actions">
                <button
                  className="proposal-yes-button"
                  onClick={onYes}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : "YES, I'D LOVE TO"}
                  {!isSubmitting && <Heart size={17} />}
                </button>

                <button
                  className="proposal-time-button"
                  onClick={onTime}
                  disabled={isSubmitting}
                >
                  <Clock size={16} />
                  I NEED A LITTLE TIME
                </button>
              </div>

              <p className="proposal-footnote">
                Whatever your answer, I'm glad I got to know you.
              </p>
            </motion.section>
          )}

          {answer === 'time' && (
            <motion.section
              className="proposal-response"
              key="time"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="proposal-response-icon">
                <Heart size={30} strokeWidth={1.3} />
              </div>

              <p className="proposal-pretitle">TAKE YOUR TIME, FAITH</p>

              <h1>
                There's no
                <br />
                <em>need to rush.</em>
              </h1>

              <p className="proposal-message">
                I meant every word, but I also want you to feel
                comfortable with your decision. Take all the time you
                need. I value what we're building, and I don't want you
                to feel pressured into giving me an answer.
              </p>

              <p className="proposal-response-signature">
                With warmth,
                <br />
                Akinbalogun Oluwatobiloba
              </p>

              <button
                className="proposal-back-button"
                onClick={() => setAnswer('')}
              >
                <ArrowRight size={16} />
                Back to the question
              </button>
            </motion.section>
          )}
        </AnimatePresence>

        <div className="proposal-bottom">
          <Sparkles size={14} />
          <span>MADE WITH CARE, JUST FOR FAITH</span>
          <Sparkles size={14} />
        </div>
      </motion.div>
    </main>
  );
}

export default Proposal;
