const email = document.querySelector(".email");
const contactBtns = document.querySelectorAll(".contact");
const submitBtn = document.querySelector(".contact-btn");
const socialLinks = document.querySelectorAll(".social");
const projectImg = document.querySelectorAll(".project-container");
const links = document.querySelectorAll(".link");
const inputName = document.querySelector(".form-name");

// client side form validation
email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "Sorry,invalid format here. Please enter a valid email address."
    );
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

submitBtn.addEventListener("click", () => {
  const msg = document.querySelector(".msg");
  if (msg.textContent === "") {
    console.log("please write me something");
    msg.setCustomValidity("Please leave me a message. Thanks");
    msg.reportValidity();
  } else {
    msg.setCustomValidity("");
  }
});

// active/hover states ***(I know I could just do this with CSS but I just wanted the extra practise with JS)***

contactBtns.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.classList.add("btn-active");
  });
});
contactBtns.forEach((e) => {
  e.addEventListener("mouseout", (e) => {
    e.target.classList.remove("btn-active");
  });
});
links.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.classList.add("btn-active");
  });
});
links.forEach((e) => {
  e.addEventListener("mouseout", (e) => {
    e.target.classList.remove("btn-active");
  });
});
socialLinks.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    e.target.classList.add("icon-active");
  });
});
socialLinks.forEach((e) => {
  e.addEventListener("mouseout", (e) => {
    e.target.classList.remove("icon-active");
  });
});
// ***Below I tried to do the overlay using JavaScript but for some reason did not work well in firefox browser eventhough chrome was fine so I just did this effect using CSS***

// projectImg.forEach((e)=>{
//     e.addEventListener('mouseover',(e)=>{
//         // e.target.classList.remove('hide')
//         // const container = e.target.querySelectorAll('.project-img-container');
//         const overlay = e.target.querySelectorAll('.overlay');
//         overlay.forEach((e)=>{
//             e.classList.remove('hide')
//         })

//         console.log(overlay);

//         // const overlay = container.querySelectorAll('.overlay')
//         // overlay.classList.remover('hide')
//         // overlay.forEach((e)=>{
//         //     e.classList.remove('hide')
//         //     console.log('hello');
//         // })
//     })
// })
// projectImg.forEach((e)=>{
//     e.addEventListener('mouseout',(e)=>{
//         const overlay = e.target.querySelectorAll('.overlay');
//         overlay.forEach((e)=>{
//             e.classList.add('hide')
//             console.log('bye');
//         })
//     })
// })

// Smooth Scrolling jQuery
$(".contact").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      900
    );
  }
});

// Bellow is smooth scroll using vanilla javaScript....however, I prefer using the JQuery method above since you can customize the scrolling time

// const contactBtns = document.querySelectorAll(".contact");
// for (const link of contactBtns) {
//   link.addEventListener("click", clickHandler);
// }
// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   document.querySelector(href).scrollIntoView({
//     behavior: "smooth"
//   });
// }
