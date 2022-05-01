import { RefObject, useRef } from 'react';

type TUseFocus = () => [
  htmlElRef: RefObject<HTMLInputElement>,
  setFocus: () => void
];

export default function useFocus() {
  const htmlElRef = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    htmlElRef.current?.focus();
  };

  return [htmlElRef, setFocus] as ReturnType<TUseFocus>;
}
