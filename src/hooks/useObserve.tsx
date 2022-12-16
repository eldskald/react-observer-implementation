import { useContext, useEffect, useRef } from 'react';
import { ObserversContext } from '../contexts';
import { Observer } from '../types';

export function useObserve(
  event: string,
  func: (...args: any[]) => void
) {
  const { observers, cleanUp } = useContext(ObserversContext);
  const observerRef = useRef<Observer | null>(func)

  useEffect(() => {
    if (observers[event]) observers[event].push(observerRef);
    else observers[event] = [observerRef];
    
    return () => {
      observerRef.current = null;
      cleanUp();
    };
  }, []);
}
