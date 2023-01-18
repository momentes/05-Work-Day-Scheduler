
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(function() {
  var currentTime = dayjs().format('D MMMM YYYY h:mm:ss A');
  var currentDay = days[dayjs().day()];
  $("#currentDay").text(`${currentDay}, ${currentTime}`);
}, 1000); 


// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });



function timeDifference() {
  var currentTime = dayjs().hour();
  $(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    var hour = parseInt(timeBlock.split("-")[1]);
    if (currentTime < hour) {
      $(this).addClass("future");
    } else if (currentTime > hour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  });
}


$(".saveBtn").on("click", function() {
  var textareaValue = $(this).siblings(".description").val();
  var idStorage = $(this).parent().attr("id");
  localStorage.setItem(idStorage, textareaValue)
})


const workHours = ["hour-9", "hour-10", "hour-11"];

workHours.forEach(workHours => {
  $(`#${workHours} .description`).val(localStorage.getItem(workHours));
  timeDifference()
});