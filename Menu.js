let MenuData='\
<button onclick="AboutUs()">About Us</button>\
<button onclick="ContactUS()">Contact Us</button>\
<button onclick="MoreApps()">More Apps</button>\
<button onclick="Privacy()">Privacy Policy</button>\
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
	open('https://www.e-corpcompanygroup.com');
}
Privacy=()=>{
	open('https://www.e-corpcompanygroup.com');
}