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





// Верхнее выезжающее меню, 320рх

// var openMenu = document.querySelector(".adaptive_menu-btn");
// var showMenu = document.querySelector(".adaptive_modal-menu");
// var closeMenu = document.querySelector(".modal-menu_close");
// var overlay = document.querySelector(".overlay");

// openMenu.addEventListener("click", function(event) {
//   event.preventDefault();
//   showMenu.classList.add("show-modal");
//   overlay.classList.add("show-overlay");
// })

// closeMenu.addEventListener("click", function(event) {
//   event.preventDefault();
//   showMenu.classList.remove("show-modal");
//   overlay.classList.remove("show-overlay");
// })

// overlay.addEventListener("click", function(event) {
//   showMenu.classList.remove("show-modal");
//   overlay.classList.remove("show-overlay");
// })

// window.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     if (showMenu.classList.contains("show-modal")) {
//         showMenu.classList.remove("show-modal");
//         overlay.classList.remove("show-overlay");
//     }
//   }
//   });



// Окно заказа обратного звонка из шапки, 320рх

// var openCallWindow = document.querySelector(".adaptive_call-btn");
// var showCallWindow = document.querySelector(".adaptive_call-menu");
// var headerLogo = document.querySelector(".adaptive_header-logo");

// openCallWindow.addEventListener("click", function(event) {
//   event.preventDefault();
//   showCallWindow.classList.add("show-call-window");
//   overlay.classList.add("show-overlay");

// })

// showCallWindow.addEventListener("mouseleave", function(event) {
//   event.preventDefault();
//   showCallWindow.classList.remove("show-call-window");
//   overlay.classList.remove("show-overlay")
// })


// Модальное окно записи на прием для нескольких кнопок

var openModalEntry = document.querySelectorAll(".btn_sign");
var showModalEntry = document.querySelectorAll(".modal-window_entry");
var closeModalEntry = document.querySelectorAll(".close-entry");
var overlay = document.querySelector(".overlay");

for(var i = 0; i < openModalEntry.length; i++){
  openModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.add("show-entry");
    overlay.classList.add("show-overlay");

  });
};

for(var i = 0; i < closeModalEntry.length; i++){
  closeModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.remove("show-entry");
    overlay.classList.remove("show-overlay");
  });
};



// Модальное окно с запросом цены для нексольких кнопок


var openModalPrice = document.querySelectorAll(".btn_price");
var showModalPrice = document.querySelectorAll(".modal-window_price");
var closeModalPrice = document.querySelectorAll(".close-entry");
var overlay = document.querySelector(".overlay");

for(var i = 0; i < openModalPrice.length; i++){
  openModalPrice[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalPrice[0].classList.add("show-entry");
    overlay.classList.add("show-overlay");

  });
};

for(var i = 0; i < closeModalPrice.length; i++){
  closeModalPrice[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalPrice[0].classList.remove("show-entry");
    overlay.classList.remove("show-overlay");
  });
};

