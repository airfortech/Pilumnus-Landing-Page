// welcome section

const welcomeSection = document.querySelector(".welcome > .header");

const scrollsSite = () => {
  if (window.scrollY < window.innerHeight) {
    welcomeSection.style.transform = `translateY(${window.scrollY / 1.5}px)`;
  }
};

window.onload = () => {
  welcomeSection.classList.add("header--changed");
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
  setTimeout(() => (loader.style.display = "none"), 1000);
  setTimeout(() => {
    welcomeSection.style.transition = "none";
    window.addEventListener("scroll", scrollsSite);
  }, 3500);
};

// about section

const aboutSectionParagraph = document.querySelector("#about.info");
const aboutSectionBtn = document.querySelector("#about .btn");

aboutSectionBtn.addEventListener("click", () => {
  aboutSectionParagraph.classList.toggle("about--changed");
  aboutSectionParagraph.classList.contains("about--changed")
    ? (aboutSectionBtn.textContent = "Show less")
    : (aboutSectionBtn.textContent = "Read more");
});

// articles section

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

    articlesSectionParagraphs.forEach((paragraph, ind) => {
      articlesSectionParagraphs[ind].classList.contains(
        "articles__paragraph--changed"
      )
        ? (articleBtns[ind].textContent = "Show less")
        : (articleBtns[ind].textContent = "Read more");
    });
  });
});

// contact section

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
const galleryContainer = document.querySelector(".gallery");

const galleryButton = document.querySelector(".gallery .btn");

galleryButton.addEventListener("click", () => {
  galleryContainer.classList.toggle("gallery--short");
  if (galleryContainer.classList.contains("gallery--short")) {
    galleryButton.textContent = "Show more";
    const headerOffset = 60;
    const elementPosition = galleryContainer.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else galleryButton.textContent = "Show less";
});

// menu section

const menu = document.querySelector(".menu");
const openMenu = document.querySelector("#menu__open");
const closeMenu = document.querySelector("#menu__close");
const menuLinks = document.querySelectorAll(".menu__list-item");

openMenu.addEventListener("click", () => {
  menu.classList.remove("animate__bounceOut");
  menu.classList.add("menu--is-open", "animate__bounceIn");
});

const closeMenuAction = (e, link) => {
  e.preventDefault();
  menu.classList.remove("animate__bounceIn");
  menu.classList.add("animate__bounceOut");
  setTimeout(() => {
    menu.classList.remove("menu--is-open");
    const element = document.querySelector(link);
    const headerOffset = 60;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, 700);
};

closeMenu.addEventListener("click", e => closeMenuAction(e));

menuLinks.forEach(link => {
  link.addEventListener("click", e => closeMenuAction(e, link.hash));
});
