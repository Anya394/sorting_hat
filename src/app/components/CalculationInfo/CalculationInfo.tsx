import * as F from '@/functions/functions';
import styles from './CalculationInfo.module.css';
import { THouses } from '@/app/types';

type Props = {
  house: THouses;
};

export default function CalculationInfo({ house }: Props) {
  return (
    <div>
      <p className={styles.infoTitle}>Как рассчитывался результат?</p>
      <p className={styles.infoText}>
        Каждая черта характера даёт разное количество баллов для факультетов.
      </p>
      <p className={styles.infoText}>
        Для {F.translateHouse(house)} самая важная черта -{' '}
        <span>{F.translateTraits(getKeyTraitForHouse(house))}</span>.
      </p>
    </div>
  );
}

function getKeyTraitForHouse(house: THouses): string {
  const traits: Record<THouses, string> = {
    gryffindor: 'courage',
    slytherin: 'ambition',
    ravenclaw: 'wisdom',
    hufflepuff: 'loyalty',
  };
  return traits[house];
}
