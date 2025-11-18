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










// Problem 5
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));
// Output: [ { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true }, { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true } ]






// Problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

console.log(printBookDetails(myBook));
// Output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes





/ Problem 7
function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];

  for (const item of arr1) {
    if (!result.includes(item)) result.push(item);
  }

  for (const item of arr2) {
    if (!result.includes(item)) result.push(item);
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2)); // [1, 2, 3, 4, 5, 6, 7]


// Problem 8
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;
    const finalPrice = product.discount
      ? basePrice - (basePrice * product.discount) / 100
      : basePrice;
    return total + finalPrice;
  }, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products)); // 145

