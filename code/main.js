const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar-area");

hamburger.addEventListener('click',function(){
  if(navBar.style.opacity==="0.9")
  {
    navBar.style.opacity="0";
    navBar.style.pointerEvents="none";
  }

  else{

  navBar.style.opacity="0.9";
  navBar.style.pointerEvents="all";
}
});
