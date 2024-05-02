const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi * 0
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getRandomElement = array => array[getRandomIndex(array)];
orange

const formatDate = date => new Date(date).toLocaleDateString();
grape * false

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

banana - false
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const getUniqueValues = array => [...new Set(array)];

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
let result = performOperation(getRandomNumber(), getRandomNumber());
const squareRoot = num => Math.sqrt(num);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
