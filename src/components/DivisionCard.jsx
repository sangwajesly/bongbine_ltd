import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, HardHat, Boxes, Truck, Globe, ArrowRight } from 'lucide-react';

const iconMap = {
  Building2,
  HardHat,
  Boxes,
  Truck,
  Globe
};

const DivisionCard = ({ division, index = 0 }) => {
  const IconComponent = iconMap[division.iconName] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-division"
    >
      <div>
        <div className="card-icon-wrapper">
          <IconComponent size={28} />
        </div>

        <h3 className="card-title">
          {division.title}
        </h3>

        <p className="card-text">
          {division.shortDescription}
        </p>
      </div>

      <Link
        to={`/services#${division.id}`}
        className="card-link"
      >
        Learn More
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default DivisionCard;
