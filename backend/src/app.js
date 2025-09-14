import express from 'express';
import cors from 'cors';
import templateRoutes from './routes/templates.js';
import { logErrors, errorHandler } from './middlewares/error.handler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/api/templates', templateRoutes);

app.use(logErrors);
app.use(errorHandler);

export default app;
