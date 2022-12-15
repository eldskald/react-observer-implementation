import { createContext } from 'react';
import { SubscribersTable } from '../types';

export const SubscribersContext = createContext<{
  subscribers: SubscribersTable
}>({ subscribers: {} });
