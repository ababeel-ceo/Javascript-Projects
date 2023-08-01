const accessKey = "aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs";

 
const inputEl = document.getElementById("search-input");
const searchBtn = document.getElementById("search");
const showMore = document.getElementById("show-more");

const container = document.querySelector(".image-results");


let inputData = "";
let page = 2;

async function searchImages() {

  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data; 

    if(page === 1){
        container.innerHTML="";
    }

    response.data.results.map((result)=>{

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-result");

        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const aTag = document.createElement('a');
        aTag.href = result.links.html;
        aTag.target = "_blank"
        aTag.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(aTag);
        container.appendChild(imageWrapper);
    })
    page++;
    if(page > 1)
    {
            showMore.style.display = "block";
    }


  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


searchBtn.addEventListener("click", async () => {
    page = 1;
    await searchImages();
  });
  

showMore.addEventListener("click",async ()=>{
    await searchImages();
})
