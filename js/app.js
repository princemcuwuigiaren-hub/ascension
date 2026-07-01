// ASCENSION — shared behavior across pages

function initTheme(){
  const saved = localStorage.getItem('ascension-theme');
  if(saved === 'light') document.body.classList.add('light');
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.textContent = document.body.classList.contains('light') ? '☾' : '☀';
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      localStorage.setItem('ascension-theme', isLight ? 'light' : 'dark');
      btn.textContent = isLight ? '☾' : '☀';
    });
  }
}

function tierLabel(t){
  return { beginner:'Beginner', intermediate:'Intermediate', advanced:'Advanced' }[t] || t;
}

function domainReadinessDemo(domainId){
  // Placeholder readiness values for the Ascent Bar until the
  // real Readiness Engine is wired in.
  const demo = { physical:0.7, mind:0.9, finance:0.4, skills:0.55, appearance:0.3 };
  return demo[domainId] ?? 0.5;
}

function getDomain(id){
  return ASCENSION_DATA.domains.find(d => d.id === id);
}

document.addEventListener('DOMContentLoaded', initTheme);
