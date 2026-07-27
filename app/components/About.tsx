import styles from "../page.module.css";
import {
  AwardIcon,
  GlobeIcon,
  GraduationCapIcon,
  PersonIcon,
  ShieldIcon,
} from "./icons";

const bio = [
  "Attorney Vongsyprasom is a compassionate and strategic advocate devoted to helping clients navigate some of life's most challenging legal situations.",
  "She focuses her practice on U.S. Immigration and Nationality Law, DUI Defense, and Personal Injury Litigation, offering clients the skill, empathy, and dedication they deserve.",
  "Her immigration practice covers a wide range of cases, including family-based visa petitions, marriage-based green cards, adjustment of status, consular processing, citizenship and naturalization, and waivers of inadmissibility such as I-601 and I-601A.",
  "She also represents clients in removal (deportation) defense, bond hearings, motions to reopen or reconsider, and humanitarian cases such as VAWA self-petitions, U visas for victims of crime, and humanitarian parole.",
  "Her deep understanding of the U.S. immigration system and her fierce advocacy style have helped countless families stay together and achieve stability in the United States.",
  "As a DUI defense attorney, Ms. Vongsyprasom provides strong, client-focused representation for individuals facing charges that threaten their freedom or immigration status.",
  "In her personal injury practice, Ms. Vongsyprasom brings unique experience as a former staff counsel for Government Employees Insurance Company (GEICO).",
  "Before co-founding Tripathi Vongsyprasom Law, P.A., she practiced landlord-tenant disputes, homeowners association defense, family law, and criminal defense.",
];

const glance = [
  {
    icon: <GraduationCapIcon />,
    text: "J.D., Western Michigan University Cooley Law School, 2018",
  },
  { icon: <PersonIcon />, text: "Member, The Florida Bar" },
  { icon: <ShieldIcon />, text: "Admitted, U.S. Immigration Courts" },
  { icon: <ShieldIcon />, text: "Former Staff Counsel, GEICO" },
  { icon: <GlobeIcon />, text: "Fluent in English & Lao" },
  {
    icon: <AwardIcon />,
    text: "President of Asian Pacific American Bar Association - Tampa Bay",
  },
];

export default function About() {
  return (
    <section id="about" className={`${styles.section} ${styles.alt}`}>
      <span className={styles.eyebrow}>Meet Your Attorney</span>
      <h2 className={styles.h2}>About Attorney Vongsyprasom</h2>
      <div className={styles.aboutGrid}>
        <div className={styles.bio}>
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <aside className={styles.aboutSide}>
          <h3>At a Glance</h3>
          <ul>
            {glance.map((item, i) => (
              <li key={i}>
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
