var map = {82: false, 65: false, 76: false, 70: false, 73: false};
$(document).keydown(function(e) {
	if (e.keyCode in map) {
		map[e.keyCode] = true;
		if (map[82] && map[65] && map[76] && map[70] && map[73]) {
			clickAppear();
		}
	}
});

function clickCounter() {
	if(typeof(Storage) !== "undefined") {
		localStorage.clickcount = Number(localStorage.clickcount)+1;
		
		document.getElementById("after").innerHTML = localStorage.clickcount;

		if (localStorage.clickcount == 1) {
			document.getElementById("after").innerHTML += " time!";
		} else {
			document.getElementById("after").innerHTML += " times!"; 
		}
	}
}

function clickAppear() {
	if(typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount);
		} else {
			localStorage.clickcount = 0;
		}

		document.getElementById("before").innerHTML = "You have clicked this";
		document.getElementById("result").innerHTML = "Button";
		document.getElementById("after").innerHTML = localStorage.clickcount;
		document.getElementById("after2").innerHTML = "Hide Me";

		if (localStorage.clickcount == 1) {
			document.getElementById("after").innerHTML += " time!";
		} else {
			document.getElementById("after").innerHTML += " times!"; 
		}
	}
}

function hideCounter() {
	document.getElementById("before").innerHTML = "";
	document.getElementById("result").innerHTML = "";
	document.getElementById("after").innerHTML = "";
	document.getElementById("after2").innerHTML = "";
	map = {82: false, 65: false, 76: false, 70: false, 73: false};
}