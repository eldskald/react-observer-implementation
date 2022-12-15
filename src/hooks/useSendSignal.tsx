import { useContext } from 'react';
import { SubscribersContext } from '../contexts';
import { SignalSender } from '../types';

export function useSendSignal<Args extends any[]>(signal: string) {
  const { subscribers } = useContext(SubscribersContext);

  const sendSignal: SignalSender<Args> = (...args: Args) => {
    if (subscribers[signal]) {
      subscribers[signal].forEach((func) => func(...args));
    }
  };

  return sendSignal;
}
