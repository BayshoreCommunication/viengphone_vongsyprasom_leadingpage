import styles from "../page.module.css";
import { PersonIcon, PhoneIcon, MailIcon, GlobeIcon, MapPinIcon } from "./icons";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <span className={styles.eyebrow}>Get In Touch</span>
      <h2 className={`${styles.h2} ${styles.h2Dark}`}>Contact</h2>
      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <div className={styles.contactIconCircle}>
            <PersonIcon />
          </div>
          <div>
            <div className={styles.contactLabel}>Attorney</div>
            <div className={styles.contactValue}>Viengphone Vongsyprasom, Esq.</div>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.contactIconCircle}>
            <PhoneIcon />
          </div>
          <div>
            <div className={styles.contactLabel}>Phone</div>
            <div className={styles.contactValue}>
              <a href="tel:+17273347327">(727) 334-7327</a>
            </div>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.contactIconCircle}>
            <MailIcon />
          </div>
          <div>
            <div className={styles.contactLabel}>Email</div>
            <div className={styles.contactValue}>
              <a href="mailto:info@vienlaw.com">info@vienlaw.com</a>
            </div>
          </div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.contactIconCircle}>
            <GlobeIcon />
          </div>
          <div>
            <div className={styles.contactLabel}>Website</div>
            <div className={styles.contactValue}>
              <a href="https://www.vienlaw.com" target="_blank" rel="noopener">
                www.vienlaw.com
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.contactCard} ${styles.contactCardWide}`}>
          <div className={styles.contactIconCircle}>
            <MapPinIcon />
          </div>
          <div>
            <div className={styles.contactLabel}>Office Address</div>
            <div className={styles.contactValue}>
              13046 Race Track Rd., #195
              <br />
              Tampa, FL 33626
            </div>
          </div>
        </div>
      </div>
      <a className={styles.ctaBtn} href="mailto:info@vienlaw.com">
        <MailIcon />
        Schedule a Consultation
      </a>
    </div>
  );
}
