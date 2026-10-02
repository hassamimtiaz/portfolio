import { projects } from '../data/content';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__head">
        <p className="section__eyebrow">Selected work</p>
        <h2>Featured Projects</h2>
        <p className="section__lede">
          Recent platforms I have designed, built, and shipped end to end
        </p>
      </div>

      <div className="projects__list">
        {projects.map((project, index) => (
          <article key={project.id} className="project">
            <div className="project__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="project__body">
              <div className="project__top">
                <h3>{project.name}</h3>
                <p className="project__period">
                  {project.period} · {project.company}
                </p>
              </div>
              <p className="project__desc">{project.description}</p>
              <ul className="project__highlights">
                {project.highlights.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="project__tech">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
