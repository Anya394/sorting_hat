type Props = {
  text: string;
  onClick: () => void;
};

export default function ChoiceButton({ text, onClick }: Props) {
  return (
    <button className="choice-button pulse-on-hover" onClick={onClick}>
      {text}
    </button>
  );
}
