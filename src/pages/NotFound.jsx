import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found-page">
      <div className="container not-found-card">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you’re looking for may have moved or no longer exists.</p>
        <Link to="/" className="button button--primary">
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
