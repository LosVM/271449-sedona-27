
 
var popup = document.querySelector(".modal-hide");
var popup = document.querySelector(".modal-show");
var popup = document.querySelector(".modal-search-form");
var button = document.querySelector(".hotels-search-button");

if (popup) {
    popup.classList.toggle("modal-hide");
}

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classlist.toggle("modal-show");    
});