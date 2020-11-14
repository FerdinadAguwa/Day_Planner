var currentDay = $("#currentDay");
var dateTime = moment(); 
// currentTime
console.log(dateTime);
var textLocationEl = $("#textLocation");
var saveButton = $(".saveBtn");
textLocationEl=""

// Current day of the week
$("#currentDay").append(` ${dateTime.format('dddd, MMMM Do')}`);

var currentHour = parseInt(moment().format("h"));
console.log(typeof(currentHour))


saveButton.click(function() {
    var key = $(this).closest(".row").attr("id");
    console.log(key);
  
    // get the text
    var value =$("textarea").attr("id").value;
    console.log(value)
  
    // save to localStorage
    localStorage.setItem(key, value)
    console.log(localStorage)
  
  })


// Color blocks based on the past(grey) presesnt(red) and future(green) events!
$(`.row`).each(function(){
    var rowTime = parseInt($(this).attr("id"))
    // console.log(rowTime)

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

