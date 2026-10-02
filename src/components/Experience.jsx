import { useState } from 'react';
import { experience } from '../data/content';
import './Experience.css';

function JobCode({ job }) {
  const lines = [
    [
      { type: 'kw', text: 'const' },
      { type: 'plain', text: ' ' },
      { type: 'var', text: 'job' },
      { type: 'plain', text: ' = {' },
    ],
    [
      { type: 'plain', text: '  ' },
      { type: 'key', text: 'title' },
      { type: 'plain', text: ': ' },
      { type: 'str', text: `"${job.title}"` },
      { type: 'plain', text: ',' },
    ],
    [
      { type: 'plain', text: '  ' },
      { type: 'key', text: 'from' },
      { type: 'plain', text: ': ' },
      { type: 'str', text: `"${job.from}"` },
      { type: 'plain', text: ',' },
    ],
    [
      { type: 'plain', text: '  ' },
      { type: 'key', text: 'to' },
      { type: 'plain', text: ': ' },
      job.to === null
        ? { type: 'null', text: 'null' }
        : { type: 'str', text: `"${job.to}"` },
      { type: 'plain', text: ',' },
    ],
    [
      { type: 'plain', text: '  ' },
      { type: 'key', text: 'company' },
      { type: 'plain', text: ': ' },
      { type: 'str', text: `"${job.company}"` },
    ],
    [{ type: 'plain', text: '}' }],
  ];

  return (
    <ol className="experience__lines">
      {lines.map((tokens, i) => (
        <li key={`${job.id}-${i}`}>
          <span className="experience__ln">{i + 1}</span>
          <code>
            {tokens.map((token, j) =>
              token.type === 'plain' ? (
                <span key={j}>{token.text}</span>
              ) : (
                <span key={j} className={`tok-${token.type}`}>
                  {token.text}
                </span>
              )
            )}
          </code>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="section experience">
      <div className="section__head">
        <p className="section__eyebrow">Career</p>
        <h2>Experience</h2>
        <p className="section__lede">
          The positions I have worked in my career so far
        </p>
      </div>

      <div className="experience__editor">
        <div className="experience__tabs" role="tablist" aria-label="Jobs">
          {experience.map((item, index) => (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={active === index}
              className={`experience__tab ${active === index ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
            >
              {item.file}
            </button>
          ))}
        </div>

        <div className="experience__pane" role="tabpanel">
          <div className="experience__code" aria-hidden="true">
            <JobCode job={job} />
          </div>

          <div className="experience__details">
            <div className="experience__meta">
              <h3>{job.title}</h3>
              <p>
                {job.company} · {job.from} — {job.to ?? 'Present'} · {job.location}
              </p>
            </div>
            <ul>
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
