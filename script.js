let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let errorMessage = document.getElementById("errorMessage");

function generateQR() {
  if (qrText.value.trim().length > 0) {
    errorMessage.style.display = "none";
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(qrText.value);
    imgBox.classList.add("show-img");
  } else {
    errorMessage.textContent = "Please enter the text or URL.";
    errorMessage.style.display = "block";
    imgBox.classList.remove("show-img");
  }
}

function clearFields() {
  qrText.value = "";
  errorMessage.style.display = "none";
  imgBox.classList.remove("show-img");
  qrImage.src = "";
}

function copyToClipboard() {
  if (qrText.value.trim().length > 0) {
    navigator.clipboard.writeText(qrText.value);
    alert("Text copied to clipboard!");
  } else {
    alert("Nothing to copy. Please enter some text first!");
  }
}
