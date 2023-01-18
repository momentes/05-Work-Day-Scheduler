

// Set Day & Time //

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(function() {
  var currentTime = dayjs().format('D MMMM YYYY h:mm:ss A');
  var currentDay = days[dayjs().day()];
  $("#currentDay").text(`${currentDay}, ${currentTime}`);
}, 1000); 

// Time Block Representation // 

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

// Save to Local Storage //

$(".saveBtn").on("click", function() {
  var textareaValue = $(this).siblings(".description").val();
  var idStorage = $(this).parent().attr("id");
  localStorage.setItem(idStorage, textareaValue)
})


// Definining Work Hours //

const workHours = ["hour-9", "hour-10", "hour-11","hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17" ];

workHours.forEach(workHours => {
  $(`#${workHours} .description`).val(localStorage.getItem(workHours));
  timeDifference()
});