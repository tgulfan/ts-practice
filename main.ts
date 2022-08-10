let id = 5;

id = 7;

let productIds: number[] = [];

// Tuple
let person: [number, string, boolean] = [1, 'Tim', true];

// Tuple array
let employee: [string, boolean][];

employee = [
  ['foo', true],
  ['bar', false],
  ['baz', false],
];

// Union
let offer: string | number | boolean = 2;
offer = '2';
offer = false;

// Objects
type User = {
  id: number | string;
  name: string;
};

const user: User = {
  id: '500',
  name: 'Foo Bar',
};

// Type assertion
let cid: any = 1;
let customerId = <number>cid;
customerId = 6;

// Functions
const sum = (x: number, y: number): number => {
  return x + y;
};

const myMessage = (messasge: number | string): void => {
  console.log(messasge);
};

myMessage('true');

// Interface
interface memberInterface {
  id: number;
  name: string;
  paid: boolean;
  agr?: string;
}

const memberData: memberInterface = {
  id: 39138281,
  name: 'Tim Tam',
  paid: false,
};

// Classes
interface PlayerInterface {
  jerseyNo: number;
  jerseyName: string;
  playsFor(): string;
}

class basketballPlayer implements PlayerInterface {
  jerseyNo: number;
  jerseyName: string;

  constructor(jerseyNo: number, jerseyName: string) {
    this.jerseyNo = jerseyNo;
    this.jerseyName = jerseyName;
  }

  playsFor() {
    return `${this.jerseyName} plays basketball`;
  }
}

const sc30 = new basketballPlayer(30, 'Curry');

console.log(sc30.playsFor());

// Subclass
class Position extends basketballPlayer {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const kb24 = new Position(24, 'Kobe', 'SG');
console.log(kb24.position);

// Generics
const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

let numArray = getArray<number>([1, 2, 3, 4]);

numArray.push(1);
