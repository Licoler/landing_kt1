import styles from './Footer.module.css';

const cols = [
  { title: 'Company', lines: ['About Us', 'Our Team', 'Careers'] },
  { title: 'Services', lines: ['Web Design', 'UI/UX Explorations', 'Development'] },
  { title: 'Resources', lines: ['Projects', 'Articles', 'Contact'] },
  { title: 'Links', lines: ['Privacy Policy', 'Terms & Conditions'] },
];

const socials = ['FB', 'TW', 'LN', 'BE'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.cols}`}>
        {cols.map((c) => (
          <div key={c.title} className={styles.col}>
            <h5>{c.title}</h5>
            {c.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        ))}
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© 2026 Lorix Agency. All rights reserved.</span>
        <div className={styles.socials}>
          {socials.map((s) => (
            <a key={s} href="#" aria-label={s}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
