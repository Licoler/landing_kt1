import styles from './Sections.module.css';
import Badge from './Badge';

export default function About() {
  return (
    <section className={`container ${styles.about}`} id="about">
      <div className={styles.aboutVisual}>
        <div className={styles.pArch}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/image2.png" 
            alt="About Us" 
            className={styles.photo} 
          />
        </div>

        <Badge id="badge-about" />
        
        <div className={styles.stat}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/image15.png" 
            alt="Stat Icon" 
            className={styles.statIcon} 
          />
          <div>
            <small>Complete Project</small>
            <h3>2839</h3>
          </div>
        </div>
      </div>
      
      <div className={styles.aboutText}>
        <h2>We Bring Strategy To Your Business</h2>
        <p>
          Solid Digital is a full service digital agency specializing in digital consulting, web
          design &amp; development, application design &amp; development, and digital marketing. As
          a bonus, we hear that people really enjoy working with us.
        </p>
        <p>
          If you’re looking for an award-winning website design and digital marketing partner that
          “gets it,” has strong technology chops and a few brilliant ideas up their sleeves, scroll on.
        </p>
        <a href="#" className={styles.btn}>Learn More About Us</a>
      </div>
    </section>
  );
}
