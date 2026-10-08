import styles from './Process.module.css';

const steps = [
  { n: '01', title: 'Make A Plan', color: 'var(--yellow)' },
  { n: '02', title: 'Strategy', color: 'var(--indigo)' },
  { n: '03', title: 'Make Design', color: 'var(--orange)' },
  { n: '04', title: 'Project Handover', color: 'var(--green)' },
];

export default function Process() {
  const stepImages = ['image11.png', 'image12.png', 'image9.png', 'image10.png'];

  return (
    <section className={`container ${styles.process}`}>
      {steps.map((s, index) => {
        const currentImage = stepImages[index];

        return (
          <div key={s.n} className={styles.step}>
            <div 
              className={styles.icon} 
              style={{ 
                backgroundColor: s.color, 
                backgroundImage: `url(/images/${currentImage})`, 
                backgroundSize: '50%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <b className={styles.numberBadge} style={{ backgroundColor: s.color }}>
                {s.n}
              </b>
            </div>
            <h4>{s.title}</h4>
            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
          </div>
        );
      })}
    </section>
  );
}
