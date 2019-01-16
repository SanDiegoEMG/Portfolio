


// simple api call to return random factoid
// var mathQueryURL = "http://numbersapi.com/random/trivia";

// function mathAPI() {
//     $.ajax({
//         url: mathQueryURL,
//         method: "GET"
//     }).then(function (response) {
//         $("#moreLearning").text(response);
//     })
// }



//   //  Exercise #1  W3 js basics
//   var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//   var newP = $("<p></p>");

//   function dayTime() {
//       var d = new Date();
//       var n = d.getDay()
//       var y = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
//       document.getElementById("dayToday").innerHTML = daysOfWeek[n];
//       document.getElementById("timeNow").innerHTML = y;
//   };

//   function reset() {
//       $("#dayToday").empty();
//       $("#timeNow").empty();
//   }

//   $("#theButton").on("click", function () {
//       dayTime();
//   });

//   $("#resetButton").on("click", function () {
//       reset();
//   });
  // End exercise #1


  //  Exercise #2 W3 js basics
  function printThis() {
      window.print();
  }

  $("#print").on("click", function () {
      printThis();
  });
  // End exercise #2

  // Begin exercise #3
  var d = new Date();
  console.log(d);
  yr = d.getFullYear();
  console.log(yr);
  var mth = d.getMonth()
  console.log(mth);
  var date = d.getDate()
  console.log(date);
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var mthName = months[10];
  console.log(mthName);

  $("#dateButton").on("click", function () {
      var compDate = $("#date").text(mthName + " " + date + ", " + yr);
  });
  // End exercise #3

  // Begin Exercise #4
  $("#triangle").on("click", function (event) {
      event.preventDefault();
      var input1 = $("#num1").val().trim();
      var input2 = $("#num2").val().trim();
      var input3 = $("#num3").val().trim();
      console.log("Inputs = " + input1, input2, input3);
      var doMath = findArea(input1, input2, input3);
      console.log(doMath.toFixed(2));
      $("#here").text(doMath.toFixed(2));
  });

  function findArea(x, y, z) {
      var perimeter = (Number(x) + Number(y) + Number(z)) / 2;
      console.log("Perimeter = " + perimeter);
      var sqRoot = (Math.sqrt(perimeter * ((perimeter - x) * (perimeter - y) * (perimeter - z))));
      if (isNaN(sqRoot) || sqRoot === 0) {
          $("#here").text("Not a valid triangle");
      }
      else return (Math.sqrt(perimeter * ((perimeter - x) * (perimeter - y) * (perimeter - z))));
  };

  function resetform() {
      document.getElementById("myform").reset();
  }

  $("#reset-triangle").on("click", function (event) {
      resetForm();
      $("#here").empty();
  });
  //End exercise #4 

  //Begin exercise #5 
  var letterArr = [];
  $("#get-letters").on("click", function (event) {
      event.preventDefault();
      var word = $("#word").val().trim();
      console.log(word);
      document.getElementById("word-here").innerHTML = (word);
      letterArr = [];

      for (var i = 0; i < word.length; i++) {
          letterArr.push(word.charAt(i));
          console.log(letterArr)
      }
  });

  $("#rearrange").on("click", function (event) {
      event.preventDefault();
      console.log("clicked!")
      var letter = letterArr.shift();
      letterArr.push(letter);
      console.log(letterArr);
      document.getElementById("word-here").innerHTML = (letterArr.join(""));
  });
  //  End Exercise #5


  //  Begin exercise #8
  function compNumGenerate() {
      return Math.floor(Math.random() * 9) + 1;  // min and max included
  }

  $("#match").on("click", function (event) {
      event.preventDefault();
      $("#comp-num").text("?");
      $("#person-num").text("?");
      $("#show-result").empty().append("Click button and then type a number between 1-9");
      var compNum = compNumGenerate();
      console.log(compNum);
      
      var didTheUserTry = false;

      document.onkeyup = function (event) {
          var userGuess = event.key;
          $("#match").text("Play Again");
          if (userGuess >= 1 && userGuess <= 9 && !didTheUserTry) {
              $("#person-num").text(userGuess);
              $("#comp-num").text(compNum);
              if (userGuess == compNum) {
                  $("#show-result").prepend("<p><strong> 'WooHoo! You guessed correctly! Maybe play the lottery...'</strong></p>");
                  didTheUserTry = true;
              } else {
                  $("#show-result").prepend("<p><strong>'Not your lucky day.'</strong></p>");
                  didTheUserTry = true;
              }
          } else if (!didTheUserTry) {
              $("#person-num").text("Not a valid choice. Choose a number 1-9.");
          }
      }
  });

  // End exercise #8


  //  Begin API RESTful countries exploration
  var queryURL = "https://restcountries.eu/rest/v2/name/";


  $("#country-api-button").on("click", function (event) {
      event.preventDefault();
      var ctryName = $("#country-name").val().trim();
      $.ajax({
          url: (queryURL + ctryName),
          Method: "GET"
      }).then(function (response) {
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
          var flag = $("<img height='95px' width='141px'>").attr("src", flagURL).attr("id", "border-box");
          $("#country-facts").append(displayDiv, pOne, pTwo, pThree, flag);
      });
  });

  function learningMore(x, y) {
      var math = document.getElementById('moreLearning');
      math.innerHTML = (x * y);
  };

  var mathQueryURL = "http://numbersapi.com/random/trivia";


  function mathAPI() {
      $.ajax({
          url: mathQueryURL,
          method: "GET"
      }).then(function (response) {
          console.log(response);
          $("#moreLearning").text(response);
      })
  }

