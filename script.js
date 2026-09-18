const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const toggleButton = document.querySelector('.theme-toggle');
const toggleLabel = document.querySelector('.toggle-label');

if (toggleButton && toggleLabel) {
  const applyTheme = (theme) => {
    document.body.classList.toggle('light-theme', theme === 'light');
    toggleLabel.textContent = theme === 'light' ? 'Dark' : 'Light';
    localStorage.setItem('portfolio-theme', theme);
  };

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    applyTheme('light');
  }

  toggleButton.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

