import React from 'react';
import { motion } from 'framer-motion';

const RingImageComponent2 = () => {
  return (
    <motion.div
      className="framer-1ol6do4"
      data-framer-name="/ring_b"
      name="/ring_b"
      style={{
        willChange: 'transform',
        opacity: 1,
        transform: 'perspective(1200px)',
        position: 'absolute', // Keep the position relative to animate within parent
        height: '40vh', // Ensure the container takes up full viewport height
        display: 'flex',
        left: "0vw",
        top: "50vh",
        justifyContent: 'right',
        alignItems: 'right',
      }}
      animate={{
        y: ['0px', '20px', '0px'], // Move up and down
      }}
      transition={{
        repeat: Infinity, // Infinite loop for animation
        duration: 2, // 2 seconds for one full cycle (up + down)
        ease: 'easeInOut', // Smooth easing
      }}
    >
      <div
        data-framer-background-image-wrapper="true"
        style={{
          position: 'absolute',
          borderRadius: 'inherit',
          inset: '0px',
          width: '50vw', // Make the image larger (80% of viewport width)
          height: '50vh', // Make the image large enough for a dramatic effect
        }}
      >
        <img
          decoding="async"
          sizes="350px"
          srcSet="https://framerusercontent.com/images/suXlAMQajEiVbhN8FZIWv8kZQlo.png?scale-down-to=1024 993w,https://framerusercontent.com/images/H9rOzpDUd3SGYyPOjpTLhVaK0.png 1189w"
          src="https://framerusercontent.com/images/suXlAMQajEiVbhN8FZIWv8kZQlo.png?scale-down-to=1024"
          alt="Ring Image"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            objectPosition: 'center center',
            objectFit: 'contain',
          }}
        />
      </div>
    </motion.div>
  );
};

export default RingImageComponent2;
