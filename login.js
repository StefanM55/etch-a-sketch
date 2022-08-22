const clickBtn = document.querySelector("#clickBtn"); //getting easy to use the button - creating a shortcut
clickBtn.addEventListener("click", generateContent, false); //looking for action at the button and putting the instruction

function generateContent(e) {
  removeAllChildNodes(mainframe); //cleaning the mainframe, if not,
  //it creates row after rows and get long
  let fragment = new DocumentFragment(); //using fragment, a kind of intermediary
  //bucket
  let numberOfItems = 16;

  for (let i = 0; i < numberOfItems; i++) {
    let divElementR = document.createElement("div");
    divElementR.classList.add("itemR");

    for (let i = 0; i < numberOfItems; i++) {
      let divElementC = document.createElement("div");
      divElementC.classList.add("itemC");
      divElementR.appendChild(divElementC);
    } //creating 16 columns in each row
    fragment.appendChild(divElementR);
  } //creating rows and put the in the "bucket" fragment

  mainframe.appendChild(fragment); //moving the content from the fragment
  //to the actual target -> mainframe
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
} //removing all the children of the parent
//to add js mouseover
