import { GameAPIModel, gameSystems } from '@dsgame-cloud/shared'

export let games: Game[] = [];

export class Game implements GameAPIModel {
  public name: string;
  public system: gameSystems;
  public emulator: string;
  public path: string;

  constructor( path: string ){
    let deconstructedPath = path.split('\\'); 
    console.log(deconstructedPath);
    this.name = deconstructedPath[5];
    this.system = gameSystems[deconstructedPath[4]];
    this.emulator = deconstructedPath[4];
    this.path = `/api/roms/${this.system}/${this.name}`
    games.push(this)
  }
}
