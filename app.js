const searchBtn = document.getElementById("searchBtn"); //
const searchInput = document.getElementById("searchInput");
const accessKey = "aaj6YPiMnAhQba_1qtN0W-0vIg9jlgl0HZ6c43mW1ZM";


 

searchBtn.addEventListener("click", async () => {
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
            }
          });
          Toast.fire({
            icon: "warning",
            title: "There is no words to searching!"
          });
        setTimeout(()=>{
            randomImage()
        },200)
    } else {
        const API_URL = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${accessKey}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.results) {
            randomImage(data.results);
        } else {
            alert("An error occurred while importing images from Unsplash.");
        }
    }
});

const randomImage = (images) => {
	const cardMain = document.querySelector(".cardMain");
	cardMain.innerHTML = ``;
	images.forEach((image) => {
		const cardBody = `
        <div class="card col-md-3 col-lg-6  " style="width: 20rem;">
        <img src="${image.urls.small}" class="card-img-top" alt="${image.alt_description}">
        </div>
      `;
		cardMain.innerHTML += cardBody;
	});
};

