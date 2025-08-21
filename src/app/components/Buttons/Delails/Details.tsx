import { TBaseButton } from '@/app/types';
import BaseButton from '../Base';
import styles from './Details.module.css';

type Props = TBaseButton & {
  show?: boolean;
};

export default function DetailsButton({ onClick, show }: Props) {
  const buttonText = show ? 'Подробнее' : 'Скрыть';

  return (
    <BaseButton className={styles.details} text={buttonText} onClick={onClick} />
  );
}
