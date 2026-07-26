import styles from "../page.module.css";

export default function Philosophy() {
  return (
    <div className={styles.philosophy} id="philosophy">
      <div className={styles.quoteMark}>&ldquo;</div>
      <h2 className={`${styles.h2} ${styles.h2Dark}`}>Professional Philosophy</h2>
      <p>Attorney Vongsyprasom believes in providing honest, compassionate, and results-driven representation.</p>
      <p>She understands that behind every case is a person or family with dreams, fears, and goals.</p>
    </div>
  );
}
