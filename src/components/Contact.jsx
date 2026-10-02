import { useState } from 'react';
import { profile } from '../data/content';
import Icon from './Icon';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function buildMessage({ name, email, message }) {
  return [
    `Hi Hassam, I reached out from your portfolio.`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\n');
}

const channels = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: profile.whatsappUrl,
    text: profile.whatsapp,
    external: true,
    icon: 'whatsapp',
  },
  {
    key: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    text: profile.email,
    icon: 'mail',
  },
  {
    key: 'phone',
    label: 'Phone',
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    text: profile.phone,
    icon: 'phone',
  },
  {
    key: 'github',
    label: 'GitHub',
    href: profile.github,
    text: 'github.com/hassamimtiaz',
    external: true,
    icon: 'github',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: profile.linkedin,
    text: 'linkedin.com/in/hassam-imtiaz',
    external: true,
    icon: 'linkedin',
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleWhatsApp(event) {
    event.preventDefault();
    const text = encodeURIComponent(buildMessage(form));
    window.open(`${profile.whatsappUrl}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  function handleEmail(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(buildMessage(form));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section contact">
      <div className="section__head">
        <p className="section__eyebrow">Let’s talk</p>
        <h2>Contact</h2>
        <p className="section__lede">
          Send a message by email or WhatsApp — I usually reply within a day
        </p>
      </div>

      <div className="contact__layout">
        <form className="contact__form" onSubmit={handleWhatsApp}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What are you working on?"
            />
          </div>

          <div className="contact__actions">
            <button className="btn btn--primary" type="submit">
              <Icon name="whatsapp" size={17} />
              Message on WhatsApp
            </button>
            <button className="btn btn--ghost" type="button" onClick={handleEmail}>
              <Icon name="mail" size={17} />
              Send via Email
            </button>
          </div>
        </form>

        <aside className="contact__aside">
          <p className="contact__aside-label">Direct channels</p>
          <ul className="contact__channels">
            {channels.map((channel) => (
              <li key={channel.key}>
                <span className="contact__channel-label">
                  <Icon name={channel.icon} size={15} />
                  {channel.label}
                </span>
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                >
                  {channel.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
