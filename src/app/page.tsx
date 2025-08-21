'use client';

import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <div>
          <Image
            src="/background.jpg"
            alt="Фон"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={100}
            aria-hidden="true"
          />
          <p className={styles.title}>Добро пожаловать в Хогвартс</p>

          <p className={styles.description}>
            Пройдите испытание Распределяющей Шляпы и узнайте, на какой
            факультет вы попадёте!
          </p>

          <Link href="/game" style={{ position: 'relative', zIndex: 1 }}>
            <div className={styles.choiceButton}>Начать испытание</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
