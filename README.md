# react-observer-implementation

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

## Documentation

This packages has two hooks that work within a provider component.

### `ObserverProvider` component

The other hooks only work when called on components rendered inside this provider.

```jsx
<ObserverProvider>
  your app here
</ObserverProvider>
```

### `useObserve` hook

Subscribes the component to the named event with the given function. Doesn't return anything, must be used like `useEffect`. Events are just `strings`, and whenever you send a notification from any other component within the provider, the function you gave to this hook will be called. __Only works within `ObserverProvider`__.

```jsx
useObserve(
  'event_name',
  (...args) => {
    // this function will execute whenever a
    // notification for the event 'event_name'
    // is called
  }
);
```

### `useNotify` hook

Returns a function that, whenever called, sends a notification for the event given as an argument to the hook. The function it returns might be called with as many arguments as you want, they will be sent to the observers' subscribed function. On _TypeScript_, you can use a generics on the hook to type the args. The generics must be an `array`, each entry is the type for each argument in order. __Only works within `ObserverProvider`__.

```jsx
const notify = useNotify<[number, string[]]>('event_name');

return (
  <button onClick={() => notify(42, ['hello', 'world'])}>
    Click me
  </button>
);
```

## Demo

Here is a [codesandbox demo](https://codesandbox.io/p/sandbox/react-observer-implementation-demo-b6hnhl) to showcase examples.

## Credits

By [Rafael de Lima Bordoni](https://github.com/eldskald).

## License

Licensed under MIT.
