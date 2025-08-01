'use client';

import { useState } from 'react';
import storyData from '../../data/plot.json';
import { Choice, StoryNode, Traits } from '../types';

export const useNovelGame = () => {
  const [currentNode, setCurrentNode] = useState<StoryNode>(storyData.nodes[0]);
  const [traits, setTraits] = useState<Traits>(storyData.initialTraits);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(
    new Set(['start'])
  );

  const handleChoice = (choice: Choice) => {
    // Обновляем черты характера
    const newTraits = { ...traits };
    Object.entries(choice.traits).forEach(([key, value]) => {
      newTraits[key as keyof Traits] += value;
    });

    setTraits(newTraits);
    setVisitedNodes((prev) => new Set(prev).add(choice.next));

    // Находим следующую сцену
    const nextNode =
      storyData.nodes.find((n) => n.id === choice.next) || storyData.nodes[0];
    setCurrentNode(nextNode);
  };

  const calculateHouse = (): string => {
    const scores = {
      gryffindor: traits.courage * 1.8 + traits.curiosity * 0.5,
      slytherin: traits.ambition * 1.7 + traits.caution * 0.4,
      ravenclaw: traits.wisdom * 1.6 + traits.curiosity * 0.9,
      hufflepuff: traits.loyalty * 1.5 + traits.caution * 0.7,
    };

    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  };

  return {
    currentNode,
    traits,
    handleChoice,
    calculateHouse,
    visitedNodes,
  };
};
