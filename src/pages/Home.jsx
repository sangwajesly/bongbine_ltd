import { motion } from "framer-motion";
import { ArrowRight, Building2, Compass, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import SectionTitle from "../components/SectionTitle";
import {
  features,
  projects,
  services,
  stats,
  testimonials,
} from "../data/content";

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow">
              Real Estate • Construction • Building Materials
            </p>
            <h1>Building Growth. Creating Value.</h1>
            <p>
              Bongbine Ltd delivers premier real estate and construction
              solutions across Cameroon — from property development and land
              sales to materials supply and project delivery.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="button button--primary">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="button button--secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
              alt="Modern construction and infrastructure project"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      <section className="section container overview-section">
        <div className="overview-card">
          <div>
            <p className="eyebrow">Company Overview</p>
            <h2>Premium delivery across the full project lifecycle.</h2>
            <p>
              From development strategy to execution and logistics, Bongbine
              combines deep regional knowledge with a globally informed delivery
              mindset.
            </p>
          </div>
          <Link to="/about" className="button button--secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="Business Divisions"
          title="Integrated capabilities built for growth."
          description="A compact portfolio of solutions designed to support ambitious clients from planning to delivery."
        />
        <div className="card-grid">
          {services.map((service, index) => (
            <motion.article
              className="info-card"
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <img src={service.image} alt={service.title} loading="lazy" />
              <div className="info-card__body">
                <div className="icon-pill">
                  <service.icon size={18} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Selected ventures that reflect our standards."
          description="High-value projects that balance operational excellence with long-term impact."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-card__body">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>
                    <MapPin size={14} /> {project.location}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container feature-strip">
        <div className="feature-strip__content">
          <SectionTitle
            eyebrow="Why Choose Bongbine"
            title="A firm built on dependability and delivery."
            description="We connect strategy, execution and logistics in a way that feels deliberate and modern."
          />
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="feature-list-grid">
          {features.map((feature) => (
            <div className="feature-pill" key={feature.title}>
              <div className="icon-pill">
                <feature.icon size={16} />
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container testimonials-section">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by clients who value precision."
          description="Our work speaks through the confidence of the people we partner with."
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Home;
