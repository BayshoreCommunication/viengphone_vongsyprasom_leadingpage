import styles from "../page.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#credentials", label: "Credentials" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.href}>
            <a className={styles.navLink} href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
