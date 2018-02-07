$(document).ready(function(){
	$("#includedContent").load("nav.html");
    $.getScript("js/nav.js"); 
  	Materialize.updateTextFields();
	var memberid = window.localStorage.getItem("sessionMemberID");

	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

	    for (i = 0; i < sURLVariables.length; i++) 
	    {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	var sid = getUrlParameter('id');
	$.ajax({
		type: "POST",
		url: "http://leuteriorealty.com/dashboard/phone-membersales_det.php",
		dataType:'json',
		enctype: 'multipart/form-data',
		data: { memberid: memberid, sid:sid }
	}).done(function( data ) {
		// Materialize.updateTextFields();
		// $('#salesID').val(data[0]);
		// Materialize.updateTextFields();

		$('#salesPOT').attr("src","http://leuteriorealty.com/dashboard/"+data[1]);
		Materialize.updateTextFields();

		// $('#salesName').val(data[2]);
		// Materialize.updateTextFields();

		$('#salesClient').val(data[3]);
		Materialize.updateTextFields();

		$('#salesUnit').val(data[4]);
		Materialize.updateTextFields();

		$('#salesDeveloper').val(data[5]);
		Materialize.updateTextFields();

		$('#salesProject').val(data[6]);
		Materialize.updateTextFields();

		$('#salesQty').val(data[7]);
		Materialize.updateTextFields();

		$('#salesTcp').val(data[8]);
		Materialize.updateTextFields();

		$('#salesResDate').val(data[9]);
		Materialize.updateTextFields();

		$('#salesTerm').val(data[10]);
		Materialize.updateTextFields();

		if(data[11] != "")
		{
			$('#notesView').show();
			$('#salesNotes').val(data[11]);
			Materialize.updateTextFields();
		}
		else
		{
			$('#notesView').hide();
		}
		

		$('#salesStatus').val(data[12]);
		Materialize.updateTextFields();

		$('#salesDateAdd').val(data[13]);
		Materialize.updateTextFields();


	});


});



