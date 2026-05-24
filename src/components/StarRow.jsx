function Star({ filled, onClick, idx }) {
  return (
    <button
      type="button"
      className={'star-btn' + (filled ? ' on' : '')}
      onClick={onClick}
      aria-label={`${idx} stars`}
    >
      <svg viewBox="0 0 24 24">
        <path
          className="fill"
          d="M12 2.5l2.95 6.2 6.8.78-5.02 4.66 1.36 6.7L12 17.6l-6.09 3.24 1.36-6.7L2.25 9.48l6.8-.78z"
        />
      </svg>
    </button>
  );
}

export default function StarRow({ value, onChange }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          idx={n}
          filled={n <= value}
          // Tap the same star twice to decrement (so you can clear a rating).
          onClick={() => onChange(value === n ? n - 1 : n)}
        />
      ))}
    </div>
  );
}
