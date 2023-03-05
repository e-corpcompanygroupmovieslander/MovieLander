let CatergoriesData='\
<div class="major">\
<button onclick="Animations()">Animations</button>\
<button onclick="Movies()">Movies</button>\
<button onclick="Series()">Series</button>\
<button onclick="Premiering()">Premiering</button>\
<button onclick="Oldies()">Oldies</button>\
</div>\
';
Animations=()=>{
	DIV.innerHTML=AnimationData;
}
Movies=()=>{
	DIV.innerHTML=MoviesData;
	
}
Series=()=>{
	DIV.innerHTML=SeriesData;
}
Premiering=()=>{
	DIV.innerHTML=PremieringData;
}
Oldies=()=>{
	DIV.innerHTML=OldiesData;
}