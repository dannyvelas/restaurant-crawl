import { useMemo } from 'react';
import { RESTAURANTS, CATEGORIES } from '../data.js';

export default function Leaderboard({ state }) {
  const rows = useMemo(() => {
    return RESTAURANTS.map((r) => {
      const sc = state[r.id] || {};
      const total = CATEGORIES.reduce((s, c) => s + (sc[c.id] || 0), 0);
      return { r, total, verdict: sc.verdict, cost: sc.cost };
    }).sort((a, b) => b.total - a.total);
  }, [state]);

  const anyScored = rows.some((x) => x.total > 0);

  return (
    <section className="lead">
      <div className="head">
        <h3>The Leaderboard</h3>
        <div className="sub">
          {anyScored ? 'drumroll, please…' : "score 'em to see the ranking ✿"}
        </div>
      </div>
      <ol>
        {rows.map((row, i) => (
          <li
            key={row.r.id}
            className={
              (i === 0 && row.total > 0 ? 'win ' : '') + (row.total === 0 ? 'empty' : '')
            }
          >
            <div className="rank">
              {i === 0 && row.total > 0 ? '♛' : `0${i + 1}`}
            </div>
            <div className="name">
              {row.r.name}
              {row.verdict && (
                <span className={`v ${row.verdict}`}>{row.verdict.toUpperCase()}</span>
              )}
              <span className="meta-line">
                {row.r.hood}
                {row.cost ? ` · $${row.cost} for the party` : ''}
              </span>
            </div>
            <div className="total">
              {row.total}
              <small>/ {CATEGORIES.length * 5} STARS</small>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
