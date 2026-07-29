const controls = [
  {
    id: 'ac-2',
    name: 'AC-2 Account Management',
    family: 'Identity',
    status: 'Gap',
    evidence: 'No user accounts, IAM roles, or access model are defined for the current site.',
    priority: 'High',
    recommendation: 'Create least-privilege IAM roles and require MFA for any administrative access.',
    detail: 'In production, this control should map to distinct personas such as admin, reviewer, and operator with clear permissions and rotation policies.',
  },
  {
    id: 'au-2',
    name: 'AU-2 Audit Events',
    family: 'Logging',
    status: 'Gap',
    evidence: 'No CloudTrail, centralized audit logging, or event review process is present.',
    priority: 'High',
    recommendation: 'Enable centralized logging and retention for authentication, deployment, and administrative activity.',
    detail: 'Collecting and reviewing audit events helps detect unusual behavior and supports incident response timelines.',
  },
  {
    id: 'cm-2',
    name: 'CM-2 Baseline Configuration',
    family: 'Configuration',
    status: 'Partial',
    evidence: 'The site has a defined static structure, but no config baseline or deployment guardrails.',
    priority: 'Medium',
    recommendation: 'Document a secure baseline and use automation to enforce approved deployment settings.',
    detail: 'A known-good configuration reduces drift and helps prevent accidental exposure of insecure settings.',
  },
  {
    id: 'cp-10',
    name: 'CP-10 Recovery',
    family: 'Resilience',
    status: 'Gap',
    evidence: 'No automated backup or recovery workflow exists for this local demo.',
    priority: 'High',
    recommendation: 'Implement automated backups and a documented restore test for core site assets and content.',
    detail: 'Recovery controls should be tested periodically so the team can restore systems quickly during unexpected events.',
  },
  {
    id: 'sc-8',
    name: 'SC-8 Transmission Protection',
    family: 'Network',
    status: 'Gap',
    evidence: 'The local page is not served over HTTPS, so transport protection is not demonstrated.',
    priority: 'High',
    recommendation: 'Serve the site over HTTPS and enforce secure transport for all traffic.',
    detail: 'Encrypting traffic in transit protects user data and prevents interception or tampering.',
  },
  {
    id: 'sc-13',
    name: 'SC-13 Cryptographic Protection',
    family: 'Data Protection',
    status: 'Partial',
    evidence: 'Static assets are simple files, but no encryption-at-rest or key-management controls are shown.',
    priority: 'Medium',
    recommendation: 'Use managed encryption and key management for any stored content or secrets.',
    detail: 'Even static sites may store secrets, uploads, or configuration values that need protection.',
  },
  {
    id: 'si-2',
    name: 'SI-2 Flaw Remediation',
    family: 'Vulnerability',
    status: 'Partial',
    evidence: 'The site is manually maintained, but there is no patching or vulnerability review workflow.',
    priority: 'Medium',
    recommendation: 'Schedule regular patching and review dependencies for known vulnerabilities.',
    detail: 'A repeatable remediation process helps prevent outdated libraries and exposed weaknesses.',
  },
  {
    id: 'ir-4',
    name: 'IR-4 Incident Handling',
    family: 'Response',
    status: 'Gap',
    evidence: 'No incident response plan, contact path, or escalation process is implemented for the site.',
    priority: 'High',
    recommendation: 'Create an incident response runbook with roles, escalation paths, and communication steps.',
    detail: 'A documented process reduces confusion and speeds up recovery when something goes wrong.',
  },
];

const familyFilters = document.getElementById('family-filters');
const checklist = document.getElementById('control-checklist');
const controlCount = document.getElementById('control-count');
const partialCount = document.getElementById('partial-count');
const gapCount = document.getElementById('gap-count');
let activeFamily = 'All';

function getStatusClass(status) {
  if (status === 'Gap') return 'bad';
  if (status === 'Partial') return 'partial';
  return 'good';
}

function getStatusIcon(status) {
  if (status === 'Gap') return '✕';
  if (status === 'Partial') return '•';
  return '✓';
}

function renderControls() {
  const filtered = activeFamily === 'All'
    ? controls
    : controls.filter((item) => item.family === activeFamily);

  checklist.innerHTML = filtered
    .map(
      (control) => `
        <div class="control-item">
          <button class="control-toggle" data-id="${control.id}" type="button">
            <div class="control-box ${getStatusClass(control.status)}">${getStatusIcon(control.status)}</div>
            <div class="control-content">
              <div class="control-title-row">
                <div class="control-title">${control.name}</div>
                <span class="control-badge">${control.family}</span>
              </div>
              <div class="control-meta">${control.priority} priority • ${control.evidence}</div>
            </div>
          </button>
          <div class="control-details" id="details-${control.id}">
            <h4>Recommendation</h4>
            <p>${control.recommendation}</p>
            <h4>Why it matters</h4>
            <p>${control.detail}</p>
          </div>
        </div>
      `
    )
    .join('');

  document.querySelectorAll('.control-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.id;
      const details = document.getElementById(`details-${targetId}`);
      const isOpen = details.classList.contains('open');

      document.querySelectorAll('.control-details').forEach((panel) => panel.classList.remove('open'));
      if (!isOpen) {
        details.classList.add('open');
      }
    });
  });

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
