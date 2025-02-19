import express, { query } from 'express';
import { getAllFiles } from 'get-all-files'
import { ROMS_PATH } from '../constants';
import { Game } from '../models/gameModel';
import { Emulator, emulators } from '../models/emulatorModel';
import { RetroSpirit } from '../services/retroSpiritApi';

const retroSpititInsante = new RetroSpirit(process.env.RERSKEY);
const router = express.Router();
//insertmany interdesting
router.get('/', async (req, res) => {
    const roms = await getAllFiles(ROMS_PATH).toArray();
    await Game.deleteMany(); // just for now :D
    await roms.forEach(async element =>{
        let deconstructedPath = element.split('\\');
        let tobeSavedGame = new Game({
            name: deconstructedPath[5],
            system: deconstructedPath[4],
            emulator: deconstructedPath[4],

            path: `/api/roms/${deconstructedPath[4]}/${deconstructedPath[5]}`
        });
        await tobeSavedGame.save();
    })
    res.send('{"message": "done"}');
});

router.get('/searchRestroSpirit', async(req, res)=>{
    let query = req.query['q'];
    let results;
    if (query){
        results = await retroSpititInsante.searchByGameName(query.toString());
    }
    res.send(results)
})

router.post('/', function(req, res) {
    res.send('POST handler for /scraper route.');
});

export default router;