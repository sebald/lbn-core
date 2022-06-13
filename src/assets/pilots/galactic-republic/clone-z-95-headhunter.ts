import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Clone Z-95 Headhunter',
  xws: 'clonez95headhunter',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  ability: {
    name: 'Versatile Frame',
    text:
      'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
    slotOptions: ['Torpedo', 'Missile'],
  },
  pilots: [
    {
      name: '“Killer”',
      caption: 'Dependable Closer',
      initiative: 2,
      limited: 1,
      cost: 3,
      loadout: 11,
      xws: 'killer',
      ability:
        'While you perform an attack, if the defender has 2 or fewer hull remaining, you may roll 1 additional attack die. If you do, gain 1 deplete token after rolling attack dice.',
      slots: ['Talent', 'Talent', 'Sensor', 'Cannon', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
      keywords: ['Clone'],
    },
    {
      name: '“Drift”',
      caption: 'CT-1020',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 5,
      xws: 'drift',
      ability:
        'While a friendly ship at range 0-1 performs an attack, if you have exactly 1 non-lock red token or exactly 1 orange token, that ship may reroll 1 attack die.',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
      keywords: ['Clone'],
    },
    {
      name: '“Boost”',
      caption: 'CT-4860',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 8,
      xws: 'boost',
      ability:
        'At the start of the Engagement Phase, if there is a friendly ship at range 0-1 whose revealed maneuver is blue, you may perform a [Boost] action.',
      slots: ['Talent', 'Talent', 'Sensor', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
      keywords: ['Clone'],
    },
    {
      name: '“Stub”',
      caption: 'Scrappy Flier',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 8,
      xws: 'stub',
      ability:
        'While you defend, if the speed of your revealed maneuver is even, roll 1 additional defense die. While you perform a primary attack, if the speed of your revealed maneuver is odd, roll 1 additional attack die.',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
      keywords: ['Clone'],
    },
    {
      name: '“Hawk',
      caption: 'Valkyrie 2929',
      initiative: 4,
      limited: 1,
      cost: 3,
      loadout: 8,
      xws: 'hawk-clonez95headhunter',
      ability:
        'At the start of the end phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
      slots: ['Talent', 'Sensor', 'Modification', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
      keywords: ['Clone'],
    },
    {
      name: '“Slider”',
      caption: 'Evasive Aviator',
      initiative: 4,
      limited: 1,
      cost: 3,
      loadout: 8,
      xws: 'slider',
      ability:
        'When you reveal a [2 [Bank Left]] or [2 [Bank Right]] maneuver, you may spend 2 [Charge] to execute it as a sideslip.',
      charges: { value: 2, recovers: 1 },
      slots: ['Talent', 'Talent', 'Sensor', 'Modification', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
      keywords: ['Clone'],
    },
    {
      name: '“Warthog”',
      caption: 'Veteran of Kadavo',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 10,
      xws: 'warthog-clonez95headhunter',
      ability:
        'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
      keywords: ['Clone'],
    },
    {
      name: '"Knack"',
      caption: 'Incautious Instructor',
      initiative: 5,
      limited: 1,
      cost: 3,
      loadout: 7,
      xws: 'knack',
      ability:
        'After you are destroyed, you may choose a friendly non-limited ship and assign 1 of your equipped [Talent] upgrades to it. End of Game: Return all [Talent] upgrades to their original ships.',
      slots: ['Talent', 'Talent', 'Sensor', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
    },
    {
      name: '7th Sky Corps Pilot',
      initiative: 2,
      limited: 0,
      cost: 3,
      loadout: 3,
      xws: '7thskycorpspilot',
      slots: ['Sensor', 'Modification'],
      standard: true,
      extended: true,
      epic: true,
    },
    {
      name: 'Reaper Squadron Scout',
      initiative: 3,
      limited: 0,
      cost: 3,
      loadout: 2,
      xws: 'reapersquadronscout',
      slots: ['Talent', 'Sensor'],
      standard: true,
      extended: true,
      epic: true,
    },
  ],
};

export default t;
