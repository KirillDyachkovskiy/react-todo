import { TIcon } from '../../../data/types';

interface IIcon {
  name: TIcon;
}

export default function Icon({ name }: IIcon) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
  return <img src={require(`./icons/${name}.svg`)} alt={name} />;
}
