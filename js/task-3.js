const nameInput = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);

nameInput.addEventListener(`input`, () => {
  const inputText = nameInput.value.trim();
  if (nameInput.value === ``) {
    nameOutput.textContent = `Anonymous`;
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
