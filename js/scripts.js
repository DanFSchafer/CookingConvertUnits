// This is the business (or back-end) logic:

var cup2ml = function(number1) {
  return number1 * 236.6;
};

var tbl2pint = function(number1) {
  return number1 * .02686;
};

var tea2pint = function(number1) {
  return number1 * .008952;
};

// Everything below this line is user interface (or front-end) logic:

$(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var result = cup2ml(number1);
    $("#output1").text(number1 + " cups is equal to " + result + " milliliters");
  });
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var result = tbl2pint(number1);
    $("#output2").text(number1 + " tablespoons is equal to " + result + " pints");
  });
  $("form#mult").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mult1").val());
    var result = tea2pint(number1);
    $("#output3").text(number1 + " teaspoons is equal to " + result + " pints");
  });
});
