
// Lightbox and scroll fade-in
document.addEventListener('DOMContentLoaded', function(){
  // lightbox
  const overlay = document.createElement('div');
  overlay.className='lightbox-overlay';
  const img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);
  document.querySelectorAll('.card img').forEach(el => {
    el.addEventListener('click', () => {
      img.src = el.src;
      overlay.classList.add('show');
    });
  });
  overlay.addEventListener('click', ()=> overlay.classList.remove('show'));
  // fade-in
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); });
  }, {threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
});
