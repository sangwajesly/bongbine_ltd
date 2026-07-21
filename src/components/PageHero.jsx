import { motion } from "framer-motion";

const PageHero = ({ eyebrow, title, description, image, align = "left" }) => {
  return (
    <section className="page-hero">
      <motion.div
        className="page-hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`hero-copy ${align === "center" ? "center" : ""}`}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
      </motion.div>
      <div className="page-hero__image">
        <img src={image} alt="" loading="eager" />
      </div>
    </section>
  );
};

export default PageHero;
