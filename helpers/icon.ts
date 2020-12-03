const icons: { [s: string]: string } = {
  agility: "^",
  astromech: "A",
  attack: "%",
  "bank left": "7",
  bankleft: "7",
  "bank right": "9",
  bankright: "9",
  "barrel roll": "r",
  barrelroll: "r",
  basesmall: "Á",
  basemedium: "Â",
  baselarge: "Ã",
  boost: "b",
  "bullseye arc": "}",
  bullseyearc: "}",
  calculate: "a",
  cannon: "C",
  cargo: "G",
  charge: "g",
  cloak: "k",
  command: "V",
  "condition-outline": "Æ",
  condition: "°",
  configuration: "n",
  config: "n",
  coordinate: "o",
  crew: "W",
  "critical hit": "c",
  crit: "c",
  "dalan-bankleft": "[",
  "dalan-bankright": "]",
  device: "B",
  "double turret arc": "q",
  doubleturretarc: "q",
  "galactic empire": "@",
  empire: "@",
  "galactic republic": "/",
  energy: "(",
  epic: ")",
  evade: "e",
  "first order": "+",
  firstorder: "+",
  focus: "f",
  force: "h",
  "force power": "h",
  forcecharge: "h",
  forcepower: "F",
  "front arc": "{",
  frontarc: "{",
  "full front arc": "~",
  fullfrontarc: "~",
  "full rear arc": "¡",
  fullreararc: "¡",
  gunner: "Y",
  hardpoint: "H",
  "helmet-imperial": "y",
  "helmet-rebel": "x",
  "helmet-scum": "z",
  hit: "d",
  hull: "&",
  "ig88d-sloopleft": '"',
  "ig88d-sloopright": "'",
  illicit: "I",
  jam: "j",
  "koiogran turn": "2",
  kturn: "2",
  leftarc: "£",
  "left arc": "£",
  linked: ">",
  missile: "M",
  modification: "m",
  "obstacle-core2asteroid0-outline": "ĉ",
  "obstacle-core2asteroid0": "ĥ",
  "obstacle-core2asteroid1-outline": "Č",
  "obstacle-core2asteroid1": "Ĩ",
  "obstacle-core2asteroid2-outline": "Ċ",
  "obstacle-core2asteroid2": "Ħ",
  "obstacle-core2asteroid3-outline": "ċ",
  "obstacle-core2asteroid3": "ħ",
  "obstacle-core2asteroid4-outline": "č",
  "obstacle-core2asteroid4": "ĩ",
  "obstacle-core2asteroid5-outline": "Ď",
  "obstacle-core2asteroid5": "Ī",
  "obstacle-coreasteroid0-outline": "Ă",
  "obstacle-coreasteroid0": "Ğ",
  "obstacle-coreasteroid1-outline": "ă",
  "obstacle-coreasteroid1": "ğ",
  "obstacle-coreasteroid2-outline": "ā",
  "obstacle-coreasteroid2": "ĝ",
  "obstacle-coreasteroid3-outline": "ą",
  "obstacle-coreasteroid3": "ġ",
  "obstacle-coreasteroid4-outline": "Ą",
  "obstacle-coreasteroid4": "Ġ",
  "obstacle-coreasteroid5-outline": "Ā",
  "obstacle-coreasteroid5": "Ĝ",
  "obstacle-vt49decimatordebris0-outline": "Đ",
  "obstacle-vt49decimatordebris0": "Ĭ",
  "obstacle-vt49decimatordebris1-outline": "đ",
  "obstacle-vt49decimatordebris1": "ĭ",
  "obstacle-vt49decimatordebris2-outline": "ć",
  "obstacle-vt49decimatordebris2": "ģ",
  "obstacle-yt2400debris0-outline": "ď",
  "obstacle-yt2400debris0": "ī",
  "obstacle-yt2400debris1-outline": "Ĉ",
  "obstacle-yt2400debris1": "Ĥ",
  "obstacle-yt2400debris2-outline": "Ć",
  "obstacle-yt2400debris2": "Ģ",
  ordnance: "?",
  rangebonusindicator: "?",
  "rear arc": "|",
  reararc: "|",
  "rebel-outline": "-",
  resistance: "!",
  "rebel alliance": "!",
  rebel: "!",
  recover: "v",
  recurring: "`",
  reinforce: "i",
  reload: "=",
  reversebankleft: "J",
  reversebankright: "L",
  reversestraight: "K",
  rightarc: "¢",
  "right arc": "¢",
  "rotate arc": "R",
  rotatearc: "R",
  "scum and villainy": "#",
  scum: "#",
  shields: "*",
  shield: "*",
  "single turret arc": "p",
  singleturretarc: "p",
  slam: "s",
  "segnor's loop left": "1",
  sloopleft: "1",
  "segnor's loop right": "3",
  sloopright: "3",
  "separatist alliance": ".",
  "squad-point-cost": "0",
  stationary: "5",
  stop: "5",
  straight: "8",
  sensor: "S",
  talent: "E",
  lock: "l",
  "tactical relay": "Z",
  tacticalrelay: "Z",
  targetlock: "l",
  team: "T",
  tech: "X",
  title: "t",
  "token-cannotattack-outline": "í",
  "token-cannotattack": "Ö",
  "token-crit-outline": "è",
  "token-crit": "Ç",
  "token-evade-outline": "é",
  "token-evade": "Å",
  "token-focus-outline": "ç",
  "token-focus": "Ä",
  torpedo: "P",
  "tallon roll left": ":",
  trollleft: ":",
  "tallon roll right": ";",
  trollright: ";",
  "turn left": "4",
  turnleft: "4",
  "turn right": "6",
  turnright: "6",
  turret: "U",
  "unique-outline": "•",
  unique: "u",
};

