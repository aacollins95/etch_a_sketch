function main() {
  const container = document.querySelector('.container');
  makeGrid(container,16);

}

function tag(box) {
  box.setAttribute('style','background-color: #166811');
}

function makeGrid(container,n){
//creates a grid of n squares in a given window
  for (var i = 0; i < n; i++) {
    //makes n flex boxes as rows
    const flex = document.createElement('div');
    flex.setAttribute('class','flexRow');
      for (var j = 0; j < n; j++) {
        //fills each row with n boxes
        const box = document.createElement('div');
        box.setAttribute('class','pix');
        //box.addEventListener('click',tag(box))
        flex.appendChild(box)
      }
    container.appendChild(flex);
  }
  console.log(container);

}


main()
