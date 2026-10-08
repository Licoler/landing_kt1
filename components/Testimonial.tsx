import styles from './Sections.module.css';
import Badge from './Badge';

export default function Testimonial() {
  return (
    <section className={styles.testi}>
      <div className={`container ${styles.testiIn}`}>
        <div>
          <h2>Clients Testimonial</h2>
          <div className={styles.quote}>
            <h3 className={styles.qmark}>”</h3>
            <div>
              <p>
                It is a long established fact that an reader will be distracted by the readable
                content of page when looking at its layout. The point of using is that it has a more
                or less normal
              </p>
              <div className={styles.author}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/image18.png"
                  alt="Md Shamim Hossain" 
                  className={styles.authorAvatar} 
                />
                <div>
                  <h4>Md Shamim Hossain</h4>
                  <small>UI/UX Designer</small>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dots}><i /><i /><i /><i /></div>
        </div>

        <div className={styles.testiVisual}>
          <div className={styles.pArch} style={{ '--c': 'var(--sun)' } as React.CSSProperties}>            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/image17.png" 
              alt="Testimonial Visual" 
              className={styles.testiPhoto} 
            />
          </div>
          <Badge id="badge-testi" />
        </div>
      </div>
    </section>
  );
}
