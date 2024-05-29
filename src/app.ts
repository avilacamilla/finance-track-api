import 'reflect-metadata';
import express from 'express';
import balanceRoutes from './routes/balanceRoutes';
import { AppDataSource } from './database';

const app = express();

app.use(express.json());

// Conectar as rotas
app.use('/api', balanceRoutes);

const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log('Erro ao inicializar o banco de dados:', error));
