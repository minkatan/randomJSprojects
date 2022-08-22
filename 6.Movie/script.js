const api_url = "https://api.themoviedb.org/3/trending/movie/week?api_key=19dff20cec6983a9ca450a7270b06263"
const api_key =  "19dff20cec6983a9ca450a7270b06263";
const ImagePATH = "https://image.tmdb.org/t/p/w400"
const SearchPath = "https://api.themoviedb.org/3/search/movie?api_key=19dff20cec6983a9ca450a7270b06263&query="

const main = document.querySelector("main")
const form = document.querySelector("form")
const search = document.getElementById("search")


getMovies(api_url)

async function getMovies(url) {
    const resp = await fetch(url)
    const respData = await resp.json();

    console.log(respData)

    showMovies(respData.results)
}

function getClassByRate(vote) {
    if (vote >= 7.5) {
        return "green"
    }else if (vote >= 5) {
        return "amber"
    }else {
        return "red"
    }
};

function showMovies(movies) {
    
    main.innerHTML =""

    movies.forEach((movie) => {

        const { poster_path, title, vote_average
        } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML =`
        <img src="${ImagePATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate (vote_average)}">${vote_average}</span>
            </div>
        `
        
        main.appendChild(movieEl)
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    
    if (searchTerm) {

        getMovies(SearchPath + searchTerm)

        search.value = ""
    }
})
