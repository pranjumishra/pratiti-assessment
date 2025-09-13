import express from 'express';
import cors from 'cors';
import templateRoutes from './routes/templates.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/templates', templateRoutes);

export default app;
