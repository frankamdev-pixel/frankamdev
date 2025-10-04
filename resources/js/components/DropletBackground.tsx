import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Configuration des Particules (Plus Vives) ---
const NUM_DROPLETS = 60; 
const MAX_DURATION = 25; 
const MIN_DURATION = 10; 

// Fonction utilitaire pour générer des valeurs aléatoires
const random = (min, max) => Math.random() * (max - min) + min;

// --- Composant d'une seule Gouttelette (Droplet) ---
const Droplet = ({ size, x, y, duration, delay }) => {
  // Définition de l'animation pour le mouvement et le cycle de vie
  const dropletVariants = {
    initial: {
      x: x, 
      y: y,
      opacity: 0,
      scale: 0.1,
    },
    animate: {
      // Mouvement sur l'axe Y (montée/chute aléatoire)
      // On utilise les valeurs initiales (x, y) comme base pour le mouvement.
      y: [y, y + random(-400, 400)], 
      // Mouvement sur l'axe X (dérive latérale aléatoire)
      x: [x, x + random(-300, 300)], 
      
      // Cycle d'opacité : Apparaître -> Rester -> Disparaître (Plus visible)
      opacity: [0, random(0.4, 0.8), random(0.4, 0.8), 0],
      // Cycle de taille
      scale: [0.1, random(0.7, 1.5), random(0.7, 1.5), 0.1], 
    },
  };

  return (
    <motion.div
      variants={dropletVariants}
      initial="initial"
      animate="animate"
      className="absolute rounded-full bg-blue-300/80 pointer-events-none" 
      style={{
        width: size,
        height: size,
        filter: 'blur(4px)', 
        boxShadow: '0 0 20px rgba(62, 174, 255, 1)', 
        willChange: 'transform, opacity', 
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeInOut',
        repeat: Infinity, 
        repeatType: 'loop', 
      }}
    />
  );
};

// --- Composant Principal de l'Arrière-plan ---
const DropletBackground = ({ children }) => {
  
  // 1. Hook pour gérer la taille du viewport
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Fonction pour mettre à jour la taille
    const handleResize = () => {
      setViewportSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };

    // Initialisation et écoute de l'événement de redimensionnement
    handleResize();
    window.addEventListener('resize', handleResize);

    // Nettoyage de l'écouteur d'événement
    return () => window.removeEventListener('resize', handleResize);
  }, []); // S'exécute une seule fois au montage

  // 2. Génération des gouttelettes basée sur la taille du viewport
  const droplets = useMemo(() => {
    if (viewportSize.width === 0) return []; // Évite la génération avant d'avoir les dimensions

    // Utilisation des dimensions réelles de l'écran (avec une petite marge)
    const containerWidth = viewportSize.width + 100; // +100 pour la marge de mouvement
    const containerHeight = viewportSize.height + 100; // +100 pour la marge de mouvement
    
    return Array.from({ length: NUM_DROPLETS }).map((_, i) => ({
      key: i,
      // Positionnement initial en pixels aléatoires DANS la zone du viewport
      x: random(-50, containerWidth - 50), 
      y: random(-50, containerHeight - 50),
      size: random(8, 24), 
      duration: random(MIN_DURATION, MAX_DURATION),
      delay: random(0, MAX_DURATION), 
    }));
  }, [viewportSize]); // Regénère les gouttes si la taille de l'écran change

  return (
    // Le conteneur parent prend la taille minimale de l'écran et le fond sombre
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      
      {/* Conteneur des gouttelettes (en arrière-plan) */}
      {/* On utilise 100vw/100vh pour qu'il couvre exactement l'écran */}
      <div 
        className="absolute inset-0 z-0"
        style={{ width: '100vw', height: '100vh' }} 
      >
        {droplets.map((droplet) => (
          <Droplet 
            key={droplet.key}
            x={droplet.x}
            y={droplet.y}
            size={droplet.size}
            duration={droplet.duration}
            delay={droplet.delay}
          />
        ))}
      </div>

      {/* Contenu de la page (en avant-plan) */}
      <div className="relative z-10 w-full"> 
        {children}
      </div>
    </div>
  );
};

export default DropletBackground;
