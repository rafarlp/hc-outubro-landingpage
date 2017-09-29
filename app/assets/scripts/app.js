import ScrollReveal from 'scrollreveal';
import SmoothScroll from './modules/smoothscroll';

var smoothScroll = new SmoothScroll();

window.sr = ScrollReveal({ reset: false, distance: '24px', duration: 1500, scale: 1 });
sr.reveal('.promo-intro h1', { scale: 1.2, origin: 'top' });
sr.reveal('.promo-intro h2', { scale: 1.2, delay: 500});
sr.reveal('.promo-intro h3', { delay: 1000});
sr.reveal('.promo-intro .btn', { scale: 1, delay: 1000});
sr.reveal('.hero-shot', { rotate: { y: 40 }, distance: '200px', delay: 1000});
sr.reveal('nav, .logo', { origin: 'top', delay: 1000});
sr.reveal('.phone', { origin: 'bottom right', distance: '60px', rotate: { z: 10 }, delay: 200});
sr.reveal('.laptop, h1, h2, h3, .btn, .client-carousel, .contact-form', { duration: 1000 });
sr.reveal('.feature-item', { duration: 2000 }, 100);
sr.reveal('.info-text p', 150);
