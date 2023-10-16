
const changeColorButton = document.getElementById('chromaButton');
const showButtons = document.getElementById('showButtons');

const translatedText_outline = document.getElementById('translated_text');

const elements = document.querySelectorAll('.card-01, .card-02');
const elements_1 = document.querySelectorAll('.box-size');
const elements_2 = document.querySelectorAll('.translated_text, .step-wizard-list');
const elementToHide_1 = document.querySelectorAll('.card-01');
const elementToHide_2 = document.querySelectorAll('.row3_buttons, .container-size');//flex



let originalColors = []; 
let originalColors_1 = []; 
let originalColors_2 = [];

elements.forEach(element => {
  originalColors.push(getComputedStyle(element).backgroundColor);
});
elements_1.forEach(element => {
    originalColors_1.push(getComputedStyle(element).backgroundColor);
  });
elements_2.forEach(element => {
    originalColors_2.push(getComputedStyle(element).border);
  });

let greenActive = false;

function changeColors() {
   if (!greenActive) {
    translatedText_outline.style.textShadow='rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px';

    showButtons.style.display='block';
    // Change all colors to green
    elements.forEach(element => {
      element.style.backgroundColor = '#00ff00';
    });
    elements_1.forEach(element => {
        element.style.backgroundColor = '#00cf00';
      });
    elements_2.forEach(element => {
        element.style.border = '2px solid #00ff00';
      });
    elementToHide_1.forEach(element => {
        element.style.display = 'none';
      });
    elementToHide_2.forEach(element => {
        element.style.display = 'none';
      });
  }
  greenActive = !greenActive;
}

function showColors() {
    if (greenActive) {
        translatedText_outline.style.textShadow='1px 0 0 #00000000, 0 -1px 0 #00000000, 0 1px 0 #00000000, -1px 0 0 #00000000';
      // Restore the original colors
      elements.forEach((element, index) => {
        element.style.backgroundColor = originalColors[index];
      });
      elements_1.forEach((element, index) => {
          element.style.backgroundColor = originalColors_1[index];
        });
      elements_2.forEach((element, index) => {
          element.style.border = originalColors_2[index];
        });
      elementToHide_1.forEach(element => {
          element.style.display = 'block';
        });
      elementToHide_2.forEach(element => {
          element.style.display = 'flex';
        });
    } 
    greenActive = !greenActive;
    showButtons.style.display='none';
  }
  

changeColorButton.addEventListener('click', changeColors);
showButtons.addEventListener('click', showColors);
