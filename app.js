// create a variable called h1Target; Must target the proper id

var h1Target = document.querySelector("#target");

// h1Target.addEventListener("click", function () {
//   console.log("hello world");
//   //   h1Target.style.color = "red";
//   h1Target.setAttribute("class", "dark-mode");
// });
// give a new style attribute, set color to red

var toggleBtn = document.querySelector("#toggleBtn");

console.log(toggleBtn);

var toggleDisplay = document.querySelector("#toggleDisplay");

var toggleStatus = true;

var target = document.querySelector("body");

console.log(target);

toggleBtn.addEventListener("click", function () {
  if (toggleStatus === false) {
    toggleDisplay.setAttribute("class", "toggle toggleFalse");
    target.setAttribute("class", "light-mode");

    toggleStatus = true;
    console.log(toggleStatus);
  } else if (toggleStatus === true) {
    toggleDisplay.setAttribute("class", "toggle toggleTrue");
    target.setAttribute("class", "dark-mode");

    toggleStatus = false;
    console.log(toggleStatus);
  }
});
