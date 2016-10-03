// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

$(document).on('page:change', function() {
	if ($(".alert").length > 0){
		$(".alert").delay(3000).fadeOut()
	}
	
	$('body').click(function(){
		if ($("#PrivacyInfo").is(':visible')) {			
    	    $('body').css("cursor","auto");
  			$("#PrivacyInfo").fadeOut(150);
  		}
	});

	$('#ShowPrivacyInfo').click(function (event) {
    	  $('body').css("cursor","pointer");
		  $("#PrivacyInfo").fadeIn(150);
		  event.preventDefault(); // Prevent link from following its href
		  return false;
	});


  var reviews = [
  '“[A] rugged, tenacious story. The ending, meanwhile, satisfies on every level.” —Kirkus Reviews',
  '“[I] simply let it take me on a wild, extraterrestrial ride.” —Anne Elisabeth Stengl, award-winning author',
  '“A real page-turner, reminiscent of both The Hundred and Doctor Who.” —India Edghill, author',
  '“[E]xtremely engaging. I can’t wait to read a sequel.” —Hannah Alexander, author'];
  

  function rotateTerm() {
    if ($(".review").length){
      var ct = $(".reviewtext").data("term") || 0;
      $(".reviewtext").data("term", ct == reviews.length -1 ? 0 : ct + 1).text(reviews[ct]).fadeIn()
            .delay(4500).fadeOut(200, rotateTerm);
    }
  }
  $(rotateTerm);
});