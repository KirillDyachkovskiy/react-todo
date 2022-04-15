import { TColorOld } from '../../types/types';
import s from './mark.module.css';

interface IMark {
  color?: TColorOld;
  size?: 'small' | 'big';
}

export default function Mark({ color = 'blue', size = 'small' }: IMark) {
  return (
    <div
      style={{ backgroundColor: `var(--${color})` }}
      className={`${s.mark} ${s[`mark_size_${size}`]}`}
    />
  );
}
