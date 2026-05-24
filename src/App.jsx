import { useEffect, useState } from 'react';
import { RESTAURANTS, PARTY_SIZE } from './data.js';
import { loadState, saveState, clearState } from './storage.js';
import Card from './components/Card.jsx';
import Leaderboard from './components/Leaderboard.jsx';

export default function App() {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const handleReset = () => {
    if (confirm('Wipe all scores?')) {
      clearState();
      setState({});
    }
  };

  return (
    <div className="placemat">
      <div className="checker red" />

      <header className="header">
        <div className="stamp">
          <big>Nut</big>
          <big>Alert</big>
          <small>★ co-judge sensitive ★</small>
        </div>
        <div className="eyebrow">
          <span className="star">★</span>
          <span>Sunday Reconnaissance · Est. 2026</span>
          <span className="star">★</span>
        </div>
        <h1 className="title">
          Restaurant
          <em>Crawl!</em>
        </h1>
        <div className="deck">rehearsal dinner taste-testing, ranked &amp; reviewed</div>
        <div className="judges">
          <div className="judge you">
            <span className="label">Bride · Head Judge</span>
            <span className="name">YOU</span>
          </div>
          <div className="judge">
            <span className="label">Co-Judge · No nuts plz</span>
            <span className="name">PARTNER IN CRIME</span>
          </div>
        </div>
      </header>

      <div className="intro">
        <div className="col">
          <div className="k">Mission</div>
          <div className="v">Rehearsal Dinner Venue</div>
        </div>
        <div className="col">
          <div className="k">Party of</div>
          <div className="v">{PARTY_SIZE} guests</div>
        </div>
        <div className="col">
          <div className="k">Stops</div>
          <div className="v">{RESTAURANTS.length} spots, 1 day</div>
        </div>
      </div>

      {RESTAURANTS.map((r, i) => (
        <Card key={r.id} restaurant={r} idx={i} state={state} setState={setState} />
      ))}

      <Leaderboard state={state} />

      <div className="colophon">
        <span className="crown">may the best brunch win ♡</span>
        Court of Two · all scores final · cashews disqualified
        <div className="toolbar">
          <button className="tbtn print" onClick={() => window.print()}>
            ★ Print Scorecard
          </button>
          <button className="tbtn reset" onClick={handleReset}>
            ↺ Reset
          </button>
        </div>
      </div>

      <div className="checker red" style={{ marginTop: 22 }} />

      {/* SVG defs used by stars */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#D9342B" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
