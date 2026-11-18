import Image from "next/image";
import Link from "next/link";
import { CONTACT_URL, CTA, IMAGES, NAV_LINKS } from "./content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#2a2a2a] bg-ink text-silver-light">
      <div className="mx-auto flex h-[60px] max-w-[1080px] items-center justify-between gap-4 px-5">
        <Link href="/" aria-label="Vongsyprasom Law, P.A. home">
          <Image
            src="/viengphone-vongsyprasom-logo.png"
            alt="Vongsyprasom Law, P.A."
            width={1548}
            height={317}
            className="h-8 w-auto"
          />
        </Link>
        <nav aria-label="Page sections" className="hidden gap-6 text-[0.8rem] uppercase tracking-[1px] md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-silver transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={CONTACT_URL}
          className="rounded-full bg-rose px-5 py-2 text-[0.75rem] font-bold uppercase tracking-[1.5px] text-white transition hover:bg-white hover:text-ink"
        >
          Book a Consultation
        </a>
      </div>
    </header>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 bg-ink p-3 md:hidden">
      <a
        href={CONTACT_URL}
        className="block rounded-full bg-rose py-3 text-center text-[0.8rem] font-bold uppercase tracking-[1.5px] text-white"
      >
        Book a Consultation
      </a>
    </div>
  );
}

/** Soft CTA band that sits between content sections. */
export function CtaStrip({ title, text, button }: { title: string; text: string; button: string }) {
  return (
    <div className="border-y border-[#ead4d9] bg-linear-to-r from-[#f7e8eb] via-[#fbf3f4] to-[#f7e8eb]">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-5 px-5 py-8 text-center md:flex-row md:text-left">
        <div>
          <h3 className="mb-1 text-[1.25rem] font-normal tracking-wide text-ink">{title}</h3>
          <p className="text-[0.95rem] text-[#51596b]">{text}</p>
        </div>
        <a
          href={CONTACT_URL}
          className="shrink-0 rounded-full bg-ink px-7 py-3 text-[0.8rem] font-bold uppercase tracking-[1.5px] text-white transition hover:-translate-y-0.5 hover:bg-rose"
        >
          {button}
        </a>
      </div>
    </div>
  );
}

export function FinalCta() {
  return (
    <section id="start-your-case" className="bg-linear-to-b from-ink-soft to-ink px-5 py-16 text-center text-silver-light">
      <div className="mx-auto max-w-[680px]">
        <h2 className="mb-4 text-[1.6rem] font-normal tracking-wide text-white md:text-[2rem]">{CTA.title}</h2>
        <p className="mb-8 text-[1.02rem] text-silver">
          {CTA.before}{" "}
          <a href={CONTACT_URL} className="font-bold text-[#ff6b7a] underline underline-offset-4 hover:text-white">
            {CTA.linkText}
          </a>{" "}
          {CTA.after}
        </p>
        <a
          href={CONTACT_URL}
          className="inline-flex rounded-full bg-rose px-9 py-3.5 text-[0.85rem] font-bold uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

/** Attorney portrait (WebP) with caption metadata. */
export function AttorneyFigure() {
  const img = IMAGES.attorney;
  return (
    <figure className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-[#e4dfd3] bg-white shadow-[0_20px_40px_-14px_rgba(0,0,0,0.3)]">
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes="(max-width: 768px) 300px, 300px"
        title={img.name}
        className="h-auto w-full object-cover"
      />
      <figcaption className="px-4 py-3 text-[0.8rem] leading-snug text-[#51596b]">{img.caption}</figcaption>
    </figure>
  );
}
