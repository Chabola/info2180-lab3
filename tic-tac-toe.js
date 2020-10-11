window.addEventListener("load", myScript);
function myScript() {
	document.getElementById('board').getElementsByTagName('div')[0].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[1].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[2].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[3].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[4].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[5].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[6].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[7].classList.add('square');
	document.getElementById('board').getElementsByTagName('div')[8].classList.add('square');

	const squares = document.querySelectorAll('.square');
	let playing =true;
	let playerisX = true;
	let board =[];
	
	squares.forEach(square => {
		square.addEventListener('click', whenclick, {once: true})
	})
	function whenclick(e) {
		if (playerisX == true) {
			e.target.classList.add("X");
			e.target.textContent = "X";
			board.push("X");
			playerisX = false;

		}
		else {
			e.target.classList.add("O");
			e.target.textContent = "O";
			board.push("O");
			playerisX = true;
		}

	}
	
}
/*let elementsArray = document.querySelectorAll(".square");
	elementsArray.forEach(function(elem) {
	    elem.addEventListener('click', whenclick) 
	});
function whenclick(e) {
	var x = e.target
	x.classList.add('X');
	x.innerHTML = 'X';
}*/
/*document.getElementByClassName("square").addEventListener("click", myScript);
function myScript() {
	document.getElementByClassName("square").classList.add('X');
}*/


