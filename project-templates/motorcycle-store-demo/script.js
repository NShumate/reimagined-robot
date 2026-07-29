const bikeImages = {
  honda: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#10151c"/>
  <rect x="80" y="120" width="1040" height="560" rx="36" fill="#1b2430"/>
  <circle cx="330" cy="570" r="100" fill="#0e1118" stroke="#f97316" stroke-width="12"/>
  <circle cx="860" cy="570" r="100" fill="#0e1118" stroke="#f97316" stroke-width="12"/>
  <path d="M220 390 L330 330 L430 330 L510 260 L650 260 L720 330 L900 330 L910 380 L760 380 L690 440 L520 440 L410 390 L220 390 Z" fill="#f97316"/>
  <path d="M390 330 L470 220 L560 220 L580 270 L500 270 Z" fill="#f8fafc"/>
  <path d="M580 320 L700 220 L785 220 L760 320 Z" fill="#f8fafc"/>
  <path d="M250 390 L190 370 L140 390 L180 440 Z" fill="#f8fafc"/>
  <rect x="260" y="370" width="80" height="20" rx="8" fill="#111827"/>
  <rect x="770" y="360" width="90" height="22" rx="8" fill="#111827"/>
</svg>`)}`,
  bmw: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#0b1320"/>
  <rect x="70" y="110" width="1060" height="580" rx="36" fill="#182534"/>
  <circle cx="340" cy="570" r="100" fill="#101722" stroke="#7dd3fc" stroke-width="12"/>
  <circle cx="870" cy="570" r="100" fill="#101722" stroke="#7dd3fc" stroke-width="12"/>
  <path d="M220 395 L330 330 L450 330 L550 260 L680 260 L760 330 L910 330 L910 380 L770 380 L700 440 L540 440 L430 395 L220 395 Z" fill="#7dd3fc"/>
  <path d="M390 330 L480 220 L560 220 L560 270 L480 270 Z" fill="#f8fafc"/>
  <path d="M620 320 L720 220 L800 220 L780 320 Z" fill="#f8fafc"/>
  <path d="M280 390 L220 364 L180 390 L220 435 Z" fill="#f8fafc"/>
  <rect x="250" y="370" width="90" height="20" rx="8" fill="#111827"/>
  <rect x="790" y="360" width="90" height="22" rx="8" fill="#111827"/>
</svg>`)}`,
  harley: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#1a120e"/>
  <rect x="70" y="120" width="1060" height="560" rx="36" fill="#2a201b"/>
  <circle cx="340" cy="570" r="100" fill="#140f0b" stroke="#f59e0b" stroke-width="12"/>
  <circle cx="860" cy="570" r="100" fill="#140f0b" stroke="#f59e0b" stroke-width="12"/>
  <path d="M220 395 L330 330 L450 330 L530 270 L670 270 L750 330 L920 330 L920 380 L780 380 L710 440 L540 440 L430 395 L220 395 Z" fill="#f59e0b"/>
  <path d="M400 332 L475 220 L560 220 L575 270 L490 270 Z" fill="#f8fafc"/>
  <path d="M590 324 L690 220 L780 220 L760 324 Z" fill="#f8fafc"/>
  <rect x="250" y="370" width="85" height="20" rx="8" fill="#111827"/>
  <rect x="800" y="360" width="90" height="22" rx="8" fill="#111827"/>
</svg>`)}`,
  triumph: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#1f1812"/>
  <rect x="70" y="120" width="1060" height="560" rx="36" fill="#2d231b"/>
  <circle cx="340" cy="570" r="100" fill="#14110e" stroke="#d97706" stroke-width="12"/>
  <circle cx="860" cy="570" r="100" fill="#14110e" stroke="#d97706" stroke-width="12"/>
  <path d="M220 395 L330 330 L450 330 L530 270 L680 270 L760 330 L910 330 L910 380 L770 380 L700 440 L540 440 L430 395 L220 395 Z" fill="#d97706"/>
  <path d="M400 332 L475 220 L560 220 L575 270 L490 270 Z" fill="#f8fafc"/>
  <path d="M600 322 L705 220 L790 220 L770 322 Z" fill="#f8fafc"/>
  <rect x="250" y="370" width="85" height="20" rx="8" fill="#111827"/>
  <rect x="800" y="360" width="90" height="22" rx="8" fill="#111827"/>
</svg>`)}`,
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
          <img src="${bike.image}" alt="${bike.title}" />
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
