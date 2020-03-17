
 
var popup = document.querySelector(".modal-hide");
var popup = document.querySelector(".modal-show");
var popup = document.querySelector(".modal-search-form");
var button = document.querySelector(".hotels-search-button");

if (popup) {
    popup.classList.toggle("modal-show");
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");    
});
