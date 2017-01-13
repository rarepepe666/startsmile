//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
  var carusel = $(this).parents('.carousel');
  right_carusel(carusel);
  return false;
});

//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
  var carusel = $(this).parents('.carousel');
  left_carusel(carusel);
  return false;
});

function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
    $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {

//Раскомментить строку строку ниже, чтобы включить автоматическую прокрутку 
  auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
  setInterval(function(){
    if (!$(carusel).is('.hover'))
      right_carusel(carusel);
  }, 3000)
}
// курсор на карусели

$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//курсор убран
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


// // Модальное меню



var openMenu = document.querySelector(".adaptive_menu-btn");
var showMenu = document.querySelector(".adaptive_modal-menu");
var closeMenu = document.querySelector(".modal-menu_close");
var overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", function(event) {
  event.preventDefault();
  showMenu.classList.add("show-modal");
  overlay.classList.add("show-overlay");
})

closeMenu.addEventListener("click", function(event) {
  event.preventDefault();
  showMenu.classList.remove("show-modal");
  overlay.classList.remove("show-overlay");
})

overlay.addEventListener("click", function(event) {
  showMenu.classList.remove("show-modal");
  overlay.classList.remove("show-overlay");
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (showMenu.classList.contains("show-modal")) {
        showMenu.classList.remove("show-modal");
        overlay.classList.remove("show-overlay");
    }
  }
  });



var openCallWindow = document.querySelector(".adaptive_call-btn");
var showCallWindow = document.querySelector(".adaptive_call-menu");
var headerLogo = document.querySelector(".adaptive_header-logo");

openCallWindow.addEventListener("click", function(event) {
  event.preventDefault();
  showCallWindow.classList.add("show-call-window");
  overlay.classList.add("show-overlay");

})

showCallWindow.addEventListener("mouseleave", function(event) {
  event.preventDefault();
  showCallWindow.classList.remove("show-call-window");
  overlay.classList.remove("show-overlay")
})


var openModalEntry = document.querySelector(".btn_sign");
var showModalEntry = document.querySelector(".modal-window_entry");
var closeModalEntry = document.querySelector(".close-entry");

openModalEntry.addEventListener("click", function(event) {
  event.preventDefault();
  showModalEntry.classList.add("show-entry");
  overlay.classList.add("show-overlay");
});

closeModalEntry.addEventListener("click", function(event) {
  event.preventDefault();
  showModalEntry.classList.remove("show-entry");
  overlay.classList.remove("show-overlay");
})

overlay.addEventListener("click", function(event) {
  showModalEntry.classList.remove("show-entry");
  overlay.classList.remove("show-overlay");
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (showModalEntry.classList.contains("show-entry")) {
        showModalEntry.classList.remove("show-entry");
        overlay.classList.remove("show-overlay");
    }
  }
  });


var openModalPrice = document.querySelector(".btn_price");
var showModalPrice = document.querySelector(".modal-window_price");
var closeModalPrice = showModalPrice.querySelector(".close-entry");

openModalPrice.addEventListener("click", function(event) {
  event.preventDefault();
  showModalPrice.classList.add("show-entry");
  overlay.classList.add("show-overlay");
});

closeModalPrice.addEventListener("click", function(event) {
  event.preventDefault();
  showModalPrice.classList.remove("show-entry");
  overlay.classList.remove("show-overlay");
})

overlay.addEventListener("click", function(event) {
  showModalPrice.classList.remove("show-entry");
  overlay.classList.remove("show-overlay");
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (showModalPrice.classList.contains("show-entry")) {
        showModalPrice.classList.remove("show-entry");
        overlay.classList.remove("show-overlay");
    }
  }
  });