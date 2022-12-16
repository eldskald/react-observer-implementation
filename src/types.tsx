export type Observer = (...args: any[]) => void;

export type ObserversTable = {
  [event: string]: { current: Observer | null }[];
};

export type NotificationSender<Args extends any[]> = (
  ...args: Args
) => void;
