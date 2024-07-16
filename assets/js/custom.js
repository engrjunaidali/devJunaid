var cursor = document.querySelector(".blob");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});




// portfolio
function filterPortfolio(category) {
  const items = document.querySelectorAll('.pf-item');

  items.forEach(item => {
      if (category === 'all') {
          item.style.display = 'block';
            requestAnimationFrame(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            });
      } else {
          if (item.getAttribute('data-category') === category) {
              item.style.display = 'block';
            requestAnimationFrame(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            });
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.5)';
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
          }
      }
  });
}