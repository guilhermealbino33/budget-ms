interface IMessage {
  message: string;
  tag?: string;
  additionalContent?: unknown;
  config?: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILogInfoMessage extends IMessage {}

export interface ILogDebugMessage extends IMessage {
  transactionId?: string;
}

export interface ILogErrorMessage extends IMessage {
  transactionId?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
}

export interface ILoggingProvider {
  logInfo(obj: ILogInfoMessage): void;
  logDebug(obj: ILogDebugMessage): void;
  logError(obj: ILogErrorMessage): void;
  setConfig(obj: { transactionId: string; origin: string }): void;
}
