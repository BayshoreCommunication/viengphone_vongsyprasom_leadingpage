import type { ReactNode } from "react";
import { CONTACT_URL, type CardsSection, type Item } from "./content";

export const H2 =
  "mb-3 text-[1.55rem] font-normal leading-tight tracking-wide text-ink md:text-[2rem]";
export const BTN =
  "inline-flex items-center justify-center rounded-full bg-rose px-7 py-3 text-[0.8rem] font-bold uppercase tracking-[1.5px] text-white no-underline transition hover:-translate-y-0.5 hover:bg-ink";

export function Shell({
  id,
  eyebrow,
  title,
  intro,
  alt,
  narrow,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  alt?: boolean;
  narrow?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 py-12 md:py-16 ${alt ? "border-y border-[#e4dfd3] bg-white" : "bg-cream"}`}
    >
      <div className={`mx-auto px-5 ${narrow ? "max-w-[780px]" : "max-w-[1080px]"}`}>
        {eyebrow && (
          <div className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[3px] text-rose">{eyebrow}</div>
        )}
        {title && <h2 className={H2}>{title}</h2>}
        {intro && <p className="mb-8 max-w-[700px] text-[1.02rem] text-[#51596b]">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

/** Responsive card grid; optional numbered icon like the reference layout. */
export function CardGrid({
  items,
  alt,
  numbered,
  min = 280,
}: {
  items: Item[];
  alt?: boolean;
  numbered?: boolean;
  min?: number;
}) {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))` }}
    >
      {items.map((item, i) => (
        <article
          key={item.title}
          className={`rounded-xl border border-[#e4dfd3] p-5 transition hover:-translate-y-1 hover:border-rose hover:shadow-[0_20px_40px_-14px_rgba(0,0,0,0.3)] ${
            alt ? "bg-cream" : "bg-white"
          }`}
        >
          {numbered && (
            <div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-rose/15 text-sm font-bold text-rose">
              {i + 1}
            </div>
          )}
          <h3 className="mb-2 font-sans text-[1rem] font-semibold leading-snug text-ink">{item.title}</h3>
          <p className="text-[0.93rem] leading-relaxed text-[#51596b]">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function CardsBlock({
  section,
  alt,
  numbered,
  eyebrow,
}: {
  section: CardsSection;
  alt?: boolean;
  numbered?: boolean;
  eyebrow?: string;
}) {
  return (
    <Shell id={section.id} eyebrow={eyebrow} title={section.title} intro={section.intro} alt={alt}>
      <CardGrid items={section.items} alt={alt} numbered={numbered} min={section.columns === 2 ? 420 : 300} />
    </Shell>
  );
}

/** Numbered vertical timeline with a left rule. */
export function Timeline({ items, start = 1 }: { items: Item[]; start?: number }) {
  return (
    <ol className="ml-4 list-none border-l-2 border-[#e4dfd3]">
      {items.map((item, i) => (
        <li key={item.title} className="relative pb-6 pl-9 last:pb-0">
          <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-ink text-[0.85rem] font-semibold text-white">
            {start + i}
          </span>
          <b className="block text-ink">{item.title}</b>
          <span className="text-[0.93rem] text-[#51596b]">{item.text}</span>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
      {items.map((b) => (
        <li key={b} className="relative pl-8 text-[#51596b]">
          <span aria-hidden className="absolute left-0 top-0 font-bold text-rose">&#10003;</span>
          {b}
        </li>
      ))}
    </ul>
  );
}

export function FeeRows({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-1 border-b border-[#e4dfd3] py-4 sm:flex-row sm:gap-4">
          <b className="min-w-[200px] text-ink">{item.title}</b>
          <span className="text-[#51596b]">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-[#e4dfd3] bg-white px-3.5 py-1.5 text-[0.88rem] text-ink">
          {item}
        </span>
      ))}
    </div>
  );
}

export function Accordion({ items, openFirst }: { items: Item[]; openFirst?: boolean }) {
  return (
    <div>
      {items.map((item, i) => (
        <details
          key={item.title}
          open={openFirst && i === 0}
          className="group mb-2.5 rounded-xl border border-[#e4dfd3] bg-white px-4 open:border-rose"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 py-3.5 font-sans text-[0.97rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-[0.97rem] font-semibold">{item.title}</h3>
            <span aria-hidden className="text-xl leading-none text-rose group-open:hidden">+</span>
            <span aria-hidden className="hidden text-xl leading-none text-rose group-open:inline">&minus;</span>
          </summary>
          <p className="pb-4 text-[0.93rem] leading-relaxed text-[#51596b]">{item.text}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactButton({ children }: { children: ReactNode }) {
  return (
    <a className={BTN} href={CONTACT_URL}>
      {children}
    </a>
  );
}
