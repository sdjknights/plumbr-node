// Scale in services

var servicesLoaded = false;

window.addEventListener('scroll', function () {
    var element = document.querySelector('#services');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if (servicesLoaded === false) {
        if(position.top < window.innerHeight && position.bottom >= 0) {
            servicesLoaded = true;
            document.getElementById("card1").classList.add("scale-in-center");
            setTimeout(function(){document.getElementById("card2").classList.add("scale-in-center"); }, 100);
            setTimeout(function(){document.getElementById("card3").classList.add("scale-in-center"); }, 200);
        }
    }
});

// Show back-to-top sign

var navShowing = true;

window.addEventListener('scroll', function () {
    var element = document.querySelector('#back-to-top');

    // checking whether fully visible
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
);