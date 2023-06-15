const nav = document.querySelector(".navlinks");
const menu = document.querySelector('.menubutton');
const mobilemenu = document.querySelector('.mobilemenu')
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 960px)").matches) {
    nav.classList.add("hidden");
    menu.classList.remove("hidden");
    mobilemenu.classList.remove("hidden");
  } else {
    nav.classList.remove("hidden");
    menu.classList.add("hidden");
    mobilemenu.classList.add("hidden");
    mobilemenu.classList.remove('menu-active');
    console.log(mobilemenu.getAttribute("class"));
  }
});

if (window.matchMedia("(max-width: 960px)").matches) {
  nav.classList.add("hidden");
  menu.classList.remove("hidden");
  mobilemenu.classList.remove("hidden");
} else {
  nav.classList.remove("hidden");
  menu.classList.add("hidden");
  mobilemenu.classList.add("hidden");
  mobilemenu.classList.remove('menu-active');
  console.log(mobilemenu.getAttribute("class"));
}

menu.addEventListener('click', ()=>{
    mobilemenu.classList.toggle('menu-active')
})