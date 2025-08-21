import { translateTraits } from '@/functions/functions';
import styles from './TraitRow.module.css';

type Props = {
  trait: string;
  value: number;
};

export default function TraitRow({ trait, value }: Props) {
  return (
    <div className={styles.traitRow}>
      <span className={styles.traitName}>{translateTraits(trait)}</span>
      <progress value={value} max="20" className={styles.progressBar} />
      <span className={styles.traitValue}>{value}/20</span>
    </div>
  );
}
