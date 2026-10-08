
import styles from './Sections.module.css';

const logos = [
  { src: '/images/image16.svg', alt: 'Xbox' }, 
  { src: '/images/image_adobe.svg', alt: 'Adobe' },
  { src: '/images/Logitech Logo.svg', alt: 'Logitech' },
  { src: '/images/Logo_NIKE (1).svg', alt: 'Nike' },
  { src: '/images/British Council.svg.webp', alt: 'British Council' },
];

const members = [
  '/images/image3.png', 
  '/images/image4.png', 
  '/images/image-1.png',
  '/images/goodman.webp'
] as const;

const classes = ['m1', 'm2', 'm3', 'm4'] as const;

export default function Clients() {
  return (
    <section className="container">
      <div className={styles.logos}>
        {logos.map((l, index) => (
          <span key={index} className={styles.logoItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.src} alt={l.alt} className={styles.logoImg} />
          </span>
        ))}
      </div>

      <div className={styles.members}>
        {members.map((m, i) => {
          const currentClass = classes[i];

          return (
            <div key={m} className={`${styles.mem} ${styles[currentClass]}`}>
              <div className={styles.bg} />
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={m} 
                alt={`Team member ${i + 1}`} 
                className={styles.memberPhoto} 
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
