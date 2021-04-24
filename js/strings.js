const stringA = 'aababba';
const stringB = 'abbaabcd';

const findLongString = (strA, strB) => {
  if (typeof strB !== 'string' || typeof strA !== 'string') {
    throw new Error('You should pass only string type');
  }

  let newString = '';
  let comparisonString = '';
  let result = '';

  for (let i = 0; i < strA.length; i++) {
    comparisonString = '';
    newString = strA.slice(i, strA.length);

    for (let j = 0; j < newString.length; j++) {
      comparisonString += newString[j];
  
      if (strB.includes(comparisonString)) {
        if (result.length < comparisonString.length) {
          result = comparisonString;
        }
      }
    }
  }

  return result;
};

console.log('Creative task-3');
console.log('String A - ' + stringA);
console.log('String B - ' + stringB);

console.log('Result - ' + findLongString(stringA, stringB));