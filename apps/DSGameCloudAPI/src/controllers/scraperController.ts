import express from 'express';
import { getAllFiles } from 'get-all-files'
import { ROMS_PATH } from '../constants';
import { Game, games } from '../models/gameModel';

const router = express.Router();

router.get('/', async (req, res) => {
    const roms = await getAllFiles(ROMS_PATH).toArray();
    games.length = 0;
    roms.forEach(element =>{
        new Game(element)
    })
    res.send('{"message": "done"}');
});

router.post('/', function(req, res) {
    res.send('POST handler for /scraper route.');
});

export default router;