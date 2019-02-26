var myArray = [];

$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var drinkInput = $("#drink").val();
    var hobbyInput = $("#hobby").val();
    var movieInput = $("#movie").val();
    var foodInput = $("#food").val();
    var carInput = $("#car").val();

    $(".drink").text(drinkInput);
    $(".hobby").text(hobbyInput);
    $(".movie").text(movieInput);
    $(".food").text(foodInput);
    $(".car").text(carInput);

    myArray = [drinkInput, hobbyInput, movieInput, foodInput, carInput]
    alert(myArray)


    });
  });
