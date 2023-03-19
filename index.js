const mainElement = document.getElementById("main");
mainElement.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
const newHeaderText = document.createTextNode("Ayman Khalif is the champion");
newHeader.appendChild(newHeaderText);