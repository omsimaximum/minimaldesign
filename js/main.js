const right = document.querySelector('.right-slide');
const left = document.querySelector('.left-slide');
const sliderItems = document.querySelector('.slider-items').children;
const numSlides = sliderItems.length;
let index = 0;
let timer = setInterval(autoplay,5000);


right.onclick = () => {
	slide('next');
	resetTimer();
}

left.onclick = () => {
	slide('prev');
	resetTimer();
}


function slide(direction){

	if(direction === 'next'){
		index++;
		if(index === numSlides)
		{
			index = 0;
		}
	}
	else if(direction === 'prev'){
		if(index === 0){
			index = numSlides - 1;
		}
		else{
			index--;
		}
	}

	for(let i=0; i< sliderItems.length; i++){
		sliderItems[i].classList.remove('active');
	}
	sliderItems[index].classList.add('active');


	
}


function resetTimer(){
	clearInterval(timer);
	timer = setInterval(autoplay,5000);
}

function autoplay(){
	slide('next');
}
