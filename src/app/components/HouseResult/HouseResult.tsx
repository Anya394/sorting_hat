import { StoryNode } from '../../types';
import styles from './HouseResult.module.css';
import Image from 'next/image';
import { houses } from '../../../data/constants';
import { useState } from 'react';
import DetailsButton from '../Buttons/Delails/Details';

type Props = {
  traits: Record<string, number>;
  node: StoryNode;
};

export default function HouseResult({ traits, node }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const house = Object.entries({
    gryffindor: traits.courage * 1.8 + traits.curiosity * 1.4,
    slytherin: traits.ambition * 1.7 + traits.caution * 1.3,
    ravenclaw: traits.wisdom * 1.6 + traits.curiosity * 1.4,
    hufflepuff: traits.loyalty * 1.5 + traits.caution * 1.3,
  }).sort((a, b) => b[1] - a[1])[0][0];

  const background = `/${house}.jpg`;

  return (
    <div className={styles.resultScreen}>
      <div className={styles.background}>
        <Image
          src={background}
          alt="Фон"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={100}
          aria-hidden="true"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.houseName}>
          {houses[house as keyof typeof houses]}!
        </p>
        <p className={styles.houseText}>{node.houseTexts?.[house]}</p>

        {showDetails ? (
          <div className={styles.detailsContainer}>
            <div className={styles.traitsBreakdown}>
              <h3 className={styles.detailsTitle}>Характеристики:</h3>
              {Object.entries(traits).map(([trait, value]) => (
                <div key={trait} className={styles.traitRow}>
                  <span className={styles.traitName}>{trait}:</span>
                  <progress
                    value={value}
                    max="20"
                    className={styles.progressBar}
                  />
                  <span className={styles.traitValue}>{value}/20</span>
                </div>
              ))}
            </div>

            <div className={styles.calculationInfo}>
              <h4 className={styles.infoTitle}>Как рассчитывался результат?</h4>
              <p className={styles.infoText}>
                Каждая черта характера даёт разное количество баллов для
                факультетов. Например,{' '}
                <span className={styles.keyTrait}>
                  {getKeyTraitForHouse(house)}
                </span>{' '}
                — самая важная черта для {houses[house as keyof typeof houses]}.
              </p>
            </div>

            <DetailsButton handlerClick={toggleDetails} />
          </div>
        ) : (
          <DetailsButton handlerClick={toggleDetails} show />
        )}
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
