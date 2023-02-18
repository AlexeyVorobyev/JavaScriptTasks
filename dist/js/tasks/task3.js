function CountItems(rootElem,criterium) {
  const childrens = rootElem.childNodes;
  if (childrens.length == 0) {
    if (rootElem.tagName == criterium)return 1;
    else return 0;
  }
  else {
    let counter;
    if (rootElem.tagName == criterium) counter = 1;
    else counter = 0;
    for (let i = 1; i < childrens.length;i++) {
      counter+=CountItems(childrens[i],criterium);
    }
    return counter;
  }
}

document.getElementsByClassName('task3_result')[0].textContent+=CountItems(document.getElementsByClassName('task3_root')[0],'TABLE');
