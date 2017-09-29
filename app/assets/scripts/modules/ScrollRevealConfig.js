import ScrollReveal from 'scrollreveal';

class ScrollRevealConfig {
  constructor(){
    window.sr = ScrollReveal({ reset: false, distance: '24px', duration: 1500, scale: 1 });
    if (sr.isSupported()) {
      document.documentElement.classList.add('sr');
    }
    sr.reveal('.promo-intro h1', { scale: 1.2, origin: 'top' });
    sr.reveal('.promo-intro h2', { scale: 1.2, delay: 500});
    sr.reveal('.promo-intro h3', { delay: 2000 });
    sr.reveal('.promo-intro .btn', { scale: 0.4, delay: 2000});
    sr.reveal('.hero-shot', { rotate: { y: 40 }, distance: '200px', delay: 1000});
    sr.reveal('nav, .logo', { origin: 'top', delay: 1000});
    sr.reveal('.phone', { origin: 'bottom right', distance: '60px', rotate: { z: 10 }, delay: 200});
    sr.reveal('.laptop, h1, h2, h3, .btn, .client-carousel, .contact-form', { duration: 1000 });
    sr.reveal('.feature-item', { duration: 1000 }, 50);
    sr.reveal('.info-text p', 150);
  }

}

export default ScrollRevealConfig;
