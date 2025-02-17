export interface GameAPIModel{
  name: string;
  path: string;
  system: string;
  emulator: string;
}

export enum gameSystems {
  NES = 'nes',
  SNES = 'snes',
  N64 = 'n64'
}