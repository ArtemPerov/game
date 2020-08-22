let but = document.querySelector(".but");
let numberGame = document.querySelector(".number");
but.addEventListener("click", butFunck);

function butFunck() {
    let clientHeight = parseInt(document.documentElement.clientHeight);
    let clientWidth = parseInt(document.documentElement.clientWidth);
      let left = Math.random() * clientWidth;
      let top = Math.random() * clientHeight;
  but.style.display = "none";
  let boll = document.createElement("div");
  boll.classList.add("boll");
  boll.style.left = left + "px";
  boll.style.top = top + "px";
  document.querySelector(".box").appendChild(boll);
  boll.addEventListener("click", bollFunck);
  numberGame.style.display = 'block';
  document.querySelector('.box').style.display ='block';

}

function bollFunck() {
  let parsNamber = parseInt(numberGame.innerHTML);
  numberGame.innerHTML = parsNamber + 1;
  let clientHeight = parseInt(document.documentElement.clientHeight);
  let clientWidth = parseInt(document.documentElement.clientWidth);
    let left = Math.random() * clientWidth;
    let top = Math.random() * clientHeight ;
  document.querySelector(".box").firstElementChild.remove();
  let boll = document.createElement("div");
  boll.classList.add("boll");
  boll.style.left = left + "px";
  boll.style.top = top + "px";
  document.querySelector(".box").appendChild(boll);
  boll.removeEventListener("click", bollFunck);
  boll.addEventListener("click", butFunckNew);
  
  if(numberGame.innerHTML == '10'){
    alert('You win');
}
}

function butFunckNew() {
    let parsNamber = parseInt(numberGame.innerHTML);
    numberGame.innerHTML = parsNamber + 1;
let clientHeight = parseInt(document.documentElement.clientHeight);
let clientWidth = parseInt(document.documentElement.clientWidth);
  let left = Math.random() * clientWidth;
  let top = Math.random() * clientHeight ;
  let boll = document.createElement("div");
  boll.classList.add("boll");
  boll.style.left = left + "px";
  boll.style.top = top + "px";
  document.querySelector(".box").appendChild(boll);
  document.querySelector(".box").firstElementChild.remove();
  document.querySelector(".boll").addEventListener("click", bollFunck);
if(numberGame.innerHTML == '10'){
    alert('You win');
}
}

