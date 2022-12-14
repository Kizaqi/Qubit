$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
  });
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
//   $('.content .owl-carousel ').owlCarousel({
//     rtl:false,
//     loop:true,
//     margin:10,
//     nav:true,
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:2
//         }
//     }
// }
// );

// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
// $('.next').click(function() {
//     owl.trigger('next.owl.carousel');
// })

// $('.previous').click(function() {
//     owl.trigger('prev.owl.carousel', [300]);
// })

  
burgerMenu('.burger-menu');
  
