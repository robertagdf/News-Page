
const apiKey = 'bdde211eaf5b42aeaf8e9f536e86d444'; 

const endpoint = `https://newsapi.org/v2/everything?q=meio%20ambiente&language=pt&sortBy=publishedAt&pageSize=8&apiKey=${apiKey}`;

async function carregarNoticias() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    const container = document.querySelector('.carrossel-noticias');
    container.innerHTML = ''; 

    data.articles.forEach(article => {
      const noticia = document.createElement('div');
      noticia.classList.add('noticia-slide');

      noticia.innerHTML = `
        <img src="${article.urlToImage || './img/default.jpg'}" alt="${article.title}">
        <div class="slide-texto">
          <h2>${article.title}</h2>
          <p>${article.description || 'Leia mais na notícia original.'}</p>
          <a href="${article.url}" target="_blank" rel="noopener noreferrer">Leia mais</a>
        </div>
      `;

      container.appendChild(noticia);
    });
  } catch (error) {
    console.error('Erro ao carregar notícias:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carregarNoticias();
});
