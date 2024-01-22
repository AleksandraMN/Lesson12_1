'use strict';

const array = [];

const getRandomNum = () => {
  const min = Math.ceil(0);
  const max = Math.floor(10);
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

const getArray = (arr) => {
  const num = getRandomNum();
  arr.push(num);
  const sum = arr.reduce((acc, item, array) => acc + item, 0);
  if (sum < 50) {
    getArray(arr);
  }
  return arr;
};

console.log(getArray(array));
