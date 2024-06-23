// src/components/Herosection.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HeroSectionArt from '../assests/HeroSectionArtmain.png';
import { Typewriter } from 'react-simple-typewriter'


const icons = [
  {
    id: 1,
    svg: (
      <a href='https://youtube.com/@baos_623'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="currentColor"
        style={{ color: "#ff0000" }}
        viewBox="0 0 24 24"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
      </a>
    ),
  },
  {
    id: 2,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-9 w-9"
        style={{ color: "#6a76ac" }}
      >
        <path
          fill="currentColor"
          d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        fill="currentColor"
        style={{ color: "#c13584" }}
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 4,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        fill="currentColor"
        style={{ color: "#1877f2" }}
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    ),
  },
];

const Herosection = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateIcons = async () => {
      await controls.start((i) => ({
        y: ['-50%', '0%', '-50%'],
        transition: {
          opacity: 1,
          y: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 5,
            ease: 'anticipate',
            delay: i * 1,
          },
        },
      }));
    };

    animateIcons();
  }, [controls]);

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100vh' }}
        transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.3 }}
        className="bg-gradient-to-t from-baseprimary to-secondary h-screen z-0"
      ></motion.div>

      <motion.div
        initial={{ x: '-180vh', rotateZ: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.7 }}
        className="bg-primary md:h-[180vh] md:w-[97vw] z-20 absolute -left-[10vw] -top-[50vh]"
      ></motion.div>
      <motion.div
        initial={{ x: '-180vh', rotateZ: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.7 }}
        className="bg-basesecondary md:h-[180vh] md:w-[75vw] z-20 absolute -left-[10vw] -top-[50vh]"
      ></motion.div>
      <motion.div
        initial={{ x: '-180vh', rotateZ: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.0, ease: 'easeInOut', delay: 1.0 }}
        className="bg-secondary md:h-[180vh] md:w-[70vw] z-20 absolute -left-[10vw] -top-[50vh]"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 1.0, ease: 'easeInOut', delay: 1.5 }}
        className="flex md:h-[65vh] md:w-auto sm:h-[20vh] z-30 absolute top-[10vh] left-0 right-0 bottom-0 m-auto"
      >
        <img src={HeroSectionArt} alt="Hero Section Art" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1.0, ease: 'easeInOut', delay: 2.0 }}
        className="flex flex-col items-center md:w-auto z-30 absolute top-[80vh] left-0 right-[40vw] bottom-0 m-auto"
      >
        <h1 className="pt-0 m-auto font-russoone text-5xl text-primary">
          Join Us On{' '}
          <span style={{ color: '#9C2473', fontWeight: 'bold' }}>
            <Typewriter
              words={['Youtube', 'Tiktok', 'Instagram', 'Facebook']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className="mt-8 w-full flex justify-center pb-10">
          {icons.map(icon => (
            <motion.div
            key={icon.id}
            initial={{ opacity: 1, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: icon.id * 0.1 }}
            className="mx-3"
            >
              {icon.svg}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Herosection;