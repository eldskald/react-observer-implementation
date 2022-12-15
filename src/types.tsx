export type Subscriber = (...args: any[]) => void;

export type SubscribersTable = {
  [signal: string]: Subscriber[];
};

export type SignalSender<Args extends any[]> = (
  ...args: Args
) => void;
