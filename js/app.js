// welcome section handling
const welcomeSection = document.querySelector(".welcome > .header");

const scrollsSite = () =>{
  if(window.scrollY < window.innerHeight){
  welcomeSection.style.transform = `translateY(${window.scrollY/1.5}px)`
  console.log(window.scrollY, window.innerHeight);
  }
}

window.onload = () =>{
  welcomeSection.classList.add("header--changed");
  setTimeout(() => {
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

// contact section handling

const textarea = document.querySelector('.contact__textarea');

const autoResize = () =>{
  setTimeout(() =>{
    textarea.style.cssText = 'height:auto; padding:0';
    textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
  },0);
}

textarea.addEventListener('keydown', () => autoResize());