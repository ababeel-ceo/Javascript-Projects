const generateBtn = document.querySelector(".generate-btn");
const Image = document.querySelector("img");
const title = document.querySelector("h2");
const author = document.querySelector(".meme-author");

generateBtn.addEventListener("click", async () => {
  let url = "https://meme-api.com/gimme/wholesomememes";
  try {
    const response = await axios.get(url);
    const data = response.data;
    author.innerHTML = data.author;
    title.innerHTML = data.title;
    Image.setAttribute("src", data.url); 
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
