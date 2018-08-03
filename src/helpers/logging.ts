import * as winston from 'winston';

export function getLogger(): winston.Logger {
  return winston.createLogger({
    level: 'debug',
    transports: [new winston.transports.Console()],
  });
}
