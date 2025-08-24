// Tab switching
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.add('hidden'));
    btn.classList.add('active');
    const target = document.querySelector(btn.dataset.target);
    if (target) target.classList.remove('hidden');
  });
});

// Theme toggle
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const current = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', current);
if (current === 'dark') document.body.classList.add('dark');

toggle.addEventListener('click', () => {
  const theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});