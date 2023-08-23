window.addEventListener("load",function(){
	let img = document.getElementById("img-header")
	let images = ["W800.webp","W8001.webp","W8003.webp","W8004.webp","W8005.webp"]

	function randomIndex(){
		return Math.floor(Math.random() * (5-1)) + 1
	}
	function switchImages(){	
      let current = images[randomIndex()]
      if (img.src !== current){
      	img.src = current
      	img.classList.toggle("animation")
      }
	}

	setInterval(switchImages,2000)
})