// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = `<option value="select" disabled selected>Select Voice:</option>`; 

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  populateVoiceList();


  const button = document.querySelector('button');
  const text = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img[alt="Smiling face"]');
  const openImg = 'assets/images/smiling-open.png'; 
  const closedImg = 'assets/images/smiling.png'; 


  button.addEventListener('click', () => {
    if (voiceSelect.value !== 'select' && text.value !== '') {
      const utterThis = new SpeechSynthesisUtterance(text.value);
      utterThis.voice = voices.find(voice => voice.name === voiceSelect.value)

      utterThis.onstart = () => {
        faceImg.src = openImg;
      }

      utterThis.onend = () => {
        faceImg.src = closedImg;
      };

      synth.speak(utterThis);
    }
  });
  
}