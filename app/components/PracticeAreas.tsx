import styles from "../page.module.css";
import { EmblemWatermark, ScaleIcon, DuiIcon, CarIcon } from "./icons";

const cards = [
  {
    icon: <ScaleIcon />,
    title: "Immigration Law",
    description:
      "Family-based petitions, marriage green cards, adjustment of status, consular processing, citizenship, waivers, removal defense, bond hearings, VAWA, U visas, and humanitarian parole.",
    tags: ["Green Cards", "Removal Defense", "VAWA / U Visa", "Citizenship"],
  },
  {
    icon: <DuiIcon />,
    title: "DUI Defense",
    description:
      "Strong, client-focused representation for individuals facing DUI charges that threaten their freedom, record, or immigration status.",
    tags: ["License Defense", "Court Representation", "Case Strategy"],
  },
  {
    icon: <CarIcon />,
    title: "Car Accidents & Personal Injury",
    description:
      "Personal injury litigation informed by unique insider experience as a former staff counsel for GEICO — advocating for fair recovery after an accident.",
    tags: ["Auto Accidents", "Insurance Claims", "Injury Litigation"],
  },
  {
    icon: <ScaleIcon />,
    title: "Criminal Defense",
    description:
      "Experienced criminal defense representation, alongside related family law, landlord-tenant, and HOA dispute experience.",
    tags: ["Criminal Defense", "Family Law", "HOA Disputes"],
  },
];

export default function PracticeAreas() {
  return (
    <div className={styles.practiceAreas} id="practice">
      <EmblemWatermark className={styles.practiceWatermark} />
      <span className={styles.eyebrow}>How We Help</span>
      <h2 className={`${styles.h2} ${styles.h2Dark}`}>Practice Areas</h2>
      <p className={styles.sectionSub}>
        Focused representation across immigration, criminal, and injury matters &mdash; handled with strategy and
        compassion.
      </p>
      <div className={styles.practiceGrid}>
        {cards.map((card) => (
          <div className={styles.practiceCard} key={card.title}>
            <div className={styles.practiceIconWrap}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
