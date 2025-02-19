import express from 'express';

const router = express.Router();

router.get('/', function(req, res) {

    res.send({nein: 'lol'});
});

router.post('/', function(req, res) {
    res.send('POST handler for /games route.');
});

export default router;