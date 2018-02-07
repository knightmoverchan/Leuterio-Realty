$(document).ready(function(){
	$("#logout").click(function(){
		logout();
	});
	var user = window.localStorage.getItem("sessionName");
	if(user == null)
	{
		logout();
	}
	$('#username').html(user);
	var photo = window.localStorage.getItem("sessionPhoto");
	$('#agentPhoto').attr("src","http://leuteriorealty.com/dashboard/photos/"+photo);
	var email = window.localStorage.getItem("sessionEmail");
	$('#agentEmail').html(email);;

	function logout()
	{
		window.localStorage.clear();
		window.location.href = "login.html";
	}

	$(".button-collapse").sideNav();
});