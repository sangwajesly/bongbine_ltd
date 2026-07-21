import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { services } from "../data/content";

const Services = () => {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Solutions tailored to ambitious operations."
        description="Every service is delivered with the discipline, coordination and quality that today’s projects demand."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section container">
        <SectionTitle
          eyebrow="Core Offerings"
          title="A portfolio designed for scale and precision."
          description="Our capabilities are structured to support growth from early planning through long-term delivery."
        />
        <div className="card-grid">
          {services.map((service) => (
            <article
              className="info-card info-card--service"
              key={service.title}
            >
              <img src={service.image} alt={service.title} loading="lazy" />
              <div className="info-card__body">
                <div className="icon-pill">
                  <service.icon size={18} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/contact" className="text-link">
                  Discuss this service
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Services;
