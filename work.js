var mengic_bar = document.querySelector(".main_bar");
var comebar = document.querySelector("#comebar");
var gobar = document.querySelector("#gobar");

comebar.addEventListener("click", function () {
  mengic_bar.style.transform = "translateX(0%)";
  comebar.style.display = "none";
  gobar.style.display = "inline";
});
gobar.addEventListener("click", function () {
  mengic_bar.style.transform = "translateX(-100%)";
  comebar.style.display = "inline";
  gobar.style.display = "none";
});

var color = document.querySelector(".big-header1");

window.addEventListener(
  "scroll",
  ()=>{
    if(window.scrollY > 50){
      color.classList.add("big-header2");
    }else{
      color.classList.remove("big-header2");
    }
  }
)

// document.addEventListener("scroll", function () {
//   if (window.scrollY >50) {
//     color.classList.add("big-header2");
//   } else {
//     color.classList.remove("big-header2");
//   }
// });


document.addEventListener(
  "click",
   function () {
  document.body.classList.toggle("no-scroll");
});