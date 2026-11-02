import express from 'express';
const app = express();
app.get('/', (_req, res) => res.json({service: 'hello-service', status: 'running'}));
app.get('/health', (_req, res) => res.json({status: 'UP'}));
app.get('/api/hello', (_req, res) => res.json({ message: 'Hello from TypeScript!' }));
app.listen(Number(process.env.PORT || 3000), '0.0.0.0');
