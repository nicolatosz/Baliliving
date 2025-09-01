// Mobile menu toggle
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
function setOpen(open){
  if(!menu || !burger) return;
  menu.style.display = open ? 'flex' : '';
  burger.setAttribute('aria-expanded', open);
}
burger?.addEventListener('click',()=>{
  const open = burger.getAttribute('aria-expanded') !== 'true';
  setOpen(open);
});

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Current year in footer
const y = document.getElementById('year');
if(y){ y.textContent = new Date().getFullYear(); }