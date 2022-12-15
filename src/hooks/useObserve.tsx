import { useContext, useEffect, useRef } from 'react';
import { ObserversContext } from '../contexts';
import { Observer } from '../types';

export function useObserve(
  event: string,
  func: Observer
) {
  const { observers } = useContext(ObserversContext);
  const index = useRef<number>(0);

  useEffect(() => {
    if (observers[event]) {
      observers[event].push(func);
      index.current = observers[event].length - 1;
    }

    return () => {
      observers[event].splice(index.current, 1);
    };
  }, []);
}
