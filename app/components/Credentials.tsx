import styles from "../page.module.css";
import { GraduationCapIcon, PersonIcon, ShieldIcon } from "./icons";

export default function Credentials() {
  return (
    <section id="credentials" className={`${styles.section} ${styles.alt}`}>
      <span className={styles.eyebrow}>Qualifications</span>
      <h2 className={styles.h2}>Credentials</h2>
      <div className={styles.gridTwo}>
        <div className={styles.credentialBlock}>
          <h3>
            <GraduationCapIcon />
            Education
          </h3>
          <ul>
            <li>Western Michigan University Cooley Law School, J.D., 2018</li>
            <li>University of South Florida, B.S. in Criminology, 2013</li>
          </ul>
        </div>
        <div className={styles.credentialBlock}>
          <h3>
            <PersonIcon />
            Bar Admissions
          </h3>
          <ul>
            <li>The Florida Bar</li>
          </ul>
          <h3 style={{ marginTop: "24px" }}>
            <ShieldIcon />
            Court Admissions
          </h3>
          <ul>
            <li>United States Immigration Courts</li>
            <li>Supreme Court of Florida</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
