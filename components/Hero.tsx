import styles from './Hero.module.css';

const bars = [70, 40, 55, 35, 60, 25, 45, 70];
const team = ['#6bb8d9', '#e98a8a', '#f2c14e', '#a3b18a'];

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          We Target The <span className={styles.u}>Audience</span> With Our{' '}
          <span className={styles.u}>Ideas</span>
        </h1>
        <p className={styles.lead}>
          You have the vision for a stunning digital experience. We’re the software design and
          engineering team that can bring it to life.
        </p>
        <button className={styles.cta}>Let’s Get Started</button>
      </div>

      <div className={styles.visual}>
        <div className={styles.arch} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.photo} src="/images/image.png" alt="" />

        <div className={`${styles.card} ${styles.skills}`}>
          <h5>Skills</h5>
          <div className={styles.chart}>
            {bars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <button className={styles.play} aria-label="Play video">▶</button>

        <div className={`${styles.card} ${styles.teamCard}`}>
          <h5>Creative Team</h5>
          <p>Web Design UI Explorations</p>
          <div className={styles.avatars}>
              {team.map((c, index) => {
      const fileNames = ['images5.png', 'images7.png', 'images6.png', 'images8.png'];
      const currentImage = fileNames[index];

      return (
        <span 
          key={index} 
          style={{ 
            backgroundColor: c, 
            backgroundImage: `url(/images/${currentImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} 
        />
      );
    })}
            <span className={styles.more}>8+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
