"use strict";
let id = 5;
id = 7;
let productIds = [];
// Tuple
let person = [1, 'Tim', true];
// Tuple array
let employee;
employee = [
    ['foo', true],
    ['bar', false],
    ['baz', false],
];
// Union
let offer = 2;
offer = '2';
offer = false;
const user = {
    id: '500',
    name: 'Foo Bar',
};
// Type assertion
let cid = 1;
let customerId = cid;
customerId = 6;
// Functions
const sum = (x, y) => {
    return x + y;
};
const myMessage = (messasge) => {
    console.log(messasge);
};
myMessage('true');
const memberData = {
    id: 39138281,
    name: 'Tim Tam',
    paid: false,
};
class basketballPlayer {
    constructor(jerseyNo, jerseyName) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const kb24 = new Position(24, 'Kobe', 'SG');
console.log(kb24.position);
// Generics
const getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 2, 3, 4]);
numArray.push(1);
