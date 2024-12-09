import { latestProducts, latestProducts2 } from './product.js';

const menu = document.getElementById('nav-menu');
const mnueBtn = document.getElementById('menu-burger');
const closeBtn = document.getElementById('close-menu');

const shopLink = document.querySelector('.shop-page')
const shopLinks = document.querySelector('.shops-link')
mnueBtn.addEventListener('click', () => {
  menu.classList.add('show-menu');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('show-menu');
});


let priceProduct = 0;


let latestProductsHTML = '';
let latestProductsHTML2 = '';
latestProducts.forEach((product) => {

  let discount = 0;
    if (product.existing === true && product.discount > 0) {
      priceProduct = `$${(product.priceCents / 100).toFixed(2)}`;

      discount = product.discount;
      latestProductsHTML +=`
      <div class="product">
        <div class="img-container-product"><img src="${product.img}"></div>
        <div class="discount">${discount}%</div>
        <div class="name-product">${product.name}</div>
        <div class="price-product js-price-product">${priceProduct}</div>
        <div class="added js-added-${product.id}">Added</div>
        <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}"><i class="fa-solid fa-shopping-cart"></i></button>
      </div>
      `;
    }else if (product.existing === true && discount === 0) {
      latestProductsHTML +=`
      <div class="product">
        <div class="img-container-product"><img src="${product.img}"></div>
        <div class="name-product">${product.name}</div>
        <div class="price-product js-price-product">${priceProduct}</div>
        <div class="added js-added-${product.id}">Added</div>
        <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}"><i class="fa-solid fa-shopping-cart"></i></button>
      </div>
      `;
    }else if (product.existing === false){

      latestProductsHTML +=`
      <div class="product">
        <div class="img-container-product"><img src="${product.img}"></div>
        <div class="name-product">${product.name}</div>
        <div class="not-available">Not availble at the moment</div>
        <button class="add-to-cart not-add-tocart"><i class="fa-solid fa-shopping-cart"></i></button>
      </div>
      `;
    }

});

// latest products2

latestProducts2.forEach((product) => {

  let discount = 0;
    if (product.existing === true && product.discount > 0) {
      priceProduct = `$${(product.priceCents / 100).toFixed(2)}`;

      discount = product.discount;
      latestProductsHTML2 +=`
      <div class="product product2">
        <div class="img-container-product"><img src="${product.img}"></div>
        <div class="discount">${discount}%</div>
        <div class="name-product">${product.name}</div>
        <div class="price-product js-price-product">${priceProduct}</div>
        <div class="added js-added-${product.id}">Added</div>
        <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}"><i class="fa-solid fa-shopping-cart"></i></button>
      </div>
      `;
    }else if (product.existing === true && discount === 0) {
      latestProductsHTML2 +=`
      <div class="product product2">
        <div class="img-container-product"><img src="${product.img}"></div>
        <div class="name-product">${product.name}</div>
        <div class="price-product js-price-product">${priceProduct}</div>
        <div class="added js-added-${product.id}">Added</div>
        <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}"><i class="fa-solid fa-shopping-cart"></i></button>
      </div>
      `;
    }else if (product.existing === false){

      latestProductsHTML2 +=`
      <div class="product product2">
        <div class="img-container-product"><img src="${product.img}"></div>
        <div class="name-product">${product.name}</div>
        <div class="not-available">Not availble at the moment</div>
        <button class="add-to-cart not-add-tocart"><i class="fa-solid fa-shopping-cart"></i></button>
      </div>
      `;
    }

});
document.getElementById('new-products').innerHTML = latestProductsHTML;
document.getElementById('new-products2').innerHTML = latestProductsHTML2;


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  let productId = button.dataset.productId;
  button.addEventListener('click', () => {
  let added = document.querySelector(`.js-added-${productId}`);
  added.classList.add(`show-added`);

  setTimeout(() => {
    added.classList.remove('show-added');
  }, 1000);
  })
});



/*
      const slider = document.querySelector('.slider');
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft; // موقعیت شروع کشیدن
        scrollLeft = slider.scrollLeft; // موقعیت اسلاید‌ها در ابتدا
        slider.style.cursor = 'grabbing'; // تغییر شکل موس به حالت کشیدن
      });

      slider.addEventListener('mouseleave', () => {
        isDragging = false;
        slider.style.cursor = 'grab'; // بازگشت به حالت عادی موس
      });

      slider.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.cursor = 'grab'; // بازگشت به حالت عادی موس
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // اگر در حال کشیدن نیستیم، هیچ کاری انجام نمی‌دهیم
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // سرعت حرکت اسلاید‌ها
        slider.scrollLeft = scrollLeft - walk; // جابجایی اسلاید‌ها
      });


*/


const slider = document.querySelector('.product2');
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft; // موقعیت شروع کشیدن
  scrollLeft = slider.scrollLeft; // موقعیت اسلاید‌ها در ابتدا
  slider.style.cursor = 'grabbing'; // تغییر شکل موس به حالت کشیدن
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  slider.style.cursor = 'grab'; // بازگشت به حالت عادی موس
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  slider.style.cursor = 'grab'; // بازگشت به حالت عادی موس
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // اگر در حال کشیدن نیستیم، هیچ کاری انجام نمی‌دهیم
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // سرعت حرکت اسلاید‌ها
  slider.scrollLeft = scrollLeft - walk; // جابجایی اسلاید‌ها
});











