var hamburgerBtn = document.getElementById('hamburgerBtn');
function toggleMenu() {
  var m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
  hamburgerBtn.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  hamburgerBtn.classList.remove('open');
}
function toggleFaq(btn) {
  var item = btn.closest('.faq-item');
  var ans = item.querySelector('.faq-a');
  var isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(function (a) { a.classList.remove('open'); });
  document.querySelectorAll('.faq-q.open').forEach(function (b) { b.classList.remove('open'); });
  if (!isOpen) { ans.classList.add('open'); btn.classList.add('open'); }
}
document.addEventListener('click', function (e) {
  if (!e.target.closest('#header')) closeMenu();
});
// Fade-in on scroll
var fadeEls = document.querySelectorAll('.feature-card,.country-card,.sched-card,.review-card,.contact-card,.faq-item');
fadeEls.forEach(function (el) { el.classList.add('fade-in'); });
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
fadeEls.forEach(function (el) { observer.observe(el); });