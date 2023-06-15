let items = JSON.parse(localStorage.getItem('items')) || [];
const addItem = document.querySelectorAll('.cart');

addItem.forEach(button => {
    button.addEventListener('click', () => {
      const dataItem = button.getAttribute('data-item');
      items.push(dataItem);
      localStorage.setItem('items', JSON.stringify(items));
      location.reload();
    });
  });