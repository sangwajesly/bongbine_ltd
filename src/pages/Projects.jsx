import { useState } from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/content";

const filters = [
  "All",
  "Construction",
  "Real Estate",
  "Commercial",
  "Residential",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="A portfolio of purposeful developments."
        description="Every project reflects careful planning, premium execution and a focus on lasting value."
        image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section container">
        <SectionTitle
          eyebrow="Project Portfolio"
          title="Select projects by discipline."
          description="Browse a curated view of work across construction, property and logistics."
        />
        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-card__body">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Projects;
