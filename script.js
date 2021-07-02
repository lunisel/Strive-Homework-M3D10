const url = "https://striveschool-api.herokuapp.com/api/movies/"

const getMovies = async (url) => {
    const response = await fetch(url, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjUwNTc3NTAsImV4cCI6MTYyNjI2NzM1MH0.OXxI2bYNf3jJ6nk1OiFnfaesutgZhhaRz8WEGEfw_mg"
        }
        })
    const categories = await response.json()
    console.log(categories)
    return categories
}

const displayCategory = (categories) => {
    let container = document.getElementById("carousel-container")
    categories.forEach((category) => {
        let div = document.createElement("div")
        div.innerHTML = `<h2 id="row-title" class="section-title mt-3">${category}</h2>
        <div id="carousel${category}">
          ${displayMovies(category)}
        </div>`

        container.appendChild(div)
    })
} 

const displayMovies = async (category) => {
    const response = await fetch(url + category, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjlkNmIzNTgxNzAwMTVjMjI3NDEiLCJpYXQiOjE2MjUwNTc3NTAsImV4cCI6MTYyNjI2NzM1MH0.OXxI2bYNf3jJ6nk1OiFnfaesutgZhhaRz8WEGEfw_mg"
        }
        })
    const movies = await response.json()
    let carousel = document.getElementById(`carousel${category}`)
    let row = document.createElement("div")
    row.classList.add("row", "mx-n1")
    movies.forEach((movie) => {
        let col = document.createElement("div")
        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-2", "px-1")
        col.innerHTML = `<img src="${movie.imageUrl}" class="img-fluid w-100">`
        row.appendChild(col)
    })

    carousel.appendChild(row)
}

window.onload = async () => {
    try {
        const categories = await getMovies(url)
        displayCategory(categories)
    }catch (err) {
        console.log(err)
    }
    
}

