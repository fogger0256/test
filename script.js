// スクロール時にフェードイン
const elements = document.querySelectorAll('.fade');

const fadeInOnScroll = () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();
