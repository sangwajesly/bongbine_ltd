import React from 'react';
import { motion } from 'framer-motion';

// High-end editorial easing curve (sharp start, very long smooth tail)
const editorialEase = [0.16, 1, 0.3, 1];

export const RevealText = ({ children, delay = 0, className = "", ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, delay, ease: editorialEase }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const RevealImage = ({ children, delay = 0, className = "", style, ...props }) => (
  <motion.div
    initial={{ clipPath: 'inset(10% 0 10% 0)', scale: 1.05, opacity: 0 }}
    whileInView={{ clipPath: 'inset(0% 0 0% 0)', scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-150px" }}
    transition={{ duration: 1.6, delay, ease: editorialEase }}
    className={className}
    style={{ overflow: 'hidden', ...style }}
    {...props}
  >
    {children}
  </motion.div>
);

export const RevealLine = ({ delay = 0, className = "structural-line", ...props }) => (
  <motion.div
    initial={{ scaleX: 0, transformOrigin: "left" }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.4, delay, ease: editorialEase }}
    className={className}
    {...props}
  />
);
