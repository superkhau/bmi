var bmi = require('../../');
var test = require('tape');

test('it should return the correct bmi when given metric arguments',
    function(t) {
  t.plan(1);

  var expected = 24.9;
  var actual = bmi.metric(170, 72);

  t.equal(expected, actual);
});

test('it should return the correct bmi when given metric arguments with a ' +
    'precision specified', function(t) {
  t.plan(1);

  var expected = 24.91;
  var actual = bmi.metric(170, 72, 2);

  t.equal(expected, actual);
});

test('it should return the correct bmi when given imperial arguments',
    function(t) {
  t.plan(1);

  var expected = 29.3;
  var actual = bmi.imperial(5, 0, 150);

  t.equal(expected, actual);
});

test('it should return the correct bmi when given imperial arguments with a' +
    'precision specified', function(t) {
  t.plan(1);

  var expected = 29.28;
  var actual = bmi.imperial(5, 0, 150, 2);

  t.equal(expected, actual);
});

test('it should return the correct category for the given bmi', function(t) {
  t.plan(1);

  var expected = 'normal';
  var actual = bmi.category(24.9);

  t.equal(expected, actual);
});
