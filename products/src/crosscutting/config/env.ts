import * as dotenv from 'dotenv';

dotenv.config();

const envs = [
  { name: 'HTTP_PORT', source: process.env.HTTP_PORT },
  { name: 'DB_URL', source: process.env.DB_URL },
  { name: 'DB_USERNAME', source: process.env.DB_USERNAME },
  { name: 'DB_PASSWORD', source: process.env.DB_PASSWORD },
];

envs.forEach(env => {
  if (!env.source) {
    console.error(
      JSON.stringify({
        message: 'Problem when initializing application',
        severity: 'ERROR',
        error: `Required environment variable ${env.name} not provided`,
        tag: 'MISSING-ENVIRONMENT-VARIABLE',
      })
    );
    process.exit(0);
  }
});
