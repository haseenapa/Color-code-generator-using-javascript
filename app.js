function getColorCode(){
	// toString - convert no to string
	// toString(16) - convert to hexadecimal value
	return '#'+Math.random().toString(16).slice(2,8);
}

function setBackground(){
	var bgColor = getColorCode();
	document.body.style.background = bgColor;
	document.body.innerHTML = bgColor;
	//document.write(bgColor);
}

document.body.onkeyup = function(e) {
	//space bar
	if(e.keyCode == 32) {
		setBackground();
	}
}
