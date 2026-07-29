const bikeImages = {
  honda: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
  bmw: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=80',
  harley: 'https://images.unsplash.com/photo-1558980664-2506fca6bfc2?auto=format&fit=crop&w=1200&q=80',
  triumph: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80',
};

const bikes = [
  {
    title: 'Honda CBR1000RR',
    make: 'Honda',
    model: 'CBR1000RR',
    style: 'sport',
    era: 'modern',
    year: '2024',
    price: 'Demo only',
    blurb: 'A sharp, aggressive sport bike for fast city launches and weekend escapes.',
    image: bikeImages.honda,
    safetyStatus: 'Passed',
    safetyScore: '94/100',
    testType: 'Crash & braking review',
    pros: ['Excellent braking', 'Strong traction control', 'Responsive handling'],
    cons: ['Higher seat height', 'Aggressive riding posture'],
  },
  {
    title: 'BMW R1250GS',
    make: 'BMW',
    model: 'R1250GS',
    style: 'adventure',
    era: 'modern',
    year: '2023',
    price: 'Local preview',
    blurb: 'Built for weekend trails, scenic routes, and all-terrain confidence.',
    image: bikeImages.bmw,
    safetyStatus: 'Passed',
    safetyScore: '91/100',
    testType: 'Adventure stability test',
    pros: ['Great cornering stability', 'Excellent suspension', 'Balanced touring comfort'],
    cons: ['Heavier than sport bikes', 'Premium maintenance cost'],
  },
  {
    title: 'Harley-Davidson Street Glide',
    make: 'Harley-Davidson',
    model: 'Street Glide',
    style: 'cruiser',
    era: 'classic',
    year: '2021',
    price: 'Arrival soon',
    blurb: 'Classic cruiser styling with a relaxed ride for open highways.',
    image: bikeImages.harley,
    safetyStatus: 'Passed with note',
    safetyScore: '87/100',
    testType: 'Low-speed handling review',
    pros: ['Comfortable touring ride', 'Strong highway stability', 'Excellent wind protection'],
    cons: ['Less agile at low speeds', 'Heavier steering feel'],
  },
  {
    title: 'Triumph Bonneville T100',
    make: 'Triumph',
    model: 'Bonneville T100',
    style: 'retro',
    era: 'classic',
    year: '2020',
    price: 'Vintage demo',
    blurb: 'A timeless café-inspired machine with old-school charm and modern reliability.',
    image: bikeImages.triumph,
    safetyStatus: 'Passed',
    safetyScore: '89/100',
    testType: 'Classic ride stability check',
    pros: ['Easy handling', 'Classic ergonomics', 'Reliable everyday use'],
    cons: ['Less power than modern sport bikes', 'Limited tech features'],
  },
];

const grid = document.getElementById('bike-grid');
const filters = document.querySelectorAll('.filter');
const makeFilter = document.getElementById('make-filter');
const modelFilter = document.getElementById('model-filter');
const styleFilter = document.getElementById('style-filter');
const eraFilter = document.getElementById('era-filter');
const searchFilter = document.getElementById('search-filter');
const applyButton = document.getElementById('apply-filters');
const queryPreview = document.getElementById('query-preview');
const compareOne = document.getElementById('compare-one');
const compareTwo = document.getElementById('compare-two');
const compareOutput = document.getElementById('compare-output');
let activeStyle = 'all';

function populateSelect(select, key) {
  const values = [...new Set(bikes.map((bike) => bike[key]))].sort();
  const currentValue = select.value;
  const options = ['<option value="all">All</option>'];

  values.forEach((value) => {
    options.push(`<option value="${value}">${value}</option>`);
  });

  select.innerHTML = options.join('');

  if (currentValue && currentValue !== 'all' && values.includes(currentValue)) {
    select.value = currentValue;
  } else {
    select.value = 'all';
  }
}

function updateQueryPreview(selected) {
  const clauses = [];

  if (selected.search) clauses.push(`search LIKE '%${selected.search}%'`);
  if (selected.make !== 'all') clauses.push(`make = '${selected.make}'`);
  if (selected.model !== 'all') clauses.push(`model = '${selected.model}'`);
  if (selected.style !== 'all') clauses.push(`style = '${selected.style}'`);
  if (selected.era !== 'all') clauses.push(`era = '${selected.era}'`);

  const whereClause = clauses.length ? `WHERE ${clauses.join(' AND ')}` : 'WHERE 1=1';
  queryPreview.textContent = `Query preview: SELECT * FROM motorcycles ${whereClause};`;
}

