const words = ["web designer", "freelancer",];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function () {
		if (word.length > 0) {
			document.getElementById('word-braking').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 300);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function () {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word-braking').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();


$(document).ready(function () {
	$("#send").on("click", function (e) {
		e.preventDefault();

		let name = $("#name").val();
		let mail = $("#mail").val();
		let subject = $("#subject").val();
		let message = $("#message").val();

		$('.error').remove();


		if (name === "") {
			$("#name").after('<span class="error">Enter Your Your Name</span>');
			$('.error').fadeOut(5000);

		} if (mail === "") {
			$("#mail").after('<span class="error">Enter Your Email</span>');
			$('.error').fadeOut(5000);

		} else if (!isEmail(mail)) {
			$("#mail").after('<span class="error">Enter Your Email Address</span>');
			$('.error').fadeOut(5000);

		} if (message === "") {
			$("#message").after('<span class="error">Enter Your Message</span>');
			$('.error').fadeOut(5000);

		} if (subject === "") {
			$("#subject").after('<span class="error">Enter Your Subject</span>');
			$('.error').fadeOut(5000);

		} else {
			$("#name").val("");
			$("#mail").val("");
			$("#subject").val("");
			$("#message").val("");
			//  alert("Thank You!!"+" "+firstname+" "+lastname);
		}

		return false


	});


	function isEmail(mail) {
		let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(mail);
	};

	var inp = $("input[name='tel'] ");

	var count = 0;
	inp.bind('keyup', function () {
		count++;
		this.value = this.value.replace(/[^0-9]/, '');

	});

});



// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     function onScroll(event) {
// 		var scrollPos = $(document).scrollTop();
// 		$('#navbarSupportedContent a').each(function () {
// 			var currLink = $(this);
// 			var refElement = $(currLink.attr("href"));
			
// 			if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
// 				$('#navbarSupportedContent ul li a').removeClass("active");
// 				currLink.addClass("active");
// 			} else {
// 				currLink.removeClass("active");
// 			}
// 		});
// 	}

// });





$(window).scroll(function() {     
	var scroll = $(window).scrollTop();     
	if (scroll > 200) { 
		$(".home-page").addClass("fixed"); 
	} 
	else {
	$(".home-page").removeClass("fixed"); 
	}
  })










  // one page scroll section
    jQuery(function($){
        var topMenuHeight = $(".home-page").outerHeight();
        $(".navbar-collapse").menuScroll(topMenuHeight);
      });
      
      // COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
      jQuery.fn.extend({
          menuScroll: function(offset) {
          // Declare all global variables
              var topMenu = this;
          var topOffset = offset ? offset : 0;
              var menuItems = $(topMenu).find('a[href*="#"]');
              var lastId;
        
          // Save all menu items into scrollItems array
              var scrollItems = $(menuItems).map(function() {
                  var item = $($(this).attr("href"));
                  if (item.length) {
                      return item;
                  }
              });
      
          // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
              $(topMenu).on("click", 'a[href*="#"]', function(e){
                  var href = $(this).attr("href");
                  
                  var offsetTop = href === "#" ? 0 : $(href).offset().top-topOffset;
      
                  $('html, body').stop().animate({ 
                      scrollTop: offsetTop
                  }, 100);
                  e.preventDefault();
      
              });
          
          // When page is scrolled
              $(window).scroll(function(){
                  var nm = $("html").scrollTop();
                  var nw = $("body").scrollTop();
                  var fromTop = (nm > nw ? nm : nw)+topOffset + 10;
      
            
            // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                  var current = $(scrollItems).map(function(){
                      if ($(this).offset().top <= fromTop && $(this).offset().top + (this).height() > fromTop)
                      return this;
                  });
            
            // Get the most recent passed section from current array
                  current = current[current.length-1];
                  var id = current && current.length ? current[0].id : "";
                  if (lastId !== id) {
                      lastId = id;
                      // Set/remove active class
                      $(menuItems)
                      .parent().removeClass("active")
                      .end().filter("[href='#"+id+"']").parent().addClass("active");
                  }      
      
              });
          }
      });
    
    

