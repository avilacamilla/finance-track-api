import { Router } from 'express';
import { getBalances, createBalance } from '../controllers/balanceController';

const router = Router();

router.get('/balances', getBalances);
router.post('/balances', createBalance);

export default router;