/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import games from './controllers/gamesController'
import scraper from './controllers/scraperController'
import { ROMS_PATH } from './constants';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', express.static(path.join(__dirname, '..', 'DSGameCloud' ,'browser'))); // dots are for going back one folder and then in the front end app only works only for PR!!! 

app.use('/api/gamePlayer', express.static(path.join(__dirname, '..', 'DSgamePlayer'))); // dots are for going back one folder and then in the front end app only works only for PR!!! 
app.use('/api/games', games);
app.use('/api/scraper', scraper);
app.use('/api/roms', express.static(ROMS_PATH));
app.get('/api', async (req, res) => {
  res.send({ message: 'Welcome to DSGameCloudAPI!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
