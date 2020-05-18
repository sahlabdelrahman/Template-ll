$(document).ready(function(){

    // Sticky Navbar
    $(window).on('scroll', function(){
        if($(window).scrollTop() >= '100') {
            $('header').addClass('navbar-fixed');
        } else {
            $('header').removeClass('navbar-fixed');
        }
    })

    // testimonial carousel
    
    $('.owl-carousel').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    })
  });

  // Google Maps Settings

  var map,
      markers = [
          {
              position: {lat: 30.0444, lng: 31.2357},
              title: 'Cairo',
              info: 'This is Captial'
          },
          {
            position: {lat: 31.2001, lng: 29.9187},
            title: 'Alex',
            info: 'Alexandria is a Mediterranean port city '
          },
          {
            position: {lat: 29.3084, lng: 30.8428},
            title: 'Faiyum',
            info: 'Faiyum is a city in Middle Egypt'
          }
      ];

      function initMap() {
        map = new google.maps.Map(document.getElementById('mapBox'), {
          center: {lat: 30.0444, lng: 31.2357},
          zoom: 7,
        });

        markers.forEach(loc => {
            var marker = new google.maps.Marker({
                position: loc.position,
                title: loc.title,
                map: map
            });

            var infowindow = new google.maps.InfoWindow({
                content: loc.info
            });

            marker.addListener('click', function(){
                infowindow.open(map, marker);
            });
        });

      };