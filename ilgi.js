const apiKey = "eef97e53b10af9362f66fdabd4191fbf"; 
const genreId = 16;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr-TR&with_genres=${genreId}`;

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("filmler");
    data.results.forEach(film => {
      container.innerHTML += `
        <div class="film">
          <img src="https://image.tmdb.org/t/p/w200${film.poster_path}" alt="${film.title}">
          <h3>${film.title}</h3>
        </div>
      `;
    });
  });