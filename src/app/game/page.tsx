'use client';

import { useNovelGame } from '../hooks/useNovelGame';
import NovelScene from '../components/NovelScene';
import HouseResult from '../components/HouseResult';
import ProgressBar from '../components/ProgressBar';
import '../transitions.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function GamePage() {
  const { currentNode, traits, handleChoice, calculateHouse, visitedNodes } =
    useNovelGame();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main className="game-container">
          <ProgressBar progress={(visitedNodes.size / 20) * 100} />

          {currentNode.type === 'result' ? (
            <HouseResult traits={traits} node={currentNode} />
          ) : (
            <NovelScene
              text={currentNode.text}
              choices={currentNode.choices}
              onChoice={handleChoice}
            />
          )}
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
