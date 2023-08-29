let coldCoffee = document.getElementById("coldCoffee");
let hotCoffee = document.getElementById("hotCoffe");
let smoothie = document.getElementById("smoothie");

let coldData=data['iced-coffe']
let hotData=data['hot-coffe']
let smoothieData=data['fruit-juice']



function GetData(i) {
	const addButton = document.querySelector(`#drinkId${i} .add`);
	const reduceButton = document.querySelector(`#drinkId${i} .reduce`);
	const text = document.querySelector(`#drinkId${i} .text`); 
	addButton.onclick = () => Add(i,text);
	reduceButton.onclick = () => Reduce(i,text);
 
	function Add(id, text) {
		console.log(`Adding for item ${id}`);
		const currentCount = parseInt(text.textContent) || 0;
		text.textContent = currentCount + 1;
		if(text.textContent==0){
			text.style.display="none"
		}
		else{
			text.style.display="inline"
		}
	 }
	 
	 function Reduce(id, text) {
		console.log(`Reducing for item ${id}`);
		const currentCount = parseInt(text.textContent) || 0;
		if(text.textContent>0 ){
			text.textContent = currentCount - 1;
		}

		if(text.textContent==0){
			text.style.display="none"
		}
		else{
			text.style.display="inline"
		}
		
	 }
 }
 
let coldText=""
for (let i = 0; i < coldData.length; i++) {
	coldText+=`
	<div class="tm-list-item" id="drinkId${coldData[i].id}" onclick="GetData(${coldData[i].id})">          
	<img src="img/${coldData[i].img}" alt="Image" class="tm-list-item-img">
	<div class="tm-black-bg tm-list-item-text">
	  <h3 class="tm-list-item-name">${coldData[i].name}<span class="tm-list-item-price">${coldData[i].price}</span></h3>
	  <p class="tm-list-item-description">${coldData[i].text}</p>
	  <div>
	  <button class="add" >+</button>
	  <button class="reduce">-</button>
	 <span class="text"></span>
	</div>
	</div>
   </div>`
}
coldCoffee.innerHTML=coldText


let hotText=""
for (let i = 0; i < hotData.length; i++) {
	hotText+=`
	<div class="tm-list-item" id="drinkId${hotData[i].id}" onclick="GetData(${hotData[i].id})">          
	<img src="img/${hotData[i].img}" alt="Image" class="tm-list-item-img">
	<div class="tm-black-bg tm-list-item-text">
	  <h3 class="tm-list-item-name">${hotData[i].name}<span class="tm-list-item-price">${hotData[i].price}</span></h3>
	  <p class="tm-list-item-description">${hotData[i].text}</p>
	  <div>
	  <button class="add" >+</button>
	  <button class="reduce">-</button>
	  <span class="text"></span>
	</div>
	</div>
   </div>`
}
hotCoffee.innerHTML=hotText


let smoothieText=""
for (let i = 0; i < smoothieData.length; i++) {
	smoothieText+=`
	<div class="tm-list-item" id="drinkId${smoothieData[i].id}" onclick="GetData(${smoothieData[i].id})" >          
	<img src="img/${smoothieData[i].img}" alt="Image" class="tm-list-item-img">
	<div class="tm-black-bg tm-list-item-text">
	  <h3 class="tm-list-item-name">${smoothieData[i].name}<span class="tm-list-item-price">${smoothieData[i].price}</span></h3>
	  <p class="tm-list-item-description">${smoothieData[i].text}</p>
	  <div>
	  <button class="add" >+</button>
	  <button class="reduce">-</button>
	  <span class="text"></span>
	</div>
	</div>
   </div>`
}
smoothie.innerHTML=smoothieText


//






