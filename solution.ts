// Problem 1
function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value * 10;
  }
  return !value;
}

console.log(formatValue('hello')); // HELLO
console.log(formatValue(5)); // 50
console.log(formatValue(true)); // false




// Problem 2
function getLength(value: string | any[]): number {
  if (typeof value === 'string') {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

console.log(getLength('typescript')); // 10
console.log(getLength([10, 20, 30, 40])); // 4




// Problem 3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person('Sejan Miah', 30);
console.log(person1.getDetails()); // Name: Sejan Miah, Age: 30
const person2 = new Person('Siam', 25);
console.log(person2.getDetails()); // Name: Siam, Age: 25







// Problem 4
interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter(item => item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
// Output: [ { title: 'Book A', rating: 4.5 }, { title: 'Book C', rating: 5.0 } ]