var btnTransalte = document.querySelector("#btn-translate");

var textArea = document.querySelector("#textArea");
var outputArea = document.querySelector("#output");
var serverURL = "https://minion-server.pankajghosh998.repl.co/translate/minion.json";



function getTranslateURL(text)
{
  return serverURL+"?"+"text="+text;
}
btnTransalte.addEventListener("click", function clickHandler() {
  var inputText = textArea.value;

  fetch(getTranslateURL(inputText))
  .then(Response => Response.json())
  .then(json => console.log(json.contents.translated))

});
