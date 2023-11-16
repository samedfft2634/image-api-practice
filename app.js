const searchBtn = document.getElementById("searchBtn"); // 
const searchInput = document.getElementById("searchInput");
const currentImages = document.getElementById("loadImages") //when page loading, current images
const randomBody = document.getElementById("randomImages"); // random images after clicking
const accessKey = "aaj6YPiMnAhQba_1qtN0W-0vIg9jlgl0HZ6c43mW1ZM";

window.addEventListener("laod",()=>{
    randomBody.style.display = "none"
    
    })



searchBtn.addEventListener("click", async () =>{
	const API_URL = `https://api.unsplash.com/search/photos?query=${searchInput.value}&client_id=${accessKey}`;
	const response = await fetch(API_URL);
	const data = await response.json();
    randomImage(data.results)
}
)


const randomImage = (item) =>{
// item.urls.small 
currentImages.style.display = "none"
randomBody.style.display = "block"
randomBody.innerHTML ="";
item.forEach((images) => {
    const imgCard = 
});

}





