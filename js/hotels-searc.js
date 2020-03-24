var popup = document.querySelector(".modal-show"); 
   
if (popup) {
  popup.classList.toggle("modal-hide");
}

var button = document.querySelector(".hotels-search-button");
var form = popup.querySelector("modal-search-form");

button.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    popup.classList.toggle("modal-hide");        
});