// script.js - single robust file (paste entire file, overwrite old one)

document.addEventListener('DOMContentLoaded', () => {
  // ---------- SAFE SLIDESHOW ----------
  const slides = document.getElementById('slides');
  if (slides) {
    const images = slides.querySelectorAll('img');
    let index = 0;

    function showSlide(i) {
      index = (i + images.length) % images.length;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() { showSlide(index + 1); }
    function prevSlide() { showSlide(index - 1); }

    // expose for inline buttons (if used)
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    setInterval(nextSlide, 3000);
  } else {
    window.nextSlide = window.nextSlide || function(){};
    window.prevSlide = window.prevSlide || function(){};
  }

  // ---------- BACK TO TOP ----------
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    backBtn.classList.remove('show');

    const onScroll = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrolled > 120) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    onScroll(); // run once on load
  }

  // ---------- ACTIVE NAV LINK ----------
  const navLinks = document.querySelectorAll('.first-navigation a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
    if (link.hasAttribute('target')) link.removeAttribute('target');
  });

  // ---------- FLOATING WHATSAPP BUTTON ----------
  const whatsappBtn = document.querySelector('.float-whatsapp');
  if (whatsappBtn) {
    // ensure visible on load
    whatsappBtn.style.opacity = '1';
    whatsappBtn.style.transform = 'translateY(0)';
    whatsappBtn.style.display = 'flex';

    // optional bounce reset on scroll for smoother motion
    window.addEventListener('scroll', () => {
      whatsappBtn.style.opacity = '1';
      whatsappBtn.style.display = 'flex';
    }, { passive: true });
  }
});
