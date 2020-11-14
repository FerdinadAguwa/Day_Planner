var currentDay = $("#currentDay");
var dateTime = moment(); 
console.log(dateTime);
var textLocationEl = $("#textLocation").val();
var saveButton = $(".saveBtn");


// Current day of the week
$("#currentDay").append(` ${dateTime.format('dddd, MMMM Do')}`);

var currentHour = parseInt(moment().format("H"));
console.log(typeof(currentHour))

// on click the user will save the item written in the planner as well as store it in local storage
saveButton.click(function() {
    // get the key to place into local storage
    var key = $(this).closest(".row").attr("id");
  
    // get the text
    var value = $(this).parent().siblings().find(".textLocation").val();

    // save to localStorage
    localStorage.setItem(key, value)
    // console.log(localStorage)


  })


// Color blocks based on the past(grey) presesnt(red) and future(green) events!
$(`.row`).each(function(){
    var rowTime = parseInt($(this).attr("id"))

    if(rowTime < currentHour){
        $(this).addClass('past');
    }
    else if (rowTime === currentHour){
        $(this).addClass('present');
    }
    else{
        $(this).addClass('future');
    } 

});

// render the item to the dom after the user has refreshed the page

$("#9").val(localStorage.getItem("9am"));
$("#10").val(localStorage.getItem("10am"));
$("#11").val(localStorage.getItem("11am"));
$("#12").val(localStorage.getItem("12pm"));
$("#13").val(localStorage.getItem("13pm"));
$("#14").val(localStorage.getItem("14pm"));
$("#15").val(localStorage.getItem("15pm"));
$("#16").val(localStorage.getItem("16pm"));
$("#17").val(localStorage.getItem("17pm"));


