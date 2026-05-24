import { CATEGORIES, PARTY_SIZE } from '../data.js';
import StarRow from './StarRow.jsx';

export default function Card({ restaurant: r, idx, state, setState }) {
  const sc = state[r.id] || {};
  const set = (patch) => setState({ ...state, [r.id]: { ...sc, ...patch } });

  const total = CATEGORIES.reduce((sum, c) => sum + (sc[c.id] || 0), 0);
  const max = CATEGORIES.length * 5;

  return (
    <section className="card">
      <div className="ticket">
        <div className="num">{String(idx + 1).padStart(2, '0')}</div>
        <div className="who">
          <h2>{r.name}</h2>
          <div className="hood">{r.hood}</div>
        </div>
        <div className="scorebadge">
          {total}
          <small>/ {max} STARS</small>
        </div>
        <div className="ord">
          {r.ord.split('\n').map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>
      <div className="perf" />

      <div className="grades">
        {CATEGORIES.map((c) => (
          <div className="row" key={c.id}>
            <div className="cat">
              {c.label}
              <small>{c.blurb}</small>
            </div>
            <StarRow value={sc[c.id] || 0} onChange={(v) => set({ [c.id]: v })} />
          </div>
        ))}
      </div>

      <div className="meta">
        <div className="field">
          <label>Est. total for party of {PARTY_SIZE}</label>
          <div className="cost-row">
            <span className="dollar">$</span>
            <input
              type="text"
              inputMode="numeric"
              placeholder="0000"
              value={sc.cost || ''}
              onChange={(e) => set({ cost: e.target.value.replace(/[^0-9,]/g, '') })}
            />
            <span className="for25">all-in</span>
          </div>
        </div>

        <div className="field">
          <label>The Verdict</label>
          <div className="verdict-row">
            {['yes', 'maybe', 'no'].map((v) => (
              <button
                key={v}
                type="button"
                className={`v-btn ${v} ${sc.verdict === v ? 'on' : ''}`}
                onClick={() => set({ verdict: sc.verdict === v ? null : v })}
              >
                {v === 'yes' ? '★ YES' : v === 'maybe' ? '~ Maybe' : '✕ No'}
              </button>
            ))}
          </div>
        </div>

        <div className="field notes">
          <label>Notes · best dish · overheard · receipts</label>
          <textarea
            rows={3}
            placeholder="write your truth here..."
            value={sc.notes || ''}
            onChange={(e) => set({ notes: e.target.value })}
          />
        </div>
      </div>
    </section>
  );
}
