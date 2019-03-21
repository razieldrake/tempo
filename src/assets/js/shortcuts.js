

/*!
be-ys - shortcuts 1.4.1 - http://ux.almerys.com/
*/

var isG = false;

$(document).keydown(function(e)
{
	if (e.which == 71 || e.keyCode == 71)
	{ 
		isG = true;
	}
}).keyup(function(e)
{
	if ($('input:focus').length > 0 || $('textarea:focus').length > 0 || isG != true)
	{ 
		isG = false;
		
		return false;
	}
	if (e.keyCode == true)
	{
		var key = e.keyCode;
	}
	else 
	{
		var key = e.which;
	}
	switch (key)
	{	
		// G + C open/closed Contacter le support
		case 67:
			$('#Support').click();
			return false;
			break;
		// G + F fullscreen
		case 70:
			$('#btn-full').click();
			return false;
			break;
		// G + H back to home
		case 72:
			window.location.href = "/";
			return false;
			break;
		// G + I open modal ML
		case 73:
			$("#MentionsLegales").modal();
			return false;
			break;
		// G + K open header accessibility
		case 75:
			if ($(".site").hasClass("accessibility-active")) {
					$(".site").removeClass("accessibility-active");
					$(".accessibility").removeClass("active");
				}
			else{
				$(".site").addClass("accessibility-active");
				$(".accessibility").addClass("active");
			}
			return false;
			break;
		// G + L choix langue
		case 76:
			$('#Language').click();
			return false;
			break;
		// G + N open/closed sidebar
		case 78:
			$('.nav-icon').click();
			return false;
			break;
		// G + R centre de confiance numérique
		case 82:
			$('#RGPD').click();
			return false;
			break;
		// G + U open/closed user
		case 85:
			$('#User').click();
			return false;
			break;
		// G + X close modal
		case 88:
			$(".modal").modal('hide');
			$(".site").removeClass("accessibility-active");
			return false;
			break;
		// G + enter go search page
		case 13:
			window.location.href = "../../search_views/0.0.7/index.html";
			return false;
			break;
	}

	isG = false;
});