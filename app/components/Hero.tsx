import Image from "next/image";
import styles from "../page.module.css";
import {
  EmblemWatermark,
  GlobeIcon,
  HeartIcon,
  ScaleIcon,
  ShieldIcon,
} from "./icons";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <EmblemWatermark className={styles.heroWatermark} />
      <div className={styles.heroInner}>
        <div className={styles.heroFlex}>
          <div className={styles.heroPhotoWrap}>
            <Image
              src="/viengphone-vongsyprasom.png"
              alt="Viengphone Vongsyprasom, Esq."
              fill
              sizes="(max-width: 760px) 260px, 360px"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.heroTextCol}>
            <div className={styles.heroLogo}>
              <Image
                src="/viengphone-vongsyprasom-logo.png"
                alt="Vongsyprasom Law, P.A. emblem"
                width={1548}
                height={317}
                priority
              />
            </div>
            <h1 className={styles.name}>Viengphone Vongsyprasom, Esq.</h1>
            <div className={styles.titleEn}>
              U.S. Immigration &middot; DUI Defense &middot; Auto Accident &amp;
              Personal Injury Attorney
            </div>
            <div className={`${styles.lao} ${styles.laoName}`}>
              ວຽງພອນ ວົງສີປາສົມ, Esq.
            </div>
            <div className={styles.lao}>
              ທະນາຍຄວາມກົດໝາຍຄົນເຂົ້າເມືອງສະຫະລັດ, ຄະດີ DUI, ແລະ ອຸປະຕິເຫດລົດ
            </div>
            <div className={styles.heroBadges}>
              <span className={styles.badge}>
                <GlobeIcon />
                Bilingual &mdash; English &amp; Lao
              </span>
              <span className={styles.badge}>
                <ScaleIcon />
                Immigration &middot; DUI &middot; Injury
              </span>
              <span className={styles.badge}>
                <ShieldIcon />
                Former GEICO Staff Counsel
              </span>
              <span className={styles.badge}>
                <HeartIcon />
                Compassionate Advocacy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
