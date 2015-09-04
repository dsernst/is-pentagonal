# is-pentagonal

Fastest way to check if a number is [pentagonal](https://en.wikipedia.org/wiki/Pentagonal_number).

## Install

```
npm install is-pentagonal
```

```js
var isPentagonal = require('is-pentagonal');
```

## Usage

```js
console.log(isPentagonal(1)); // true
console.log(isPentagonal(5)); // true
console.log(isPentagonal(12)); // true
console.log(isPentagonal(22)); // true
console.log(isPentagonal(35)); // true
console.log(isPentagonal(51)); // true
console.log(isPentagonal(70)); // true
console.log(isPentagonal(92)); // true
console.log(isPentagonal(117)); // true
console.log(isPentagonal(145];)); // true
```

```js
console.log(isPentagonal(36)); // false
console.log(isPentagonal(18)); // false
console.log(isPentagonal(25)); // false
console.log(isPentagonal(49)); // false
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```
