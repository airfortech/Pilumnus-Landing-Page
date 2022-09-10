class Gallery {
  imagesArray1 = [
    "gallery__img gallery__img--middle gallery__img--type-2",
    "gallery__img gallery__img--left gallery__img--type-2",
    "gallery__img gallery__img--right gallery__img--type-5",
    "gallery__img gallery__img--middle gallery__img--type-6",
    "gallery__img gallery__img--left gallery__img--type-7",
    "gallery__img gallery__img--middle gallery__img--type-2",
    "gallery__img gallery__img--right gallery__img--type-5",
    "gallery__img gallery__img--right gallery__img--type-9",
    "gallery__img gallery__img--middle gallery__img--type-5",
    "gallery__img gallery__img--right gallery__img--type-2",
  ];

  imagesArray2 = [
    "gallery__img gallery__img--middle gallery__img--type-5",
    "gallery__img gallery__img--right gallery__img--type-2",
    "gallery__img gallery__img--left gallery__img--type-4",
    "gallery__img gallery__img--middle gallery__img--type-4",
    "gallery__img gallery__img--left gallery__img--type-8",
    "gallery__img gallery__img--right gallery__img--type-9",
  ];

  imagesArray3 = [
    "gallery__img gallery__img--left gallery__img--type-6",
    "gallery__img gallery__img--right gallery__img--type-7",
    "gallery__img gallery__img--middle gallery__img--type-4",
    "gallery__img gallery__img--left gallery__img--type-5",
    "gallery__img gallery__img--middle gallery__img--type-5",
    "gallery__img gallery__img--right gallery__img--type-3",
    "gallery__img gallery__img--left gallery__img--type-4",
    "gallery__img gallery__img--middle gallery__img--type-4",
    "gallery__img gallery__img--left gallery__img--type-8",
    "gallery__img gallery__img--right gallery__img--type-9",
  ];

  imagesArray4 = [
    "gallery__img gallery__img--middle gallery__img--type-6 item-18",
    "gallery__img gallery__img--left gallery__img--type-7 item-19",
    "gallery__img gallery__img--middle gallery__img--type-2 item-20",
    "gallery__img gallery__img--right gallery__img--type-5 item-21",
    "gallery__img gallery__img--middle gallery__img--type-5 item-22",
    "gallery__img gallery__img--left gallery__img--type-1 item-23",
    "gallery__img gallery__img--right gallery__img--type-2 item-24",
    "gallery__img gallery__img--middle gallery__img--type-4 item-18",
    "gallery__img gallery__img--middle gallery__img--type-4 item-18",
    "gallery__img gallery__img--left gallery__img--type-4 item-23",
    "gallery__img gallery__img--right gallery__img--type-8 item-24",
    "gallery__img gallery__img--left gallery__img--type-9 item-23",
  ];

  constructor(galleryContainer) {
    this.galleryContainer = document.querySelector(galleryContainer);
    this.images = this.galleryContainer?.querySelectorAll("img");
  }

  countGridRowStart(i, gridRows, className) {
    const toAdd = { col: 0, nextCol: 0 };
    if (className.includes("type-1")) toAdd.col = 374 + 30;
    else if (className.includes("type-2")) toAdd.col = 349 + 30;
    else if (className.includes("type-3")) toAdd.col = 329 + 30;
    else if (className.includes("type-4")) toAdd.col = 304 + 30;
    else if (className.includes("type-5")) toAdd.col = 204 + 30;
    else if (className.includes("type-6")) {
      toAdd.col = 349 + 30;
      toAdd.nextCol = 349 + 30;
    } else if (className.includes("type-7")) toAdd.col = 558 + 30;

    if (className.includes("left")) {
      gridRows[0] += toAdd.col;
      gridRows[1] += toAdd.nextCol;
    } else if (className.includes("middle")) {
      gridRows[1] += toAdd.col;
      gridRows[2] += toAdd.nextCol;
    } else if (className.includes("right")) {
      gridRows[2] += toAdd.col;
    }
  }

  checkIsFirstOfArray3(i) {
    return Math.floor((i - 10) / 14) === (i - 10) / 14 && (i - 10) / 14 > 0
      ? true
      : false;
  }

  checkIsFirstOfArray4(i) {
    return Math.floor((i - 3) / 14) === (i - 3) / 14 && (i - 3) / 14 > 0
      ? true
      : false;
  }

  checkImagesArray(i, maxIndex) {
    const DIFF = 7;
    const baseValue = i - 10;

    const array =
      i < 7
        ? "imagesArray1"
        : i < 10
        ? "imagesArray2"
        : Math.floor(baseValue / DIFF) % 2 === 0
        ? "imagesArray3"
        : "imagesArray4";
    const index = i < 7 ? i : i < 10 ? i - 7 : baseValue % DIFF;

    let className = this[array][index];
    if (maxIndex < 10 && maxIndex > 7 && i === 7) className = this[array][3];

    if (maxIndex === 1 && i === 0) className = this[array][3];
    if (maxIndex === 2 && i === 0) className = this[array][3];
    if (maxIndex === 2 && i === 2) className = this[array][8];
    if (maxIndex === 3 && i === 2) className = this[array][9];
    if (maxIndex === 3 && i === 3) className = this[array][8];
    if (maxIndex === 7 && i === 6) className = this[array][7];
    if (maxIndex === 10 && i === 10) className = this[array][7];
    if (maxIndex === 10 && i === 8) className = this[array][5];
    if (maxIndex === 10 && i === 9) className = this[array][4];

    if (this.checkIsFirstOfArray3(maxIndex) && i === maxIndex)
      className = this[array][7];
    if (this.checkIsFirstOfArray3(maxIndex) && i === maxIndex - 1)
      className = this[array][4];

    if (this.checkIsFirstOfArray3(maxIndex + 2) && i === maxIndex - 1)
      className = this[array][7];
    if (this.checkIsFirstOfArray3(maxIndex + 1) && i === maxIndex - 2)
      className = this[array][7];

    if (this.checkIsFirstOfArray3(maxIndex) && i === maxIndex - 1)
      className = this[array][10];
    if (this.checkIsFirstOfArray3(maxIndex) && i === maxIndex - 2)
      className = this[array][11];

    if (this.checkIsFirstOfArray4(maxIndex + 2) && i === maxIndex - 1)
      className = this[array][7];
    if (this.checkIsFirstOfArray4(maxIndex + 1) && i === maxIndex - 2)
      className = this[array][7];

    if (this.checkIsFirstOfArray4(maxIndex) && i === maxIndex)
      className = this[array][7];
    if (this.checkIsFirstOfArray4(maxIndex) && i === maxIndex - 1)
      className = this[array][9];
    if (this.checkIsFirstOfArray4(maxIndex) && i === maxIndex - 2)
      className = this[array][8];

    return className;
  }

  createThreeColGallery() {
    const threeColContainer = document.createElement("div");
    threeColContainer.classList.add("gallery__three-column");
    const gridRows = [71, 1, 146];

    for (let i = 0; i < this.images.length; i++) {
      const img = document.createElement("div");
      let classes;

      classes = this.checkImagesArray(i, this.images.length - 1);

      if (classes.includes("left")) img.style.gridRowStart = gridRows[0];
      else if (classes.includes("middle")) img.style.gridRowStart = gridRows[1];
      else if (classes.includes("right")) img.style.gridRowStart = gridRows[2];
      this.countGridRowStart(i, gridRows, classes);

      img.classList.add(...classes.split(" "));
      img.addEventListener("click", () => {
        this.createModal(this.images[i].src, this.images[i].alt, true);
      });
      img.appendChild(this.images[i].cloneNode());
      threeColContainer.appendChild(img);
    }

    this.galleryContainer.parentNode.insertBefore(
      threeColContainer,
      this.galleryContainer.nextSibling
    );
  }

  createTwoColGallery() {
    const twoColContainer = document.createElement("div");
    twoColContainer.classList.add("gallery__two-column");
    const leftCol = document.createElement("div");
    const rightCol = document.createElement("div");

    leftCol.classList.add(
      "gallery__two-column__column",
      "gallery__two-column__column--left"
    );
    rightCol.classList.add(
      "gallery__two-column__column",
      "gallery__two-column__column--right"
    );

    for (let i = 0; i < this.images.length; i++) {
      const img = document.createElement("div");
      img.classList.add("gallery__img");
      img.addEventListener("click", () => {
        this.createModal(this.images[i].src, this.images[i].alt, true);
      });
      img.appendChild(this.images[i].cloneNode());
      if (i % 2 === 0) leftCol.appendChild(img);
      else rightCol.appendChild(img);
    }

    twoColContainer.appendChild(leftCol);
    twoColContainer.appendChild(rightCol);

    this.galleryContainer.parentNode.insertBefore(
      twoColContainer,
      this.galleryContainer.nextSibling
    );
  }

  createModal(src, alt, miniatures = false) {
    const modal = document.createElement("div");
    modal.classList.add("gallery-modal", "animate__bounceIn");
    modal.innerHTML = `
      <i class="fas fa-times gallery-modal__close" id="gallery-modal__close"></i>
      <div class="gallery-modal__content">
        <img src="${
          miniatures ? src.split("-small").join("") : src
        }" alt="${alt}" />
      </div>
    `;
    document.body.appendChild(modal);
    const close = document.querySelector("#gallery-modal__close");
    close.addEventListener("click", () => {
      modal.classList.add("animate__bounceOut");
      setTimeout(() => {
        modal.classList.add("gallery-modal--is-closed");
        modal.remove();
      }, 700);
    });
  }

  init() {
    if (!this.images || this.images?.length < 1) return;
    this.createThreeColGallery();
    this.createTwoColGallery();
    this.galleryContainer.remove();
  }
}
