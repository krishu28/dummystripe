
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000", // Background color
        },
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#fff", // Particle color
          },
          shape: {
            type: "circle", // Particle shape
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;