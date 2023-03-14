const form1 = document.getElementsByClassName('task5__form')[0];
const name = document.getElementsByClassName('task5__input')[0];
const list = document.getElementsByClassName('task5__list')[0];

form1.button.onclick = (event) => {
  event.preventDefault();
  if (name.value == '') name.reportValidity();
  else {
    const elem = document.createElement('li');
    elem.textContent = name.value;
    list.insertBefore(elem,list.firstChild);
  }
}

