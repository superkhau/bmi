var test = require('tape');
var calculator = require('../lib/calculator');

test('calculator.metric without a precision specified should return the ' +
    'correct BMI', function(t) {
  t.plan(1);

  var expected = 24.9;
  var actual = calculator.metric(72, 170);

  t.equal(expected, actual);
});

test('calculator.metric with a precision specified should return the correct ' +
    'BMI', function(t) {
  t.plan(1);

  var expected = 24.91;
  var actual = calculator.metric(72, 170, 2);

  t.equal(expected, actual);
});
