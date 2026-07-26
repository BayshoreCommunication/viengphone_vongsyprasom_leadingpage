import styles from "../page.module.css";
import { ScaleIcon, DuiIcon, CarIcon, HeartIcon } from "./icons";

const items = [
  {
    icon: <ScaleIcon />,
    title: "Immigration Law",
    description: "Family petitions, green cards, citizenship & removal defense",
  },
  {
    icon: <DuiIcon />,
    title: "DUI Defense",
    description: "Strong representation when freedom & status are on the line",
  },
  {
    icon: <CarIcon />,
    title: "Auto Accidents",
    description: "Personal injury advocacy backed by former GEICO experience",
  },
  {
    icon: <HeartIcon />,
    title: "Client-Centered",
    description: "Honest, compassionate, results-driven representation",
  },
];

export default function Highlights() {
  return (
    <div className={styles.highlights}>
      <div className={styles.highlightsGrid}>
        {items.map((item) => (
          <div className={styles.highlightCard} key={item.title}>
            <div className={styles.highlightIconCircle}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
