'use client';

import { useEffect, useState } from 'react';
import './ProgressBar.css';

type ProgressBarProps = {
  progress: number; // значение от 0 до 100
  color?: string; // опциональный цвет (по умолчанию тема Хогвартса)
};

export default function ProgressBar({ progress, color }: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    // Плавная анимация заполнения
    const timer = setTimeout(() => {
      setAnimatedProgress(Math.min(progress, 100));
    }, 300);

    return () => clearTimeout(timer);
  }, [progress]);

  // Цвета факультетов по умолчанию
  const houseColors = {
    gryffindor: '#740001',
    slytherin: '#1a472a',
    ravenclaw: '#0e1a40',
    hufflepuff: '#ecb939',
  };

  const barColor = color || houseColors.gryffindor;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-label" style={{ color: barColor }}>
        Прогресс: {Math.round(animatedProgress)}%
      </div>
      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{
            width: `${animatedProgress}%`,
            backgroundColor: barColor,
            backgroundImage: `linear-gradient(
              to right,
              ${barColor},
              ${adjustBrightness(barColor, 20)}
            )`,
          }}
        />
      </div>
      <div className="progress-bar-markers">
        {[0, 25, 50, 75, 100].map((marker) => (
          <div
            key={marker}
            className="progress-marker"
            style={{ left: `${marker}%` }}
          />
        ))}
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
