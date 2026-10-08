import styles from './Sections.module.css';

export default function Projects() {
  return (
    <section className={`container ${styles.proj}`} id="work">
      <h2>Some Shots From Our Recent Projects..</h2>
      <div className={styles.slider}>
        <button className={styles.arr} aria-label="Previous">←</button>
        
        <div className={styles.projCol}>
          <div className={styles.shot}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/Card01.png"
              alt="Bank Management Website" 
              className={styles.shotImage} 
            />
          </div>
          <h4>Bank Management Website</h4>
          <p>Digital Strategy, Product Design, Software Development</p>
        </div>
        
        <button className={styles.arr} aria-label="Next">→</button>
      </div>
    </section>
  );
}
