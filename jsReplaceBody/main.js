function swapContent(num) {
  const pages = document.querySelectorAll('.content');
  pages.forEach(p => p.classList.add('hidden'));
  pages.forEach(p => p.classList.remove('show'));

  pages[num-1].classList.remove('hidden');
  pages[num-1].classList.add('show');
}
