import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="cta-block">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build a stronger future together.</h2>
      </div>
      <Link to="/contact" className="button button--primary">
        Start a conversation <ArrowRight size={18} />
      </Link>
    </section>
  );
};

export default CTASection;
