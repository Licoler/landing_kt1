import styles from './Features.module.css';

const items = [
  'Web Design & Development',
  'Digital Marketing',
  'Digital Business Growth',
  'Content/SEO/PPC',
  'App Design & Development',
  'UI/UX Design',
];

export default function Features() {
  return (
    <section className={styles.features} id="services">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.arrow} />
          <h5 className={styles.label}>Our Expertise</h5>
        </div>
        <div className={styles.grid}>
          {items.map((t) => (
            <article key={t} className={styles.card}>
              <h3>
                {t} <span>→</span>
              </h3>
              <p>
                Great web design goes beyond just picking the right fonts, colors and imagery. We
                design and build intuitive websites that focus on a total user experience
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