function populateCompareDropdowns() {
  const options = bikes.map((bike) => `<option value="${bike.title}">${bike.title}</option>`).join('');
  compareOne.innerHTML = options;
  compareTwo.innerHTML = options;
  compareOne.value = bikes[0].title;
  compareTwo.value = bikes[1].title;
}

function renderCompare() {
  const first = bikes.find((bike) => bike.title === compareOne.value);
  const second = bikes.find((bike) => bike.title === compareTwo.value);

  if (!first || !second) {
    compareOutput.innerHTML = '<p>Select two motorcycles to compare.</p>';
    return;
  }

  compareOutput.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>${first.title}</th>
          <th>${second.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Make</td><td>${first.make}</td><td>${second.make}</td></tr>
        <tr><td>Model</td><td>${first.model}</td><td>${second.model}</td></tr>
        <tr><td>Style</td><td>${first.style}</td><td>${second.style}</td></tr>
        <tr><td>Era</td><td>${first.era}</td><td>${second.era}</td></tr>
        <tr><td>Year</td><td>${first.year}</td><td>${second.year}</td></tr>
        <tr><td>Price</td><td>${first.price}</td><td>${second.price}</td></tr>
      </tbody>
    </table>
  `;
}

function renderBikes() {
  const selected = {
    search: searchFilter.value.trim().toLowerCase(),
    make: makeFilter.value,
    model: modelFilter.value,
    style: styleFilter.value,
    era: eraFilter.value,
  };

  const visible = bikes.filter((bike) => {
    const searchText = `${bike.title} ${bike.make} ${bike.model} ${bike.style}`.toLowerCase();
    const matchesStyle = activeStyle === 'all' || bike.style === activeStyle;
    const matchesMake = selected.make === 'all' || bike.make === selected.make;
    const matchesModel = selected.model === 'all' || bike.model === selected.model;
    const matchesDropdownStyle = selected.style === 'all' || bike.style === selected.style;
    const matchesEra = selected.era === 'all' || bike.era === selected.era;
    const matchesSearch = !selected.search || searchText.includes(selected.search);

    return matchesStyle && matchesMake && matchesModel && matchesDropdownStyle && matchesEra && matchesSearch;
  });

  updateQueryPreview(selected);

  grid.innerHTML = visible
    .map(
      (bike) => `
        <article class="bike-card">
          <img class="bike-image" src="${bike.image}" alt="${bike.title}" loading="lazy" />
          <div class="content">
            <h3>${bike.title}</h3>
            <p>${bike.blurb}</p>
            <ul class="bike-specs">
              <li><strong>Make:</strong> ${bike.make}</li>
              <li><strong>Model:</strong> ${bike.model}</li>
              <li><strong>Style:</strong> ${bike.style}</li>
              <li><strong>Era:</strong> ${bike.era}</li>
              <li><strong>Year:</strong> ${bike.year}</li>
            </ul>
            <div class="review-box">
              <div class="review-row">
                <span class="review-label">Safety</span>
                <span class="review-value">${bike.safetyStatus}</span>
              </div>
              <div class="review-row">
                <span class="review-label">Score</span>
                <span class="review-value">${bike.safetyScore}</span>
              </div>
              <div class="review-row">
                <span class="review-label">Test</span>
                <span class="review-value">${bike.testType}</span>
              </div>
              <div class="review-group">
                <strong>Pros</strong>
                <ul>${bike.pros.map((item) => `<li>${item}</li>`).join('')}</ul>
              </div>
              <div class="review-group">
                <strong>Cons</strong>
                <ul>${bike.cons.map((item) => `<li>${item}</li>`).join('')}</ul>
              </div>
            </div>
            <div class="meta">
              <span>${bike.style}</span>
              <span class="price">${bike.price}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    activeStyle = button.dataset.filter;
    renderBikes();
  });
});

[makeFilter, modelFilter, styleFilter, eraFilter, searchFilter].forEach((element) => {
  element.addEventListener('input', renderBikes);
  element.addEventListener('change', renderBikes);
});

applyButton.addEventListener('click', renderBikes);
[compareOne, compareTwo].forEach((select) => {
  select.addEventListener('change', renderCompare);
});

populateSelect(makeFilter, 'make');
populateSelect(modelFilter, 'model');
populateSelect(styleFilter, 'style');
populateSelect(eraFilter, 'era');
populateCompareDropdowns();
renderBikes();
renderCompare();
