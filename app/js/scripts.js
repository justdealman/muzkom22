$(function() {
    svg4everybody();

    $('.js-menu').on('click', function() {
    	var $t = $(this),
			$drop = $('.js-drop'),
			$header = $('.header'),
			$headerMenu = $('.header .nav'),
			$visible = $('.header-vision');

    	if ( !$t.hasClass('is-active') ) {
    		$drop.addClass('is-opened');
    		$t.addClass('is-active');
    		$header.addClass('is-filled');
			$headerMenu.addClass('is-hidden');
			$visible.addClass('is-visible');
		} else {
			$drop.removeClass('is-opened');
			$t.removeClass('is-active');
			$header.removeClass('is-filled');
			$headerMenu.removeClass('is-hidden');
			$visible.removeClass('is-visible');
		}
	});

    var arrowBgPrev = '<button class="slick-arrow slick-prev">' +
            '<svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
              '<path d="M0.292892 8.70711C-0.0976334 8.31658 -0.0976334 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM70 9H1V7H70V9Z"/>' +
            '</svg>' +
        '</button>';
    var arrowBgNext = '<button class="slick-arrow slick-next">' +
            '<svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M69.7071 8.70711C70.0976 8.31658 70.0976 7.68342 69.7071 7.29289L63.3431 0.928932C62.9526 0.538408 62.3195 0.538408 61.9289 0.928932C61.5384 1.31946 61.5384 1.95262 61.9289 2.34315L67.5858 8L61.9289 13.6569C61.5384 14.0474 61.5384 14.6805 61.9289 15.0711C62.3195 15.4616 62.9526 15.4616 63.3431 15.0711L69.7071 8.70711ZM0 9H69V7H0V9Z"/>' +
            '</svg>' +
        '</button>';

    $('.js-slider-juri').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: arrowBgPrev,
        nextArrow: arrowBgNext,
        dots: false,
        cssEase: 'ease',
        speed: 1000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					variableWidth: true
				}
			}
		]
    });

    $mainGallery = $('.js-gallery-main');
	$mainGallery.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev">' +
                '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
					'<path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM21 9H1V7H21V9Z"/>' +
				'</svg>' +
            '</button>',
        nextArrow: '<button class="slick-arrow slick-next">' +
                '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
					'<path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"/>' +
				'</svg>' +
            '</button>',
        dots: false,
        cssEase: 'ease',
        speed: 1000,
		asNavFor: '.js-gallery-preview'
    });

    var $previewGallery = $('.js-gallery-preview');
	$previewGallery.slick({
		slidesToShow: 8,
		slidesToScroll: 1,
        arrows: false,
        dots: false,
        cssEase: 'ease',
        speed: 1000,
		infinite: false,
		variableWidth: true,
		asNavFor: '.js-gallery-main'
    });
	$mainGallery.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		var id = parseInt(nextSlide)+1;
		$previewGallery.find('.gallery-preview__col')
			.removeClass('is-current')
			.filter('[data-id="'+id+'"]')
			.addClass('is-current');
	});

    $('.gallery-preview__col').on('click', function() {
    	var id = parseInt($(this).attr('data-id'))-1;
		$('.js-gallery-main').slick('slickGoTo', id);
	});

    var $introSlider = $('.js-intro');
    $introSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: arrowBgPrev,
        nextArrow: arrowBgNext,
        dots: true,
        cssEase: 'ease',
        speed: 1000,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false
                }
            }
        ]
    });

    var $repertoireSlider = $('.js-repertoire');
    $repertoireSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: arrowBgPrev,
        nextArrow: arrowBgNext,
        dots: false,
        cssEase: 'ease',
        speed: 1000,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }
        ]
    });

    var $timelineSlider = $('.js-timeline-slider');
    if ( $timelineSlider.length > 0 ) {
        var timeline = [];
        $timelineSlider.find('[data-id]').each(function(index, el) {
            timeline.push($(el).attr('data-year'));
        });
        console.log(timeline);
        $timelineSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.js-timeline-prev'),
            nextArrow: $('.js-timeline-next'),
            dots: false,
            cssEase: 'ease',
            speed: 1000,
            infinite: true,
            adaptiveHeight: true
        });
        $timelineSlider.on('afterChange', function(event, slick, currentSlide) {
            $('.js-year-current').text(timeline[currentSlide]);
            var prev,
                next,
                length = timeline.length;

            console.log(currentSlide)

            if ( currentSlide === 0 ) {
                prev = length;
            } else {
                prev = currentSlide - 1;
            }
            $('.js-year-prev').text(timeline[prev]);

            if ( currentSlide === length - 1 ) {
                next = 0;
            } else {
                next = currentSlide + 1;
            }
            $('.js-year-next').text(timeline[next]);
        });
    }

    $('.vacancies-list__title').on('click', function() {
        $(this).toggleClass('is-active');
    });

    function startApp() {
    }

    startApp();

    var lastWidth = $(window).width();
    $(window).on('resize', _.debounce(function() {
        if ( $(window).width() !== lastWidth ) {
            startApp();
            lastWidth = $(window).width();
        }
    }, 100));

    function selectEvent(el) {
        var container = el.parents('.js-card');
        var all = container.find('.js-card-all');

        all.find('.js-card-item').removeClass('is-active');
        el.addClass('is-active');

        var date = container.find('.js-current-date');
        var weekday = container.find('.js-current-weekday');
        var time = container.find('.js-current-time');
        var price = container.find('.js-current-price');

        date.text(el.attr('data-date'));
        weekday.text(el.attr('data-weekday'));
        time.text(el.attr('data-time'));
        price.text(el.attr('data-price'));
    }

    $('.js-card-show-all').on('click', function() {
        var t = $(this);
        var container = t.parents('.js-card');
        var all = container.find('.js-card-all');
        var action = container.find('.js-card-action')

        all.show();
        action.hide();
    });

    $('.js-card-item').on('click', function() {
        var t = $(this);
        var container = t.parents('.js-card');
        var all = container.find('.js-card-all');
        var action = container.find('.js-card-action');

        all.hide();
        action.show();

        selectEvent(t);
    })

    $('.js-sel-event').on('click', function() {
        var t = $(this);
        var container = t.parents('.js-card');
        var all = container.find('.js-card-all');
        var events = all.find('.js-card-item');
        var length = events.length;
        var current = 0;
        var target = 0;

        events.each(function(index, el) {
            if ( $(el).hasClass('is-active') ) {
                current = index;
            }
        });

        if ( t.attr('data-direction') === 'prev' ) {
            if ( current === 0 ) {
                target = length - 1;
            } else {
                target = current - 1;
            }
        }
        if ( t.attr('data-direction') === 'next' ) {
            if ( current === length - 1 ) {
                target = 0;
            } else {
                target = current + 1;
            }
        }

        selectEvent($(events[target]));
    });

    $(window).on('scroll resize', function() {
        var stickyCard = $('.js-card-sticky');

        if ( stickyCard.length > 0 ) {
            var rCol = $('.article__col_rc');
            var content = $('.article');
            var diff;

            if ( rCol.offset().top >= $(document).scrollTop() ) {
                diff = 0;
            } else if ( $(document).scrollTop() > content.offset().top + content.outerHeight() - stickyCard.outerHeight() ) {
                diff = (content.offset().top + content.outerHeight() - rCol.offset().top - stickyCard.outerHeight() )
            } else {
                diff = $(document).scrollTop() - rCol.offset().top;
            }

            stickyCard.css({
                'transform': 'translateY('+diff+'px)'
            });
        }
    });
});
