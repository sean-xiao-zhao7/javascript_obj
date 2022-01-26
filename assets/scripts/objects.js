const addBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");
const movies = [];

const renderMovies = () => {
    const movielistElement = document.getElementById("movie-list");
    movielistElement.innerHTML = "";
    if (movies.length === 0) {
        movielistElement.classList.remove("visible");
        return;
    } else {
        movielistElement.classList.add("visible");
    }

    movies.forEach((movie) => {
        const movieElement = document.createElement("li");
        movieElement.textContent = movie.info.title;
        movielistElement.append(movieElement);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    const newMovie = {
        info: {
            title: title,
            [extraValue]: extraValue,
        },
        id: Math.random(),
    };

    movies.push(newMovie);
    renderMovies();
};

function genRandom() {
    return Math.floor(Math.random() * (10 - 5 + 1) + 5);
}

addBtn.addEventListener("click", addMovieHandler);
