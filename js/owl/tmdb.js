const API_KEY = '1d3066c4352f9064bb36708cbe10d9ae';
const API_BASE = 'https://api.themoviedb.org/3';
const rolMovies = document.querySelector('.rolMovies');
const carrossel = document.querySelector('.carrossel-filmes');

const mostrarImg = (url) => {   
    rolMovies.innerHTML += `<img src="${url}" >`
}

const getMovies = async () => {
    try {
        const data = await fetch(API_BASE + `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`);
        const movies = await data.json(); 
        movies.results.map((item) => mostrarImg(`https://image.tmdb.org/t/p/w300${item.poster_path}`));
    } catch (e) {
        return e
    } 
}

getMovies()

const retroceder = () => {
    if (carrossel.scrollLeft -100 <= 0) {
        carrossel.scrollLeft = carrossel.offsetWidth
    } else {
        carrossel.scrollLeft -= 100;
    }

}
const avancar = () => {
    console.log(carrossel.offsetWidth, carrossel.scrollLeft)
    if (carrossel.scrollLeft +100 >= carrossel.offsetWidth) {
        carrossel.scrollLeft = 0
    } else {
        carrossel.scrollLeft += 100;
    }
}