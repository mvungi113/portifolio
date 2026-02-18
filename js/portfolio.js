document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('portfolio-container');
  if (!container) return;

  function renderItems(items) {
    items.forEach(function (item, index) {
      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6 portfolio-item filter-' + item.category;

      col.innerHTML = `
        <div class="portfolio-wrap">
          <img src="${item.image}" class="img-fluid" style="width:100%;height:220px;object-fit:cover;" alt="${item.title}">
          <div class="portfolio-info">
            <h4>${item.title}</h4>
            <p>${item.type}</p>
            <div class="portfolio-links">
              <a href="${item.image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Preview"><i class="bx bx-plus"></i></a>
              <a href="portfolio-detail.html?id=${index}" target="_blank" rel="noopener" class="portfolio-details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  }

  function loadFromInline() {
    const script = document.getElementById('portfolio-data');
    if (!script) {
      container.innerHTML = '<p class="text-danger">Failed to load portfolio items.</p>';
      return;
    }
    try {
      const items = JSON.parse(script.textContent);
      renderItems(items);
    } catch (e) {
      console.error('Failed to parse inline portfolio data:', e);
      container.innerHTML = '<p class="text-danger">Failed to load portfolio items.</p>';
    }
  }

  fetch('js/portfolio.json')
    .then(function (res) {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(function (items) {
      renderItems(items);
    })
    .catch(function (err) {
      console.warn('Fetch failed, trying inline portfolio data fallback:', err);
      loadFromInline();
    });
});
