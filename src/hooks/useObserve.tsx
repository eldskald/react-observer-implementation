import { useContext, useEffect, useRef } from 'react';
import { ObserversContext } from '../contexts';
import { Observer } from '../types';

export function useObserve(
  signal: string,
  func: Observer
) {
  const { observers } = useContext(ObserversContext);
  const index = useRef<number>(0);

  useEffect(() => {
    if (observers[signal]) {
      observers[signal].push(func);
      index.current = observers[signal].length - 1;
    }

    return () => {
      observers[signal].splice(index.current, 1);
    };
  }, []);
}
