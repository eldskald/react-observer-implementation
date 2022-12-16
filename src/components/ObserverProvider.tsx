import React, { useRef } from 'react';
import { ObserversContext } from '../contexts';
import { ObserversTable } from '../types';

export function ObserverProvider(props: { children: React.ReactNode }) {
  const ref = useRef<ObserversTable>({});

  const cleanUp = () => {
    for(const key of Object.keys(ref.current)) {
      ref.current[key] = ref.current[key].filter((obsRef) => obsRef.current);
    }
  };

  return (
    <ObserversContext.Provider value={{ observers: ref.current, cleanUp }}>
      {props.children}
    </ObserversContext.Provider>
  );
}
