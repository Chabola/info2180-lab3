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

	const squares = Array.from(document.querySelectorAll('.square'));
	let playing =true;
	let playerisX = true;
	let board =['', '', '', '', '', '', '', '', ''];
	const win_types = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]
	
	squares.forEach(square => {
		square.addEventListener('mouseover', function(e) {
		    e.target.classList.add('hover');
		  });
		square.addEventListener('mouseout', function(e) {
		    e.target.classList.remove('hover');
		  });
		square.addEventListener('click', whenclick, {once: true})
	})	
	
	function whenclick(e) {
		if (playerisX == true && playing == true) {
			e.target.classList.add("X");
			e.target.textContent = "X";
			const sq = (element) => element == e.target;
			let i = squares.findIndex(sq);
			board[i] = "X";
			if (winner()) {
				console.log("winner");
				playing = false;
				if (playerisX == true) {
					document.getElementById('status').textContent = "Congratulations! X is the Winner!";
					document.getElementById('status').classList.add("you-won");
				}
			}
			playerisX = false;

		}
		else if (playerisX == false && playing == true){
			e.target.classList.add("O");
			e.target.textContent = "O";
			const sq = (element) => element == e.target;
			let i = squares.findIndex(sq);
			board[i] = "O";
			if (winner()) {
				console.log("winner");
				if (playerisX == false) {
					document.getElementById('status').textContent = "Congratulations! O is the Winner!";
					document.getElementById('status').classList.add("you-won");
				}
			}
			playerisX = true;
		}
	

	}
	function winner(){
		let roundwon = false;
	    for (let i = 0; i <= 7; i++) {
	        const win = win_types[i];
	        let a = board[win[0]];
	        let b = board[win[1]];
	        let c = board[win[2]];
	        if (a === '' || b === '' || c === '') {
	            continue;
	        }
	        if (a === b && b === c) {
	        	roundwon = true;
	            return roundwon;
	        }
	    }
	}
}

