import React from 'react';
import { motion } from 'framer-motion';
import RingImageComponent2 from './ring2-enter';
import MainComponent from './main-content-enter';
const RingImageComponentEn = () => {
  return (
    <>
    <MainComponent/>
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
        left: "60vw",
        top: "30vh",
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
          width: '35vw', // Make the image larger (80% of viewport width)
          height: '30vh', // Make the image large enough for a dramatic effect
        }}
      >
        <img
          decoding="async"
          sizes="298px"
          srcSet="https://framerusercontent.com/images/H9rOzpDUd3SGYyPOjpTLhVaK0.png?scale-down-to=1024 993w,https://framerusercontent.com/images/H9rOzpDUd3SGYyPOjpTLhVaK0.png 1189w"
          src="https://framerusercontent.com/images/H9rOzpDUd3SGYyPOjpTLhVaK0.png"
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

    <RingImageComponent2/>
    </>
  );
};

export default RingImageComponentEn;
