import { TIcon } from '../../../data/types';

interface IIcon {
  size: number;
  color: string;
  icon: TIcon;
}

export default function Icon({ size, color, icon }: IIcon) {
  return (
    <svg
      viewBox='0 0 24 24'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <path fill={color} d={`./icons${icon}`} />
    </svg>
  );
}
