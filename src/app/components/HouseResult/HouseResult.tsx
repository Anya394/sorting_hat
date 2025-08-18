import { StoryNode } from '../../types';
import styles from './HouseResult.module.css';
import Image from 'next/image';

type Props = {
  traits: Record<string, number>;
  node: StoryNode;
};

export default function HouseResult({ traits, node }: Props) {
  const house = Object.entries({
    gryffindor: traits.courage * 1.8 + traits.curiosity * 1.4,
    slytherin: traits.ambition * 1.7 + traits.caution * 1.3,
    ravenclaw: traits.wisdom * 1.6 + traits.curiosity * 1.4,
    hufflepuff: traits.loyalty * 1.5 + traits.caution * 1.3,
  }).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <div className={styles.resultScreen}>
      <div className={styles.background}>
        <Image
          src="/background.jpg"
          alt="Фон"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={100}
        />
      </div>

      <div className={styles.content}>
        <h2>{node.houseTexts?.[house] || 'Шляпа задумалась...'}</h2>
        <div className="traits-breakdown">
          {Object.entries(traits).map(([trait, value]) => (
            <div key={trait} className="trait-row">
              <span>{trait}:</span>
              <progress value={value} max="20" />
            </div>
          ))}
        </div>

        <div>
          <h4>Как рассчитывался результат?</h4>
          <p className={styles.p}>
            Каждая черта характера даёт разное количество баллов для
            факультетов. Например, <span>{getKeyTraitForHouse(house)}</span> —
            самая важная черта для {house}.
          </p>
        </div>
      </div>
    </div>
  );
}

function getKeyTraitForHouse(house: string): string {
  const traits: Record<string, string> = {
    gryffindor: 'Храбрость',
    slytherin: 'Амбиции',
    ravenclaw: 'Мудрость',
    hufflepuff: 'Верность',
  };
  return traits[house];
}
