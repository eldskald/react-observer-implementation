# react-observer-pattern

An implementation of the observer pattern on React.

## Installation

```
$ npm install --save react-observer-pattern
```

## Example

```jsx
// Your app
import { ObserverProvider } from 'react-observer-pattern';

export function App() {
  return(
    <ObserverProvider>
      ...
    </ObserverProvider>
  )
}

// Subscribing
import { useObserve } from 'react-observer-pattern';

export function SomeComponent() {
  useObserve(
    'some_event',
    (...args) => {
      // function to call when notification arrives
    }
  );
}

// Notifying
import { useNotify } from 'react-observer-pattern';

export function OtherComponent() {
  const notify = useNotify('some_event');
  notify(...args);
}
```

## Credits

By [Rafael de Lima Bordoni](github.com/eldskald).

## License

Licensed under MIT.