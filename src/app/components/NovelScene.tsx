import { Choice } from '../types';
import ChoiceButton from './ChoiceButton';

type Props = {
  text: string;
  choices?: Choice[];
  onChoice: (choice: Choice) => void;
};

export default function NovelScene({ text, choices, onChoice }: Props) {
  return (
    <div className="novel-scene fade-in">
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
    </div>
  );
}
