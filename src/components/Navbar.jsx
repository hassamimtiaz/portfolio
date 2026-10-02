import { profile } from '../data/content';
import './Navbar.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ menuOpen, onToggle, onNavigate }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={onNavigate}>
          {profile.name}
        </a>

        <button
          className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={onToggle}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={onNavigate}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
