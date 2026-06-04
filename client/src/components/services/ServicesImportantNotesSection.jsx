import { FaCheck } from 'react-icons/fa';
import { servicesImportantNotes, servicesImportantNotesIntro } from '../../data/servicesImportantNotes';

export default function ServicesImportantNotesSection() {
  const { label, heading, headingAccent } = servicesImportantNotesIntro;

  return (
    <section className="section services-important-notes-section">
      <div className="container">
        <header className="services-important-notes-header">
          <span className="services-important-notes-label">{label}</span>
          <h2 className="services-important-notes-heading">
            {heading}{' '}
            <span className="services-important-notes-heading-accent">{headingAccent}</span>
          </h2>
        </header>

        <ul className="services-important-notes-list">
          {servicesImportantNotes.map((note) => (
            <li key={note} className="services-important-notes-item">
              <FaCheck className="services-important-notes-check" aria-hidden="true" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
