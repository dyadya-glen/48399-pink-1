var mainNav = document.querySelector(".main-nav"),
show = mainNav.querySelector(".main-nav__toggle"),
clased = mainNav.querySelector(".main-nav__clased"),
navList = mainNav.querySelector(".main-nav__items"),
control = document.querySelectorAll(".reviews__slider-control"),
review = document.querySelectorAll(".review");

show.addEventListener("click", function (event) {
  event.preventDefault();
  mainNav.classList.add("main-nav--show");
  navList.classList.add("main-nav__items--show");
  show.classList.remove("main-nav__toggle--show");
  clased.classList.remove("main-nav__clased--show");
});

clased.addEventListener("click", function (event) {
  event.preventDefault();
  mainNav.classList.remove("main-nav--show");
  navList.classList.remove("main-nav__items--show");
  show.classList.add("main-nav__toggle--show");
  clased.classList.add("main-nav__clased--show");
});

// for (var i = 0; i < control.length; i++) {
//   control[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     for (var j = 0; j < review.length; j++) {
//       if (review[j].classList.contains("review--show")) {
//         review[j].classList.remove("review--show");
//       }
//       else {
//         review[j++].classList.add("review--show");
//       }
//     }
//   });
// }

///////////////////////КАРТА/////////////////////////////
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.936128,30.3210702)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "../img/icons/icon../img/icons/icon-map-marker.svg";
  var myLatLng = new google.maps.LatLng(59.936128,30.3210702);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
