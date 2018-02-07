$(document).ready(function(){
    $("#includedContent").load("nav.html");
    $.getScript("js/nav.js"); 

	toppersFunc(1);

	$("#toppers2").click(function(){
		toppersFunc(2);
	});

	$("#teamtoppers").click(function(){
		toppersFunc(3);
	});
	$("#teamtoppers2").click(function(){
		toppersFunc(4);
	});


    function toppersFunc(num)
    {
    	$.ajax({
		type: "POST",
		url: "http://leuteriorealty.com/dashboard/phone-toppers.php",
		dataType:'json',
		data: { num: num }
		}).done(function( data ) {
			if(num == 1)
			{
				 $("#toppersView").html(data);
			}
			if(num == 2)
			{
				 $("#toppersView2").html(data);
			}
			if(num == 3)
			{
				$("#teamtoppersView").html(data);
			}
			if(num == 4)
			{
				$("#teamtoppersView2").html(data);
			}

		});
    }

});