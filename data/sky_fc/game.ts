import {Art, Character, Element, Game, Quartz, Stats, StatsChangeType} from '../../proto/gen/kiseki/v1/data_pb';

export const Characters = [
  Character.create({
    name: 'Estelle Bright',
    hp: Math.floor(8*9),
    str: Math.floor(0.05*16*17+20),
    def: Math.floor(0.04*16*17),
    ats: Math.floor(0.05*16*17),
    adf: 15,
    dex: Math.floor(0.001*16*17+16),
    agl: Math.floor(0.001*16*17+4),
    mov: 4,
    spd: Math.floor(0.0025*16*17+10),
    lines: [

    ]
  }),
  Character.create({
    name: 'Joshua Bright',
  }),
  Character.create({
    name: 'Scherazard Harvey',
  }),
  Character.create({
    name: 'Olivier Lenheim',
  }),
  Character.create({
    name: 'Agate Crosner',
  }),
  Character.create({
    name: 'Kloe Rinz',
  }),
  Character.create({
    name: 'Tita Russell',
  }),
  Character.create({
    name: 'Zin Vathek',
  })
] as Character[];
