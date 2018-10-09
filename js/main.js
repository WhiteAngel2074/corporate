jQuery(document).ready(function () {
    "use strict"

    $('#slider-carousel').carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        auto: true,
        swipe: {
            onMouse: true,
            onTouch: true
        },
        items: {
            width: 400,
            height: 'variable',
            visible: {
                min: 1,
                max: 1
            }
        },
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true
        }

    })
})