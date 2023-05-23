document.addEventListener('DOMContentLoaded', () => {
  const createSelectBtn = document.getElementById('create-select');
  const createForm = document.getElementById('create-form');
  const createInventoryBtn = document.getElementById('inventory');
  const inventoryForm = document.getElementById('inventory-form');
  const createCharacterBtn = document.getElementById('character-sheet');
  const characterForm = document.getElementById('character-form');

  createSelectBtn.addEventListener('click', () => {
    hideAllForms();
    createForm.style.display = 'block';
  });

  createInventoryBtn.addEventListener('click', () => {
    hideAllForms();
    inventoryForm.style.display = 'block';
  });

  createCharacterBtn.addEventListener('click', () => {
    hideAllForms();
    characterForm.style.display = 'block';
  });

  function hideAllForms() {
    createForm.style.display = 'none';
    inventoryForm.style.display = 'none';
    characterForm.style.display = 'none';
  }
});
