// iPhone pull addressbar
/mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);


// Preloader - Hide content until the page is fully loaded
    $(document).ready(function() {
        $(window).load(function() {
          // When the page has loaded
            $("#preloader").fadeOut(); // fade out preloader   
            $("#master-wrap").fadeTo("slow", 1); // fade in content
	    });
    });


// Smooth Scroll
    $(document).ready(function() {
        $('.nav a').smoothScroll({offset: 0});    // Menu
	    $('.back-top a').smoothScroll({offset: 0}); // To Top
	});
    

// Bootstrap Modules
    jQuery(document).ready(function () {
        $('[data-spy="scroll"]').scrollspy({ offset: 0 }); // Scrollspy offset
        $("[rel=tooltip]").tooltip(); // Tooltip
        $("[rel=popover]").popover(); // Popover
    });
	
	
// Carousel	Auto
    jQuery(document).ready(function() {
		$('#myCarousel.slide').carousel({
		    interval: 6000,
			    cycle: true
		    });
		});
	var $ = jQuery.noConflict();
		

//Convert Address tags into a map link
	jQuery(document).ready(function () {
        $('address').each(function () {
            var link = "<a href='http://maps.apple.com/?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
            $(this).html(link);
        });
    });


//Convert Address into an embedded map
    jQuery(document).ready(function(){
      $(".mapaddress").each(function(){                        
        var embed ="<iframe width='425' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
          $(this).html(embed);                               
       });
    });

		
// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").toggle(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});



// Fancybox Control
    		$(document).ready(function() {
    		
    			$("a.fancybox").fancybox({
    				'titlePosition'		: 'outside',
    				'overlayColor'		: '#000',
    				'overlayOpacity'	: 0.9    			
    			});
    			
			    $("a[rel=fancybox_gallery]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				    }
			    });  
			    
                $(document).ready(function() {
                $('.fancybox.video').fancybox({
                    'overlayColor'		: '#000',
    				'overlayOpacity'	: 0.6,
                    'padding': 0, //optional
                    'width': 960, //or whatever
                    'height': 540, //or whatever
                    'type': 'iframe'
                    });
                }); //ready
			      	
			});	