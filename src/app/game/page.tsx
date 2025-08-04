'use client';

import { useNovelGame } from '../hooks/useNovelGame';
import NovelScene from '../components/NovelScene/NovelScene';
import HouseResult from '../components/HouseResult';
import ProgressBar from '../components/ProgressBar';
import '../transitions.css';
import { motion, AnimatePresence } from 'framer-motion';
import './page.styles.css';

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
        <main>
          <div className="game-container">
            <ProgressBar progress={(visitedNodes.size / 3) * 100} />

            {currentNode.type === 'result' ? (
              <HouseResult traits={traits} node={currentNode} />
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
