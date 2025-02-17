import { GameAPIModel } from '@dsgame-cloud/shared'

export let games: Game[] = [];

export class Game implements GameAPIModel {
  public name: string;
  public system: string;
  public emulator: string;
  public path: string;

  constructor( path: string ){
    let deconstructedPath = path.split('\\'); 
    console.log(deconstructedPath);
    this.name = deconstructedPath[5];
    this.system = deconstructedPath[4];
    this.emulator = deconstructedPath[4];
    this.path = `/api/roms/${this.system}/${this.name}`
    games.push(this)
  }
}
