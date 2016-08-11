if(localStorage.auth == "false"){
	alert("BYE");
	window.location.href = 'index.html';
}
else
alert("HI");

var logout = function(){
	localStorage.auth == false;
	window.location.href = 'index.html';
}