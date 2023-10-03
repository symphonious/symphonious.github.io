function redirectToPage(url) {
    window.location.href = url;
  }
  
  const progressCountElements = document.querySelectorAll('.progress-count');
  
  
  
  
  const backButton = document.getElementById("backButton");
      const nextButton = document.getElementById("nextButton");
      const steps = document.querySelectorAll(".step-wizard-item");
      const blocks = document.querySelectorAll(".dinamic");
  
      let currentStepIndex = 0;
  
      let currentBlock = 0; 
  
      for (let i = 1; i < blocks.length; i++) {
          blocks[i].style.display = "none";
      }
  
      function showBlock(index) {
          blocks[currentBlock].style.display = "none"; 
          blocks[index].style.display = "block"; 
          currentBlock = index; 
      }
  
      backButton.addEventListener("click", () => {
        if (currentStepIndex > 0) {
          steps[currentStepIndex].classList.remove("current-item");
          currentStepIndex--;
          steps[currentStepIndex].classList.add("current-item");
        }
        if (currentBlock > 0) {
          showBlock(currentBlock - 1);
      }
      });
  
  
  
      nextButton.addEventListener("click", () => {
        
        const selectElement_1 = document.getElementById("format1");
        const language_1 = selectElement_1.value;
        
        const selectElement_2 = document.getElementById("format2");
        const language_2 = selectElement_2.value;
        
        
        if (currentStepIndex < steps.length - 1) {
          if (currentBlock==0  || currentBlock==1 && language_1!="language 1" && language_2!="language 2")
            {
              steps[currentStepIndex].classList.remove("current-item");
              currentStepIndex++;
              steps[currentStepIndex].classList.add("current-item");
            }
          
        }
        if (currentBlock < blocks.length - 1) {
          if (currentBlock==0  || currentBlock==1 && language_1!="language 1" && language_2!="language 2")
            {
              showBlock(currentBlock + 1);
            }else{
                const paragraphmessage = document.getElementById("language_no_selected");
                paragraphmessage.textContent = "Please, select the languages";
            }
          if (currentBlock==2)
            {
              const paragraphmessage = document.getElementById("language_no_selected");
              paragraphmessage.textContent = "";
              console.log("save languages");
              window.parent.postMessage(language_1+"_"+language_2, "*");
            }
          
      }
      });
  
     
  
  
  
  
  
  
  
  document.getElementById('check').addEventListener('change', function() {
      var bodyWidth = window.innerWidth;
      var card01 = document.querySelector('.card-01');
      var container = document.querySelector('.card-02');
      if (container && bodyWidth<=1100) {
          container.style.display = this.checked ? 'none' : 'flex';
          card01.style.height = this.checked ? '100vh' : '60px';
      }
  });
  
  
  function checkWindowSize() {
      var bodyWidth = window.innerWidth;
      var checkbox = document.getElementById('check'); 
      var card01 = document.querySelector('.card-01');
      var container = document.querySelector('.card-02');
      if (bodyWidth > 1100) {
          container.style.display = 'flex';
          card01.style.height = '100vh';
      }else{
          container.style.display = 'flex';
          card01.style.height = '60px'; 
          if (checkbox.checked)
          {
              card01.style.height = '100vh'; 
          }
      }
    }
  
    
    checkWindowSize();
    
    window.addEventListener("resize", checkWindowSize);