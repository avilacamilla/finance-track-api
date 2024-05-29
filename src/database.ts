import { DataSource } from 'typeorm';
import { Balance } from './models/Balance';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'debian-sys-maint',
  password: 'Pxbeo1wpkHTaJD7l',
  database: 'finance_track',
  entities: [Balance],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
  })
  .catch((error) => console.log('Erro ao conectar ao banco de dados:', error));