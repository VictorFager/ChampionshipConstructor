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
    listItem.appendChild(textInput);
    listItem.appendChild(removeButton);
    return listItem;
  }
}

