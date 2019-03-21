/* Button Navbar - Fermer/Ouvrir sidebar */
$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function(){
		$('.nav-icon').click(function(){
				$('.site').toggleClass('sidebar-close');
		})
})