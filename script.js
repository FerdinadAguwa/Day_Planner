var currentDay = $("#currentDay");
var dateTime = moment(); 
// currentTime
console.log(dateTime);



// Current day of the week
$("#currentDay").append(` ${dateTime.format('dddd, MMMM Do')}`);

var currentHour = parseInt(moment().format("h"));
console.log(typeof(currentHour))



$(`.row`).each(function(){
    var rowTime = parseInt($(this).attr("id"))
    console.log(rowTime)

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