const named = (icon?: string) => {
  if (!icon) {
    return;
  }
  return icons[icon.toLowerCase()] || "0";
};

export default named;

const shipMap: { [s: string]: string } = {
  aggressorassaultfighter: "i",
  alphaclassstarwing: "&",
  arc170starfighter: "c",
  attackshuttle: "g",
  auzituckgunship: "@",
  rz1awing: "a",
  rz2awing: "a",
  asf01bwing: "b",
  mg100starfortress: "Z",
  cr90corelliancorvette: "2",
  croccruiser: "5",
  ewing: "e",
  escapecraft: "X",
  fireball: "0",
  firesprayclasspatrolcraft: "f",
  g1astarfighter: "n",
  gozanticlasscruiser: "4",
  gr75mediumtransport: "1",
  hwk290lightfreighter: "h",
  ig2000: "i",
  jumpmaster5000: "p",
  kihraxzfighter: "r",
  btls8kwing: "k",
  m12lkimogilafighter: "K",
  lambdaclasst4ashuttle: "l",
  lancerclasspursuitcraft: "L",
  m3ainterceptor: "s",
  fangfighter: "M",
  quadrijettransferspacetug: "q",
  raiderclasscorvette: "3",
  scurrgh6bomber: "H",
  sheathipedeclassshuttle: "%",
  starviperclassattackplatform: "v",
  t70xwing: "w",
  tieadvancedx1: "A",
  tieadvancedv1: "R",
  tieadvprototype: "R",
  tieagaggressor: "`",
  tiesabomber: "B",
  tieddefender: "D",
  modifiedtielnfighter: "F",
  tiebainterceptor: "j",
  tielnfighter: "F",
  tiefofighter: "O",
  tieininterceptor: "I",
  tiephphantom: "P",
  tiecapunisher: "N",
  tierbheavy: "J",
  tiereaper: "V",
  tiesffighter: "S",
  tievnsilencer: "$",
  tieskstriker: "T",
  upsilonclassshuttle: "U",
  ut60duwing: "u",
  vcx100lightfreighter: "G",
  vt49decimator: "d",
  t65xwing: "x",
  scavengedyt1300: "m",
  customizedyt1300lightfreighter: "m",
  modifiedyt1300lightfreighter: "m",
  yt2400: "o",
  yt2400lightfreighter: "o",
  yv666lightfreighter: "t",
  btla4ywing: "y",
  z95af4headhunter: "z",
  belbullab22starfighter: "[",
  vultureclassdroidfighter: "_",
  sithinfiltrator: "]",
  delta7aethersprite: "\\",
  v19torrentstarfighter: "^",
  nabooroyaln1starfighter: "<",
  hyenaclassdroidbomber: "=",
  resistancetransport: ">",
  resistancetransportpod: "?",
  nantexclassstarfighter: ";",
  btlbywing: ":",
  xiclasslightshuttle: "Q",
  laatigunship: "/",
  hmpdroidgunship: ".",
  eta2actis: "-",
  nimbusclassvwing: ",",
  droidtrifighter: "+",
};

export const shipIcons = (name: string) => {
  if (!name) {
    return;
  }
  const value = shipMap[name.toLowerCase()];
  if (!value) {
    console.info("MISSING ICON", name);
  }
  return value;
};
