import { TBaseButton } from '@/app/types';
import BaseButton from '../Base';
import styles from './Choice.module.css';

export default function ChoiceButton({ text = '', onClick }: TBaseButton) {
  return <BaseButton className={styles.choice} text={text} onClick={onClick} />;
}
