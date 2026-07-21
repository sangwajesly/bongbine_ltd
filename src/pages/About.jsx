import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { features, stats } from "../data/content";

const About = () => {
  return (
    <main>
      <PageHero
        eyebrow="About Bongbine"
        title="A modern corporate group with regional depth."
        description="We combine capital discipline, operational expertise and a long-term perspective to create sustained value."
        image="https://images.unsplash.com/photo-1517048676731-6f8f2b2288b0?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section container about-grid">
        <div>
          <p className="eyebrow">About Bongbine</p>
          <h2>
            Bongbine is a diversified business with a people-first approach.
          </h2>
          <p>
            Bongbine is a diversified business operating across real estate,
            building materials, transportation, and international trade. The
            company is committed to delivering dependable solutions that support
            infrastructure development, commerce, and long-term growth.
          </p>
          <p>
            Built on a foundation of trust and strong relationships, Bongbine
            combines professional expertise with a people-first approach,
            ensuring every client, partner, and stakeholder receives exceptional
            service throughout every stage of their journey.
          </p>
        </div>
        <div className="pill-list">
          <div>
            <h3>Mission</h3>
            <p>
              To differentiate from the standard market by delivering superior,
              personalized services across real estate, trade and logistics,
              ensuring every client experiences excellence, trust and genuine
              care.
            </p>
          </div>
          <div>
            <h3>Vision</h3>
            <p>
              To build a globally respected business where employees, partners
              and stakeholders are welcomed as family, creating opportunities
              for shared growth and long-term success.
            </p>
          </div>
          <div>
            <h3>Core Values</h3>
            <p>
              Family & Inclusivity — Building meaningful relationships through
              respect, care and collaboration. Integrity — Honesty, transparency
              and accountability. Growth & Success — Continuous innovation and
              sustainable development. Teamwork — Shared responsibility and
              mutual support.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="Leadership"
          title="Experienced professionals guiding complex delivery."
          description="Our leadership combines commercial insight, technical knowledge and strong stakeholder management."
        />
        <div className="leader-grid">
          <div className="leader-card">
            <h3>Christophe Mbella</h3>
            <p>
              Founder & Chief Executive Officer — strategic direction and
              partnerships.
            </p>
          </div>
          <div className="leader-card">
            <h3>Amina Ngassa</h3>
            <p>
              Chief Operating Officer — delivery, operations and client
              services.
            </p>
          </div>
          <div className="leader-card">
            <h3>Paul Etoundi</h3>
            <p>Head of Projects — technical delivery and quality assurance.</p>
          </div>
        </div>
      </section>

      <section className="section container feature-strip">
        <div className="feature-strip__content">
          <SectionTitle
            eyebrow="Why Bongbine"
            title="A reputation for clarity, reliability and momentum."
            description="The company remains focused on sustainable growth and responsible execution."
          />
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
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
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="Brand Positioning"
          title="Professional solutions with a family-centred approach"
          description="Bongbine simplifies access to trusted real estate, construction
            materials, transportation and trade services while creating lasting
            value for individuals, businesses and communities."
        />

        <div className="card-grid" style={{ marginTop: "1rem" }}>
          <div className="info-card">
            <div className="info-card__body">
              <h3>Brand Promise</h3>
              <p>
                Bongbine delivers dependable solutions and meaningful
                relationships by combining professional expertise with a
                family-centred approach.
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card__body">
              <h3>Brand Purpose & Essence</h3>
              <p>
                Purpose: Helping people build, move, trade and grow with
                confidence. Promise: Professional service with a family touch.
                Tagline: Where Business Meets Family.
              </p>
              <p>
                Keywords: Trust · Growth · Strength · Reliability · Partnership
                · Opportunity · Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;
