// DOM nodes

const dMain = document.getElementById('main-content');
const dHomeView = document.getElementById('home-view');
const dCreateView = document.getElementById('create-view');
const dChampionshipView = document.getElementById('championship-view');

const dCreateButton = document.getElementById('create-button');
const dBackButton = document.getElementById('back-button');
const dChangeSettingsButton = document.getElementById('change-settings-button');
const dPauseButton = document.getElementById('pause-button');

const dCreateForm = document.getElementById('create-form');


// Event Listeners

dCreateButton.addEventListener('click', (event) => {
  updateView('create');
  event.target.blur(); // removes focus
});

dBackButton.addEventListener('click', () => {
  updateView('home');
})

dCreateForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateView('championship')
})

dChangeSettingsButton.addEventListener('click', () => {
  updateView('create');
})

dPauseButton.addEventListener('click', () => {
  updateView('home');
})


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
  console.log(formData);
}