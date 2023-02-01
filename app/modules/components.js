// Functions creating different components for the app

export const components = {

  createPlayerInputElement() {

    const listItem = document.createElement('li');

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.name = 'player';
    textInput.value = '';

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.type = 'button';
    removeButton.textContent = 'x';

    removeButton.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });

    listItem.appendChild(textInput);
    listItem.appendChild(removeButton);

    return listItem;
  },

  createHistoryListElement(championshipName) {

    const listItem = document.createElement('li');

    const historyButton = document.createElement('button');
    historyButton.type = 'button';
    historyButton.textContent = championshipName;

    listItem.appendChild(historyButton);

    return listItem;
  }
}

