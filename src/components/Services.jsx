import { services } from '../data/content';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section__head">
        <p className="section__eyebrow">What I offer</p>
        <h2>Services</h2>
        <p className="section__lede">
          Ways I help teams design, build, and ship secure full-stack software
        </p>
      </div>

      <div className="services__grid">
        {services.map((service, index) => (
          <article key={service.id} className="service">
            <span className="service__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
