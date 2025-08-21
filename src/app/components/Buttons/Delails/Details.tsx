import styles from './Details.module.css';

type Props = {
  handlerClick: () => void;
  show?: boolean;
};

export default function DetailsButton({ handlerClick, show }: Props) {
  const buttonText = show ? 'Подробнее' : 'Скрыть';

  return (
    <button
      className={styles.detailsButton}
      onClick={handlerClick}
      aria-label={buttonText}
      type="button"
    >
      {buttonText}
    </button>
  );
}
