let dropArea = document.querySelector(".drop-zone"),
  dragText = document.querySelector(".drop-zone header"),
  button = document.querySelector(".drop-zone button"),
  input = document.querySelector(".drop-zone input"),
  save = document.querySelector(".save"),
  edit = document.querySelector(".edit"),
  result = document.querySelector(".result"),
  hasil = document.querySelector(".hasil"),
  cropper,
  file;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  file = this.files[0];
  dropArea.classList.add("active");
  showfile();
});
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  alert("Dropped!");
  // file = event.dataTransfer.files[0];
  // showfile();
});
function showfile() {
  let fileType = file.type;
  let validExtension = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtension.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      save.classList.remove("hide");
      dropArea.classList.add("hide");
      hasil.classList.remove("hide");
      let img = document.createElement("img");
      img.src = e.target.result;
      hasil.innerHTML = "";
      hasil.appendChild(img);
      cropper = new Cropper(img, {
        aspectRatio: 1,
        movable: false,
        rotabable: false,
        scalable: false,
        zoomable: false,
      });
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This not an image file!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
save.addEventListener("click", (e) => {
  e.preventDefault();
  hasil.classList.add("hide");
  result.classList.remove("hide");
  save.classList.add("hide");
  edit.classList.remove("hide");
  let imgSrc = cropper.getCroppedCanvas().toDataURL();
  result.src = imgSrc;
});

edit.addEventListener("click", (e) => {
  e.preventDefault();
  hasil.classList.remove("hide");
  save.classList.remove("hide");
  result.classList.add("hide");
  edit.classList.add("hide");
});
