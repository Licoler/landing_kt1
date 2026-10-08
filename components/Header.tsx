import styles from './Header.module.css';

const links = ['Work', 'Services', 'About', 'Contact Us'];

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <a href="#" className={styles.logo}>Lorix</a>
      <nav className={styles.nav} aria-label="Main">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}>{l}</a>
        ))}
      </nav>
      <button className={styles.burger} aria-label="Menu">
        <span /><span /><span />
      </button>
    </header>
  );
}
