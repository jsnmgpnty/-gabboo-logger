import { DynamicModule, Module, Global } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerOptions } from './logger-options.model';

@Global()
@Module({})
export class LoggerModule {
  static register (loggerOptions?: LoggerOptions) : DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useValue: new LoggerService(loggerOptions),
        },
      ],
      exports: [LoggerService],
    };
  }
}
