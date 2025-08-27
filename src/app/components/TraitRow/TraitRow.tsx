import { translateTraits } from '@/functions/functions';
import styles from './TraitRow.module.css';

type Props = {
  trait: string;
  value: number;
};

export default function TraitRow({ trait, value }: Props) {
  const progressPercentage = (value / 20) * 100;

  return (
    <div className={styles.traitRow}>
      <span className={styles.traitName}>{translateTraits(trait)}</span>
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressFill}
          style={{ width: `${progressPercentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={20}
        />
      </div>
      <span className={styles.traitValue}>{value}/20</span>
    </div>
  );
}
