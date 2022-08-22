const clickBtn = document.querySelector("#clickBtn");
clickBtn.addEventListener("click", generateContent, false);

function generateContent(e) {
  let fragment = new DocumentFragment();
  let numberOfItems = 16;

  for (let i = 0; i < numberOfItems; i++) {
    let divElementR = document.createElement("div");
    divElementR.classList.add("itemR");

    for (let i = 0; i < numberOfItems; i++) {
      let divElementC = document.createElement("div");
      divElementC.classList.add("itemC");
      divElementR.appendChild(divElementC);
    }
    fragment.appendChild(divElementR);
  }

  mainframe.appendChild(fragment);
}
