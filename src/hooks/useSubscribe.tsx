import { useContext, useEffect, useRef } from 'react';
import { SubscribersContext } from '../contexts';
import { Subscriber } from '../types';

export function useSubscribe(
  signal: string,
  func: Subscriber
) {
  const { subscribers } = useContext(SubscribersContext);
  const index = useRef<number>(0);

  useEffect(() => {
    if (subscribers[signal]) {
      subscribers[signal].push(func);
      index.current = subscribers[signal].length - 1;
    }

    return () => {
      subscribers[signal].splice(index.current, 1);
    };
  }, []);
}
