import type { Metadata } from "next";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { CtaStrip, FinalCta, MobileStickyCta, SiteHeader } from "../../components/static-services/immigration-lawyer-citizenship-tampa/Blocks";
import {
  Documents,
  Eligibility,
  Faq,
  Fees,
  LicensedAttorneyAndTable,
  PracticeAreas,
  ProcessSection,
  TimelineAndCivics,
} from "../../components/static-services/immigration-lawyer-citizenship-tampa/Composed";
import {
  AFTER_DENIAL,
  COMPLEX_CASES,
  CTA_STRIPS,
  DENIED_DELAYED,
  FAQS,
  IMAGES,
  META_DESCRIPTION,
  META_TITLE,
  OATH_BENEFITS,
  PAGE_PATH,
  SITE_URL,
  SPECIAL_PATHS,
  WHY_CITIZENSHIP,
  WHY_IMMIGRATION,
} from "../../components/static-services/immigration-lawyer-citizenship-tampa/content";
import Hero from "../../components/static-services/immigration-lawyer-citizenship-tampa/Hero";
import { CardsBlock } from "../../components/static-services/immigration-lawyer-citizenship-tampa/Sections";

const canonicalUrl = `${SITE_URL}${PAGE_PATH}`;
const attorneyImage = IMAGES.attorney;

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: canonicalUrl,
    siteName: "Vongsyprasom Law, P.A.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: attorneyImage.src,
        width: attorneyImage.width,
        height: attorneyImage.height,
        alt: attorneyImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [{ url: attorneyImage.src, alt: attorneyImage.alt }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: { "@type": "Answer", text: faq.text },
      })),
    },
    {
      "@type": "ImageObject",
      "@id": `${canonicalUrl}#attorney-image`,
      contentUrl: `${SITE_URL}${attorneyImage.src}`,
      url: `${SITE_URL}${attorneyImage.src}`,
      name: attorneyImage.name,
      caption: attorneyImage.caption,
      description: attorneyImage.alt,
      width: attorneyImage.width,
      height: attorneyImage.height,
      encodingFormat: "image/webp",
    },
  ],
};

export default function ImmigrationLawyerCitizenshipTampaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Eligibility />
        <CtaStrip {...CTA_STRIPS[0]} />
        <CardsBlock section={SPECIAL_PATHS} alt numbered eyebrow="Faster routes" />
        <Documents />
        <CardsBlock section={COMPLEX_CASES} alt eyebrow="Know the risks" />
        <CardsBlock section={DENIED_DELAYED} />
        <CardsBlock section={AFTER_DENIAL} alt eyebrow="You still have options" />
        <CtaStrip {...CTA_STRIPS[1]} />
        <TimelineAndCivics />
        <CardsBlock section={OATH_BENEFITS} alt eyebrow="After the oath" />
        <Fees />
        <CtaStrip {...CTA_STRIPS[2]} />
        <CardsBlock section={WHY_CITIZENSHIP} alt eyebrow="Why Vien Law" />
        <LicensedAttorneyAndTable />
        <ProcessSection />
        <CardsBlock section={WHY_IMMIGRATION} />
        <PracticeAreas />
        <Faq />
        <FinalCta />
        <Contact />
        <Footer />
      </main>
      <MobileStickyCta />
    </>
  );
}
