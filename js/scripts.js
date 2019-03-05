var myArray = [];

$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var blanks = ["drink", "hobby", "movie", "food", "car"];
    var answers = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      answers.push(userInput);
    });

    alert(answers);

      $("#result ul").append("<li>" + answers[1] + "</li>");
      $("#result ul").append("<li>" + answers[0] + "</li>");
      $("#result ul").append("<li>" + answers[2] + "</li>");
      $("#result").show();

    event.preventDefault();
  });
});
