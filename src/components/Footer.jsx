import { profile } from '../data/content';
import Icon from './Icon';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h2 className="footer__name">{profile.name}</h2>
          <p className="footer__role">{profile.title}</p>
          <p className="footer__loc">{profile.location}</p>
        </div>

        <div className="footer__right">
          <div className="footer__socials" aria-label="Social profiles">
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

          <div className="footer__links">
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" size={15} />
              {profile.email}
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={15} />
              WhatsApp {profile.whatsapp}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={15} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="footer__credit">
        Designed and built by {profile.name} · {year}
      </p>
    </footer>
  );
}
