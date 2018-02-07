$(document).ready(function(){
	$("#login").html("Login");

	$("#mybtn").click(function(){
		login();
	});

  	Materialize.updateTextFields();
  	
	function login()
	{
		var user=$("#user").val();
		var pass=$("#pass").val();
		var url = "http://leuteriorealty.com/dashboard/phone-login.php";
		if($.trim(user).length>0 & $.trim(pass).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: {user:user,pass:pass},
				crossDomain: true,
				cache: false,
				beforeSend: function(){
				  $("#login").html('Logging in...');
				},
				success: function(data)
				{	
					var obj = JSON.parse(data);
					if(obj[0] == 3)
					{	
						localStorage.login="true";
						window.localStorage.setItem("logUsername", user);
						window.localStorage.setItem("logUserpass", pass);
						window.localStorage.setItem("sessionID", obj[1]);
						window.localStorage.setItem("sessionIDno",obj[2]);
						window.localStorage.setItem("sessionPhoto", obj[3]);
						window.localStorage.setItem("sessionMemberID",obj[4]);
						window.localStorage.setItem("sessionUsername", obj[5]);
						window.localStorage.setItem("sessionEmail",obj[6]);
						window.localStorage.setItem("sessionMobile", obj[7]);
						window.localStorage.setItem("sessionCity",obj[8]);
						window.localStorage.setItem("sessionProvince",obj[9]);
						window.localStorage.setItem("sessionCountry",obj[10]);
						window.localStorage.setItem("sessionName",obj[11]);
						window.localStorage.setItem("sessionUpline",obj[12]);
						window.localStorage.setItem("sessionTeam",obj[13]);

						window.location.replace("dashboard.html");
					}
					else if(obj[0] == 1)
					{
						$("#error").attr('class', 'alert alert-warning');
						$('#error').html("Expired account");
					}
					else if(obj[0] == 4)
					{
						$("#error").attr('class', 'card red');
						$('#errorText').html("Account doesnt exist!");
					}
					else if(obj[0] == 2)
					{
						$("#error").attr('class', 'card red');
						$('#errorText').html("Wrong Password!");
					}
					$("#login").html("Login");

				}, error: function(data){
				}
			});
		}return false;
	}


	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	    $('#showhide').html("Hide");
	  } else {
	    input.attr("type", "password");
	    $('#showhide').html("Show");

	  }
	});


});

