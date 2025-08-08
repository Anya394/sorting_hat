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
  traits: Partial<Record<keyof Traits, number>>;
};

export type StoryNode = {
  id: string;
  text: string;
  choices?: Choice[];
  type?: 'result';
};

export type HogwartsHouse =
  | 'gryffindor'
  | 'slytherin'
  | 'ravenclaw'
  | 'hufflepuff';
