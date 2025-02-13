export interface GameAPIModel{
  name: string;
  path: string;
  system: gameSystems;
  emulator: string;
}

export enum gameSystems {
  NES = 'NES',
  SNES = 'SNES',
  N64 = 'N64'
}