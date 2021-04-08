console.log("This is console");

var toggle = document.getElementById("toggleBar");
var aside = document.getElementById("aside");
toggle.addEventListener("click", function () {
    // aside.style.display = "none";

    console.log("you clicked toggle");
    if (aside.style.display === "grid") {
        aside.style.display += "none";
      } else {
        aside.style.display = "grid";
      }
})