import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg' },
  { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Intel', logo: 'https://cdn.worldvectorlogo.com/logos/intel-1.svg' },
];

const Companies = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isHovered]);

  const logos = [...companies, ...companies]; // double pour boucle infinie

  return (
    <div className="relative w-full overflow-hidden py-10 bg-[#030215]">
      <motion.div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={controls}
        className="flex w-max gap-10 md:gap-16 items-center px-4 md:px-8"
      >
        {logos.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={c.logo}
              alt={c.name}
              className="h-10 md:h-14 transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl"
            />
            <span className="mt-2 text-xs md:text-sm text-gray-300 font-medium">{c.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Companies;
