let upload = document.querySelector("#file"),
  crop = document.querySelector(".crop"),
  cropped = document.querySelector(".cropped"),
  save = document.querySelector(".save"),
  edit = document.querySelector(".edit"),
  download = document.querySelector(".download"),
  select = document.querySelector("#select"),
  box = document.querySelector(".box"),
  options = document.querySelector(".options"),
  cropper = "";

select.onclick = () => {
  upload.click();
};

upload.addEventListener("change", (e) => {
  if (e.target.files.length) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target.result) {
        box.classList.remove("hide");
        options.classList.remove("hide");
        let img = document.createElement("img");
        img.id = "cropping";
        img.src = e.target.result;
        crop.innerHTML = "";
        crop.appendChild(img);
        save.classList.remove("hide");
        cropper = new Cropper(img, {
          aspectRatio: 1 / 1,
          movable: false,
          rotabable: false,
          scalable: false,
          zoomable: false,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

save.addEventListener("click", (e) => {
  e.preventDefault();
  select.classList.add("hide");
  crop.classList.add("hide");
  cropped.classList.remove("hide");
  save.classList.add("hide");
  edit.classList.remove("hide");
  download.classList.remove("hide");
  let imgSrc = cropper.getCroppedCanvas().toDataURL();
  cropped.src = imgSrc;
  download.download = "imagecropped.png";
  download.setAttribute("href", imgSrc);
});

edit.addEventListener("click", (e) => {
  e.preventDefault();
  select.classList.remove("hide");
  crop.classList.remove("hide");
  cropped.classList.add("hide");
  save.classList.remove("hide");
  edit.classList.add("hide");
  download.classList.add("hide");
});
