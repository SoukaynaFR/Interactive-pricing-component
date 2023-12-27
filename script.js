document.addEventListener('DOMContentLoaded', function () {
    const pageviewsSlider = document.getElementById('pageviews');
    const pageviewsValue = document.querySelector('.pageviews-value');
    const priceElement = document.getElementById('price');
    const discountElement = document.querySelector('.discount');
    const toggle = document.getElementById('toggle');
  
    const prices = [8.00, 12.00, 16.00, 24.00, 36.00];
    const pageviewLabels = ['10K', '50K', '100K', '500K', '1M'];
  
    pageviewsSlider.addEventListener('input', updatePageviews);
  
    function updatePageviews() {
      const index = pageviewsSlider.value;
      pageviewsValue.textContent = `${pageviewLabels[index]} pageviews`;
      priceElement.textContent = prices[index];
    }
  
    toggle.addEventListener('change', function () {
      const index = pageviewsSlider.value;
      const discountedPrice = prices[index] * 0.75;
  
      if (toggle.checked) {
        priceElement.textContent = discountedPrice;
      } else {
        priceElement.textContent = prices[index];
      }
    });
  
   
    updatePageviews();
  });
  