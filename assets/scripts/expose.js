// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Accessed elements
  const hornImg = document.querySelector('img[alt="No image selected"]');
  const hornSelect = document.getElementById('horn-select');
  const hornSound = document.querySelector('audio');

  // Update horn based on selection
  hornSelect.addEventListener('change', () => {
    hornImg.src = `assets/images/${hornSelect.value}.svg`;
    hornSound.src = `assets/audio/${hornSelect.value}.mp3`;
  });

  // Accessed elements
  const volumeSlider = document.getElementById('volume');
  const volumeImg = document.querySelector('#volume-controls img');

  // Updates volume icon and audio volume based off inputs
  volumeSlider.addEventListener('input', () =>{
    let volume = volumeSlider.value;
    hornSound.value = volume / 100;

    if (volume == 0){
      volumeImg.alt = 'Mute';
      volumeImg.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeImg.alt = 'Volume low';
      volumeImg.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeImg.alt = 'Volume medium';
      volumeImg.src = 'assets/icons/volume-level-2.svg';
    } else if (volume < 33) {
      volumeImg.alt = 'Volume high';
      volumeImg.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Accessed elements
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  // Plays sound and triggers the confetti if party horn is selected
  playButton.addEventListener('click', () => {
    hornSound.play();
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti(); // Triggers the confetti
    }
  });

}