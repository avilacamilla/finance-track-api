"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBalance = exports.getBalances = void 0;
const database_1 = require("../utils/database");
const Balance_1 = require("../domain/Balance");
const getBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const balances = yield database_1.AppDataSource.getRepository(Balance_1.Balance).find();
        res.json(balances);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar saldos' });
    }
});
exports.getBalances = getBalances;
const createBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, date } = req.body;
        const balance = new Balance_1.Balance();
        balance.amount = amount;
        balance.date = date;
        const savedBalance = yield database_1.AppDataSource.getRepository(Balance_1.Balance).save(balance);
        res.json(savedBalance);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar saldo' });
    }
});
exports.createBalance = createBalance;
