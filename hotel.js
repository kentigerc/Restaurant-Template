document.getElementById('searchBar').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('.searchable');

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
