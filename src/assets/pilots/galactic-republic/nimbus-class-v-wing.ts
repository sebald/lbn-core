import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Nimbus-class V-wing',
  xws: 'nimbusclassvwing',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1NR',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Barrel Roll', difficulty: 'Red' },
    {
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Lock' },
      difficulty: 'White',
    },
  ],
  ability: {
    name: 'Twin Ion Engines',
    text: 'Ignore the "TIE" ship restriction on upgrade cards.',
  },
  pilots: [
    {
      name: 'Wilhuff Tarkin',
      caption: 'Aspiring Admiral',
      initiative: 3,
      limited: 1,
      xws: 'wilhufftarkin',
      ability:
        'During the System Phase, you may choose an object that you have locked at range 1-3. Another friendly ship at range 1-3 may acquire a lock on that object.',
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      cost: 3,
      ffg: 791,
      loadout: 8,
      extended: true,
      keywords: ['TIE'],
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/bf/0e/bf0e3b50-3f36-4940-953b-f0a2d9f2b9b9/swz80_ship_tarkin.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/02fb0df2a559b8bc66fd475442dbe8df.jpg',
    },
    {
      xws: 'oddball-nimbusclassvwing',
      ffg: 788,
      name: '“Odd Ball”',
      cost: 4,
      limited: 1,
      initiative: 5,
      caption: 'CC-2237',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      keywords: ['Clone', 'TIE'],
      loadout: 12,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/8e/70/8e70bbf1-d0ca-4367-9e3a-4ad0186af71f/swz80_ship_odd-ball.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/03ff8a220e58ba5c122bd82292447182.jpg',
    },
    {
      name: '“Contrail”',
      xws: 'contrail',
      initiative: 5,
      limited: 1,
      caption: 'CT-4981',
      standard: true,
      ability:
        "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 789,
      keywords: ['Clone', 'TIE'],
      loadout: 11,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/b0/bc/b0bcccdb-fd02-4ab1-847b-66bae01e7ddc/swz80_ship_contrail.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a513ddef007bed78558369fd70379d15.jpg',
    },
    {
      name: '“Klick”',
      xws: 'klick',
      initiative: 4,
      limited: 1,
      caption: 'GC-1000',
      standard: true,
      ability:
        'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 790,
      keywords: ['Clone', 'TIE'],
      loadout: 8,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/d6/ba/d6baed95-5960-4615-9949-faf5a5c0d96f/swz80_ship_klick.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/2331f92ad91a30e81c5c6baafc0dfe08.jpg',
    },
    {
      name: 'Shadow Squadron Escort',
      xws: 'shadowsquadronescort',
      initiative: 3,
      limited: 0,
      text:
        "In the waning months of the Clone Wars, elite clone formations carry out missions critical to the future of the Republic; such as the protection of Supreme Chancellor Palpatine's personal shuttle.",
      standard: true,
      slots: ['Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 792,
      keywords: ['Clone', 'TIE'],
      loadout: 3,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/c0/b0/c0b03f12-cff6-43af-99df-6ddf61fd471a/swz80_ship_shadow-escort.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a9dd9a8a65facfae13018bb0d1aad602.jpg',
    },
    {
      name: 'Loyalist Volunteer',
      xws: 'loyalistvolunteer',
      initiative: 2,
      limited: 0,
      text:
        'The Kuat Systems Engineering Alpha-3 Nimbus-class V-wing is the vessel of choice for clone and non-clone starfighter pilots alike. The techniques pioneered to mass-produce its precision ion engines will later be crucial in the development of the TIE series by Sienar Fleet Systems.',
      standard: true,
      slots: ['Modification', 'Configuration'],
      cost: 3,
      epic: true,
      ffg: 793,
      loadout: 4,
      extended: true,
      keywords: ['TIE'],
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/a1/27/a127938a-aecc-48eb-ba09-622781e84084/swz80_ship_volunteer.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/963d472b274bb777fdc9be15527e28f1.jpg',
    },
    {
      name: '“Contrail”',
      xws: 'contrail-siegeofcoruscant',
      initiative: 5,
      limited: 1,
      caption: 'Siege of Coruscant',
      standard: true,
      ability:
        "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      slots: [],
      cost: 3,
      epic: true,
      ffg: 789,
      keywords: ['Clone', 'TIE'],
      loadout: 0,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/b0/bc/b0bcccdb-fd02-4ab1-847b-66bae01e7ddc/swz80_ship_contrail.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a513ddef007bed78558369fd70379d15.jpg',
      shipAbility: {
        name: 'Born for This',
        text:
          'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      standardLoadout: true,
      upgrades: [
        {
          title: 'Ion Limiter Override',
          ability:
            'After you fully execute a red maneuver, you may perform a [Barrel Roll] action, even while stressed. If you do, roll an attack die; on a [Hit] result gain 1 strain token, and on a [Critical Hit] result gain 1 ion token.',
          slots: ['Talent'],
        },
        {
          title: 'Precise Astromech',
          ability:
            'After you perform an action, you may spend 1 [Charge] to perform a red [Lock] action.',
          slots: ['Astromech'],
          charges: { value: 2, recovers: 0 },
        },
        {
          title: 'Ion Bombs',
          slots: ['Device'],
          ability:
            'Bomb During the System Phase, you may spend 1 [Charge] to drop an Ion Bomb using the (1 [Straight]) template.',
          charges: { value: 2, recovers: 0 },
        },
        {
          title: 'Alpha-3B "Besh"',
          ability:
            'While you perform a primary attack, you may spend your lock on the defender to change 1 of your blank or [Focus] results to a [Hit] result. Add [Device] slot.',
          slots: ['Configuration'],
        },
      ],
    },
    {
      name: '“Klick”',
      xws: 'klick-siegeofcoruscant',
      initiative: 4,
      limited: 1,
      caption: 'Siege of Coruscant',
      standard: true,
      ability:
        'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
      slots: [],
      cost: 3,
      epic: true,
      ffg: 790,
      keywords: ['Clone', 'TIE'],
      loadout: 8,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/d6/ba/d6baed95-5960-4615-9949-faf5a5c0d96f/swz80_ship_klick.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/2331f92ad91a30e81c5c6baafc0dfe08.jpg',
      shipAbility: {
        name: 'Born for This',
        text:
          'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      stats: [
        { type: 'attack', arc: 'Front Arc', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 3 },
      ],
      standardLoadout: true,
      upgrades: [
        {
          title: 'R3 Astromech',
          ability:
            'You can maintain up to 2 locks. Each lock must be on a different object. After you perform a [Lock] action, you may acquire a lock.',
          slots: ['Astromech'],
        },
        {
          ability:
            "Before you execute a speed 1-3 Koiogran Turn ([Koiogran Turn]) maneuver, you may spend 1 [Charge] to execute that maneuver as a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver instead.",
          title: 'Precision Ion Engines',
          slots: ['Modification'],
          charges: { value: 2, recovers: 0 },
        },
        {
          ability:
            'While you perform a primary attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results inflict ion tokens instead of damage.',
          title: 'Alpha-3E "Esk"',
          slots: ['Configuration'],
          charges: { value: 2, recovers: 1 },
        },
      ],
    },
  ],
  ffg: 71,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Nimbus-class_V-wing.png',
};

export default t;
