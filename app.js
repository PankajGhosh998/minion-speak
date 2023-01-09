var btnTransalte = document.querySelector("#btn-translate");

var textArea = document.querySelector("#textArea");
var outputArea = document.querySelector("#output");

btnTransalte.addEventListener("click", function clickHandler() {
  console.log("clicked");
  console.log(textArea.value);

  outputArea.innerText = "banana " + textArea.value;
});
