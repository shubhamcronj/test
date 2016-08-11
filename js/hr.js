if(localStorage.auth == "false" || localStorage.auth == undefined){
	window.location.href = 'index.html';
}

function employee(first, last, age, eid, epass){
	this.first = first;
	this.last  = last;
	this.age   = age;
	this.eid   = eid;
	this.epass = epass;
}

var eArray = new Array();

var logout = function(){
	localStorage.auth == false;
	window.location.href = 'index.html';
}

var view = function(){
	document.getElementById('view_block').style.display = "block";
	document.getElementById('add_block').style.display = "none";
	document.getElementById('remark_block').style.display = "none";
	document.getElementById('eCount').innerHTML = eArray.length;	
}

var search = function(){
	var searchId = document.getElementById('searchId').value;
	l = eArray.length;
	var objKey = "";
	var found = false;
	var index = 0;
	for(i=0;i<l;i++)
	{
		objKey = "eObject"+i;
		var myObject = JSON.parse(localStorage.getItem(objKey));
		if(myObject.eid == searchId)
		{
			alert("Employee Found");
			found = true;
			index = i;

			document.getElementById('dispFirst').innerHTML = myObject.first;
			document.getElementById('dispLast').innerHTML = myObject.last;
			document.getElementById('dispAge').innerHTML = myObject.age;
			document.getElementById('dispFound').style.display = "block";

			break;
		}
	}

	if(!found)
		{
			alert("Not there");
		}
}

var add_emp = function(){
	document.getElementById('view_block').style.display = "none";
	document.getElementById('add_block').style.display = "block";
	document.getElementById('remark_block').style.display = "none";
}

var give_remark = function(){
	document.getElementById('view_block').style.display = "none";
	document.getElementById('add_block').style.display = "none";
	document.getElementById('remark_block').style.display = "block";
}

var regEmployee = function(){
	eFirst = document.getElementById('eFirst').value;
	eLast = document.getElementById('eLast').value;
	eAge = document.getElementById('eAge').value;
	eId = document.getElementById('eId').value;
	ePass = document.getElementById('ePass').value;

	eObj = new employee(eFirst, eLast, eAge, eId, ePass);
	eArray.push(eObj);
	var l = eArray.length - 1;
	eKey = "eObject" + l;
	localStorage.setItem(eKey, JSON.stringify(eObj));
	alert("Successfully Registered")
}