var weight = parseInt(prompt("What is your weight in pounds?"));

var height = parseInt(prompt("What is your height in inches"));

var weightConversion = function(weight) {
  return weight * 0.45;
};

var heightConversion = function(height) {
  return height * 0.025;
};

var squareAnswer = function(value) {
  return value * value;
};

var finalBMI = function(weightvalue, heightvalue) {
  return weightvalue / heightvalue;
};

var displayBMI = function(calculatedBMI) {
  alert("Your calculated BMI is " + calculatedBMI + ".");
};

var calculatedBMI = finalBMI(weightConversion(weight), squareAnswer(heightConversion(height)));

displayBMI(calculatedBMI);
