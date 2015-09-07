var calculator = require('@superkhau/bmi-calculator');
var category = require('@superkhau/bmi-category');

exports.imperial = calculator.imperial;
exports.metric = calculator.metric;
exports.category = category.get;
