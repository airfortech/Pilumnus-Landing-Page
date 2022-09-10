// welcome section handling
const welcomeSection = document.querySelector(".welcome > .header");

const scrollsSite = () => {
  if (window.scrollY < window.innerHeight) {
    welcomeSection.style.transform = `translateY(${window.scrollY / 1.5}px)`;
  }
};

window.onload = () => {
  welcomeSection.classList.add("header--changed");
  setTimeout(() => {
    welcomeSection.style.transition = "none";
    window.addEventListener("scroll", scrollsSite);
  }, 3500);
};

// about section handling

const aboutSectionParagraph = document.querySelector("#about.info");
const aboutSectionBtn = document.querySelector("#about .btn");

aboutSectionBtn.addEventListener("click", () => {
  aboutSectionParagraph.classList.toggle("about--changed");
  aboutSectionParagraph.classList.contains("about--changed")
    ? (aboutSectionBtn.textContent = "Show less")
    : (aboutSectionBtn.textContent = "Read more");
});

// articles section handling

const articlesSectionParagraphs = document.querySelectorAll(
  ".articles .articles__paragraph"
);
const articleBtns = document.querySelectorAll(".articles .btn");

articleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    articlesSectionParagraphs.forEach((paragraph, ind) => {
      if (ind !== index)
        paragraph.classList.remove("articles__paragraph--changed");
    });
    articlesSectionParagraphs[index].classList.toggle(
      "articles__paragraph--changed"
    );
  });
});

// contact section handling

const textarea = document.querySelector(".contact__textarea");

const autoResize = () => {
  setTimeout(() => {
    textarea.style.cssText = "height:auto; padding:0";
    textarea.style.cssText = "height:" + textarea.scrollHeight + "px";
  }, 0);
};

textarea.addEventListener("keydown", () => autoResize());

const submitBtn = document.querySelector("#contact .contact__submit");
const contactName = document.getElementById("contact__name");
const contactEmail = document.getElementById("contact__email");
const contactWarning = document.querySelector("#contact .contact__warning");
let finalMessage = {};

submitBtn.addEventListener("click", () => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!contactName.value.trim()) {
    contactWarning.classList.remove("contact__warning--on");
    contactWarning.classList.remove("contact__warning--success");
    setTimeout(() => {
      contactWarning.textContent = "Enter your name";
      contactWarning.classList.add("contact__warning--on");
    }, 500);
  } else if (!emailRegex.test(contactEmail.value.trim())) {
    contactWarning.classList.remove("contact__warning--on");
    contactWarning.classList.remove("contact__warning--success");
    setTimeout(() => {
      contactWarning.textContent = "Enter your email";
      contactWarning.classList.add("contact__warning--on");
    }, 500);
  } else if (!textarea.value.trim()) {
    contactWarning.classList.remove("contact__warning--on");
    contactWarning.classList.remove("contact__warning--success");
    setTimeout(() => {
      contactWarning.textContent = "Enter your message";
      contactWarning.classList.add("contact__warning--on");
    }, 500);
  } else {
    contactWarning.classList.remove("contact__warning--on");
    setTimeout(() => {
      contactWarning.textContent = "Message sent";
      contactWarning.classList.add("contact__warning--on");
      contactWarning.classList.add("contact__warning--success");
      finalMessage.name = contactName.value.trim();
      finalMessage.email = contactEmail.value.trim();
      finalMessage.message = textarea.value.trim();
      console.log(finalMessage);
    }, 500);
  }
});

// gallery section

const gallery = new Gallery(".gallery__one-column").init();
