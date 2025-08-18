'use client';

import HouseResult from '../components/HouseResult/HouseResult';
import { useTraitsStore, useCurrentNodeStore } from '@/store/store';

export default function ResultsPage() {
  const traits = useTraitsStore((state) => state.traits);
  const currentNode = useCurrentNodeStore((state) => state.currentNode);

  return (
    <main>
      <HouseResult traits={traits} node={currentNode} />
    </main>
  );
}
