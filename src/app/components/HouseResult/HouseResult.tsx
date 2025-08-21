import { THouses, StoryNode } from '../../types';
import styles from './HouseResult.module.css';
import Image from 'next/image';
import { useState } from 'react';
import DetailsButton from '../Buttons/Delails/Details';
import CalculationInfo from '../CalculationInfo/CalculationInfo';
import TraitRow from '../TraitRow/TraitRow';
import { translateHouse } from '@/functions/functions';

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
    <div>
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
        <p className={styles.houseName}>{translateHouse(house as THouses)}!</p>
        <p className={styles.houseText}>{node.houseTexts?.[house]}</p>

        {showDetails ? (
          <div className={styles.detailsContainer}>
            <div>
              <p className={styles.detailsTitle}>Характеристики:</p>

              {Object.entries(traits).map(([trait, value]) => (
                <TraitRow key={trait} trait={trait} value={value} />
              ))}
            </div>

            <CalculationInfo house={house as THouses} />

            <DetailsButton onClick={toggleDetails} />
          </div>
        ) : (
          <DetailsButton onClick={toggleDetails} show />
        )}
      </div>
    </div>
  );
}
