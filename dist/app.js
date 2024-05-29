"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const balanceRoutes_1 = __importDefault(require("./routes/balanceRoutes"));
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Conectar as rotas
app.use('/api', balanceRoutes_1.default);
const PORT = 3000;
database_1.AppDataSource.initialize()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
})
    .catch((error) => console.log('Erro ao inicializar o banco de dados:', error));
