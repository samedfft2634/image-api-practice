const searchBtn = document.getElementById("searchBtn"); //
const searchInput = document.getElementById("searchInput");
const accessKey = "NOioFOJPL0nG_6dZ32V8MY7L5C8qCWiGKxigVpPnph4";

let searchCount = 0;

searchBtn.addEventListener("click", async () => {
  if(searchCount === 30){
    searchCount = 0;
  } else {
    searchCount = Math.floor(Math.random()*30) + 1
  }
	const searchTerm = searchInput.value.trim();
	if (searchTerm === "") {
		const Toast = Swal.mixin({
			toast: true,
			position: "top",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
      
		});
		Toast.fire({
			icon: "warning",
			title: "There is no words to searching!",
		});
		setTimeout(() => {
			randomImage();
		}, 200);
    return
	} 

  const API_URL = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${accessKey}&page=${searchCount}`;

  try {
		const response = await fetch(API_URL);
		const data = await response.json();
		if (data.results) {
			randomImage(data.results);
		} else {
			alert("An error occurred while importing images from Unsplash.");
		}
	} catch (error) {
    console.error("An error occurred during the API call:",error)
  }
});

const randomImage = (images) => {
	const cardMain = document.querySelector(".cardMain");
	cardMain.innerHTML = ``;
  // const shuffledImages = shuffleArray(images)
	images.forEach((image) => {
		const cardBody = `
        <div class="card col col-md-3 col-lg-6  " style="width: 20rem;">
        <img src="${image.urls.small}" class="card-img-top" alt="${image.alt_description}">
        </div>
      `;
		cardMain.innerHTML += cardBody;
	});
};

// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };