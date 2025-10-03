import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Configuration des gouttelettes
const NUM_DROPLETS = 80; // Augmenté pour un effet plus dense
const MAX_DURATION = 20; // Durée maximale réduite pour une chute plus rapide
const MIN_DURATION = 8; // Durée minimale ajustée
const MAX_TRAIL_LENGTH = 50; // Longueur maximale des traînées

const random = (min, max) => Math.random() * (max - min) + min;

const Droplet = ({ size, x, y, duration, delay, trailLength }) => {
  const dropletVariants = {
    initial: { x, y, opacity: 0, scale: 0.1, pathLength: 0 },
    animate: {
      y: y + random(600, 1000), // Chute plus marquée
      opacity: [0, random(0.6, 0.9), 0],
      scale: [0.1, random(0.8, 1.2), 0],
      pathLength: trailLength,
    },
  };

  return (
    <motion.div
      variants={dropletVariants}
      initial="initial"
      animate="animate"
      className="absolute rounded-full bg-blue-400/70 pointer-events-none"
      style={{
        width: size,
        height: size,
        filter: 'blur(2px) drop-shadow(0 0 4px rgba(62, 174, 255, 0.8))',
        willChange: 'transform, opacity',
      }}
      transition={{
        duration,
        delay,
        ease: [0.5, 0, 0.25, 1], // Courbe personnalisée pour un effet naturel
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      {/* Traînée derrière la goutte */}
      <motion.div
        className="absolute top-0 w-0.5 bg-blue-400/50"
        style={{ height: `${trailLength}px`, transformOrigin: 'top' }}
        animate={{ scaleY: [0, 1], opacity: [0.8, 0] }}
        transition={{ duration: duration / 2, ease: 'easeOut' }}
      />
    </motion.div>
  );
};

const DropletBackground = ({ children }) => {
  const droplets = useMemo(() => {
    return Array.from({ length: NUM_DROPLETS }).map((_, i) => ({
      key: i,
      x: random(0, 1500),
      y: random(-200, 0), // Départ hors écran en haut
      size: random(6, 18),
      duration: random(MIN_DURATION, MAX_DURATION),
      delay: random(0, MAX_DURATION),
      trailLength: random(20, MAX_TRAIL_LENGTH),
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ width: '1500px', height: '1500px' }}
      >
        {droplets.map((droplet) => (
          <Droplet
            key={droplet.key}
            x={droplet.x}
            y={droplet.y}
            size={droplet.size}
            duration={droplet.duration}
            delay={droplet.delay}
            trailLength={droplet.trailLength}
          />
        ))}
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default DropletBackground;