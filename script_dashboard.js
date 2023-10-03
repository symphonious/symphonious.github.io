const socket = new WebSocket('wss://symphonious.glitch.me');

const messagequeue = [];
const textElement = document.getElementById("translated_text"); 

window.addEventListener("message", (event) => {
  const msg = event.data;
  const words = msg.split(" ");
  socket.send("electron"+"-"+msg);
  async function showAllWords() {
    for (let i = 0; i < words.length; i++) {
      textElement.textContent += words[i] + " ";
      textElement.scrollTop = textElement.scrollHeight;
      await new Promise((resolve) => setTimeout(resolve, 300)); 
    }
  }

  messagequeue.push(msg);

  if (messagequeue.length === 1) {
    showAllWords().then(() => {
      messagequeue.shift(); 
      if (messagequeue.length > 0) {
        showNextMessage();
      }
    });
  }
});

function showNextMessage() {
  const nextMessage = messagequeue[0];
  const nextWords = nextMessage.split(" ");

  async function showNextWords() {
    for (let i = 0; i < nextWords.length; i++) {
      textElement.textContent += nextWords[i] + " ";
      textElement.scrollTop = textElement.scrollHeight; 
      await new Promise((resolve) => setTimeout(resolve, 200)); 
    }
  }

  showNextWords().then(() => {
    messagequeue.shift(); 
    if (messagequeue.length > 0) {
      showNextMessage();
    }
  });
}












const selectLanguage_1 = document.getElementById("format1");
    selectLanguage_1.addEventListener("change", function() {
        const selectedLanguage = selectLanguage_1.value;
        console.log(`Language 1: ${selectedLanguage}`);
    });

const selectLanguage_2 = document.getElementById("format2");
    selectLanguage_2.addEventListener("change", function() {
        const selectedLanguage = selectLanguage_2.value;
        console.log(`Language 2: ${selectedLanguage}`);
    });