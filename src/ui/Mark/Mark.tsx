import getColorById from '../../helpers/getColorById';
import s from './mark.module.css';

interface IMark {
  colorId?: number;
  size?: 'small' | 'big';
}

export default function Mark({ colorId = 3, size = 'small' }: IMark) {
  return (
    <div
      style={{ backgroundColor: `var(--${getColorById(colorId)})` }}
      className={`${s.mark} ${s[`mark_size_${size}`]}`}
    />
  );
}
