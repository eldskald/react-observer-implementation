import { createContext } from 'react';
import { ObserversTable } from '../types';

export const ObserversContext = createContext<{
  observers: ObserversTable,
  cleanUp: () => void
}>({ observers: {}, cleanUp: () => {} });
