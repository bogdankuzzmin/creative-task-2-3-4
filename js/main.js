const checkboxes = document.querySelectorAll('.check__input:not(.check__input--lock)');
const lockChecbox = document.querySelector('.check__input--lock');
const boxes = document.querySelectorAll('.box');

lockChecbox.addEventListener('change', () => {
  if (lockChecbox.checked) {
    checkboxes.forEach((checbox) => checbox.disabled = true);

  } else {
    checkboxes.forEach((checbox) => checbox.disabled = false);
  }
});

checkboxes.forEach((checkbox, index) => {
  if (checkbox.checked) {
    boxes[index].classList.add('box--active');
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      boxes[index].classList.add('box--active');
    } else {
      boxes[index].classList.remove('box--active');
    }
  });
});