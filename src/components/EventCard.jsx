function EventCard({ event }) {
  const { title, tag, tagline, accentColor } = event;

  return (
    <article className="event-card" style={{ '--card-accent': accentColor || '#2253f5' }}>
      <div className="event-card-header">
        <span className="event-card-tag">{tag}</span>
        <span className="event-card-arrow" aria-hidden="true">&rarr;</span>
      </div>

      <h3 className="event-card-title">{title}</h3>

      {tagline && (
        <p className="event-card-tagline">{tagline}</p>
      )}

      <div className="event-card-footer">
        <span className="event-card-status">CHAPTER EVENT</span>
      </div>
    </article>
  );
}

export default EventCard;
