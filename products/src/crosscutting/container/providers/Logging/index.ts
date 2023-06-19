import { container } from 'tsyringe';
import { ILoggingProvider } from './models/ILoggingProvider';

import { Console } from './impl/Console';

const providers = {
  console: container.resolve(Console),
};

container.registerInstance<ILoggingProvider>('LoggingProvider', providers.console);
