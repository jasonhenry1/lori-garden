//Image slider 
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
        lazyLoad: 'nearby',
        heightRatio: 0.3,
        cover: true,
        width: "100%",
	} ).mount();
} );