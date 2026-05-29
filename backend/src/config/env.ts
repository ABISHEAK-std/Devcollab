import 'dotenv/config';

const nodeEnv = process.env.NODE_ENV ?? 'development';

function required(value: string | undefined, varName?: string): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${varName || 'UNKNOWN'}`);
  }
  return value;
}

export const env = {
  nodeEnv,
  port: Number(process.env.PORT ?? 5000),
  mongoUri: ((nodeEnv === 'development' 
    ? process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/devcollab'
    : required(process.env.MONGODB_URI, 'MONGODB_URI')) as string),
  jwtSecret: ((nodeEnv === 'development'
    ? process.env.JWT_SECRET ?? 'dev-secret-key'
    : required(process.env.JWT_SECRET, 'JWT_SECRET')) as string),
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
  socketCorsOrigin: process.env.SOCKET_CORS_ORIGIN ?? 'http://localhost:5173',
  jwtCookieName: process.env.JWT_COOKIE_NAME ?? 'devcollab_token'
};