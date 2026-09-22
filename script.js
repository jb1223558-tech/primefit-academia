const config = window.PRIMEFIT_CONFIG;
const whatsAppLink = (message) => config.whatsappNumber
  ? `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`
  : `https://www.instagram.com/primefitacademiaibi/`;

document.querySelectorAll('[data-whatsapp]').forEach((el) => {
  el.href = whatsAppLink(el.dataset.whatsapp);
  el.target = '_blank';
  el.rel = 'noreferrer';
  if (!config.whatsappNumber) el.title = 'Adicione o WhatsApp em config.js para ativar este contato';
});
document.querySelector('#year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 24), { passive: true });
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => { const active = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', active); document.body.classList.toggle('menu-open', active); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', false); document.body.classList.remove('menu-open'); }));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('shown'); }), { threshold: .12 });
document.querySelectorAll('.intro, .structure-head, .services, .plans-head, .plan-card, .quote, .contact').forEach((el) => { el.classList.add('reveal'); observer.observe(el); });
