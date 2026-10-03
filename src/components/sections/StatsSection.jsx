import React from 'react';
import { placeholderStats } from '../../data/company';
import { CountUp } from '../ui/CountUp';

export function StatsSection({ showPlaceholders }) {
  return (
    <section aria-label="CRL in numbers" className="stats-section">
      <div className={'stats-section__card' + (showPlaceholders ? '' : ' stats-section__card--compact')}>
        <dl className="stats-section__highlights">
          <div className="stats-section__stat">
            <dt className="stats-section__label">Next-Day Service Locations</dt>
            <dd className="stats-section__value"><CountUp value={24} /></dd>
          </div>
          <div className="stats-section__stat stats-section__stat--operations">
            <dt className="stats-section__label">Operations</dt>
            <dd className="stats-section__value" aria-label="24 hours a day, 7 days a week">
              24 <span className="stats-section__multiply" aria-hidden="true">x</span> 7
            </dd>
          </div>
        </dl>
        {showPlaceholders && (
          <div className="stats-section__placeholders">
            <dl className="stats-section__placeholder-grid">
              {placeholderStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="stats-section__placeholder-label">{stat.label}</dt>
                  <dd className="stats-section__placeholder-value">{stat.display}</dd>
                </div>
              ))}
            </dl>
            <p className="stats-section__notice">Placeholder &mdash; replace with verified CRL data.</p>
          </div>
        )}
      </div>
    </section>
  );
}
