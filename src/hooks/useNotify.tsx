import { useContext } from 'react';
import { ObserversContext } from '../contexts';
import { NotificationSender } from '../types';

export function useNotify<Args extends any[]>(event: string) {
  const { observers } = useContext(ObserversContext);

  const notify: NotificationSender<Args> = (...args: Args) => {
    if (observers[event]) observers[event].forEach((ref) => {
      if (ref.current) ref.current(...args);
    });
  };

  return notify;
}
