import { Mail, MapPin, Phone, Send, Clock3 } from "lucide-react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Speak with our team about your next opportunity."
        description="We welcome enquiries from clients, investors, partners and project stakeholders."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section container contact-grid">
        <div className="contact-card">
          <SectionTitle
            eyebrow="Reach Us"
            title="Direct channels for discussion and coordination."
            description="Every number and address below is designed to be immediately actionable."
          />
          <ul className="contact-list contact-list--stacked">
            <li>
              <Phone size={16} />{" "}
              <a href="tel:+237650000000">+237 650 000 000</a>
            </li>
            <li>
              <Phone size={16} />{" "}
              <a href="tel:+237699000000">+237 699 000 000</a>
            </li>
            <li>
              <Send size={16} />{" "}
              <a
                href="https://wa.me/237650000000"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: +237 650 000 000
              </a>
            </li>
            <li>
              <Mail size={16} />{" "}
              <a href="mailto:info@bongbine.cm">info@bongbine.cm</a>
            </li>
            <li>
              <MapPin size={16} /> Bonapriso Business Tower, Douala, Cameroon
            </li>
            <li>
              <Clock3 size={16} /> Mon – Fri • 8:00 AM – 6:00 PM
            </li>
          </ul>
        </div>
        <div className="contact-card contact-card--map">
          <div className="map-placeholder">Google Map Placeholder</div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Contact;
