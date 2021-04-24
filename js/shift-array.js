let array = [0, 5, 4, 9, 2, 3, 6];
const shiftNumber = 3;

const shiftArrayItems = (index) => {
  	test = array[0];

if (index === 1 || index === 0) {
  return;
}

if (index > array.length) {
	throw new Error('shift number more than array`s length');
}

for (let i = 1; i <= index - 1; i++) {
	    test = array[0];
	    array.shift(array.push(test));
	  }
};

console.log('Creative task-2');
console.log('Array: ' + array);
console.log('Shift number - ' + shiftNumber);

shiftArrayItems(shiftNumber);

console.log('Result: ' + array);
console.log('');

