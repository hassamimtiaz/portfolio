import { profile } from '../data/content';
import Icon from './Icon';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__layout">
        <div className="hero__copy">
          <p className="hero__welcome">Welcome to the portfolio of</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              <Icon name="message" size={17} />
              Contact Me
            </a>
            <a
              className="btn btn--ghost"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={17} />
              WhatsApp
            </a>
            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={17} />
              GitHub
            </a>
          </div>

          <div className="hero__socials" aria-label="Social profiles">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Icon name="github" size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <Icon name="whatsapp" size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <img
            src={profile.photo}
            alt={`${profile.name}, ${profile.title}`}
            width="280"
            height="373"
            decoding="async"
          />
        </div>
      </div>

      <a href="#experience" className="hero__scroll" aria-label="Scroll to experience">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      </a>
    </section>
  );
}
