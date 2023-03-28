const checkboxes = document.querySelectorAll('.check');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const parentDiv = checkbox.closest('.add_ons');
    if (checkbox.checked) {
      parentDiv.classList.add('bg-Magnolia', 'border-PurplishBlue');
    } else {
      parentDiv.classList.remove('bg-Magnolia', 'border-PurplishBlue');
    }
  });
});