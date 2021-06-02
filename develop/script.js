$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

let currentDay = moment().format("dddd");

let currentHour = moment().format("H");

if (currentDay !== localStorage.getItem("Day")) {
  localStorage.clear();
} else {
  $("#msg1").val(localStorage.getItem("9am"));
  $("#msg2").val(localStorage.getItem("10am"));
  $("#msg3").val(localStorage.getItem("11am"));
  $("#msg4").val(localStorage.getItem("12am"));
  $("#msg5").val(localStorage.getItem("1pm"));
  $("#msg6").val(localStorage.getItem("2pm"));
  $("#msg7").val(localStorage.getItem("3pm"));
  $("#msg8").val(localStorage.getItem("4pm"));
  $("#msg9").val(localStorage.getItem("5pm"));
}

localStorage.setItem("Day", currentDay);

$("#sub1").on("click", function () {
  var msg1 = $("#message1").val();
  localStorage.setItem("9am", msg1);
});
$("#sub2").on("click", function () {
  var msg2 = $("#message2").val();
  localStorage.setItem("10am", msg2);
});
$("#sub3").on("click", function () {
  var msg3 = $("#message3").val();
  localStorage.setItem("11am", msg3);
});
$("#sub4").on("click", function () {
  var msg4 = $("#message4").val();
  localStorage.setItem("12pm", msg4);
});
$("#sub5").on("click", function () {
  var msg5 = $("#message5").val();
  localStorage.setItem("1pm", msg5);
});
$("#sub6").on("click", function () {
  var msg6 = $("#message6").val();
  localStorage.setItem("2pm", msg6);
});
$("#sub7").on("click", function () {
  var msg7 = $("#message7").val();
  localStorage.setItem("3pm", msg7);
});
$("#sub8").on("click", function () {
  var msg8 = $("#message8").val();
  localStorage.setItem("4pm", msg8);
});
$("#sub9").on("click", function () {
  var msg9 = $("#message9").val();
  localStorage.setItem("5pm", msg9);
});

if (currentHour == 9) {
  $("#message1").css("background-color", "red");
} else if (currentHour < 9) {
  $("#message1").css("background-color", "green");
} else {
  $("#message1").css("background-color", "gray");
}

if (currentHour == 10) {
  $("#message2").css("background-color", "red");
} else if (currentHour < 10) {
  $("#message2").css("background-color", "green");
} else {
  $("#message2").css("background-color", "gray");
}

if (currentHour == 11) {
  $("#message3").css("background-color", "red");
} else if (currentHour < 11) {
  $("#message3").css("background-color", "green");
} else {
  $("#message3").css("background-color", "gray");
}

if (currentHour == 12) {
  $("#message4").css("background-color", "red");
} else if (currentHour < 12) {
  $("#message4").css("background-color", "green");
} else {
  $("#message4").css("background-color", "gray");
}

if (currentHour == 13) {
  $("#message5").css("background-color", "red");
} else if (currentHour < 13) {
  $("#message5").css("background-color", "green");
} else {
  $("#message5").css("background-color", "gray");
}

if (currentHour == 14) {
  $("#message6").css("background-color", "red");
} else if (currentHour < 14) {
  $("#message6").css("background-color", "green");
} else {
  $("#message6").css("background-color", "gray");
}

if (currentHour == 15) {
  $("#message7").css("background-color", "red");
} else if (currentHour < 15) {
  $("#message7").css("background-color", "green");
} else {
  $("#message7").css("background-color", "gray");
}

if (currentHour == 16) {
  $("#message8").css("background-color", "red");
} else if (currentHour < 16) {
  $("#message8").css("background-color", "green");
} else {
  $("#message8").css("background-color", "gray");
}

if (currentHour == 17) {
  $("#message9").css("background-color", "red");
} else if (currentHour < 17) {
  $("#message9").css("background-color", "green");
} else {
  $("#message9").css("background-color", "gray");
}
