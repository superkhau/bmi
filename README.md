# bmi

A BMI (body mass index) calculator.

## Installation

```
npm install --save @superkhau/bmi
```

## API

- *bmi.metric(centimetres, kilograms[, precision])*
- *bmi.imperial(feet, inches, pounds[, precision])*

## Usage

Metric:

```
var bmi = require('@superkhau/bmi');
var result = bmi.metric(170, 72);
console.log(result); // 24.9
```

Imperial:

```
var bmi = require('@superkhau/bmi');
var result = bmi.imperial(5, 0, 150);
console.log(result); // 29.3
```

> Notice the [precision](#precision) defaults to 1 decimal place.

## Precision

You may specify a precision in the last argument of either function.

Metric:

```
var result = bmi.metric(72, 170, 2);
console.log(result); // 24.91
```

Imperial:

```
var result = bmi.metric(5, 0, 150, 2);
console.log(result); // 29.28
```
