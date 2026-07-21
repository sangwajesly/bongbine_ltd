import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

const iconMap = {
  Users,
  ShieldCheck,
  TrendingUp,
  Handshake
};

const ValueCard = ({ value, index = 0 }) => {
  const IconComponent = iconMap[value.iconName] || Users;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-value"
    >
      <div className="card-value-icon">
        <IconComponent size={26} />
      </div>

      <h3 className="card-value-title">
        {value.title}
      </h3>

      <p className="card-value-desc">
        {value.description}
      </p>
    </motion.div>
  );
};

export default ValueCard;
