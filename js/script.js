var link = document.querySelector(".brown-button");

var popup = document.querySelector(".modal-search-form");
var close = popup.querySelector(".brown-button");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });