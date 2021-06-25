let age: number;
age = 12;

let username: string;
username = 'Max';

let isIt: boolean;
isIt = true;

let hobbies: string[];
hobbies = ['n1', 'n1'];

type Person = {
  name: string,
  age: number
};

let person: Person;

person = {
  name: 'max',
  age: 30
};

let people: Person[];

let course: string | number = 'this is string';
course = 6;

function addNumber(a: number, b: number): number {
  return a + b;
}

function printOut(value: any): void {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning<string>(['abc', 'bcd', 'cde'], 'def');
stringArray[0].split('b');