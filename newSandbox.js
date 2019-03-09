$(document).ready(function() {
  var newP = $("<p></p>");

  //  Row 1-1
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  function dayTime() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    var n = d.getDay();
    // var y = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
    document.getElementById("dayToday").innerHTML = daysOfWeek[n];
    document.getElementById("timeNow").innerHTML = strTime;
  }

  function reset() {
    $("#dayToday").empty();
    $("#timeNow").empty();
  }

  $("#theButton").on("click", function() {
    dayTime();
  });

  $("#resetButton").on("click", function() {
    reset();
  });
  // End row1-1

  // Row 1-2
  // simple api call to return random factoid
  var mathQueryURL = "http://numbersapi.com/random/trivia";

  $("#mathFun").on("click", function() {
    $.ajax({
      url: mathQueryURL,
      method: "GET"
    }).then(function(response) {
      $("#moreLearning").text(response);
    });
  });
  // End row1-2

  //  Row 1-3
  $("#print").on("click", function() {
    printThis();
  });

  function printThis() {
    window.print();
  }
  // End row1-3

  // Row2-1
  //  Begin API RESTful countries exploration
  var queryURL = "https://restcountries.eu/rest/v2/name/";

  $("#country-api-button").on("click", function(event) {
    event.preventDefault();
    var ctryName = $("#country-name")
      .val()
      .trim();
    $.ajax({
      url: queryURL + ctryName,
      Method: "GET"
    }).then(function(response) {
      console.log(response);
      $("#country-facts").empty();
      var ctryCapital = response[0].capital;
      var displayDiv = $("<div class='country-info'></div>");
      var pOne = $("<p>").text("Capital City: " + ctryCapital);
      var ctryPop = response[0].population;
      var commas = ctryPop.toLocaleString();
      var pTwo = $("<p>.").text("Population: " + commas);
      var region = response[0].subregion;
      var pThree = $("<p>").text("World region: " + region);
      var flagURL = response[0].flag;
      var flag = $("<img height='95px' width='141px'>")
        .attr("src", flagURL)
        .attr("id", "border-box");
      $("#country-facts").append(displayDiv, pOne, pTwo, pThree, flag);
    });
  });
  //End row2-1

  // Row2-2
  function compNumGenerate() {
    return Math.floor(Math.random() * 9) + 1; // min and max included
  }

  $("#match").on("click", function(event) {
    event.preventDefault();
    $("#comp-num").text("?");
    $("#person-num").text("?");
    $("#show-result")
      .empty()
      .append("Click button and then type a number between 1-9");
    var compNum = compNumGenerate();
    console.log(compNum);

    var didTheUserTry = false;

    document.onkeyup = function(event) {
      var userGuess = event.key;
      $("#match").text("Play Again");
      if (userGuess >= 1 && userGuess <= 9 && !didTheUserTry) {
        $("#person-num").text(userGuess);
        $("#comp-num").text(compNum);
        if (userGuess == compNum) {
          $("#show-result").prepend(
            "<p><strong> 'WooHoo! You guessed correctly! Maybe play the lottery...'</strong></p>"
          );
          didTheUserTry = true;
        } else {
          $("#show-result").prepend(
            "<p><strong>'Not your lucky day.'</strong></p>"
          );
          didTheUserTry = true;
        }
      } else if (!didTheUserTry) {
        $("#person-num").text("Not a valid choice. Choose a number 1-9.");
      }
    };
  });
  // End row2-2

  //Start Row2-3
  var letterArr = [];
  $("#get-letters").on("click", function(event) {
    event.preventDefault();
    var word = $("#word")
      .val()
      .trim();
    console.log(word);
    document.getElementById("word-here").innerHTML = word;
    letterArr = [];

    for (var i = 0; i < word.length; i++) {
      letterArr.push(word.charAt(i));
      console.log(letterArr);
    }
  });

  $("#rearrange").on("click", function(event) {
    event.preventDefault();
    console.log("clicked!");
    var letter = letterArr.shift();
    letterArr.push(letter);
    console.log(letterArr);
    document.getElementById("word-here").innerHTML = letterArr.join("");
  });
  //  End row2-3
});
