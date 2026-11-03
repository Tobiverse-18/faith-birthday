import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  ArrowRight,
  Feather,
  Flower2
} from 'lucide-react';
import './BirthdayLetter.css';

function BirthdayLetter({ onContinue }) {
  const [opened, setOpened] = useState(false);

  const openEnvelope = () => {
    if (!opened) {
      setOpened(true);
    }
  };

  return (
    <main className="letter-page">
      <div className="letter-glow letter-glow-one" />
      <div className="letter-glow letter-glow-two" />

      <motion.div
        className="letter-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <span className="letter-kicker">
          <Sparkles size={13} />
          A FEW WORDS FROM MY HEART
        </span>

        <h1>
          Something I
          <span>wrote for you.</span>
        </h1>

        <p>
          Some things are better expressed when they're written down.
        </p>
      </motion.div>

      <div className={`envelope-scene ${opened ? 'is-open' : ''}`}>
        <motion.div
          className="envelope"
          initial={{ opacity: 0, y: 35, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="envelope-back" />

          <AnimatePresence>
            {!opened && (
              <motion.div
                className="envelope-letter-preview"
                initial={{ y: 0 }}
                exit={{ y: -145, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Heart size={20} />
                <span>For Faith</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="envelope-front">
            <div className="envelope-flap" />

            {!opened && (
              <motion.div
                className="wax-seal"
                animate={{
                  scale: [1, 1.04, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <Heart size={25} fill="currentColor" />
              </motion.div>
            )}

            <div className="envelope-decoration">
              <Flower2 size={28} />
            </div>
          </div>

          {!opened && (
            <button
              className="envelope-click-area"
              onClick={openEnvelope}
              aria-label="Open your birthday letter"
            />
          )}
        </motion.div>
      </div>

      {!opened ? (
        <motion.div
          className="letter-instruction"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>SEALED WITH A LITTLE LOVE</span>
          <p>Touch anywhere on the envelope to open it</p>
        </motion.div>
      ) : (
        <motion.div
          className="letter-reveal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.article
            className="letter-paper"
            initial={{
              y: -90,
              scale: 0.94,
              opacity: 0,
              rotateX: 8
            }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
              rotateX: 0
            }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="paper-top">
              <span>JUST FOR YOU</span>
              <Heart size={17} />
            </div>

            <div className="paper-content">
              <p className="paper-date">
                A special day, for a special girl
              </p>

              <h2>Dear Faith,</h2>

              <p>Happy birthday, my Baby Bear.</p>

              <p>
                I wish I could be right there beside you today,
                just to see your smile, hear your laughter and
                remind you how special you are. Even though
                distance separates us for now, I hope this little
                surprise makes you feel a little closer to me.
              </p>

              <p>
                Getting to know you has brought a beautiful kind
                of excitement into my days. I appreciate our
                conversations, our calls, the laughter we share
                and all the little moments that make me look
                forward to hearing from you again.
              </p>

              <p>
                Today, I wish you genuine happiness, peace,
                beautiful opportunities and a year filled with
                reasons to smile. May life be gentle with you
                and may everything your heart quietly wishes
                for find its way to you.
              </p>

              <p>
                Thank you for being you, Faith. Never forget
                how wonderful you are.
              </p>

              <div className="paper-signature">
                <span>With warmth and affection,</span>
                <strong>
                    Akinbalogun Oluwatobiloba
                </strong>
                <Heart size={19} fill="currentColor" />
              </div>
            </div>

            <div className="paper-bottom">
              <Feather size={15} />
              <span>WRITTEN WITH CARE, JUST FOR YOU</span>
              <Feather size={15} />
            </div>
          </motion.article>

          <motion.button
            className="letter-continue"
            onClick={onContinue}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span>Continue our little story</span>
            <ArrowRight size={17} />
          </motion.button>
        </motion.div>
      )}

      <div className="letter-footer">
        <Heart size={11} fill="currentColor" />
        <span>MADE ESPECIALLY FOR FAITH</span>
      </div>
    </main>
  );
}

export default BirthdayLetter;