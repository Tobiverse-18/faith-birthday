
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Flower2 } from 'lucide-react';
import './Celebration.css';

const confettiPieces = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 8) * 0.35}s`,
  duration: `${5 + (index % 5)}s`,
  rotation: `${index * 47}deg`,
}));

function Celebration() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowMessage(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="celebration-page">
      <div className="celebration-glow celebration-glow-one" />
      <div className="celebration-glow celebration-glow-two" />

      <div className="celebration-confetti" aria-hidden="true">
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="celebration-confetti-piece"
            style={{
              left: piece.left,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              transform: `rotate(${piece.rotation})`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="celebration-container"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="celebration-top-label">
          <span />
          A BEAUTIFUL NEW BEGINNING
          <span />
        </div>

        <motion.div
          className="celebration-heart"
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 130, damping: 12, delay: 0.3 }}
        >
          <Heart size={43} strokeWidth={1.2} />
          <span className="celebration-heart-ring" />
          <span className="celebration-heart-ring celebration-heart-ring-two" />
        </motion.div>

        <motion.p
          className="celebration-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          FAITH SAID YES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Well, look at us...
          <br />
          <em>It's a beginning.</em>
        </motion.h1>

        <motion.div
          className="celebration-divider"
          initial={{ width: 0 }}
          animate={{ width: 65 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        />

        <motion.p
          className="celebration-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          My Baby Bear, you just made this birthday surprise even more
          special for me. I wish I could be beside you right now to see
          that smile and celebrate this moment with you.
        </motion.p>

        {showMessage && (
          <motion.section
            className="celebration-letter"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="celebration-letter-decoration">
              <Flower2 size={22} strokeWidth={1.2} />
            </div>

            <p>
              I know this is only the beginning, and I don't expect
              everything to be perfect. I just want us to keep learning
              about each other, communicating, laughing, supporting one
              another and making beautiful memories together.
            </p>

            <p>
              From Nigeria to Cyprus, I look forward to every chapter
              ahead of us. And hopefully, before long, distance will no
              longer be part of our story.
            </p>

            <div className="celebration-signature">
              <span>With all my affection,</span>
              <strong>Akinbalogun Oluwatobiloba</strong>
            </div>
          </motion.section>
        )}

        <motion.div
          className="celebration-bottom-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <Sparkles size={15} />
          <span>HERE'S TO SOMETHING BEAUTIFUL</span>
          <Star size={13} />
        </motion.div>

        <p className="celebration-footer">
          Created with care, especially for you, Faith.
        </p>
      </motion.div>
    </main>
  );
}

export default Celebration;
