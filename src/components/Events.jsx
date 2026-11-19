import EventCard from './EventCard';

// Static array containing exactly the four required placeholder event cards
const EVENTS_DATA = [
  {
    id: 'creative-jam',
    title: 'CREATIVE JAM',
    tag: '// SPRINT & BUILD',
    tagline: 'An open collaborative session turning speculative ideas into tangible digital prototypes.',
    accentColor: '#f0683a',
  },
  {
    id: 'ideathon',
    title: 'IDEATHON',
    tag: '// BRAINSTORM & PITCH',
    tagline: 'Rapid ideation challenge solving pressing campus and civic technological issues.',
    accentColor: '#2253f5',
  },
  {
    id: 'design-after-hours',
    title: 'DESIGN AFTER HOURS',
    tag: '// UI / UX & INTERACTION',
    tagline: 'Late-evening design critiques, visual styling breakdowns, and typography jams.',
    accentColor: '#f2ca4b',
  },
  {
    id: 'the-big-meetup',
    title: 'THE BIG MEETUP',
    tag: '// FLAGSHIP GATHERING',
    tagline: 'All members and curious builders convene to connect, showcase work, and exchange ideas.',
    accentColor: '#2253f5',
  },
];

function Events() {
  return (
    <section id="events" className="events-section">
      <div className="container events-container">
        {/* Section Header */}
        <div className="events-header-block">
          <div className="tag-pill tag-yellow">
            <span>WHAT WE HOST</span>
          </div>
          <h2 className="section-heading events-heading">
            FLAGSHIP EXPERIENCES.
          </h2>
          <p className="events-subtitle">
            Curated events designed to spark curiosity, sharpen technical craft, and connect forward-thinking minds.
          </p>
        </div>

        {/* 4 Event Cards Grid rendered via map() */}
        <div className="events-grid">
          {EVENTS_DATA.map((eventItem) => (
            <EventCard key={eventItem.id} event={eventItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
