'use client';

import HouseResult from '../components/HouseResult';
import '../transitions.css';
import './page.styles.css';
import { useTraitsStore, useCurrentNodeStore } from '@/store/store';

export default function ResultsPage() {
  const traits = useTraitsStore((state) => state.traits);
  const currentNode = useCurrentNodeStore((state) => state.currentNode);

  console.log(traits, currentNode);

  return (
    <main>
      <HouseResult traits={traits} node={currentNode} />
    </main>
  );
}
