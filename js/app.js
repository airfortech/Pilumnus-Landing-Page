// about section handling

const aboutSectionParagraph = document.querySelector("#about.info");
const aboutSectionBtn = document.querySelector("#about .btn");

aboutSectionBtn.addEventListener("click", () =>{
  aboutSectionParagraph.classList.toggle("about--changed");
  aboutSectionParagraph.classList.contains("about--changed") ? aboutSectionBtn.textContent = "Show less" : aboutSectionBtn.textContent = "Read more"
})