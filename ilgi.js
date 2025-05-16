const apiKey = "d92c67a19a654cd4a623ccd1f9f8390d"; 
const genre = "indie";          
const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&genres=${genre}&page_size=9`;

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("oyunlar");
    data.results.forEach(game => {
      const div = document.createElement("div");
      div.className = "kutu";
      div.innerHTML = `
        <img src="${game.background_image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <p>Çıkış: ${game.released || 'Bilinmiyor'}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("API Hatası:", err));