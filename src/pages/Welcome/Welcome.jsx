import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  ArrowRight,
  Flower2
} from 'lucide-react';
import './Welcome.css';

function Welcome({ onContinue }) {
  const [started, setStarted] = useState(false);

  return (
    <main className="welcome">
      <div className="welcome-grain" />
      <div className="welcome-glow welcome-glow-one" />
      <div className="welcome-glow welcome-glow-two" />

      <div className="welcome-decoration welcome-decoration-left">
        <Flower2 />
      </div>

      <div className="welcome-decoration welcome-decoration-right">
        <Flower2 />
      </div>

      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="welcome-top-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Sparkles size={13} />
          <span>A LITTLE SOMETHING FOR SOMEONE SPECIAL</span>
          <Sparkles size={13} />
        </motion.div>

        <motion.div
          className="welcome-heart"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Heart size={25} strokeWidth={1.2} fill="currentColor" />
        </motion.div>

        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              className="welcome-main"
              key="first"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.7 }}
            >
              <p className="welcome-eyebrow">To my favourite girl</p>

              <h1>
                Happy Birthday,
                <span>Faith.</span>
              </h1>

              <div className="welcome-divider">
                <span />
                <Heart size={12} fill="currentColor" />
                <span />
              </div>

              <p className="welcome-description">
                For the girl who makes distance feel a little smaller
                and ordinary moments feel a little more beautiful.
              </p>

              <p className="welcome-nickname">
                My Baby Bear
                <Heart size={15} fill="currentColor" />
              </p>

              <button
                className="welcome-button"
                onClick={() => setStarted(true)}
              >
                <span>Open your surprise</span>
                <ArrowRight size={17} />
              </button>

              <p className="welcome-footer">
                Made with love, just for you
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="welcome-main welcome-second"
              key="second"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="welcome-eyebrow">Before anything else...</p>

              <h1>
                This little world
                <span>is yours.</span>
              </h1>

              <div className="welcome-divider">
                <span />
                <Heart size={12} fill="currentColor" />
                <span />
              </div>

              <p className="welcome-description">
                I made this with you in mind. Take your time,
                enjoy every little detail, and let me make
                your day a little more special.
              </p>

              <p className="welcome-nickname">
                Always your Baby Bear admirer
                <Heart size={15} fill="currentColor" />
              </p>

              <button
                className="welcome-button"
                onClick={onContinue}
              >
                <span>There's a letter for you</span>
                <ArrowRight size={17} />
              </button>

              <div className="welcome-coming">
                <Sparkles size={15} />
                <span>Something heartfelt awaits...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="welcome-bottom">
        <span>MADE ESPECIALLY FOR FAITH</span>
        <Heart size={10} fill="currentColor" />
        <span>WITH LOVE</span>
      </div>
    </main>
  );
}

export default Welcome;