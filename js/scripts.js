$(document).ready(function() {

$("form").submit(function(event) {

  var items = ["item1", "item2", "item3", "item4", "item5"];

  var userInputs = [];

  items.forEach(function(item) {
    userInputs.push($('#' + item).val().toUpperCase());
    // userInputs.toUpperCase();
    userInputs.sort();
  });


  console.log(userInputs);

  event.preventDefault();
  });
});
