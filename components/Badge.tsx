import styles from './Sections.module.css';

export default function Badge({ id }: { id: string }) {
  return (
    <div className={styles.badge}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id={id} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text>
          <textPath href={`#${id}`}>100% Satisfaction Guarantee </textPath>
        </text>
      </svg>
    </div>
  );
}
