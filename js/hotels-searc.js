var popup = document.querySelector(".form-main"); 
   
if (popup) {
  popup.classList.toggle("modal-show");
}

var button = document.querySelector(".hotels-search-button");
var form = popup.querySelector("modal-search-form");

button.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    popup.classList.toggle("modal-show");        
});