function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('ranked-list');

  for (let i=0; i < ranked-list.length; i++) {
    let children = ranked-list[i].children;

    for (let j=0; j<children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
