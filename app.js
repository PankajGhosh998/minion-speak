var btnTransalte = document.querySelector("#btn-translate");

var textArea = document.querySelector("#textArea");


btnTransalte.addEventListener("click", function clickHandler() {
  console.log("clicked");
  console.log(textArea.value);
});

