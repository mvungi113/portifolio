document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('portfolio-container');
  if (!container) return;

  let portfolioItems = [];

  function renderItems(items) {
    portfolioItems = items;
    items.forEach(function (item, index) {
      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6 portfolio-item filter-' + item.category;

      col.innerHTML = `
        <a href="#" data-index="${index}" class="portfolio-link-stretch">
          <div class="portfolio-wrap">
            <img src="${item.image}" class="img-fluid" style="width:100%;height:220px;object-fit:cover;" alt="${item.title}">
            <div class="portfolio-info">
              <h4>${item.title}</h4>
              <p>${item.type}</p>
            </div>
          </div>
        </a>
      `;

      container.appendChild(col);
    });
  }

  // Delegate clicks on portfolio cards to open modal with details
  container.addEventListener('click', function (e) {
    const a = e.target.closest('.portfolio-link-stretch');
    if (!a) return;
    e.preventDefault();
    const idx = parseInt(a.getAttribute('data-index'), 10);
    if (isNaN(idx) || !portfolioItems[idx]) return;
    openPortfolioModal(portfolioItems[idx]);
  });

  function openPortfolioModal(item) {
    const modalEl = document.getElementById('portfolioModal');
    if (!modalEl) return;
    const titleEl = modalEl.querySelector('.modal-title');
    const bodyEl = modalEl.querySelector('.modal-body');

    titleEl.textContent = item.title || '';
    bodyEl.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <img src="${item.image}" alt="${item.title}" style="width:100%;height:auto;max-height:60vh;object-fit:contain;" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h5>${item.title}</h5>
          <p>${item.description || ''}</p>
          <ul class="list-unstyled">
            <li><strong>Category:</strong> ${item.category || ''}</li>
            <li><strong>Type:</strong> ${item.type || ''}</li>
          </ul>
          <p class="mt-2">
            <a href="${item.image}" target="_blank" rel="noopener" class="btn btn-outline-primary">Open Image</a>
            ${item.source? `<a href="${item.source}" target="_blank" rel="noopener" class="btn btn-primary" style="margin-left:8px;">Source Code</a>`: ''}
          </p>
        </div>
      </div>
    `;

    // show modal via Bootstrap
    if (window.bootstrap && typeof window.bootstrap.Modal === 'function') {
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    } else {
      // fallback: make modal visible
      modalEl.style.display = 'block';
    }
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
