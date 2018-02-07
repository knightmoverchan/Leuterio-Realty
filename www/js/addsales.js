$(document).ready(function(){
	$("#includedContent").load("nav.html");
    $.getScript("js/nav.js"); 
	var user = window.localStorage.getItem("sessionName");
	$('#username').val(user);
	$('#username2').val(user);
	$('#s_name').val(user);
	var email = window.localStorage.getItem("sessionEmail");
	$('#s_email').val(email);
	var memberid = window.localStorage.getItem("sessionMemberID");
	$('#s_memberid').val(memberid);


  	Materialize.updateTextFields();
  	$('#agentname').val(user);

	$("select").material_select();
	

	$("#salessource").on("change", function() {
   		var value = $("#salessource").val();
		getSource(value);
	});

	$("#devid").on("change", function() {
   		var value = $("#devid").val();
		getTrans(value);
	});

	$("#projid").on("change", function() {
   		var value = $("#projid").val();
		getRent(value);
	});

	$("#status").on("change", function() {
   		var value = $("#status").val();
		partial(value);
	});

	function getSource(val)
	{
		if (val > 0)
		{
			document.getElementById('sour').style.display="block";
			document.getElementById('trns').style.display="block";
			
			if (val == 1)
			{
				document.getElementById('trnslistlabel').innerHTML="Projects Name :"; 
				document.getElementById('cplabel').innerHTML="Total Contract Price :";
			}
			else if (val == 2)
			{
				document.getElementById('trnslistlabel').innerHTML="Transaction Name :";
				//document.getElementById('cplabel').innerHTML="Amount of Commission:";
			}

			var pass;
			$( "#devid" ).html("<option>Loading...</option>");
			$("#devid").material_select();

			$( "#projid" ).html("");
				$.ajax({
					type: "POST",
					url: "http://leuteriorealty.com/dashboard/developers-dropdown-list.php",
					data: { getfrom: val },
					crossDomain: true,
					cache: false,
					success: function(data)
					{	
						if ( data != "" )
						{
							$( "#devid" ).html(data);
							$("#devid").material_select();
						}
					}
				});
		}
		else
		{
			document.getElementById('sour').style.display="none";
			document.getElementById('trns').style.display="none";
			document.getElementById('trnslistlabel').innerHTML="";
			$( "#devid" ).html("");
			$( "#projid" ).html("");
		}
	}
	
	function getTrans(val){
		$( "#projid" ).html("<option>Loading...</option>");
		$("#projid").material_select();

		$.ajax({
			type: "POST",
			url: "http://leuteriorealty.com/dashboard/projects-dropdown-list.php",
			data: { devid: val }
		}).done(function( msg ) {
			if ( msg != "" ){
				$( "#projid" ).html(msg);
				$("#projid").material_select();

			}
		});
	}
	
	function getRent(val){
		if (val == 14){
			document.getElementById('cplabel').innerHTML="Amount of Commission:";
		}else{
			document.getElementById('cplabel').innerHTML="Total Contract Price :";
		}

	}
	
	function computetotal(val)
	{
		if (document.getElementById('devtitle').innerHTML == "Brokerage :")
		{
			var proj = document.getElementById('projid').value.split(',');
			if (proj[1] == 0 && proj[2] > 0)
			{
				document.getElementById('tcprice').value = val / proj[2];
			}
		}
	}
	function partial(val){
		if(val=="Partially Claimed"){
			document.getElementById('partialclaimed_show').style.display="block";
		}else{
		
			document.getElementById('partialclaimed_show').style.display="none";
		}
	}

	$('.datepicker').each(function(){
  	var pickr = $(this).pickadate({
      format: 'mm/dd/yyyy',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 5, // Creates a dropdown of 15 years to control year
      editable: true
    });
    
    $(this).click(function(){
    	pickr.pickadate('open');
    });
  })

    $("select[required]").css({
      display: "inline",
      height: 0,
      padding: 0,
      width: 0
    });


	$("#submitSales").submit(function(e)
	{
		// var postData = $(this).serializeArray();
		var data = new FormData(this);
		$.ajax(
		{
			url : 'http://leuteriorealty.com/dashboard/phone-salesadd.php',
			type: "POST",
			data : data,
		    cache: false,
		    contentType: false,
		    processData: false,
			success:function(data) 
			{
				if(data == 1)
				{
					pass ="<div class='card red' style='text-align:center;margin:10px;'><div class='card-content white-text'>Sales entry cut-off! Encode your sales after 5th of the month. </div></div>";
					alert = "Sales entry cut-off! Encode your sales after 5th of the month.";
				}
				else if(data == 2)
				{
					pass = "<div class='card red' style='text-align:center;margin:10px;'><div class='card-content white-text'>Sales entry invalid! Reservation date is ahead of time. </div></div>";
					alert = "Sales entry invalid! Reservation date is ahead of time.";
				}
				else if(data == 3)
				{
					pass = "<div class='card orange' style='text-align:center;margin:10px;'><div class='card-content white-text'>Your sale already exists!</div></div>";
					alert = "Your sale already exists!";
				}
				else if(data == 4)
				{
					pass = "<div class='card green' style='text-align:center;margin:10px;'><div class='card-content white-text'>Your sale has been recorded successfully!</div></div>";
					alert = "Your sale has been recorded successfully!";
				}
				else if(data == 5)
				{
					pass ="<div class='card red' style='text-align:center;margin:10px;'><div class='card-content white-text'>Sales entry invalid! Please encode your sales on time.</div></div>";
					alert = "Sales entry invalid! Please encode your sales on time.";
				}
				
				$('#errorAlert').html(pass);
				Materialize.toast(alert, 5000);

				if(data==4)
				{
					window.location.replace('mysales.html');
				}
			},


		});
		e.preventDefault();
	});

});


