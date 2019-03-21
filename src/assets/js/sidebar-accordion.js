// Sidebar Accordion 
$(".sidebar-nav .sub-menu > a").click(function(e) {
	$(".sidebar-nav ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
	e.stopPropagation()
})
$('.sidebar-nav .sub-menu > a').click(function(){
	var href = $(this).attr('href'); 
	$('.opened').removeClass('opened');
	$( this ).parent().addClass( "opened" );
})