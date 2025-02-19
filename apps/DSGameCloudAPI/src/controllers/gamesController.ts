import express from 'express';
import { Game } from '../models/gameModel';

const router = express.Router();

router.get('/', async function(req, res) {
    let allGames = await Game.find();
    res.send(allGames);
});

router.post('/', function(req, res) {
    res.send('POST handler for /games route.');
});

export default router;