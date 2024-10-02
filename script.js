"use strict";

// FILL FORRM TO SHOW INFORMATION
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const personalInfoContent = document.querySelector(".personal-info-content");
const personalInfoContent1 = document.querySelector(".personal-info-content-1");
const iconContact = document.querySelector(".icon-contact");
const emailErrorMessage = document.querySelector(".email-error-message");
const emailForm = document.querySelector(".email-form");

document.querySelector(".email-button").addEventListener("click", function () {
  const email = document.querySelector("#email-input").value;
  // console.log(email, typeof email);

  if (email.match(regex)) {
    console.log("Email is valid");
    personalInfoContent.classList.remove("hidden");
    personalInfoContent1.classList.remove("hidden");
    iconContact.classList.remove("hidden");
    emailForm.classList.add("d-none");
  } else {
    console.log("Email is invalid");
    emailErrorMessage.classList.remove("hidden");
  }
});

// VIEW MORE & VIEW LESS
const experience = document.getElementById("experience");
const education = document.getElementById("education");
const activity = document.getElementById("activity");
const hobby = document.getElementById("hobby");
const language = document.getElementById("language");
const skill = document.getElementById("skill");

const viewMore1 = document.getElementById("vm-2-1");
const viewMore2 = document.getElementById("vm-2-2");
const viewMore3 = document.getElementById("vm-2-3");
const viewMore4 = document.getElementById("vm-2-4");
const viewMore5 = document.getElementById("vm-2-5");
const viewMore6 = document.getElementById("vm-2-6");

const viewLess1 = document.getElementById("vl-2-1");
const viewLess2 = document.getElementById("vl-2-2");
const viewLess3 = document.getElementById("vl-2-3");
const viewLess4 = document.getElementById("vl-2-4");
const viewLess5 = document.getElementById("vl-2-5");
const viewLess6 = document.getElementById("vl-2-6");

const container1 = document.querySelector(".container-2-1");
const container2 = document.querySelector(".container-2-2");
const container3 = document.querySelector(".container-2-3");
const container4 = document.querySelector(".container-2-4");
const container5 = document.querySelector(".container-2-5");
const container6 = document.querySelector(".container-2-6");

//Container 1-Experience
container1.addEventListener("mouseenter", function () {
  if (experience.classList.contains("d-none") === false) {
    viewLess1.classList.remove("d-none");
  } else {
    viewMore1.classList.remove("d-none");
  }
});
container1.addEventListener("mouseleave", function () {
  if (experience.classList.contains("d-none") === false) {
    viewLess1.classList.add("d-none");
  } else {
    viewMore1.classList.add("d-none");
  }
});
viewMore1.addEventListener("click", function () {
  experience.classList.remove("d-none");
  viewLess1.classList.remove("d-none");
  viewMore1.classList.add("d-none");
});
viewLess1.addEventListener("click", function () {
  experience.classList.add("d-none");
  viewLess1.classList.add("d-none");
  viewMore1.classList.remove("d-none");
});

//Container 2-Education
container2.addEventListener("mouseenter", function () {
  if (education.classList.contains("d-none") === false) {
    viewLess2.classList.remove("d-none");
  } else {
    viewMore2.classList.remove("d-none");
  }
});
container2.addEventListener("mouseleave", function () {
  if (education.classList.contains("d-none") === false) {
    viewLess2.classList.add("d-none");
  } else {
    viewMore2.classList.add("d-none");
  }
});
viewMore2.addEventListener("click", function () {
  education.classList.remove("d-none");
  viewLess2.classList.remove("d-none");
  viewMore2.classList.add("d-none");
});
viewLess2.addEventListener("click", function () {
  education.classList.add("d-none");
  viewLess2.classList.add("d-none");
  viewMore2.classList.remove("d-none");
});

//Container 3-Activity
container3.addEventListener("mouseenter", function () {
  if (activity.classList.contains("d-none") === false) {
    viewLess3.classList.remove("d-none");
  } else {
    viewMore3.classList.remove("d-none");
  }
});

container3.addEventListener("mouseleave", function () {
  if (activity.classList.contains("d-none") === false) {
    viewLess3.classList.add("d-none");
  } else {
    viewMore3.classList.add("d-none");
  }
});

viewMore3.addEventListener("click", function () {
  activity.classList.remove("d-none");
  viewLess3.classList.remove("d-none");
  viewMore3.classList.add("d-none");
});
viewLess3.addEventListener("click", function () {
  activity.classList.add("d-none");
  viewLess3.classList.add("d-none");
  viewMore3.classList.remove("d-none");
});

//Container 4-Hobby
container4.addEventListener("mouseenter", function () {
  if (hobby.classList.contains("d-none") === false) {
    viewLess4.classList.remove("d-none");
  } else {
    viewMore4.classList.remove("d-none");
  }
});

container4.addEventListener("mouseleave", function () {
  if (hobby.classList.contains("d-none") === false) {
    viewLess4.classList.add("d-none");
  } else {
    viewMore4.classList.add("d-none");
  }
});

viewMore4.addEventListener("click", function () {
  hobby.classList.remove("d-none");
  viewLess4.classList.remove("d-none");
  viewMore4.classList.add("d-none");
});
viewLess4.addEventListener("click", function () {
  hobby.classList.add("d-none");
  viewLess4.classList.add("d-none");
  viewMore4.classList.remove("d-none");
});

//Container 5-Language
container5.addEventListener("mouseenter", function () {
  if (language.classList.contains("d-none") === false) {
    viewLess5.classList.remove("d-none");
  } else {
    viewMore5.classList.remove("d-none");
  }
});

container5.addEventListener("mouseleave", function () {
  if (language.classList.contains("d-none") === false) {
    viewLess5.classList.add("d-none");
  } else {
    viewMore5.classList.add("d-none");
  }
});

viewMore5.addEventListener("click", function () {
  language.classList.remove("d-none");
  viewLess5.classList.remove("d-none");
  viewMore5.classList.add("d-none");
});
viewLess5.addEventListener("click", function () {
  language.classList.add("d-none");
  viewLess5.classList.add("d-none");
  viewMore5.classList.remove("d-none");
});

//Container 6-Skill
container6.addEventListener("mouseenter", function () {
  if (skill.classList.contains("d-none") === false) {
    viewLess6.classList.remove("d-none");
  } else {
    viewMore6.classList.remove("d-none");
  }
});

container6.addEventListener("mouseleave", function () {
  if (skill.classList.contains("d-none") === false) {
    viewLess6.classList.add("d-none");
  } else {
    viewMore6.classList.add("d-none");
  }
});

viewMore6.addEventListener("click", function () {
  skill.classList.remove("d-none");
  viewLess6.classList.remove("d-none");
  viewMore6.classList.add("d-none");
});
viewLess6.addEventListener("click", function () {
  skill.classList.add("d-none");
  viewLess6.classList.add("d-none");
  viewMore6.classList.remove("d-none");
});
