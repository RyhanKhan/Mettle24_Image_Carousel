const slides = document.querySelectorAll(".slide");
const indexes = document.querySelectorAll(".index");
const progress = document.querySelector(".progress");

const DURATION = 5000;

//Set the index of current, prev and next slides
let currentIndex = 0;
let nextIndex = currentIndex > slides.length - 1 ? 0 : currentIndex + 1;

let prevIndex = currentIndex <= 0 ? slides.length - 1 : currentIndex - 1;

const interval = setInterval(() => {
  //Remove current, prev and next classes
  slides.forEach((slide) => {
    slide.classList.remove("current");
    slide.classList.remove("prev");
    slide.classList.remove("next");
  });

  indexes.forEach((index) => {
    index.classList.remove("current");
  });
  indexes[currentIndex]?.classList.add("current");

  animateProgress();

  //Add the current, prev and next classes
  slides[currentIndex]?.classList.add("current");
  slides[nextIndex]?.classList.add("next");
  slides[prevIndex]?.classList.add("prev");

  //Change the index of the current slide
  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  if (nextIndex >= slides.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex++;
  }
  if (prevIndex >= slides.length - 1) {
    prevIndex = 0;
  } else {
    prevIndex++;
  }
}, DURATION);

//First Render
slides[currentIndex].classList.add("current");
slides[prevIndex].classList.add("prev");
slides[nextIndex].classList.add("next");
indexes[currentIndex].classList.add("current");
animateProgress();

function animateProgress() {
  progress.animate([{ width: 0 }, { width: "100%" }], {
    duration: DURATION,
    easing: "linear",
    fill: "forwards",
  });
}
