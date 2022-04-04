//portfolio
const filter_btns = document.querySelectorAll(".filter-btn");

//barras de progreso
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

//records
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");

//menu
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");


//menu
function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

//portfolio
filter_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
});

$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration: '0.6s',
});

//barras de progreso
window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
})

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

//records
function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    updateCount();
  });
}