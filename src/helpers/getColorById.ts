const colors: string[] = [
  'grey',
  'green',
  'blue',
  'pink',
  'lightblue',
  'violet',
  'black',
  'red',
];

export default function getColorById(id: number) {
  return colors[id - 1];
}
