import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'ST-70 Assault Ship',
  xws: 'st70assaultship',
  size: 'Medium',
  dial: [
    '0OR',
    '1TR',
    '1BW',
    '1FB',
    '1NR',
    '1YR',
    '2TW',
    '2ER',
    '2BW',
    '2FB',
    '2NR',
    '2YW',
    '2RR',
    '3TR',
    '3BW',
    '3FB',
    '3NR',
    '3YR',
    '4FB',
    '5KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 7 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  pilots: [
    {
      xws: 'themandalorian',
      name: 'The Mandalorian',
      caption: 'Din Djarin',
      initiative: 5,
      limited: 1,
      cost: 7,
      loadout: 28,
      ability:
        'While you defend or perform an attack, if you are in the [Front Arc] at range 1-2 of 2 or more enemy ship, you may change 1 of you blank results to a [Focus] result.',
      slots: [
        'Talent',
        'Talent',
        'Crew',
        'Crew',
        'Cannon',
        'Gunner',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      extended: true,
      keywords: ['Mandalorian'],
    },
    {
      xws: 'q90',
      name: 'Q9-0',
      initiative: 5,
      limited: 1,
      cost: 6,
      loadout: 20,
      ability:
        'After you fully execute an advanced maneuver, you may perform a [Calculate] or [Barrel Roll] action, even while stressed. If you do, gain 1 strain token.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
      ],
      slots: [
        'Talent',
        'Talent',
        'Crew',
        'Crew',
        'Cannon',
        'Gunner',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      extended: true,
      caption: 'Zero',
      keywords: ['Droid'],
    },
    {
      xws: 'outerrimenforcer',
      name: 'Outer Rim Enforcer',
      initiative: 2,
      limited: 0,
      cost: 6,
      loadout: 10,
      slots: [
        'Crew',
        'Cannon',
        'Gunner',
        'Illicit',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      extended: true,
    },
    {
      xws: 'guildbountyhunter',
      name: 'Guild Bounty Hunter',
      initiative: 3,
      limited: 2,
      cost: 6,
      loadout: 14,
      ability:
        'While you perform an attack at attack range 1-2, you may spend 1 non-recurring [Charge] from 1 of your equipped [Illicit] upgrades to change 1 [Focus] result to a [Crit] result.',
      slots: [
        'Crew',
        'Cannon',
        'Gunner',
        'Illicit',
        'Modification',
        'Modification',
      ],
      standard: true,
      epic: true,
      extended: true,
      caption: 'Blaster for Hire',
      keywords: ['Bounty Hunter'],
    },
  ],
};

export default t;