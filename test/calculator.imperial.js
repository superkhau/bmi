var test = require('tape');
var calculator = require('../lib/calculator');

test('calculator.imperial without a precision specified should return the ' +
    'correct BMI', function(t) {
  t.plan(1);

  var expected = 29.3;
  var actual = calculator.imperial(5, 0, 150);

  t.equal(expected, actual);
});

test('calculator.imperial with a precision specified should return the ' +
    'correct BMI', function(t) {
  t.plan(1);

  var expected = 29.28;
  var actual = calculator.imperial(5, 0, 150, 2);

  t.equal(expected, actual);
});
