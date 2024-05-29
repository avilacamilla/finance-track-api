import { Request, Response } from 'express';
import { AppDataSource } from '../utils/database';
import { Balance } from '../domain/Balance';

export const getBalances = async (req: Request, res: Response) => {
  try {
    const balances = await AppDataSource.getRepository(Balance).find();
    res.json(balances);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar saldos' });
  }
};

export const createBalance = async (req: Request, res: Response) => {
  try {
    const { amount, date } = req.body;
    const balance = new Balance();
    balance.amount = amount;
    balance.date = date;

    const savedBalance = await AppDataSource.getRepository(Balance).save(balance);
    res.json(savedBalance);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar saldo' });
  }
};