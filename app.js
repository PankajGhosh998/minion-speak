var btnTransalte = document.querySelector("#btn-translate");

var textArea = document.querySelector("#textArea");
var outputArea = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error)
{
  console.log("error occured",error);
  alert("something wrong with the server ! try again after sometime")
}

function getTranslateURL(text)
{
  return serverURL+"?"+"text="+text;
}
btnTransalte.addEventListener("click", function clickHandler() {
  var inputText = textArea.value;

  fetch(getTranslateURL(inputText))
  .then(Response => Response.json())
  .then(json => console.log(json.contents.translated))
  .catch(errorHandler)
});
