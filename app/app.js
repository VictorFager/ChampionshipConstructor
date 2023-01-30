// Imports
import { components } from './modules/components.js';

// DOM nodes

const dMain = document.getElementById('main-content');
const dHomeView = document.getElementById('home-view');
const dCreateView = document.getElementById('create-view');
const dChampionshipView = document.getElementById('championship-view');

const dCreateButton = document.getElementById('create-button');
const dBackButton = document.getElementById('back-button');
const dChangeSettingsButton = document.getElementById('change-settings-button');
const dPauseButton = document.getElementById('pause-button');
const dAddPlayerButton = document.getElementById('add-player-button');
const dRemoveButtons = document.getElementsByClassName('remove-button');

const dCreateForm = document.getElementById('create-form');
const dPlayerInputList = document.getElementById('player-input-list');



// Event Listeners

dCreateButton.addEventListener('click', (event) => {
  updateView('create');
  event.target.blur(); // removes focus
});

dBackButton.addEventListener('click', () => {
  updateView('home');
});

dCreateForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateView('championship')
});

dChangeSettingsButton.addEventListener('click', () => {
  updateView('create');
});

dPauseButton.addEventListener('click', () => {
  updateView('home');
});

dAddPlayerButton.addEventListener('click', () => {
  addPlayer();
});


// Functions

function updateView(newView) {
  switch (newView) {
    case 'home':
      dHomeView.classList.remove('hidden');
      dCreateView.classList.add('hidden');
      dChampionshipView.classList.add('hidden');
      break;
    case 'create':
      dHomeView.classList.add('hidden');
      dCreateView.classList.remove('hidden');
      dChampionshipView.classList.add('hidden');
      break;
    case 'championship':
      setupChampionshipView();
      dHomeView.classList.add('hidden');
      dCreateView.classList.add('hidden');
      dChampionshipView.classList.remove('hidden');
      break;
  }
}

function setupChampionshipView() {
  let formData = new FormData(dCreateForm);
  let pInfo = document.createElement('p');
  pInfo.textContent = formData.get('ch-type') + " | " + formData.get('ch-name') + " | " + formData.getAll('player');
  dChampionshipView.appendChild(pInfo);
}

function addPlayer() {
  const playerInputElement = components.createPlayerInputElement();
  dPlayerInputList.appendChild(playerInputElement);
}