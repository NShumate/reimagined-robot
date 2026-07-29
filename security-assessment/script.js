const controls = [
  {
    id: 'ac-2',
    name: 'AC-2 Account Management',
    family: 'Identity',
    status: 'Gap',
    evidence: 'No user accounts, IAM roles, or access model are defined for the current site.',
    priority: 'High',
  },
  {
    id: 'au-2',
    name: 'AU-2 Audit Events',
    family: 'Logging',
    status: 'Gap',
    evidence: 'No CloudTrail, centralized audit logging, or event review process is present.',
    priority: 'High',
  },
  {
    id: 'cm-2',
    name: 'CM-2 Baseline Configuration',
    family: 'Configuration',
    status: 'Partial',
    evidence: 'The site has a defined static structure, but no config baseline or deployment guardrails.',
    priority: 'Medium',
  },
  {
    id: 'cp-10',
    name: 'CP-10 Recovery',
    family: 'Resilience',
    status: 'Gap',
    evidence: 'No automated backup or recovery workflow exists for this local demo.',
    priority: 'High',
  },
  {
    id: 'sc-8',
    name: 'SC-8 Transmission Protection',
    family: 'Network',
    status: 'Gap',
    evidence: 'The local page is not served over HTTPS, so transport protection is not demonstrated.',
    priority: 'High',
  },
  {
    id: 'sc-13',
    name: 'SC-13 Cryptographic Protection',
    family: 'Data Protection',
    status: 'Partial',
    evidence: 'Static assets are simple files, but no encryption-at-rest or key-management controls are shown.',
    priority: 'Medium',
  },
  {
    id: 'si-2',
    name: 'SI-2 Flaw Remediation',
    family: 'Vulnerability',
    status: 'Partial',
    evidence: 'The site is manually maintained, but there is no patching or vulnerability review workflow.',
    priority: 'Medium',
  },
  {
    id: 'ir-4',
    name: 'IR-4 Incident Handling',
    family: 'Response',
    status: 'Gap',
    evidence: 'No incident response plan, contact path, or escalation process is implemented for the site.',
    priority: 'High',
  },
];

const familyFilters = document.getElementById('family-filters');
const tableBody = document.getElementById('control-table-body');
const controlCount = document.getElementById('control-count');
const partialCount = document.getElementById('partial-count');
const gapCount = document.getElementById('gap-count');
let activeFamily = 'All';

function getStatusClass(status) {
  if (status === 'Gap') return 'status-gap';
  if (status === 'Partial') return 'status-partial';
  return 'status-good';
}

function renderControls() {
  const filtered = activeFamily === 'All'
    ? controls
    : controls.filter((item) => item.family === activeFamily);

  tableBody.innerHTML = filtered
    .map(
      (control) => `
        <tr>
          <td>${control.name}</td>
          <td>${control.family}</td>
          <td><span class="status-pill ${getStatusClass(control.status)}">${control.status}</span></td>
          <td>${control.evidence}</td>
          <td>${control.priority}</td>
        </tr>
      `
    )
    .join('');

  controlCount.textContent = controls.length;
  partialCount.textContent = controls.filter((item) => item.status === 'Partial').length;
  gapCount.textContent = controls.filter((item) => item.status === 'Gap').length;
}

function renderFilters() {
  const families = ['All', ...new Set(controls.map((item) => item.family))];
  familyFilters.innerHTML = families
    .map((family) => `
      <button class="filter ${family === activeFamily ? 'active' : ''}" data-family="${family}">${family}</button>
    `)
    .join('');

  document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      activeFamily = button.dataset.family;
      renderFilters();
      renderControls();
    });
  });
}

renderFilters();
renderControls();
