
 
var popup = document.querySelector(".modal-hide");
var popup = document.querySelector(".modal-show");
var popup = document.querySelector(".modal-search-form");

if (popup) {
    popup.classList.toggle("modal-show");
}

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classlist.toggle("modal-show");    
});