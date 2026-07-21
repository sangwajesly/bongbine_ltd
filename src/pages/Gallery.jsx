import { useState } from "react";
import { X } from "lucide-react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { galleryItems } from "../data/content";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="A visual record of projects, people and places."
        description="Explore the breadth of our building environments, operational spaces and professional teams."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section container">
        <SectionTitle
          eyebrow="Visual Portfolio"
          title="Construction, property and corporate spaces."
          description="A curated gallery designed for quick browsing and future storytelling."
        />
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <button
              type="button"
              className="gallery-card"
              key={item.title}
              onClick={() => setActiveImage(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </section>

      {activeImage ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox__close"
              type="button"
              aria-label="Close gallery preview"
              onClick={() => setActiveImage(null)}
            >
              <X size={20} />
            </button>
            <img src={activeImage.image} alt={activeImage.title} />
            <h3>{activeImage.title}</h3>
          </div>
        </div>
      ) : null}

      <CTASection />
    </main>
  );
};

export default Gallery;
