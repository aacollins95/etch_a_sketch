size = 20;

function main() {
  const container = document.querySelector('.container');
  makeGrid(container,size);
  makeButton();
}

function deleteGrid(container) {
  //removes all children from the given node
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function makeButton() {
  //makes a button
  var btn = document.querySelector('.button');
  btn.addEventListener('click', resetFunction);
}

function resetFunction() {
  //chnages each square back to og color, changes size
  const container = document.querySelector('.container');
  const phrase = "Enter an integer from (1-64) to resize the grid";
  let newSize = prompt(phrase, size);

  while (isNaN(Number(newSize)) || newSize < 1 || newSize > 64 ){
    newSize = prompt(phrase, size);
  }
  
  size = newSize;

  deleteGrid(container);
  makeGrid(container,size);


  //assert
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
        //changes color at mouseover
        box.addEventListener('mouseover',function(){
          box.setAttribute('style','background-color: #166811')});
        flex.appendChild(box)
      }
    container.appendChild(flex);
  }
  console.log(container);

}


main()
