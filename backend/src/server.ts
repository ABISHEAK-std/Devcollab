import http from 'node:http';
import { app } from './app.js';
import { env } from './config/env.js';
import { connectDatabase } from './config/db.js';
import { attachSocketServer } from './config/socket.js';

async function bootstrap() {
  await connectDatabase();

  const server = http.createServer(app);
  attachSocketServer(server);

  server.on('error', (error) => {
    console.error('Server startup failed:', error);
    process.exit(1);
  });

  server.listen(env.port, () => {
    console.log(`DevCollab API running on port ${env.port}`);
  });
}

bootstrap().catch((error) => {
  console.error('Bootstrap failed:', error);
  process.exit(1);
});