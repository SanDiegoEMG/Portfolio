$(document).ready(function () {

    var newP = $("<p></p>");

    //  Exercise #1  W3 js basics
    // buttons= resetButton / theButton 
    // #dayToday = place to show

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    var d = new Date();
    console.log("d = " + d);
    yr = d.getFullYear();
    console.log(yr);
    var mth = d.getMonth()
    console.log(mth);
    var date = d.getDate()
    console.log(date);
    var mthName = months[mth];
    console.log(mthName);
 
  
   function getDate() {
        var compDate = $("#date").text(mthName + " " + date + ", " + yr);
        document.getElementById("timeNow").innerHTML = compDate;
    };

    function dayTime() {
        var d = new Date();
        var n = d.getDay()
        var y = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
        console.log("y = " + y);
        document.getElementById("dayToday").innerHTML = daysOfWeek[n];
        $("#timeNow").text(y);
        // document.getElementById("timeNow").innerHTML = y;
    };

    function reset() {
        $("#dayToday").empty();
        $("#timeNow").empty();
        $("#date").empty();
    }

    $("#theButton").on("click", function () {
        dayTime();
        getDate();
    });

    $("#resetButton").on("click", function () {
        reset();
    });

    // End row1-1



    // simple api call to return random factoid
    var mathQueryURL = "http://numbersapi.com/random/trivia";

    $("#mathFun").on("click", function () {
        $.ajax({
            url: mathQueryURL,
            method: "GET"
        }).then(function (response) {
            $("#moreLearning").text(response);
        })
    })
    // End row1-2



    //  Exercise #2 W3 js basics
    $("#print").on("click", function () {
        printThis()
    });

    function printThis() {
        window.print();
    }
    // End row1-3





});