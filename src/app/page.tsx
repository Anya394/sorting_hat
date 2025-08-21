'use client';

import styles from './page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MainButton from './components/Buttons/Main/Main';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/game');
  };

  return (
    <main className={styles.main}>
      <div className={styles.page}>
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
          Пройдите испытание Распределяющей Шляпы и узнайте, на какой факультет
          вы попадёте!
        </p>

        <MainButton text="Начать испытание" onClick={handleStart} />
      </div>
    </main>
  );
}
