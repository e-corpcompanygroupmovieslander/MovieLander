let AccountData='\
<h1>User Profile</h1>\
<h1 id="UserNameHolder"></h1>\
<h1 id="EmailHolder"></h1>\
<img src="https://drive.google.com/uc?export=download&id=1PbQcCBpvML93ozuq1kvqZnWceT1NAc7-" id="Ad" onclick="Ad1()">\
';
AutoDisplay=()=>{
	let UserNameHolder=document.querySelector('#UserNameHolder');
    let EmailHolder=document.querySelector('#EmailHolder');
	UserNameHolder.innerHTML=localStorage.getItem("MovieLanderUsername",UserName);
    EmailHolder.innerHTML=localStorage.getItem("MovieLanderEmail",Email);
}
Ad1=()=>{
	open('https://www.e-corpcompanygroup.com')
}