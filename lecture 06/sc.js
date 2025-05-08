const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

button1.addEventListener("click", function () {
  alert("Increase clicked");
});

button2.addEventListener("click", function () {
  alert("Decrease clicked");
});

button3.addEventListener("click", function () {
  alert("Reset clicked");
});