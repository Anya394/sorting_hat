import { TBaseButton } from '@/app/types';
import styles from './Base.module.css';

type Props = TBaseButton & {
  className?: string;
};

export default function BaseButton({
  text = '',
  onClick,
  className = '',
}: Props) {
  const combinedClass = `${styles.base} ${className}`.trim();

  return (
    <button className={combinedClass} onClick={onClick} aria-label={text}>
      {text}
    </button>
  );
}
