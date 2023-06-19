/* eslint-disable no-console */
import { ILogDebugMessage, ILogErrorMessage, ILoggingProvider, ILogInfoMessage } from '../models/ILoggingProvider';

export class Console implements ILoggingProvider {
  private config: unknown;

  logInfo({ message, tag, additionalContent }: ILogInfoMessage): void {
    console.log(
      JSON.stringify({
        message,
        severity: 'INFO',
        tag,
        additionalContent,
        config: this.config,
      })
    );
  }

  logDebug({ message, tag, transactionId, additionalContent }: ILogDebugMessage): void {
    console.debug(
      JSON.stringify({
        message,
        severity: 'DEBUG',
        tag,
        transactionId,
        additionalContent,
        config: this.config,
      })
    );
  }

  logError({ message, tag, transactionId, error, additionalContent }: ILogErrorMessage): void {
    console.error(
      JSON.stringify({
        message,
        severity: 'ERROR',
        tag,
        transactionId,
        error: error?.stack,
        additionalContent,
        config: this.config,
      })
    );
  }

  setConfig(obj: unknown): void {
    this.config = obj;
  }
}
