var math = require('mathjs');

exports.imperial = imperial;
exports.metric = metric;

function imperial(feet, inches, weight, precision) {
  var height = feet + (inches / 12);
  var bmi = (weight * 4.88) / Math.pow(height, 2);
  return round(bmi, precision);
}

function metric(weight, height, precision) {
  height /= 100;
  var bmi = weight / Math.pow(height, 2);
  return round(bmi, precision);
}

function round(bmi, precision) {
  if (precision !== 0)
    precision = precision || 1;
  return math.round(bmi, precision);
}
