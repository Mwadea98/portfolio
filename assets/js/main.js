(function($) {
	"use strict";
    // Portfolio subpage filters
    function portfolio_init() {
    	var portfolio_grid = $('.portfolio-grid'),
    	portfolio_filter = $('.portfolio-filters');

    	if (portfolio_grid) {

    		portfolio_grid.shuffle({
    			speed: 450,
    			itemSelector: 'figure'
    		});

    		portfolio_filter.on("click", ".filter", function (e) {
    			portfolio_grid.shuffle('update');
    			e.preventDefault();
    			$('.portfolio-filters .filter').parent().removeClass('active');
    			$(this).parent().addClass('active');
    			portfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
    		});

    	}
    }
    $(document).ready(function(){

    	var $portfolio_container = $(".portfolio-grid");
    	$portfolio_container.imagesLoaded(function () {
    		portfolio_init(this);
    	});
    });

    $('body').magnificPopup({
        delegate: 'a.lightbox',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
            titleSrc: 'title',
            gallery: {
                enabled: true
            },
        },

        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
                  '</div>',
            patterns: {
                youtube: {
                  index: 'youtube.com/',
                  id: null, 
                  src: '%id%?autoplay=1'
                },
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                  index: '//maps.google.',
                  src: '%id%&output=embed'
                }
            },
            srcAction: 'iframe_src',
        },
        callbacks: {
            markupParse: function(template, values, item) {
             values.title = item.el.attr('title');
            }
        },
    });
})(jQuery);
