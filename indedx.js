$(document).ready(function() {
	
	$(`#about`).click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".about").offset().top
		}, 1000,"swing");
		$('nav').animate({right:'-102%'},1000)
		$('#menu__toggle')=unchecked;
	});
	$(`#projects`).click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".projects").offset().top
		}, 1000,"swing");
	});
	$(`#contacts`).click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".contacts	").offset().top
		}, 1000,"swing");
	});
	
	$('.button1').click(function(){	
		var img = new Image;
		img.src = './img/WanCloseCranefly.webp';
		$('.button1').before(img);
		$('.contacts1>img').addClass('cat')
		console.log(img);
		timeout = setTimeout( function run() {
		$('.cat').animate({
			left:'+=4rem'
		},300)
		console.log('1')
		runrec = setTimeout(run, 100);
		console.log('2')
		console.log($('.cat').css('left'))
	}, 500);
});

$(`#a`).click(function(event){
	event.preventDefault()
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".logo").offset().top
		}, 1000,"swing");
		console.log('hui')
	});

	$(window).scroll(function(event){
		console.log(window.scrollY)
	if (window.scrollY>150){
		$('.up').addClass('op')
		
	}
	else if(window.scrollY<150){
		$('.up').removeClass('op')
	}
})


	

	// FORM
	window.addEventListener("DOMContentLoaded", function() {

		// get the form elements defined in your form HTML above
		
		var form = document.getElementById("my-form");
		var button = document.getElementById("my-form-button");
		var status = document.getElementById("my-form-status");
	
		// Success and Error functions for after the form is submitted
		
		function success() {
		  form.reset();
		  button.style = "display: none ";
		  status.innerHTML = "Thanks!";
		}
	
		function error() {
		  status.innerHTML = "Oops! There was a problem.";
		}
	
		// handle the form submission event
	
		form.addEventListener("submit", function(ev) {
		  ev.preventDefault();
		  var data = new FormData(form);
		  ajax(form.method, form.action, data, success, error);
		});
	  });
	  
	  // helper function for sending an AJAX request
	
	  function ajax(method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function() {
		  if (xhr.readyState !== XMLHttpRequest.DONE) return;
		  if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		  } else {
			error(xhr.status, xhr.response, xhr.responseType);
		  }
		};
		xhr.send(data);
	  }
})