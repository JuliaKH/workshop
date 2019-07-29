import './slider.scss'

import "../../../../assets/img/slider/health.jpeg";
import "../../../../assets/img/slider/diet.jpg";
import "../../../../assets/img/slider/veget.jpg";
import "../../../../assets/img/slider/sets.jpg";

import "owl.carousel2/dist/assets/owl.carousel.css";
import "owl.carousel2";

$('.slider-block').owlCarousel({
    items: 1,
    dots: true,
    loop: false,
    nav: true,
    navText: ['']
});
