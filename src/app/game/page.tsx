'use client';

import { useNovelGame } from '../hooks/useNovelGame';
import NovelScene from '../components/NovelScene/NovelScene';
import ProgressBar from '../components/ProgressBar';
import '../transitions.css';
import { motion, AnimatePresence } from 'framer-motion';
import './page.styles.css';
import { useRouter } from 'next/navigation';
import { useTraitsStore, useCurrentNodeStore } from '@/store/store';
import storyData from '../../data/plot.json';

export default function GamePage() {
  const { currentNode, traits, handleChoice, visitedNodes } = useNovelGame();
  const router = useRouter();
  const changeTraits = useTraitsStore((state) => state.changeTraits);
  const changeСurrentNode = useCurrentNodeStore(
    (state) => state.changeCurrentNode
  );

  const handleEnd = () => {
    changeTraits(traits);
    if (currentNode.choices) {
      const nextNode =
        storyData.nodes.find((n) => n.id === currentNode.choices[0].next) ||
        storyData.nodes[0];
      changeСurrentNode(nextNode);
    }

    router.push('/results');
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main>
          <div className="game-container">
            <ProgressBar progress={(visitedNodes.size / 3) * 100} />

            {currentNode.id === 'end' ? (
              <NovelScene
                text={currentNode.text}
                choices={currentNode.choices}
                onChoice={handleEnd}
              />
            ) : (
              <NovelScene
                text={currentNode.text}
                choices={currentNode.choices}
                onChoice={handleChoice}
              />
            )}
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
