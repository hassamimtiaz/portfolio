import { education, profile } from '../data/content';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="resume__panel">
        <div className="resume__copy">
          <p className="section__eyebrow">Curriculum vitae</p>
          <h2>Resume</h2>
          <p className="section__lede">
            Learn more about my experience by downloading the full resume
          </p>
          <a className="btn btn--primary" href={profile.resumeUrl} download>
            Download resume.pdf
          </a>
        </div>

        <div className="resume__aside">
          <p className="resume__label">Education</p>
          <h3>{education.degree}</h3>
          <p>{education.school}</p>
          <p className="resume__period">{education.period}</p>
        </div>
      </div>
    </section>
  );
}
