;(function initPortfolio() {
  'use strict';

  const container = document.getElementById('portfolio-container');
  if (!container) return;

  let itemsCache = [];

  const normalizeImage = (path) => {
    if (!path) return '';
    path = path.replace(/^\/*/, '');
    return '/' + encodeURI(path);
  };

  const clearContainer = () => {
    container.innerHTML = '';
  };

  const createCard = (item, idx) => {
    const col = document.createElement('div');
    const category = (item.category || 'web').toLowerCase();
    col.className = `col-lg-4 col-md-6 portfolio-item filter-${category}`;

    const imageUrl = normalizeImage(item.image);

    const sourceUrl = item.source || '';
    col.innerHTML = `
      <div class="portfolio-wrap">
        <a href="${imageUrl}" class="portfolio-lightbox" data-gallery="portfolio">
          <img src="${imageUrl}" loading="lazy" class="img-fluid" style="width:100%;height:220px;object-fit:cover;" alt="${escapeHtml(item.title)}">
        </a>
        <div class="portfolio-info">
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.type || '')}</p>
          <div class="portfolio-actions">
            <button type="button" class="btn btn-sm btn-outline-primary js-portfolio-details" data-index="${idx}">Details</button>
            ${sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener" class="btn btn-sm btn-primary"><i class="bx bx-link-external"></i> Visit</a>` : ''}
          </div>
        </div>
      </div>`;

    return col;
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"]+/g, function (s) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[s];
    });
  }

  const render = (items) => {
    itemsCache = items || [];
    clearContainer();
    if (!itemsCache.length) {
      container.innerHTML = '<div class="col-12 text-center text-muted">No portfolio items found.</div>';
      return;
    }

    const fragment = document.createDocumentFragment();
    itemsCache.forEach((it, i) => fragment.appendChild(createCard(it, i)));
    container.appendChild(fragment);

    // initialize lightbox
    if (typeof GLightbox === 'function') {
      try { window._portfolioGL = GLightbox({ selector: '.portfolio-lightbox' }); } catch (e) { /* ignore */ }
    }

    // initialize isotope if available
    if (typeof Isotope === 'function') {
      try {
        // if previous isotope exists, destroy then re-create
        if (container._isotopeInstance && typeof container._isotopeInstance.destroy === 'function') {
          container._isotopeInstance.destroy();
        }
        container._isotopeInstance = new Isotope(container, { itemSelector: '.portfolio-item', percentPosition: true, masonry: { columnWidth: '.portfolio-item' } });
      } catch (e) { console.warn('Isotope init failed', e); }
    }

    // ensure AOS recalculates
    if (typeof AOS !== 'undefined' && AOS && typeof AOS.refresh === 'function') AOS.refresh();
  };

  const openModal = (item) => {
    const modalEl = document.getElementById('portfolioModal');
    if (!modalEl) return;
    const titleEl = modalEl.querySelector('.modal-title');
    const bodyEl = modalEl.querySelector('.modal-body');
    titleEl.textContent = item.title || '';

    const imageUrl = normalizeImage(item.image);
    const categoryLabel = (item.category || '').charAt(0).toUpperCase() + (item.category || '').slice(1);
    const sourceUrl = item.source || '';

    bodyEl.innerHTML = `
      <div class="portfolio-modal-content">
        <div class="portfolio-modal-image">
          <img src="${imageUrl}" alt="${escapeHtml(item.title)}" class="img-fluid">
        </div>
        <div class="portfolio-modal-details">
          <div class="portfolio-modal-tags">
            <span class="portfolio-tag tag-category">${escapeHtml(categoryLabel)}</span>
            <span class="portfolio-tag tag-type">${escapeHtml(item.type || '')}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="portfolio-modal-desc">${escapeHtml(item.description || '')}</p>
          <div class="portfolio-modal-meta">
            <div class="meta-item">
              <i class="bx bx-category"></i>
              <div>
                <span class="meta-label">Category</span>
                <span class="meta-value">${escapeHtml(categoryLabel)}</span>
              </div>
            </div>
            <div class="meta-item">
              <i class="bx bx-file"></i>
              <div>
                <span class="meta-label">Type</span>
                <span class="meta-value">${escapeHtml(item.type || '')}</span>
              </div>
            </div>
          </div>
          <div class="portfolio-modal-actions">
            ${sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener" class="btn btn-primary"><i class="bx bx-link-external"></i> View Project</a>` : ''}
            <a href="${imageUrl}" target="_blank" rel="noopener" class="btn btn-outline-primary"><i class="bx bx-image"></i> View Image</a>
          </div>
        </div>
      </div>`;

    if (window.bootstrap && typeof window.bootstrap.Modal === 'function') {
      try {
        const bs = new bootstrap.Modal(modalEl);
        bs.show();
      } catch (e) { modalEl.style.display = 'block'; }
    } else {
      modalEl.style.display = 'block';
    }
  };

  // Filters handling
  const initFilters = () => {
    const filters = document.querySelectorAll('#portfolio-flters li');
    if (!filters || !filters.length) return;
    filters.forEach((li) => {
      li.addEventListener('click', function (e) {
        e.preventDefault();
        filters.forEach(el => el.classList.remove('filter-active'));
        this.classList.add('filter-active');
        const filter = this.getAttribute('data-filter');
        if (container._isotopeInstance && typeof container._isotopeInstance.arrange === 'function') {
          container._isotopeInstance.arrange({ filter: filter === '*' ? '*' : filter });
          container._isotopeInstance.on('arrangeComplete', function () { if (typeof AOS !== 'undefined' && AOS && typeof AOS.refresh === 'function') AOS.refresh(); });
        } else {
          // fallback: show/hide
          const items = container.querySelectorAll('.portfolio-item');
          items.forEach(it => {
            if (filter === '*' || it.classList.contains(filter.replace('.', ''))) it.style.display = '';
            else it.style.display = 'none';
          });
        }
      });
    });
  };

  // Event delegation for details button
  container.addEventListener('click', function (e) {
    const btn = e.target.closest('.js-portfolio-details');
    if (!btn) return;
    const idx = parseInt(btn.getAttribute('data-index'), 10);
    if (isNaN(idx) || !itemsCache[idx]) return;
    openModal(itemsCache[idx]);
  });

  // Load data: try JSON file then fallback to inline script
  const loadData = async () => {
    let data = null;
    try {
      const res = await fetch('/js/portfolio.json', { cache: 'no-store' });
      if (res && res.ok) data = await res.json();
    } catch (e) { /* ignore */ }
    if (!data) {
      const script = document.getElementById('portfolio-data');
      if (script) {
        try { data = JSON.parse(script.textContent); } catch (e) { console.error('Failed to parse inline portfolio data', e); }
      }
    }
    if (!Array.isArray(data)) data = [];
    render(data);
    // init filters after render
    initFilters();
  };

  // Ensure execution when DOM is ready
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadData);
  else loadData();

})();
