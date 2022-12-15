import React, { useRef } from 'react';
import { ObserversContext } from '../contexts';
import { ObserversTable } from '../types';

export function ObserverProvider(props: { children: React.ReactNode }) {
  const ref = useRef<ObserversTable>({});
  return (
    <ObserversContext.Provider value={{ observers: ref.current }}>
      {props.children}
    </ObserversContext.Provider>
  );
}
