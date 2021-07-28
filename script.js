// Creating img element for cat photo
let img = document.createElement("img");

// Cat photo API call
function fetchCat() {
	let response = fetch("https://api.thecatapi.com/v1/images/search")
		.then((res) => res.json())
		.then((data) => {
			img.src = data[0].url;
			document.querySelector(".img-container").appendChild(img);
		});
}

// Copyright for footer
let date = new Date();
let year = date.getFullYear();

let footer = document.querySelector("footer");
footer.innerText = `Copyright ${year} 😻 `;
