import express from 'express';
import { games } from '../models/gameModel';
const router = express.Router();

router.get('/', function(req, res) {
    const response = games.map(e=>{
        return {name: e.name, path: e.path}
    })
    res.send(response);
});

router.post('/', function(req, res) {
    res.send('POST handler for /games route.');
});

export default router;