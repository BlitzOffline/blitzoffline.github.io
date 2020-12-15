$(document).ready(function(){
	$("#backtotop").hide();
	$(function toTop() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 10) {
				$('#backtotop').fadeIn();
			} else {
				$('#backtotop').fadeOut();
			}
		});

		$('#backtotop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});			
	});



// ARATA/ASCUNDE VIDEO



$("#myButton1").click(function(){
  var elem = document.getElementById("myButton1");
  var x = document.getElementById("video1");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});


$("#myButton2").click(function(){
  var elem = document.getElementById("myButton2");
    var x = document.getElementById("video2");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});



$("#myButton3").click(function(){
  var elem = document.getElementById("myButton3");
  var x = document.getElementById("video3");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});


$("#myButton4").click(function(){
  var elem = document.getElementById("myButton4");
  var x = document.getElementById("video4");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});


$("#myButton5").click(function(){
  var elem = document.getElementById("myButton5");
  var x = document.getElementById("video5");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});


$("#myButton6").click(function(){
  var elem = document.getElementById("myButton6");
  var x = document.getElementById("video6");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});




$("#myButton7").click(function(){
  var elem = document.getElementById("myButton7");
  var x = document.getElementById("video7");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});



$("#myButton8").click(function(){
  var elem = document.getElementById("myButton8");
  var x = document.getElementById("video8");
  if (elem.value=="Hide video ▼") elem.value = "Show video ►";
  else elem.value = "Hide video ▼";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});





// CONTACTS SLIDE DOWN or UP ON CONTACTS CLICK
  $("#navbuttoncontact").click(function(){
    $("#dropdown-content").slideToggle("slow");
  });

// CONTACTS SLIDE UP ON CONTENT CLICK

  $("#content").click(function(){
    $("#dropdown-content").slideUp("slow");
  });




// DESCHIDE PAGINA FACEBOOK

function openFacebook() {
  window.open("https://facebook.com").then(function() {
  }, function() {
    /* alerta in caz de esuare */
    swal("FAILED", "Something went wrong!");
  });
}





$(document).ready(function(){
  $( ".facebook" ).click(function() {
      openFacebook();
  });
});





$(document).ready(function(){
  $( ".facebook" ).click(function() {
      openFacebook();
  });
});


// COPIAZA ADRESA GMAIL

function copyGmail() {
  navigator.clipboard.writeText("email@gmail.com").then(function() {
    /* alerta in caz de succes */
    swal("Gmail Copied!", "Gmail has been copied to your clipboard!", "success");
  }, function() {
    /* alerta in caz de esuare */
    swal("FAILED", "Something went wrong!");
  });
}

$(document).ready(function(){
  $( ".gmail" ).click(function() {
      copyGmail();
  });
});


// COPIAZA NUMAR TELEFON

function copyPhone() {
  navigator.clipboard.writeText("phonenumber").then(function() {
    /* alerta in caz de succes */
    swal("Phone Number Copied!", "The phone number has been copied to your clipboard!", "success");
  }, function() {
    /* alerta in caz de esuare */
    swal("FAILED", "Something went wrong!");
  });
}

$(document).ready(function(){
  $( ".phone" ).click(function() {
      copyPhone();
  });
});

let d = new Date();
$('.yearname').text(`${d.getFullYear()} @ Ruben Popus`);
