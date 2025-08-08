import { StoryNode, Traits } from '@/app/types';
import { create } from 'zustand';

interface TraitsState {
  traits: Traits;
  changeTraits: (newTraits: Traits) => void;
}

interface CurrentNodeState {
  currentNode: StoryNode;
  changeCurrentNode: (newCurrentNode: StoryNode) => void;
}

export const useTraitsStore = create<TraitsState>((set) => ({
  traits: {
    courage: 0,
    ambition: 0,
    wisdom: 0,
    loyalty: 0,
    curiosity: 0,
    caution: 0,
  },
  changeTraits: (newTraits) =>
    set((state) => ({
      traits: {
        ...state.traits,
        ...newTraits,
      },
    })),
}));

export const useCurrentNodeStore = create<CurrentNodeState>((set) => ({
  currentNode: {
    id: '',
    text: '',
    choices: [],
    type: undefined,
  },
  changeCurrentNode: (newCurrentNode) => set({ currentNode: newCurrentNode }),
}));
