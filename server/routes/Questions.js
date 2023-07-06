import express from 'express';
import { AskQuestion, gettAllQuestions } from '../controllers/Questions.js';

const router = express.Router();

router.post('/Ask',AskQuestion);

router.get('/get', gettAllQuestions);


export default router;