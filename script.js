const tabsTitle = document.querySelectorAll(".tab__title");
const tabsContent = document.querySelectorAll(".tab__content");

tabsTitle.forEach((item) =>
  item.addEventListener("click", (event) => {
    const tabsTitleTarget = event.target.getAttribute("data-tab");

    tabsTitle.forEach((element) => element.classList.remove("active-tab"));

    tabsContent.forEach((element) =>
      element.classList.add("hidden-tab-content")
    );

    item.classList.add("active-tab");

    document
      .getElementById(tabsTitleTarget)
      .classList.remove("hidden-tab-content");
  })
);

let hoursHtml = document.getElementById("hrs");
let minutesHtml = document.getElementById("min");
let secondsHtml = document.getElementById("sec");

function getNextSegmentTime() {
  const now = new Date();
  const currentHour = now.getHours();
  const segment = Math.floor(currentHour / 6) + 1;
  const targetHour = (segment * 6) % 24;

  const targetTime = new Date(now);
  targetTime.setHours(targetHour, 0, 0, 0);

  if (targetTime <= now) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  return targetTime;
}

function updateCountdown() {
  const now = new Date();
  const targetTime = getNextSegmentTime();

  const timeDifference = targetTime - now;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  hoursHtml.innerHTML = hours.toString().padStart(2, "0");
  minutesHtml.innerHTML = minutes.toString().padStart(2, "0");
  secondsHtml.innerHTML = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);

// Инициализация таймера
updateCountdown();

// SWIPER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
///////////////////////////////////////////////////////

// Accordeon

const AccordeonTopButton = document.querySelectorAll(".accordeon-top-button");

AccordeonTopButton.forEach((el) => {
  el.addEventListener("click", () => {
    const content = el.nextElementSibling;
    const img = el.lastElementChild;
    // const number = el.firstElementChild.firstElementChild;

    if (content.style.maxHeight) {
      img.src = "./icons/plus.svg";
      content.style.maxHeight = null;
    } else {
      img.src = "./icons/minus.svg";

      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

//////////////////////////////////////////////////////

// POPUP

const openPopUp = document.querySelectorAll(".open_pop_up");
const closePopUp = document.getElementById("close_pop_up");
const popUp = document.getElementById("pop_up");
const popUpEnd = document.getElementById("pop_up_end");

openPopUp.forEach(function (item) {
  item.addEventListener("click", () => {
    popUp.classList.add("active");
  });
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

const SubmitLetter = document.getElementById("Submit_letter");

function submit() {
    popUp.classList.remove("active");
    popUpEnd.classList.add("active");
}


// VIDEO

const videos = document.querySelectorAll(".video-slider");

videos.forEach(video => {
  
  video.addEventListener("play", function() {
      videos.forEach(otherVideo => {
          if (otherVideo !== video) {
              otherVideo.pause();
          }
      });
  });
}); 