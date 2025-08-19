import styles from './Delails.module.css';

type Props = {
  handlerClick: () => void;
  show?: boolean;
};

export default function DetailsButton({ handlerClick, show }: Props) {
  return (
    <button className={styles.detailsButton} onClick={handlerClick}>
      {show ? 'Подробнее' : 'Скрыть'}
    </button>
  );
}
