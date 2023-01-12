(function($) {

    /**
     * Partners
     */
    $('.partnerCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items:1
            },
    
            600: {
                items: 3
            },
    
            1000: {
                items: 5
            }
        }
    })
    
    /**
     * Contents
     */
    $('.contentCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
    
            600: {
                items: 1
            },
    
            1000: {
                items: 4
            }
        }
    })
})(jQuery)