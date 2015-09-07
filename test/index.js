var test = require('tape');
var index = require('..');

test('index.imperial should be a function', function(t) {
  t.plan(1);

  var expected = 'function';
  var actual = typeof index.imperial;

  t.equal(expected, actual);
});

test('index.metric should be a function', function(t) {
  t.plan(1);

  var expected = 'function';
  var actual = typeof index.metric;

  t.equal(expected, actual);
});

test('index.category should be a function', function(t) {
  t.plan(1);

  var expected = 'function';
  var actual = typeof index.category;

  t.equal(expected, actual);
});
