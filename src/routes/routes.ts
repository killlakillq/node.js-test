import express from 'express';
import { getFilm } from '../model/logic';

const router = express.Router();

router.get('/film/:title', getFilm);

export = router;
