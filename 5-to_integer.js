#!/usr/bin/node
const num = process.argv[2];
if (num === undefined){
  console.log('Not a number');
} else {
    const number = parseInt(num, 10);
}

if (isNaN(number)) {
    console.log('Not a number');
} else {
    console.log('My number: ' + number);
}