import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Добро пожаловать в Хогвартс</h1>

          <p>
            Пройдите испытание Распределяющей Шляпы и узнайте, на какой
            факультет вы попадёте!
          </p>

          <Link href="/game">Начать испытание</Link>
        </div>
      </main>
    </div>
  );
}
