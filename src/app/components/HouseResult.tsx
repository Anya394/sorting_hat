import { StoryNode } from '../types';

type Props = {
  traits: Record<string, number>;
  node: StoryNode;
};

export default function HouseResult({ traits, node }: Props) {
  const house = Object.entries({
    gryffindor: traits.courage * 1.8,
    slytherin: traits.ambition * 1.7,
    ravenclaw: traits.wisdom * 1.6,
    hufflepuff: traits.loyalty * 1.5,
  }).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <div className={`result-screen ${house}-theme`}>
      <h2>{node.houseTexts?.[house] || 'Шляпа задумалась...'}</h2>
      <div className="traits-breakdown">
        {Object.entries(traits).map(([trait, value]) => (
          <div key={trait} className="trait-row">
            <span>{trait}:</span>
            <progress value={value} max="20" />
          </div>
        ))}
      </div>
    </div>
  );
}
