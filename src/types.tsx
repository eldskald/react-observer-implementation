export type Observer = (...args: any[]) => void;

export type ObserversTable = {
  [event: string]: Observer[];
};

export type NotificationSender<Args extends any[]> = (
  ...args: Args
) => void;
