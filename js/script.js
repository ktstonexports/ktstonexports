
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
const stoneRegistry = {
  "alaska-white": {
    name: "Alaska White Granite",
    strength: "180-260 MPa [cite: 58]",
    absorption: "0.12%-0.38% [cite: 60]",
    density: "2,650-2,800 kg/m³ [cite: 59]",
    astm: "ASTM C615 Compliant"
  },
  "platinum-white": {
    name: "Platinum White Granite",
    strength: "133-142 N/mm² [cite: 45]",
    absorption: "0.20%-0.4% [cite: 46]",
    density: "2,700-2,900 kg/m³ [cite: 44]",
    astm: "ASTM C615 Compliant"
  },
  "raj-green": {
    name: "Raj Green Sandstone",
    strength: "34.13 MPa (Flexural) [cite: 72]",
    absorption: "1.04%-1.25% [cite: 71]",
    density: "2,400-2,650 kg/m³",
    astm: "ASTM C616 Class II"
  },
  "indian-basalt": {
    name: "Indian Basalt",
    strength: "200-350 MPa",
    absorption: "0.1%-0.8%",
    density: "2,800-3,000 kg/m³",
    astm: "Industrial Grade High-Density"
  },
  "cuddapah-black": {
    name: "Cuddapah Black Limestone",
    strength: "100-210 MPa [cite: 93]",
    absorption: "<1.0% [cite: 90]",
    density: "2,500-2,700 kg/m³ [cite: 89]",
    astm: "ASTM C568 High-Density"
  }
};
