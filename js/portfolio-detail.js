(function(){
  function qs(name){
    return new URLSearchParams(window.location.search).get(name);
  }

  const id = qs('id');
  const container = document.getElementById('portfolio-detail');

  if (!container) return;

  if (id === null) {
    container.innerHTML = '<p class="text-danger">No project specified.</p>';
    return;
  }

  fetch('js/portfolio.json')
    .then(function(res){
      if (!res.ok) throw new Error('Failed to load portfolio data');
      return res.json();
    })
    .then(function(items){
      const idx = parseInt(id, 10);
      if (isNaN(idx) || idx < 0 || idx >= items.length) {
        container.innerHTML = '<p class="text-danger">Project not found.</p>';
        return;
      }
      const item = items[idx];
      container.innerHTML = `
        <div class="row">
          <div class="col-md-6">
            <img src="${item.image}" alt="${item.title}" style="width:100%;height:auto;max-height:70vh;object-fit:contain;" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h1>${item.title}</h1>
            <p><strong>Type:</strong> ${item.type}</p>
            <p>${item.description || ''}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <p>
              <a href="${item.image}" target="_blank" rel="noopener" class="btn btn-outline-primary">Open Image</a>
              <a href="index.html" class="btn btn-secondary">Back to Portfolio</a>
            </p>
          </div>
        </div>
      `;
    })
    .catch(function(err){
      console.error(err);
      container.innerHTML = '<p class="text-danger">Failed to load project details.</p>';
    });
})();
