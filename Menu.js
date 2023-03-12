let MenuData='\
<button onclick="AboutUs()">About App</button>\
<button onclick="ContactUS()">Contact Us</button>\
<button onclick="MoreApps()">More Apps</button>\
<button onclick="Privacy()">Privacy Policy</button>\
<button>Advertise Here</button>\
<button>Help</button>\
<h1 id="copyright">&copy;E-corp Company Group</h1>\
';
AboutUs=()=>{
	DIV.innerHTML=AboutUsData;
	MenuDropDown.style.display="none";
	MenuIcon.style.display="block";
	ClosingIcon.style.display="none";
}
ContactUS=()=>{
	open('https://www.e-corpcompanygroup.com');
}
MoreApps=()=>{
	open('https://sites.google.com/view/e-corpcompanygroup/home?authuser=1');
}
Privacy=()=>{
	open('https://e-corpcompanygroup.github.io/Movies-Json/privacy.html');
}
