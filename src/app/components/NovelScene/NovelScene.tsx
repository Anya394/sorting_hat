import { Choice } from '../../types';
import ChoiceButton from '../Buttons/Choice/Choice';
import styles from './NovelScene.module.css';

type NovelSceneProps = {
  text: string;
  choices?: Choice[];
  onChoice: (choice: Choice) => void;
};

export default function NovelScene({
  text,
  choices,
  onChoice,
}: NovelSceneProps) {
  return (
    <>
      <div className={styles.storyText}>{text}</div>
      <div className={styles.choicesContainer}>
        {choices?.map((choice, index) => (
          <ChoiceButton
            key={index}
            text={choice.text}
            onClick={() => onChoice(choice)}
          />
        ))}
      </div>
    </>
  );
}
