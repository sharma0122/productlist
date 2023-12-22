
// Get the search input element
const searchInput = document.getElementById('search-item');
const productList = document.querySelector('.product-list');
const products = Array.from(productList.getElementsByClassName('product'));

// Add event listener for input changes
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  products.forEach(function(product) {
    const productName = product.querySelector('h2').textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
