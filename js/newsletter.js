const RSS_URL = 'https://www.blogdumoderateur.com/ia/feed/';

  fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(RSS_URL))
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('rss-feed');
      data.items.slice(0, 10).forEach(item => {
        const article = document.createElement('article');
        article.innerHTML = `
          <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h3>
          <p>${item.pubDate}</p>
          <p>${item.description}</p>
        `;
        container.appendChild(article);
      });
    })
    .catch(err => {
      console.error('Erreur lors du chargement du flux RSS:', err);
    });