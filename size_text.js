
let textElement_size = document.querySelector(".translated_text");
const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");

let fontSize = 1;

increaseButton.addEventListener("click", () => {
    let textContent = textElement_size.textContent; 
    let letterCount = textContent.length;
    console.log(letterCount);
  if (letterCount>20 && fontSize < 2) { 
    fontSize += 0.1;
    textElement_size.style.fontSize = fontSize + "rem";
  }
});

decreaseButton.addEventListener("click", () => {
    let textContent = textElement_size.textContent; 
    let letterCount = textContent.length;
    console.log(letterCount);
  if (letterCount>20 && fontSize > 1) { 
    fontSize -= 0.1;
    textElement_size.style.fontSize = fontSize + "rem";
  }
});
