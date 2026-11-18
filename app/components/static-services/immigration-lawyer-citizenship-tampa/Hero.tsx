import Image from "next/image";
import Link from "next/link";
import { CONTACT_URL, HERO } from "./content";
import { Keyword } from "./Keyword";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-silver bg-[radial-gradient(ellipse_at_top,#1c1c1c_0%,#0c0c0c_55%,#000_100%)] px-5 py-14 text-silver-light">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <div className="text-center md:text-left">
          <Link href="/" aria-label="Vongsyprasom Law, P.A. home" className="mb-5 inline-block">
            <Image
              src="/viengphone-vongsyprasom-logo.png"
              alt="Vongsyprasom Law, P.A. emblem"
              width={1548}
              height={317}
              priority
              className="h-12 w-auto md:h-[60px]"
            />
          </Link>
          <span className="mb-3 block text-[0.72rem] uppercase tracking-[3px] text-rose">
            Tampa, FL &middot; U.S. Citizenship &amp; Naturalization
          </span>
          <h1 className="mb-5 text-3xl font-normal leading-tight tracking-wide text-white md:text-[2.4rem]">
            {HERO.h1}
          </h1>
          <p className="mb-8 text-[1.02rem] text-silver">
            <Keyword text={HERO.intro} />
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_URL}
              className="inline-flex items-center gap-2 rounded-full border border-silver px-9 py-3.5 text-[0.85rem] uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:border-rose hover:bg-rose"
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:+17273347327"
              className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              (727) 334-7327
            </a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[2612/3824] w-full max-w-[260px] overflow-hidden rounded-2xl border-2 border-silver shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] md:max-w-[360px]">
          <Image
            src="/viengphone-vongsyprasom.png"
            alt="Viengphone Vongsyprasom, Esq."
            fill
            priority
            sizes="(max-width: 768px) 260px, 360px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
