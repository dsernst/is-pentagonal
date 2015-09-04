module.exports = function (number) {
  var perfectSquare = (1 + Math.sqrt((24 * number) + 1)) / 6;
  return Math.floor(perfectSquare) === perfectSquare;
};
