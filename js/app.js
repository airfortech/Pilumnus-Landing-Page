// welcome section handling
const welcomeSection = document.querySelector(".welcome > .header");

const scrollsSite = () =>{
  welcomeSection.style.transform = `translateY(${window.scrollY/1.5}px)`
  console.log(window.scrollY);
}

window.onload = () =>{
  welcomeSection.classList.add("header--changed");
  setTimeout(() => {
    welcomeSection.classList.remove("header--changed");
    welcomeSection.style.opacity = 1;
    welcomeSection.style.transform = "none";
    welcomeSection.style.transition = "none";
    window.addEventListener("scroll", scrollsSite);
   }, 3500)
}

// about section handling

const aboutSectionParagraph = document.querySelector("#about.info");
const aboutSectionBtn = document.querySelector("#about .btn");

aboutSectionBtn.addEventListener("click", () =>{
  aboutSectionParagraph.classList.toggle("about--changed");
  aboutSectionParagraph.classList.contains("about--changed") ? aboutSectionBtn.textContent = "Show less" : aboutSectionBtn.textContent = "Read more"
})