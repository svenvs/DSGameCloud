import express from 'express';
import { getAllFiles } from 'get-all-files'
import { ROMS_PATH } from '../constants';
import { Game, games } from '../models/gameModel';
import { Emulator, emulators } from '../models/emulatorModel';

const router = express.Router();

router.get('/', async (req, res) => {
    const roms = await getAllFiles(ROMS_PATH).toArray();
    games.length = 0;
    let uniqueConsoles: string[] = [];
    roms.forEach(element =>{
        let tempGame = new Game(element);
        if(!uniqueConsoles.includes(tempGame.emulator)){
            uniqueConsoles.push(tempGame.emulator)
        }
    })
    console.log(uniqueConsoles);
    res.send('{"message": "done"}');
});

router.post('/', function(req, res) {
    res.send('POST handler for /scraper route.');
});

export default router;