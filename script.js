function myFunction() {
	document.getElementsByClassName('box')[0].classList.toggle("box-animation");
	setTimeout(() => {
		document.querySelector(".wrap-box").style.display = "none";
		document.querySelector(".card-container").style.display = "block";
	}, 1550);
}


let card = document.querySelector('.card');

card.addEventListener('click', function() {
	this.classList.toggle('.active');
		if(this.classList.contains('.active')) {
			this.style.transform = "rotateY(180deg)";
		} else {
			this.style.transform = "rotateY(0deg)"
		}
});

