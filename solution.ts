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


