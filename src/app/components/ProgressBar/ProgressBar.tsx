'use client';

import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

type ProgressBarProps = {
  progress: number; // Значение от 0 до 100.
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(Math.min(progress, 100));
  }, [progress]);

  const barColor = '#1a1a1a';

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBarLabel} style={{ color: barColor }}>
        Прогресс: {Math.round(animatedProgress)}%
      </div>
      <div className={styles.progressBarBackground}>
        <div
          className={styles.progressBarFill}
          style={{
            width: `${animatedProgress}%`,
            backgroundImage: `linear-gradient(
              to right,
              ${barColor},
              ${adjustBrightness(barColor, 20)}
            )`,
          }}
        />
      </div>
    </div>
  );
}

// Вспомогательная функция для изменения яркости цвета
function adjustBrightness(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);

  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}
