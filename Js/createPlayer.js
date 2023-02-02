
// Buttons - +
const xpUpBtn = document.querySelector('#xp-data-increase')
const xpDownBtn = document.querySelector('#xp-data-decrease')
const strengthUpBtn = document.querySelector('#strength-data-increase')
const strengthDownBtn = document.querySelector('#strength-data-decrease')
const xpVal = document.querySelector('#xp-data-value');
const strengthVal = document.querySelector('#strength-data-value');

let limit = 4;

function decreaseXp() {
	let value = xpVal.value;
	if(value > 1) {
		value--;
	}
    valueChange(value, xpVal);
}
function increaseXp() {
	let value = xpVal.value;
	if(value < limit) {
		value++;
	}
    valueChange(value, xpVal)
}

function decreaseStrength() {
	let value = strengthVal.value;
	if(value > 1) {
		value--;
	}
    valueChange(value, strengthVal);
}
function increaseStrength() {
	let value = strengthVal.value;
	if(value < limit) {
		value++;
	}
    valueChange(value, strengthVal)
}

function valueChange(val, stat){
    if( val <= 0) {
        stat.setAttribute('value', 1);
        // what is the limit?  for now lets say its 3, so player increased only 2 points.
	} else if(val <= limit) {
		stat.setAttribute('value', val);
	}
}

xpUpBtn.addEventListener('click', increaseXp);
xpDownBtn.addEventListener('click', decreaseXp);

strengthUpBtn.addEventListener('click', increaseStrength);
strengthDownBtn.addEventListener('click', decreaseStrength);



// event 
document.querySelector('.goTO').addEventListener("click",()=>{
	window.location.href = "locations.html";
	
})
