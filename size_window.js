const customStyle = document.getElementById('custom-style');

function updatePseudoElementSize() {
    const stepWizardList = document.querySelector('.card-03');
    const containerWidth = stepWizardList.offsetWidth;
    const windowWidth = window.innerWidth;
    const z=containerWidth/windowWidth;
    console.log(containerWidth);

    //const newHeight=containerWidth*0.07;
    //const newWidth=containerWidth*0.07;

    //const x=containerWidth*0.015;
    //const y=containerWidth*0.03;

    const newHeight=Math.sqrt(500*containerWidth)*0.07;
    const newWidth=Math.sqrt(500*containerWidth)*0.07;

    const x=Math.sqrt(500*containerWidth)*0.015;
    const y=Math.sqrt(500*containerWidth)*0.03;

    console.log(`newHeight: ${newHeight}, newWidth: ${newWidth}`);


  const styleText = `
    .progress-count {
        font-size: ${y*1.5}px;
    }
    .progress-count:after {
      height: ${newHeight}px;
      width: ${newWidth}px;
    }
    .progress-count:before {
        height: ${x}px;
        width: ${y}px;
      }
    .card-06{
        height: ${Math.sqrt(500*containerWidth)/12}px;
        max-width: ${Math.sqrt(500*containerWidth)/10}px;
        font-size: ${Math.sqrt(500*containerWidth)*0.06}px;
    }
    .text-title{
        font-size: ${Math.sqrt(500*containerWidth)*0.04}px;
      }
      .text-content{
        font-size: ${Math.sqrt(500*containerWidth)*0.03}px;
      }
      .text-content2{
        font-size: ${Math.sqrt(10000*containerWidth)*0.01}px;
      }
      .text-content3{
        font-size: ${Math.sqrt(1200*containerWidth)*0.02}px;
      }
  `;
  
  customStyle.textContent = styleText;
}

updatePseudoElementSize(); 

window.addEventListener('resize', updatePseudoElementSize);
