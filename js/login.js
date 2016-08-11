// declaring hr userid and password
var hr_id = "cronj";
var hr_pass = "hr";
localStorage.setItem("auth", false);
// authentication function
function authenticate()
{
	var id = document.getElementById("id").value;
	var pass = document.getElementById("pass").value;
	if(id == hr_id && pass == hr_pass)
	{
		window.location.href = 'hr.html';
		localStorage.setItem("auth", true);
	}
	else
	{
		alert("Wrong Credentials");
	}
}