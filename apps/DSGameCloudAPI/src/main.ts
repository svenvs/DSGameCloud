/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', express.static(path.join(__dirname, '..', 'DSGameCloud' ,'browser'))); // dots are for going back one folder and then in the front end app only works only for PR!!! 

app.use('/gamePlayer', express.static(path.join(__dirname, '..', 'gamePlayer'))); // dots are for going back one folder and then in the front end app only works only for PR!!! 

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to DSGameCloudAPI!' });
});

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Welcome to DSGameCloudAPI!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
