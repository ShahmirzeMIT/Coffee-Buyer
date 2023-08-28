let coldCoffee = document.getElementById("coldCoffee");
let hotCoffee = document.getElementById("hotCoffe");
let smoothie = document.getElementById("smoothie");

let coldData=data['iced-coffe']
let hotData=data['hot-coffe']
let smoothieData=data['fruit-juice']


let coldText=""
for (let i = 0; i < coldData.length; i++) {
	coldText+=`
	<div class="tm-list-item" id="coldId${coldData[i].id}">          
	<img src="img/${coldData[i].img}" alt="Image" class="tm-list-item-img">
	<div class="tm-black-bg tm-list-item-text">
	  <h3 class="tm-list-item-name">${coldData[i].name}<span class="tm-list-item-price">${coldData[i].price}</span></h3>
	  <p class="tm-list-item-description">${coldData[i].text}</p>
	</div>
   </div>`
}
coldCoffee.innerHTML=coldText


let hotText=""
for (let i = 0; i < hotData.length; i++) {
	hotText+=`
	<div class="tm-list-item" id="hotId${hotData[i].id}">          
	<img src="img/${hotData[i].img}" alt="Image" class="tm-list-item-img">
	<div class="tm-black-bg tm-list-item-text">
	  <h3 class="tm-list-item-name">${hotData[i].name}<span class="tm-list-item-price">${hotData[i].price}</span></h3>
	  <p class="tm-list-item-description">${hotData[i].text}</p>
	</div>
   </div>`
}
hotCoffee.innerHTML=hotText


let smoothieText=""
for (let i = 0; i < smoothieData.length; i++) {
	smoothieText+=`
	<div class="tm-list-item" id="smooId${smoothieData[i].id}" >          
	<img src="img/${smoothieData[i].img}" alt="Image" class="tm-list-item-img">
	<div class="tm-black-bg tm-list-item-text">
	  <h3 class="tm-list-item-name">${smoothieData[i].name}<span class="tm-list-item-price">${smoothieData[i].price}</span></h3>
	  <p class="tm-list-item-description">${smoothieData[i].text}</p>
	</div>
   </div>`
}
smoothie.innerHTML=smoothieText

