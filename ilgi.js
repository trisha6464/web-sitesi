const accessKey = "f7XU1iml_lbkdpLzvMPfzDPqxuAPiIAnLE6MwzH-WyY"; 

fetch(`https://api.unsplash.com/search/photos?query=chess&per_page=9&client_id=${accessKey}`)
  .then(response => response.json())
  .then(data => {
    const galeri = document.getElementById("galeri");
    data.results.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Satranç görseli";
      galeri.appendChild(img);
    });
  })
  .catch(err => {
    console.error("API'den görsel çekilemedi:", err);
  });