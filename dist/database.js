"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Balance_1 = require("./models/Balance");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'debian-sys-maint',
    password: 'Pxbeo1wpkHTaJD7l',
    database: 'finance_track',
    entities: [Balance_1.Balance],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
})
    .catch((error) => console.log('Erro ao conectar ao banco de dados:', error));
