import { TBaseButton } from '@/app/types';
import BaseButton from '../Base';
import styles from './Main.module.css';

export default function MainButton({ text = '', onClick }: TBaseButton) {
  return <BaseButton className={styles.main} text={text} onClick={onClick} />;
}
