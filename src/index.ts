import express from 'express';
import cors from 'cors';
import fileParseRouter from './routes/file-parser.route';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: '20mb' }));
app.use(cors());
app.use(fileParseRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});
