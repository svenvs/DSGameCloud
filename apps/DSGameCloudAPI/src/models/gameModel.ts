import { Schema, model } from 'mongoose';
import { GameAPIModel } from '@dsgame-cloud/shared'

const gameSchema = new Schema<GameAPIModel>({
  name: {type: String, required: true},
  system: {type: String, required: true},
  emulator: {type: String, required: true},
  path: {type: String, required: true},
});

export const Game = model<GameAPIModel>('Game', gameSchema)
