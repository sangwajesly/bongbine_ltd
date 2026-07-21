import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { faqs } from "../data/content";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Helpful answers for common enquiries."
        description="A quick reference for clients looking for clarity on our capabilities and engagement model."
        image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section container faq-section">
        <SectionTitle
          eyebrow="Frequently Asked Questions"
          title="Details that matter before the conversation starts."
          description="We’ve assembled a concise guide to key questions about our work and service model."
        />
        <div className="faq-list">
          {faqs.map((item, index) => (
            <article
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={18} />
              </button>
              {openIndex === index ? <p>{item.answer}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default FAQ;
