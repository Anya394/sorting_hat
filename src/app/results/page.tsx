'use client';

import { useNovelGame } from '../hooks/useNovelGame';
import HouseResult from '../components/HouseResult';
import '../transitions.css';
import './page.styles.css';

export default function ResultsPage() {
  const { currentNode, traits, handleChoice, calculateHouse, visitedNodes } =
    useNovelGame();

  console.log(traits, currentNode);

  return (
    <main>
      <HouseResult traits={traits} node={currentNode} />
    </main>
  );
}
