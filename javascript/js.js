
//Bootstrap carousel
$('.carousel').carousel({
    interval: 4000
});

//Gallery lightbox
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true      
});


//Scroll to top
$(document).ready(function(){        
    $("#back-top").hide();
        
        $(function (){
            $(window).scroll(function (){
                if ($(this).scrollTop() > 100){
                    $('#back-top').fadeIn();
                } else{
                    $('#back-top').fadeOut();
                }
            });

            $('#back-top a').click(function (){
                $('body,html').animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
    });


//Google map

function myMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 34.0201797, lng: -118.6926039}
  });
}

$(function() {
  var $modal = $('#topMap'),
    $map = $('#map');
  $modal.on('shown.bs.modal', function () {
    google.maps.event.trigger($map[0], 'resize');
  });
});


$(".modal").on("show.bs.modal", function(){
    var $bodyWidth = $("body").width();
    $("body").css({'overflow-y': "hidden"}).css({'padding-right': ($("body").width()-$bodyWidth)});
});

$(".modal").on("hidden.bs.modal", function(){
    $("body").css({'padding-right': "0", 'overflow-y': "auto"});
});







//Wrapper-aside



// // $(document).ready (function(){
// //     $("#home").click(function() {
// //         $("#about").fadeIn('slow');
// //     });
// // });

// $('.iconTop').click (
//     function(e){
//         var iconName = e.currentTarget.className;
//         iconName = iconName.replace('fa ', '')
//                            .replace ('nav-icon', '')
//                            .replace('iconTop', '')
//                            .trim();
//         // $('.aside-layer').fadeIn('slow');
//         // $('#home1').hide(); 
//         //   $('#about2').hide();
//         //      $('#service3').hide();   
//         //         $('#message4').hide();   
//         //           $('#instagram5').hide();   
//         //             $('#calendar6').hide();   
//         //               $('#world7').hide();   
//         //                 $('#map8').hide();        
//         switch (iconName) {
//             case 'fa-home':
//                 $('#home1').fadeIn('slow');             
//                 break;
//             case 'fa-user-circle-o':
//                 $('#about2').show();             
//                 break;
//             case 'fa-life-ring':
//                 $('#service3').show();             
//                 break;
//             case 'fa-envelope-o':
//                 $('#message4').show();             
//                 break;
//             case 'fa-instagram':
//                 $('#instagram5').show();             
//                 break;
//             case 'fa-calendar':
//                 $('#calendar6').show();             
//                 break;
//             case 'fa-globe':
//                 $('#world7').show();             
//                 break;
//             case 'fa-map-marker':
//                 $('#map8').show();             
//                 break;
//         }                   
        
//     }
    
// );

// $('.close').click (
//     function(){
//         $('.aside-layer').fadeOut('slow');
//     }
// );


