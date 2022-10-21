'use strict';

const basketCounterEl = document.querySelector('.cartIconWrap span');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketEl = document.querySelector('.basket');

/**
 * Обработчик открытия корзины при клике на ее значок.
 */
document.querySelector('.cartIconWrap').addEventListener('click', () => {
  basketEl.classList.toggle('hidden');
});

/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это товар в корзине - объект, содержащий
 * id, название товара, цену, и количество штук, например:
 * {
 *    1: {id: 1, name: "product 1", price: 30, count: 2},
 *    3: {id: 3, name: "product 3", price: 25, count: 1},
 * }
 */
const basket = {};

/**
 * Обработчик клика на кнопку "Добавить в корзину" с деленированием события.
 * Событие вешается на ближайшего общего для всех кнопок предка.
 */
document.querySelector('.featuredItems').addEventListener('click', event => {
  // Проверяем, если клик был не по кнопке с селектором ".addToCart", а также
  // такого селектора не существует среди родителей элемента, по которому был
  // произведен клик, то ничего не делаем, уходим из функции.
  if (!event.target.closest('.addToCart')) {
    return;
  }
  // Получаем ближайшего родителя с классом featuredItem, в нем записаны все
  // нужные данные о продукте, получаем эти данные.
  const featuredItemEl = event.target.closest('.featuredItem');
  const id = +featuredItemEl.dataset.id;
  const name = featuredItemEl.dataset.name;
  const price = +featuredItemEl.dataset.price;
  // Добавляем в корзину продукт.
  addToCart(id, name, price);
});

/**
 * Функция добавляет продукт в корзину.
 * @param {number} id - Id продукта.
 * @param {string} name - Название продукта.
 * @param {number} price - Цена продукта.
 */
function addToCart(id, name, price) {
  // Если такого продукта еще не было добавлено в наш объект, который хранит
  // все добавленные товары, то создаем новый объект.
  if (!(id in basket)) {
    basket[id] = {id: id, name: name, price: price, count: 0};
  }
  // Добавляем в количество +1 к продукту.
  basket[id].count++;
  // Ставим новое количество добавленных товаров у значка корзины.
  basketCounterEl.textContent = getTotalBasketCount().toString();
  // Ставим новую общую стоимость товаров в корзине.
  basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
  // Отрисовываем продукт с данным id.
  renderProductInBasket(id);
}

/**
 * Считает и возвращает количество продуктов в корзине.
 * @return {number} - Количество продуктов в корзине.
 */
function getTotalBasketCount() {
  return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

/**
 * Считает и возвращает итоговую цену по всем добавленным продуктам.
 * @return {number} - Итоговую цену по всем добавленным продуктам.
 */
function getTotalBasketPrice() {
  return Object
    .values(basket)
    .reduce((acc, product) => acc + product.price * product.count, 0);
}

/**
 * Отрисовывает в корзину информацию о продукте.
 * @param {number} productId - Id продукта.
 */
function renderProductInBasket(productId) {
  // Получаем строку в корзине, которая отвечает за данный продукт.
  const basketRowEl = basketEl
    .querySelector(`.basketRow[data-id="${productId}"]`);
  // Если такой строки нет, то отрисовываем новую строку.
  if (!basketRowEl) {
    renderNewProductInBasket(productId);
    return;
  }

  // Получаем данные о продукте из объекта корзины, где хранятся данные о всех
  // добавленных продуктах.
  const product = basket[productId];
  // Ставим новое количество в строке продукта корзины.
  basketRowEl.querySelector('.productCount').textContent = product.count;
  // Ставим нужную итоговую цену по данному продукту в строке продукта корзины.
  basketRowEl
    .querySelector('.productTotalRow')
    .textContent = (product.price * product.count).toFixed(2);
}

/**
 * Функция отрисовывает новый товар в корзине.
 * @param {number} productId - Id товара.
 */
function renderNewProductInBasket(productId) {
  const productRow = `
    <div class="basketRow" data-id="${productId}">
      <div>${basket[productId].name}</div>
      <div>
        <span class="productCount">${basket[productId].count}</span> шт.
      </div>
      <div>$${basket[productId].price}</div>
      <div>
        $<span class="productTotalRow">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
      </div>
    </div>
    `;
  basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
