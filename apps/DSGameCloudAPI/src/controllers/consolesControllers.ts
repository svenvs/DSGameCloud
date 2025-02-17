import express from 'express';
import { games } from '../models/gameModel';
const router = express.Router();

router.get('/', function(req, res) {

    res.send(games);
});

router.post('/', function(req, res) {
    res.send('POST handler for /games route.');
});

export default router;