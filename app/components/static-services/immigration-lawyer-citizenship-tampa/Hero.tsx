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
          <a
            href={CONTACT_URL}
            className="inline-flex items-center gap-2 rounded-full border border-silver px-9 py-3.5 text-[0.85rem] uppercase tracking-[2px] text-white transition hover:-translate-y-0.5 hover:border-rose hover:bg-rose"
          >
            Schedule a Consultation
          </a>
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
