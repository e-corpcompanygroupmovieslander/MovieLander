//declarationpart
let DIV=document.querySelector('div');
let LoginDisplay=document.querySelector('#LoginDisplay');
let MenuIcon=document.querySelector('#menu-icon');
let ClosingIcon=document.querySelector('#closing-icon');
let MenuDropDown=document.querySelector('#menu-dropdown');
let HomeButton=document.querySelector('#home-icon');
let CatergoriesButton=document.querySelector('#more-icon');
let AccountButton=document.querySelector('#profile-icon');
let SplashScreen=document.querySelector('.SplashScreen');

//general functions on app start
DIV.innerHTML=HomeData;
LoginDisplay.innerHTML=NewsLetter;
AutoLogIn();
DIV.onclick=()=>{
	MenuDropDown.style.display="none";
	MenuIcon.style.display="block";
	ClosingIcon.style.display="none";
}



//Splash Screen Function
setTimeout(() => {
  SplashScreen.style.display='none'	  
}, 5000);


//Drop Down Function to appear
MenuIcon.onclick=()=>{
	MenuDropDown.style.display="block";
	MenuIcon.style.display="none";
	ClosingIcon.style.display="block";
	MenuDropDown.innerHTML=MenuData;
}

//Drop Down Function to disappear
ClosingIcon.onclick=()=>{
	MenuDropDown.style.display="none";
	MenuIcon.style.display="block";
	ClosingIcon.style.display="none";
}

// Home button Function to display Ads to the Main Div
HomeButton.onclick=()=>{
	DIV.innerHTML=HomeData;
	MenuDropDown.style.display="none";
	MenuIcon.style.display="block";
	ClosingIcon.style.display="none";
}

// Catergories Function to display Movie Catergories to the Main Div
CatergoriesButton.onclick=()=>{
	DIV.innerHTML=CatergoriesData;
	MenuDropDown.style.display="none";
	MenuIcon.style.display="block";
	ClosingIcon.style.display="none";
}

// Account Function to display User Account Details to the Main Div
AccountButton.onclick=()=>{
	DIV.innerHTML=AccountData;
	AutoDisplay();
	MenuDropDown.style.display="none";
	MenuIcon.style.display="block";
	ClosingIcon.style.display="none";
}