import { Choice } from '../../types';
import ChoiceButton from '../ChoiceButton';
import './NovelScene.styles.css';

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
      <div className="story-text">{text}</div>
      <div className="choices-container">
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
