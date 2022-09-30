// DOM nodes

const dMain = document.getElementById('main-content');
const dCreateSection = document.getElementById('create-section');
const dHistorySection = document.getElementById('history-section');
const dCreateFormSection = document.getElementById('create-form-section');

const dCreateButton = document.getElementById('create-button');
const dBackButton = document.getElementById('back-button');


// Event Listeners

dCreateButton.addEventListener('click', (event) => {
  updateView('create');
  event.target.blur(); // removes focus
});

dBackButton.addEventListener('click', () => {
  updateView('home');
})


// Functions

function updateView(newView) {
  switch (newView) {
    case 'home':
      dCreateFormSection.classList.toggle('hidden');
      dCreateSection.classList.toggle('hidden');
      dHistorySection.classList.toggle('hidden');
      break;
    case 'create':
      dCreateSection.classList.toggle('hidden');
      dHistorySection.classList.toggle('hidden');
      dCreateFormSection.classList.toggle('hidden');
      break;
  }
}