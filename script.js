let img = document.createElement("img");

function fetchCat() {
	let response = fetch("https://api.thecatapi.com/v1/images/search")
		.then((res) => res.json())
		.then((data) => {
			img.src = data[0].url;
			document.querySelector(".img-container").appendChild(img);
		});
}
