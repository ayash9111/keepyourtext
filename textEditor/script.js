function saveTextAsFile(textToWrite, fileNameToSaveAs) {
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}
const numberofCharacters = document.querySelector("#numberofCharacters");
numberofCharacters.addEventListener("click", () => {
  let noc = document.querySelector("#textArea").value.length;
  if (noc == 0) {
    alert("Please Write Something First.");
  } else {
    alert(noc);
  }
});
const numberofWords = document.querySelector("#numberofWords");
numberofWords.addEventListener("click", () => {
  let now = document.querySelector("#textArea").value;
  if (now == 0) {
    alert("Please Write Something First.");
  } else {
    now = now.match(/\w+/g);
    now = now.length;
    alert("The Number Of Characters in your document are: " + now);
  }
});
onbeforeunload = function () {
  return "Your Changes may Not Be saved If You leave The Site";
};
