export type Traits = {
  courage: number; // Гриффиндор - смелость
  ambition: number; // Слизерин - честолюбие
  wisdom: number; // Когтевран - мудрость
  loyalty: number; // Пуффендуй - лояльность
  curiosity: number; // Когтевран/Гриффиндор - любопытство
  caution: number; // Слизерин/Пуффендуй - осторожность
};

export type Choice = {
  text: string;
  next: string;
  traits: Traits;
};

export type StoryNode = {
  id: string;
  text: string;
  choices?: Choice[];
  type?: 'result';
  houseTexts?: Record<string, string>;
};

export type THouses = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';
//export type TTraits =

export type TBaseButton = {
  text?: string;
  onClick: () => void;
};
