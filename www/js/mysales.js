$(document).ready(function(){
  	Materialize.updateTextFields();
	$("#includedContent").load("nav.html");
    $.getScript("js/nav.js"); 

	var memberid = window.localStorage.getItem("sessionMemberID");
	$.ajax({
		type: "POST",
		url: "http://leuteriorealty.com/dashboard/phone-membersales.php",
		data: { memberid: memberid }
	}).done(function( data ) {
		if ( data != "" ){
			var arr = data.split('@');
			$( "#totalsales" ).html(arr[0]);
			$( "#listSales" ).html(arr[1]);
		}
	});

});