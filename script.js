const url = "https://striveschool-api.herokuapp.com/api/movies/"

const getMovies = async (url) => {
    const response = await fetch(url, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjUwNTc3NTAsImV4cCI6MTYyNjI2NzM1MH0.OXxI2bYNf3jJ6nk1OiFnfaesutgZhhaRz8WEGEfw_mg"
        }
        })
    const movies = await response.json()
    console.log(movies)
    return movies
}

const displayCategory = (categories) => {
    let container = document.getElementById("carousel-container")
    categories.forEach((category) => {
        let div = document.createElement("div")
        div.innerHTML = `<h2 id="row-title" class="section-title mt-3">${category}</h2>
    
        <div id="carouselExampleControls" class="carousel slide px-3" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item">
              <div class="row mx-n1">

              </div>
            </div>  
      
      
            <div class="carousel-item">
              <div class="row mx-n1">
      
              </div>
            </div>
      
            <div class="carousel-item active">
              <div class="row mx-n1">
      
              </div>
            </div>

          </div>
      
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>`

        container.appendChild(div)
    })
} 

window.onload = async () => {
    try {
        const categories = await getMovies(url)
        displayCategory(categories)
    }catch (err) {
        console.log(err)
    }
    
}

