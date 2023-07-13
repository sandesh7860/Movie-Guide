function searchBtn() {
    const input = document.getElementById("movie-name").value.trim();
    const title = input !== "" ? input : "Avatar";
    const apikey = "b4cdfba7";
    const url = `https://www.omdbapi.com/?s=${title}&apikey=${apikey}`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
    if (data.Response === "True") {
    const movies = data.Search;
    let moviesHTML = "";
    let nOm=5;
    if (nOm > 0) {
    for (let i = 0; i < nOm; i++) {
    const movie = movies[i];
    const movieDetailsUrl =
    
    `https://www.omdbapi.com/?i=${movie.imdbID}&plot=full&apikey=${apikey}`;
    
    fetch(movieDetailsUrl)
    .then((response) => response.json())
    .then((movieData) => {
    moviesHTML += `
    <div class="movie-info">
    <br><br>
    <img src="${movieData.Poster}" alt="${movieData.Title} Poster">
    <br><br><h3>Movie title: ${movieData.Title}</h3>
    <p>Director Name: ${movieData.Director}</p>
    <p>Release year: ${movieData.Year}</p>
    <p>Type: ${movieData.Type}</p>
    <p>IMDB Rating: ${movieData.imdbRating}</p>
    <p></p>
    <br><br>
    </div>
    `;
    document.getElementById("movie-title").innerHTML = moviesHTML;
    })
    .catch((error) => {
    console.log("Error:", error);
    document.getElementById("movie-title").innerHTML = "An error occurred.";
    });
    }
    } else {
    moviesHTML = "No movies found.";
    document.getElementById("movie-title").innerHTML = moviesHTML;
    }
    } else {
    document.getElementById("movie-title").innerHTML = "Movie not found.";
    }
    })
    .catch((error) => {
    
    console.log("Error:", error);
    document.getElementById("movie-title").innerHTML = "An error occurred.";
    });
    }
    searchBtn();