console.log('JavaScript is working!')
const welcome = document.querySelector(".name");

function changeColor(color) {
   welcome.style.color = color;
}
const name = document.querySelector(".name");
const btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        name.style.color = "blue";
 });

 btn.addEventListener("click", changeColor);
      function changeColor() {
        name.style.color = "blue";
}
