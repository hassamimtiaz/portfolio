import { skillGroups } from '../data/content';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__head">
        <p className="section__eyebrow">Toolkit</p>
        <h2>Core Skills</h2>
        <p className="section__lede">
          Technologies and practices I use to design, build, and ship reliable software
        </p>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.label} className="skills__group">
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
