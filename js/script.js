// Плавний Якорь
$(document).ready(function(){
    $(".btn").on("click","a", function (event) { //обєкто по якому клікаєм
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500); // 1500 - швидкість скорла
    });
});


// Slick-slider
$(document).ready(function(){
  $('.slider').slick({
     dots: true, // ідекатори (кружки)
     arrows: true,// стрілки
     // prevArrow: "<button type="button" class="slick-prev">Previous</button>",// стрілка назад
     // nextArrow: "<button type="button" class="slick-prev">Previous</button>",// стралка вперед
	  infinite: false,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 425,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});

// init wow.js
new WOW().init();



// submit form to email
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$(document).ready(function () {
	$('.popup__link').magnificPopup();
})