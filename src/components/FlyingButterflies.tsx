import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Butterfly {
  id: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  color: string;
}

export const FlyingButterflies: React.FC = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    // Generate 6 butterflies flying around the screen (fewer but larger)
    const items: Butterfly[] = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // starting percentage width
      y: Math.random() * 100 + 10, // starting percentage height
      scale: 1.3 + Math.random() * 1.5, // much larger size
      duration: 18 + Math.random() * 22, // slow majestic drift
      delay: Math.random() * -18, // pre-start so they appear instantly
      color: '🦋',
    }));
    setButterflies(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {butterflies.map((b) => (
        <motion.div
          key={b.id}
          initial={{
            x: `${b.x}vw`,
            y: `110vh`,
            opacity: 0.2,
          }}
          animate={{
            y: [`110vh`, `-10vh`],
            x: [
              `${b.x}vw`,
              `${b.x + (Math.random() * 20 - 10)}vw`,
              `${b.x + (Math.random() * 20 - 10)}vw`,
              `${b.x + (Math.random() * 20 - 10)}vw`,
            ],
            opacity: [0.1, 0.7, 0.8, 0.7, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            fontSize: `${24 * b.scale}px`,
          }}
        >
          {/* Internal flapping container */}
          <div className="animate-flap inline-block">
            {b.color}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
