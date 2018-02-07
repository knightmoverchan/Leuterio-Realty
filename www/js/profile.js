$(document).ready(function(){
	$("#includedContent").load("nav.html");
    $.getScript("js/nav.js");
  	Materialize.updateTextFields();
	var ID = window.localStorage.getItem("sessionIDno");
	var Photo = window.localStorage.getItem("sessionPhoto");
	var Name = window.localStorage.getItem("sessionName");
	var Username = window.localStorage.getItem("sessionUsername");
	var Email = window.localStorage.getItem("sessionEmail");
	var Mobile = window.localStorage.getItem("sessionMobile");
	var City = window.localStorage.getItem("sessionCity");
	var Province = window.localStorage.getItem("sessionProvince");
	var Country = window.localStorage.getItem("sessionCountry");
	var Upline = window.localStorage.getItem("sessionUpline");
	var Team = window.localStorage.getItem("sessionTeam");

	if(Upline == null)
	{
		Upline = "Not Specified";
	}
	if(Team == null)
	{
		Team = "Not Specified";
	}
	$('#agentID').val(ID);
	$('#agentPhoto').attr("src","http://leuteriorealty.com/dashboard/photos/"+Photo);
	$('#agentName').val(Name);
	$('#agentUsername').val(Username);
	$('#agentEmail').val(Email);
	$('#agentMobile').val(Mobile);
	$('#agentCity').val(City);
	$('#agentProvince').val(Province);
	$('#agentCountry').val(Country);
	$('#agentUpline').val(Upline);
	$('#agentTeam').val(Team);

});