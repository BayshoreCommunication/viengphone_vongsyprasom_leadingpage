import {
  COMPARISON,
  DOCUMENTS,
  CIVICS_PREP,
  PROCESSING,
  ELIGIBILITY,
  FAQS,
  FEES,
  LICENSED_ATTORNEY,
  OFFICE,
  PRACTICE_AREAS,
  PROCESS,
} from "./content";
import { AttorneyFigure } from "./Blocks";
import { Keyword } from "./Keyword";
import { Accordion, CheckList, Chips, FeeRows, Shell, Timeline } from "./Sections";

export function Eligibility() {
  return (
    <Shell id={ELIGIBILITY.id} eyebrow="Step zero" title={ELIGIBILITY.title} intro={ELIGIBILITY.intro}>
      <CheckList items={ELIGIBILITY.bullets} />
    </Shell>
  );
}

export function Documents() {
  const half = Math.ceil(DOCUMENTS.items.length / 2);
  return (
    <Shell id={DOCUMENTS.id} eyebrow="Be prepared" title={DOCUMENTS.title} intro={DOCUMENTS.intro}>
      <div className="grid items-start gap-x-10 md:grid-cols-2">
        <Accordion items={DOCUMENTS.items.slice(0, half)} openFirst />
        <Accordion items={DOCUMENTS.items.slice(half)} />
      </div>
    </Shell>
  );
}

/** Processing timeline on the left, civics-test preparation on the right. */
export function TimelineAndCivics() {
  return (
    <Shell>
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div id={PROCESSING.id} className="scroll-mt-16">
          <div className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[3px] text-rose">What to expect</div>
          <h2 className="mb-3 text-[1.55rem] font-normal leading-tight tracking-wide text-ink md:text-[1.8rem]">
            {PROCESSING.title}
          </h2>
          <p className="mb-7 text-[#51596b]">{PROCESSING.intro}</p>
          <Timeline items={PROCESSING.items} />
        </div>
        <div id={CIVICS_PREP.id} className="scroll-mt-16">
          <div className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[3px] text-rose">Interview ready</div>
          <h2 className="mb-3 text-[1.55rem] font-normal leading-tight tracking-wide text-ink md:text-[1.8rem]">
            {CIVICS_PREP.title}
          </h2>
          <p className="mb-7 text-[#51596b]">{CIVICS_PREP.intro}</p>
          <Accordion items={CIVICS_PREP.items} />
        </div>
      </div>
    </Shell>
  );
}

export function Fees() {
  return (
    <Shell id={FEES.id} eyebrow="2026 costs" title={FEES.title} intro={FEES.intro}>
      <FeeRows items={FEES.items} />
    </Shell>
  );
}

/** Attorney portrait + licensed-attorney statement, then the comparison table. */
export function LicensedAttorneyAndTable() {
  return (
    <Shell id={LICENSED_ATTORNEY.id} eyebrow="Why Vien Law" title={LICENSED_ATTORNEY.title}>
      <div className="mb-10 grid items-center gap-8 rounded-2xl bg-[#f7e8eb] p-6 md:grid-cols-[300px_1fr] md:p-8">
        <AttorneyFigure />
        <p className="text-[1.05rem] leading-relaxed text-[#3a3f4d]">
          <Keyword text={LICENSED_ATTORNEY.text} />
        </p>
      </div>
      <h3 id={COMPARISON.id} className="mb-4 scroll-mt-16 text-[1.25rem] font-normal tracking-wide text-ink md:text-[1.45rem]">
        {COMPARISON.title}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-[#e4dfd3]">
        <table className="w-full min-w-[600px] border-collapse bg-white text-left text-[0.92rem]">
          <thead>
            <tr>
              {COMPARISON.head.map((h) => (
                <th key={h} scope="col" className="bg-ink px-4 py-3.5 font-semibold text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.rows.map(([area, us, others]) => (
              <tr key={area} className="border-b border-[#e4dfd3] last:border-0">
                <th scope="row" className="px-4 py-3.5 align-top font-semibold text-ink">{area}</th>
                <td className="bg-[#f7e8eb] px-4 py-3.5 align-top font-medium text-ink">{us}</td>
                <td className="px-4 py-3.5 align-top text-[#51596b]">{others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}

export function ProcessSection() {
  const half = Math.ceil(PROCESS.steps.length / 2);
  return (
    <Shell
      id={PROCESS.id}
      eyebrow="Our process"
      title={PROCESS.title}
      intro={<Keyword text={PROCESS.intro} />}
      alt
    >
      <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
        <Timeline items={PROCESS.steps.slice(0, half)} />
        <Timeline items={PROCESS.steps.slice(half)} start={half + 1} />
      </div>
    </Shell>
  );
}

export function PracticeAreas() {
  return (
    <Shell id={PRACTICE_AREAS.id} eyebrow="Where we help" title={PRACTICE_AREAS.title} intro={PRACTICE_AREAS.intro} alt>
      {PRACTICE_AREAS.groups.map((g) => (
        <div key={g.title} className="mb-10">
          <h3 className="mb-3 font-sans text-[1rem] font-semibold text-ink">{g.title}</h3>
          <Chips items={g.items} />
        </div>
      ))}
      <div id="office-location" className="grid scroll-mt-16 items-stretch gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="min-h-[300px] overflow-hidden rounded-2xl border border-[#e4dfd3] shadow-sm">
          <iframe
            src={OFFICE.mapSrc}
            title={OFFICE.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[300px] w-full border-0"
          />
        </div>
        <address className="flex flex-col justify-center rounded-2xl bg-ink p-8 not-italic text-silver-light">
          <div className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[3px] text-rose">{OFFICE.label}</div>
          <p className="mb-6 text-[1.2rem] leading-relaxed text-white">
            {OFFICE.lines.map((line, i) => (
              <span key={line}>
                {line}
                {i < OFFICE.lines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <a
            href={OFFICE.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-full bg-rose px-6 py-2.5 text-[0.78rem] font-bold uppercase tracking-[1.5px] text-white transition hover:bg-white hover:text-ink"
          >
            Get Directions
          </a>
        </address>
      </div>
    </Shell>
  );
}

export function Faq() {
  return (
    <Shell id="faq" title="Frequently Asked Questions" narrow>
      <Accordion items={FAQS} />
    </Shell>
  );
}
