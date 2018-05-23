window.addEventListener('load', main);

function main() {
  const selectInput = document.querySelector('#selectInput');
  const selectInputVisual = document.querySelector('#selectInputVisual');
  const selectDropdown = document.querySelector('#selectDropdown');
  const selectOtions = document.querySelectorAll('.options');

  function dropDownHandler() {
    selectDropdown.classList.toggle('active');
    selectInputVisual.classList.toggle('active');
  }

  function choiseOptions() {
    this.classList.add('active');
    selectInput.value = this.dataset.option;
  }

  selectInputVisual.addEventListener('click', e => {
    e.stopPropagation();
    dropDownHandler();
  });

  document.addEventListener('click', e => {
    const target = e.target;
    const isInput = selectInputVisual == target || selectInputVisual.contains(target);
    const isDropdown = selectDropdown == target || target.classList.contains('options');
    const isActive = selectDropdown.classList.contains('active');
    if(isActive && !isDropdown && !isInput) {
      dropDownHandler();
    }
  });

  selectOtions.forEach(el => el.addEventListener('click', choiseOptions));
}