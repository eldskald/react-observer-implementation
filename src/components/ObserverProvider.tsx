import React, { useRef } from 'react';
import { SubscribersContext } from '../contexts';
import { SubscribersTable } from '../types';

export function ObserverProvider(props: { children: React.ReactNode }) {
  const ref = useRef<SubscribersTable>({});
  return (
    <SubscribersContext.Provider value={{ subscribers: ref.current }}>
      {props.children}
    </SubscribersContext.Provider>
  );
}
