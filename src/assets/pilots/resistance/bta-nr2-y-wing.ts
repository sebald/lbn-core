import { ShipType } from '../../../types';

const t: ShipType = {
  name: { en: 'BTA-NR2 Y-Wing' },
  xws: 'btanr2ywing',
  size: 'Small',
  ffg: 86,
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '4FR',
    '5KR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Boost' },
  ],
  icon: '???',
  pilots: [
    {
      name: { en: 'Zorii Bliss' },
      xws: 'zoriibliss',
      initiative: 5,
      limited: 1,
      hyperspace: true,
      cost: 40,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Illicit',
        'Configuration',
      ],
      ability: {
        en:
          'After a ship at range 1 performs an action during its Perform Action step, if that action is on your action bar, you may spend 1 [Charge] to perform that action, treating it as red.',
      },
      ffg: -999,
      artwork: '???',
      caption: { en: 'Corsair of Kijimi' },
      epic: true,
      image: { en: '???' },
      keywords: ['Y-wing'],
    },
    {
      name: { en: 'Teza Nasz' },
      xws: 'tezanasz',
      initiative: 4,
      limited: 1,
      hyperspace: true,
      cost: 37,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ability: {
        en:
          'While a friendly ship at range 0-2 performs an attack, if the defender has a ship friendly to the attacker in each of its side arcs ([Left Arc] and [Right Arc]), the attacker may reroll 1 attack die.',
      },
      ffg: -999,
      artwork: '???',
      caption: { en: 'Old Soldier' },
      epic: true,
      image: { en: '???' },
      keywords: ['Y-wing'],
    },
    {
      name: { en: 'Wilsa Teshlo' },
      xws: 'wilsateshlo',
      initiative: 4,
      limited: 1,
      hyperspace: true,
      cost: 34,
      slots: [
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      text: { en: '???' },
      ffg: -999,
      artwork: '???',
      epic: true,
      image: { en: '???' },
      caption: { en: 'Veiled Sorority Privateer' },
      ability: {
        en:
          'After you perform an attack, if the defender was dealt a faceup damage card, the defender gains 1 strain token unless it chooses 1 non-recurring [Charge] from 1 of its equipped upgrades and loses that [Charge].',
      },
      keywords: ['Y-wing'],
    },
    {
      name: { en: 'Shasa Zaro' },
      xws: 'shasazaro',
      initiative: 4,
      limited: 1,
      hyperspace: false,
      cost: 33,
      slots: [
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ability: {
        en:
          'After you defend, you may choose a friendly ship in your [Full Rear Arc] at range 0-2 and 1 of your green tokens. If you do, that ship gains a matching token.',
      },
      ffg: -999,
      artwork: '???',
      caption: { en: 'Artistic Ace' },
      epic: true,
      image: { en: '???' },
      keywords: ['Y-wing'],
    },
    {
      name: { en: 'Lega Fossang' },
      xws: 'legafossang',
      initiative: 3,
      limited: 1,
      hyperspace: true,
      cost: 33,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ability: {
        en:
          'While you perform a primary or [Turret] attack, you may reroll 1 attack die for each friendly device or calculating friendly ship in the attack arc.',
      },
      ffg: -999,
      artwork: '???',
      caption: { en: 'Hero of Humbarine' },
      epic: true,
      image: { en: '???' },
      keywords: ['Y-wing'],
    },
    {
      name: { en: 'Aftab Ackbar' },
      xws: 'aftabackbar',
      initiative: 2,
      limited: 1,
      hyperspace: true,
      cost: 34,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      text: { en: '???' },
      ffg: -999,
      artwork: '???',
      epic: true,
      image: { en: '???' },
      caption: { en: 'Junior' },
      ability: {
        en:
          'After you execute a red basic maneuver or perform a red action, if you have exactly 1 stress token, you may gain 1 strain token to remove that stress token.',
      },
      keywords: ['Y-wing'],
    },
    {
      name: { en: 'Corus Kapellim' },
      xws: 'coruskapellim',
      initiative: 1,
      limited: 1,
      hyperspace: true,
      cost: 33,
      slots: [
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Illicit',
        'Configuration',
      ],
      text: { en: '???' },
      ffg: -999,
      artwork: '???',
      epic: true,
      image: { en: '???' },
      caption: { en: 'Gentleman Flyer' },
      ability: {
        en:
          'Before you engage, you may choose 1 ship in your firing arc at range 0-1. If you do, transfer 1 green token from that ship to yourself.',
      },
      keywords: ['Y-wing'],
    },
    {
      name: { en: "C'ai Threnalli" },
      xws: 'caithrenalli-btanr2ywing',
      initiative: 2,
      limited: 1,
      hyperspace: true,
      cost: 34,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ability: {
        en:
          'After you fully execute a maneuver, if you moved through a friendly ship, you may perform an [Evade] action.',
      },
      ffg: 910,
      artwork: '???',
      image: { en: '???' },
      caption: { en: 'Tenacious Survivor' },
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: { en: 'New Republic Patrol' },
      xws: 'newrepublicpatrol',
      initiative: 3,
      limited: 0,
      hyperspace: true,
      cost: 32,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      text: {
        en:
          'Designed for customization, the BTA-NR2 Y-wing is used by numerous military organizations across the galaxy in a variety of roles, from law enforcement craft to wartime bombers.',
      },
      ffg: -999,
      artwork: '???',
      epic: true,
      image: { en: '???' },
      keywords: ['Y-wing'],
    },
    {
      name: { en: 'Kijimi Spice Runner' },
      xws: 'kijimispicerunner',
      initiative: 2,
      limited: 0,
      hyperspace: true,
      cost: 31,
      slots: [
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Illicit',
        'Configuration',
      ],
      text: {
        en:
          'Led by Zorii Bliss, the Kijimi Spice Runners set aside their usual mercenary ways to take the fight to the Final Order at the Battle of Exegol.',
      },
      ffg: -999,
      artwork: '???',
      epic: true,
      image: { en: '???' },
      keywords: ['Y-wing'],
    },
  ],
};

export default t;