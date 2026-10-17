import React from 'react';
import { placeholderStats } from '../../../data/company';
import { CountUp } from '../../ui/CountUp';


export function StatsSection({ showPlaceholders }) {
  return (
    <section aria-label="CRL in numbers" className="stats-section">
      <div
        className={
          'stats-section__card md:!max-w-none md:!py-[2.3vw] md:!rounded-[1.3vw]' +
          (showPlaceholders ? '' : ' stats-section__card--compact')
        }
      >
        <dl className="stats-section__highlights md:!gap-[1.75vw]">
          <div className="stats-section__stat md:!gap-[1vw]">
            <dt className="stats-section__label md:!text-[length:0.9vw]">
              Next-Day Service Locations
            </dt>

            <dd className="stats-section__value md:!text-[length:4.4vw]">
              <CountUp value={24} />
            </dd>
          </div>

          <div className="stats-section__stat stats-section__stat--operations md:!gap-[1vw] md:!pl-[1.75vw]">
            <dt className="stats-section__label md:!text-[length:0.9vw]">
              Operations
            </dt>

            <dd
              className="stats-section__value md:!text-[length:4.4vw]"
              aria-label="24 hours a day, 7 days a week"
            >
              24{' '}
              <span
                className="stats-section__multiply"
                aria-hidden="true"
              >
                x
              </span>{' '}
              7
            </dd>
          </div>
        </dl>

        {showPlaceholders && (
          <div className="stats-section__placeholders md:!px-[1.45vw] md:!py-[1.6vw] md:!rounded-[0.5vw]">
            <dl className="stats-section__placeholder-grid md:!gap-[1vw]">
              {placeholderStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="stats-section__placeholder-label md:!text-[length:0.8vw]">
                    {stat.label}
                  </dt>

                  <dd className="stats-section__placeholder-value md:!text-[length:1.9vw]">
                    {stat.display}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="stats-section__notice md:!mt-[1.3vw] md:!text-[length:0.75vw]">
              Placeholder &mdash; replace with verified CRL data.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
