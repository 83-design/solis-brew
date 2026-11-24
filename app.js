const DRINKS = [
  {
    id: 'latte',
    keyword: 'LATTE',
    category: 'coffee',
    categoryLabel: 'Авторский кофе',
    rating: '★ 4.9 · Хит',
    title: 'Айс-латте «Солёная карамель»',
    desc: 'Двойной шот светлой обжарки на шелковистом молоке с домашней карамелью и щепоткой морской соли.',
    origin: '100% Арабика · Бразилия Серрадо',
    temp: 'Подаётся со льдом',
    basePrice: 360,
    kcal: 210,
    caffeine: 125,
    prepTime: '4 мин',
    taste: { sweet: 7, acid: 3, body: 8 },
    image: './assets/latte.jpg',
    baseTypeLabel: 'Молоко',
    bases: [
      { id: 'classic', label: 'Классическое', delta: 0 },
      { id: 'oat', label: 'Овсяное', delta: 50 },
      { id: 'coconut', label: 'Кокосовое', delta: 60 },
      { id: 'almond', label: 'Миндальное', delta: 60 },
    ],
  },
  {
    id: 'matcha',
    keyword: 'MATCHA',
    category: 'botanical',
    categoryLabel: 'Церемониальный чай',
    rating: '★ 4.9 · Выбор гостей',
    title: 'Айс-матча «Церемониальный»',
    desc: 'Японский чай первого сбора из Удзи, взбитый вручную с овсяным молоком и тонкой нотой мадагаскарской ванили.',
    origin: 'Сбор Удзи · Киото, Япония',
    temp: 'Мягкий фокус 5 часов',
    basePrice: 410,
    kcal: 155,
    caffeine: 70,
    prepTime: '3 мин',
    taste: { sweet: 4, acid: 2, body: 7 },
    image: './assets/matcha.jpg',
    baseTypeLabel: 'Молоко',
    bases: [
      { id: 'oat', label: 'Овсяное (рекоменд.)', delta: 0 },
      { id: 'coconut', label: 'Кокосовое', delta: 40 },
      { id: 'almond', label: 'Миндальное', delta: 40 },
      { id: 'classic', label: 'Фермерское 3.2%', delta: 0 },
    ],
  },
  {
    id: 'frappe',
    keyword: 'FRAPPE',
    category: 'coffee',
    categoryLabel: 'Холодный десерт',
    rating: '★ 4.8 · Плотный вкус',
    title: 'Фраппе «Шоколадный миндаль»',
    desc: 'Кремовая эмульсия на основе ристретто, бельгийского тёмного шоколада 70% и хрустящего пралине из жареного миндаля.',
    origin: 'Бленд Колумбия + Эфиопия',
    temp: 'Густая ледяная текстура',
    basePrice: 440,
    kcal: 310,
    caffeine: 110,
    prepTime: '5 мин',
    taste: { sweet: 8, acid: 2, body: 10 },
    image: './assets/frappe.jpg',
    baseTypeLabel: 'Молоко',
    bases: [
      { id: 'classic', label: 'Сливочное', delta: 0 },
      { id: 'almond', label: 'Миндальное', delta: 45 },
      { id: 'oat', label: 'Овсяное', delta: 45 },
      { id: 'coconut', label: 'Кокосовое', delta: 55 },
    ],
  },
  {
    id: 'tonic',
    keyword: 'TONIC',
    category: 'botanical',
    categoryLabel: 'Кофейный микс · Цитрус',
    rating: '★ 5.0 · Свежесть',
    title: 'Эспрессо-тоник «Юдзу-тимьян»',
    desc: 'Искристый сухой тоник, японский цитрус юдзу, яркий фильтр-эспрессо из Эфиопии и свежая веточка лимонного тимьяна.',
    origin: 'Мытая Эфиопия Иргачифф',
    temp: 'Экстра-холодный · Игристый',
    basePrice: 390,
    kcal: 95,
    caffeine: 135,
    prepTime: '3 мин',
    taste: { sweet: 3, acid: 9, body: 4 },
    image: './assets/tonic.jpg',
    baseTypeLabel: 'Баланс вкуса',
    bases: [
      { id: 'dry', label: 'Сухой классический', delta: 0 },
      { id: 'yuzu-extra', label: 'Больше юдзу', delta: 40 },
      { id: 'double-shot', label: 'Двойной эспрессо', delta: 70 },
      { id: 'decaf', label: 'На декафе', delta: 0 },
    ],
  },
  {
    id: 'bumble',
    keyword: 'BUMBLE',
    category: 'botanical',
    categoryLabel: 'Новинка от SOLIS · Цитрус',
    rating: '★ 4.9 · Спешл',
    title: 'Бамбл «Красный апельсин»',
    desc: 'Свежевыжатый сок сицилийского красного апельсина, карамельный сироп мусковадо и слоистый шот пряного эспрессо.',
    origin: 'Колумбия Уила · Натуральный сок',
    temp: 'Яркий цитрус + кофе',
    basePrice: 420,
    kcal: 145,
    caffeine: 120,
    prepTime: '4 мин',
    taste: { sweet: 6, acid: 8, body: 5 },
    image: './assets/bumble.jpg',
    baseTypeLabel: 'Сок и сладость',
    bases: [
      { id: 'classic-juice', label: 'Свежий фреш', delta: 0 },
      { id: 'no-syrup', label: 'Без сиропа (0 сахар)', delta: 0 },
      { id: 'double-shot', label: 'Двойной эспрессо', delta: 70 },
      { id: 'spicy', label: 'Щепотка перца и корицы', delta: 35 },
    ],
  },
];

const SIZES = [
  { id: 'S', label: 'S · 250 мл', delta: 0 },
  { id: 'M', label: 'M · 350 мл', delta: 60 },
  { id: 'L', label: 'L · 450 мл', delta: 110 },
];

const TOPPINGS = [
  { id: 'caramel', label: 'Солёная карамель', delta: 45 },
  { id: 'cream', label: 'Ванильная пенка', delta: 55 },
  { id: 'espresso', label: 'Доп. шот', delta: 70 },
];

const state = {
  filter: 'all',
  activeIndex: 0,
  sizeId: 'M',
  baseId: 'classic',
  toppings: new Set(),
  cart: [],
  promoCode: null,
  ambience: 'day',
};

const els = {
  body: document.body,
  kineticWordmark: document.getElementById('kineticWordmark'),
  drinkImage: document.getElementById('drinkImage'),
  drinkOriginChip: document.getElementById('drinkOriginChip'),
  drinkTempChip: document.getElementById('drinkTempChip'),
  slideCounter: document.getElementById('slideCounter'),
  drinkCategory: document.getElementById('drinkCategory'),
  drinkRating: document.getElementById('drinkRating'),
  drinkTitle: document.getElementById('drinkTitle'),
  drinkDesc: document.getElementById('drinkDesc'),
  sweetVal: document.getElementById('sweetVal'),
  acidVal: document.getElementById('acidVal'),
  bodyVal: document.getElementById('bodyVal'),
  sweetBar: document.getElementById('sweetBar'),
  acidBar: document.getElementById('acidBar'),
  bodyBar: document.getElementById('bodyBar'),
  nutritionRow: document.getElementById('nutritionRow'),
  sizeOptions: document.getElementById('sizeOptions'),
  baseLabel: document.getElementById('baseLabel'),
  baseOptions: document.getElementById('baseOptions'),
  toppingOptions: document.getElementById('toppingOptions'),
  livePrice: document.getElementById('livePrice'),
  comboPrice: document.getElementById('comboPrice'),
  drinkDock: document.getElementById('drinkDock'),
  addToCartBtn: document.getElementById('addToCartBtn'),
  addToCartLabel: document.getElementById('addToCartLabel'),
  addComboBtn: document.getElementById('addComboBtn'),
  prevDrinkBtn: document.getElementById('prevDrinkBtn'),
  nextDrinkBtn: document.getElementById('nextDrinkBtn'),
  cartBadge: document.getElementById('cartBadge'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartBackdrop: document.getElementById('cartBackdrop'),
  openCartBtn: document.getElementById('openCartBtn'),
  closeCartBtn: document.getElementById('closeCartBtn'),
  cartBody: document.getElementById('cartBody'),
  cartFooter: document.getElementById('cartFooter'),
  cartCountText: document.getElementById('cartCountText'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartDiscount: document.getElementById('cartDiscount'),
  discountRow: document.getElementById('discountRow'),
  cartTotal: document.getElementById('cartTotal'),
  upsellBtn: document.getElementById('upsellBtn'),
  promoForm: document.getElementById('promoForm'),
  promoInput: document.getElementById('promoInput'),
  promoStatus: document.getElementById('promoStatus'),
  checkoutForm: document.getElementById('checkoutForm'),
  customerName: document.getElementById('customerName'),
  customerNote: document.getElementById('customerNote'),
  moodModal: document.getElementById('moodModal'),
  openMoodBtn: document.getElementById('openMoodBtn'),
  closeMoodBtn: document.getElementById('closeMoodBtn'),
  toast: document.getElementById('toast'),
};

function getVisibleDrinks() {
  if (state.filter === 'all') return DRINKS;
  return DRINKS.filter((d) => d.category === state.filter);
}

function getActiveDrink() {
  const list = getVisibleDrinks();
  if (state.activeIndex >= list.length) state.activeIndex = 0;
  return list[state.activeIndex] || DRINKS[0];
}

function computeUnitPrice(drink) {
  const size = SIZES.find((s) => s.id === state.sizeId) || SIZES[0];
  const base = drink.bases.find((b) => b.id === state.baseId) || drink.bases[0];
  let toppingsSum = 0;
  state.toppings.forEach((id) => {
    const t = TOPPINGS.find((item) => item.id === id);
    if (t) toppingsSum += t.delta;
  });
  return drink.basePrice + size.delta + base.delta + toppingsSum;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.hidden = false;
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    els.toast.hidden = true;
  }, 2600);
}

function renderDrink(animate = true) {
  const list = getVisibleDrinks();
  const drink = getActiveDrink();
  if (!drink.bases.some((b) => b.id === state.baseId)) {
    state.baseId = drink.bases[0].id;
  }

  els.body.dataset.theme = drink.id;

  const updateContent = () => {
    els.kineticWordmark.innerHTML = Array(3)
      .fill(`<span class="kinetic-wordmark__row">${drink.keyword}</span>`)
      .join('');

    els.drinkImage.src = drink.image;
    els.drinkImage.alt = drink.title;
    els.drinkOriginChip.textContent = drink.origin;
    els.drinkTempChip.textContent = drink.temp;
    els.slideCounter.textContent = `${String(state.activeIndex + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;

    els.drinkCategory.textContent = drink.categoryLabel;
    els.drinkRating.textContent = drink.rating;
    els.drinkTitle.textContent = drink.title;
    els.drinkDesc.textContent = drink.desc;

    els.sweetVal.textContent = `${drink.taste.sweet}/10`;
    els.acidVal.textContent = `${drink.taste.acid}/10`;
    els.bodyVal.textContent = `${drink.taste.body}/10`;
    els.sweetBar.style.width = `${drink.taste.sweet * 10}%`;
    els.acidBar.style.width = `${drink.taste.acid * 10}%`;
    els.bodyBar.style.width = `${drink.taste.body * 10}%`;

    els.nutritionRow.innerHTML = `
      <span>${drink.kcal} ккал</span>
      <span>•</span>
      <span>${drink.caffeine} мг кофеина</span>
      <span>•</span>
      <span>Готовность ${drink.prepTime}</span>
    `;

    els.baseLabel.textContent = drink.baseTypeLabel;
    renderOptions(drink);
    renderPrice(drink);
    renderDock(list, drink.id);
  };

  if (animate) {
    els.drinkImage.classList.add('is-switching');
    els.kineticWordmark.classList.add('is-switching');
    setTimeout(() => {
      updateContent();
      els.drinkImage.classList.remove('is-switching');
      els.kineticWordmark.classList.remove('is-switching');
    }, 170);
  } else {
    updateContent();
  }
}

function renderOptions(drink) {
  els.sizeOptions.innerHTML = SIZES.map((s) => {
    const selected = s.id === state.sizeId ? 'is-selected' : '';
    const extra = s.delta > 0 ? `+${s.delta} ₽` : 'База';
    return `
      <button type="button" class="opt-btn ${selected}" data-size="${s.id}">
        <strong>${s.label}</strong>
        <small>${extra}</small>
      </button>
    `;
  }).join('');

  els.baseOptions.innerHTML = drink.bases.map((b) => {
    const selected = b.id === state.baseId ? 'is-selected' : '';
    const extra = b.delta > 0 ? `+${b.delta} ₽` : 'Включено';
    return `
      <button type="button" class="opt-btn ${selected}" data-base="${b.id}">
        <strong>${b.label}</strong>
        <small>${extra}</small>
      </button>
    `;
  }).join('');

  els.toppingOptions.innerHTML = TOPPINGS.map((t) => {
    const selected = state.toppings.has(t.id) ? 'is-selected' : '';
    return `
      <button type="button" class="chip-toggle ${selected}" data-topping="${t.id}">
        ${t.label} +${t.delta} ₽
      </button>
    `;
  }).join('');
}

function renderPrice(drink) {
  const unit = computeUnitPrice(drink);
  els.livePrice.textContent = unit;
  const comboRaw = unit + 240;
  els.comboPrice.textContent = Math.round(comboRaw * 0.85);
}

function renderDock(list, activeId) {
  els.drinkDock.innerHTML = list.map((drink, idx) => {
    const activeClass = drink.id === activeId ? 'is-active' : '';
    return `
      <button type="button" class="dock-item ${activeClass}" data-index="${idx}" role="tab" aria-selected="${drink.id === activeId}">
        <img class="dock-item__thumb" src="${drink.image}" alt="${drink.title}" />
        <div class="dock-item__meta">
          <strong>${drink.keyword}</strong>
          <span>от ${drink.basePrice} ₽</span>
        </div>
      </button>
    `;
  }).join('');
}

function addCurrentDrinkToCart() {
  const drink = getActiveDrink();
  const size = SIZES.find((s) => s.id === state.sizeId) || SIZES[0];
  const base = drink.bases.find((b) => b.id === state.baseId) || drink.bases[0];
  const toppingNames = TOPPINGS.filter((t) => state.toppings.has(t.id)).map((t) => t.label);
  const price = computeUnitPrice(drink);
  const key = `${drink.id}|${size.id}|${base.id}|${toppingNames.join(',')}`;

  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      id: drink.id,
      title: drink.title,
      image: drink.image,
      meta: [size.label, base.label, ...toppingNames].join(' · '),
      price,
      qty: 1,
    });
  }

  renderCart();
  els.addToCartLabel.textContent = 'Добавлено ✓';
  setTimeout(() => {
    els.addToCartLabel.textContent = 'Добавить в корзину';
  }, 1100);
  showToast(`${drink.title} добавлен в корзину`);
}

function addPastryToCart(silent = false) {
  const key = 'croissant';
  const existing = state.cart.find((i) => i.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      id: 'croissant',
      title: 'Миндальный круассан',
      image: './assets/latte.jpg',
      meta: 'Свежая выпечка · Франжипан',
      price: 240,
      qty: 1,
    });
  }
  if (!silent) {
    renderCart();
    showToast('Миндальный круассан добавлен к заказу');
  }
}

function renderCart() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  els.cartBadge.textContent = totalCount;
  els.cartCountText.textContent = totalCount > 0 ? `Позиций в заказе: ${totalCount}` : 'Пока пусто';

  if (state.cart.length === 0) {
    els.cartBody.innerHTML = `
      <div class="cart-empty">
        <p><strong>Корзина пуста</strong></p>
        <p>Выберите напиток на витрине, настройте молоко и размер — и добавьте его сюда.</p>
      </div>
    `;
    els.cartFooter.hidden = true;
    return;
  }

  els.cartFooter.hidden = false;
  els.cartBody.innerHTML = state.cart.map((item) => `
    <div class="cart-item">
      <img class="cart-item__img" src="${item.image}" alt="${item.title}" />
      <div>
        <div class="cart-item__title">${item.title}</div>
        <div class="cart-item__meta">${item.meta}</div>
      </div>
      <div class="cart-item__controls">
        <strong>${item.price * item.qty} ₽</strong>
        <div class="qty-box">
          <button type="button" data-qty-minus="${item.key}" aria-label="Уменьшить">−</button>
          <span>${item.qty}</span>
          <button type="button" data-qty-plus="${item.key}" aria-label="Увеличить">+</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = state.promoCode === 'SOLIS15' ? Math.round(subtotal * 0.15) : 0;
  const total = subtotal - discount;

  els.cartSubtotal.textContent = `${subtotal} ₽`;
  if (discount > 0) {
    els.discountRow.hidden = false;
    els.cartDiscount.textContent = `−${discount} ₽`;
  } else {
    els.discountRow.hidden = true;
  }
  els.cartTotal.textContent = `${total} ₽`;
}

function openCart() {
  els.toast.hidden = true;
  renderCart();
  els.cartBackdrop.hidden = false;
  els.cartDrawer.hidden = false;
}

function closeCart() {
  els.cartBackdrop.hidden = true;
  els.cartDrawer.hidden = true;
}

function switchSlide(delta) {
  const list = getVisibleDrinks();
  state.activeIndex = (state.activeIndex + delta + list.length) % list.length;
  renderDrink(true);
}

/* Event Bindings */
document.querySelectorAll('.filter-pills .pill[data-filter]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-pills .pill[data-filter]').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    state.filter = btn.dataset.filter;
    state.activeIndex = 0;
    renderDrink(true);
  });
});

document.querySelectorAll('.ambience-switch__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ambience-switch__btn').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    state.ambience = btn.dataset.ambience;
    els.body.dataset.ambience = state.ambience;
  });
});

els.sizeOptions.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-size]');
  if (!btn) return;
  state.sizeId = btn.dataset.size;
  const drink = getActiveDrink();
  renderOptions(drink);
  renderPrice(drink);
});

els.baseOptions.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-base]');
  if (!btn) return;
  state.baseId = btn.dataset.base;
  const drink = getActiveDrink();
  renderOptions(drink);
  renderPrice(drink);
});

els.toppingOptions.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-topping]');
  if (!btn) return;
  const id = btn.dataset.topping;
  if (state.toppings.has(id)) state.toppings.delete(id);
  else state.toppings.add(id);
  const drink = getActiveDrink();
  renderOptions(drink);
  renderPrice(drink);
});

els.drinkDock.addEventListener('click', (e) => {
  const item = e.target.closest('[data-index]');
  if (!item) return;
  state.activeIndex = Number(item.dataset.index);
  renderDrink(true);
});

els.prevDrinkBtn.addEventListener('click', () => switchSlide(-1));
els.nextDrinkBtn.addEventListener('click', () => switchSlide(1));

window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === 'ArrowLeft') switchSlide(-1);
  if (e.key === 'ArrowRight') switchSlide(1);
  if (e.key === 'Escape') {
    closeCart();
    els.moodModal.hidden = true;
  }
});

/* Gentle mouse parallax on background wordmark */
window.addEventListener('pointermove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * -18;
  const y = (e.clientY / window.innerHeight - 0.5) * -10;
  els.kineticWordmark.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

els.addToCartBtn.addEventListener('click', addCurrentDrinkToCart);

els.addComboBtn.addEventListener('click', () => {
  addCurrentDrinkToCart();
  addPastryToCart(true);
  state.promoCode = 'SOLIS15';
  els.promoInput.value = 'SOLIS15';
  els.promoStatus.textContent = 'Промокод SOLIS15 (−15%) активирован для комбо!';
  renderCart();
  openCart();
});

els.openCartBtn.addEventListener('click', openCart);
els.closeCartBtn.addEventListener('click', closeCart);
els.cartBackdrop.addEventListener('click', closeCart);

els.cartBody.addEventListener('click', (e) => {
  const minus = e.target.closest('[data-qty-minus]');
  const plus = e.target.closest('[data-qty-plus]');
  if (minus) {
    const key = minus.dataset.qtyMinus;
    const item = state.cart.find((i) => i.key === key);
    if (item) {
      item.qty -= 1;
      if (item.qty <= 0) state.cart = state.cart.filter((i) => i.key !== key);
      renderCart();
    }
  }
  if (plus) {
    const key = plus.dataset.qtyPlus;
    const item = state.cart.find((i) => i.key === key);
    if (item) {
      item.qty += 1;
      renderCart();
    }
  }
});

els.upsellBtn.addEventListener('click', () => addPastryToCart(false));

els.promoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = els.promoInput.value.trim().toUpperCase();
  if (code === 'SOLIS15') {
    state.promoCode = 'SOLIS15';
    els.promoStatus.textContent = 'Промокод SOLIS15 применён: скидка 15%.';
  } else {
    state.promoCode = null;
    els.promoStatus.textContent = 'Промокод не найден. Попробуйте SOLIS15.';
  }
  renderCart();
});

els.checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = els.customerName.value.trim() || 'Гость';
  const orderNum = Math.floor(100 + Math.random() * 899);
  state.cart = [];
  state.promoCode = null;
  els.promoInput.value = '';
  els.promoStatus.textContent = '';
  renderCart();
  els.cartBody.innerHTML = `
    <div class="order-ticket">
      <h3>Заказ #SB-${orderNum} принят!</h3>
      <p>${name}, бариста уже готовит ваш заказ. Ожидаемое время: ~5 минут.</p>
    </div>
  `;
});

/* Mood Picker Modal */
els.openMoodBtn.addEventListener('click', () => {
  els.moodModal.hidden = false;
});
els.closeMoodBtn.addEventListener('click', () => {
  els.moodModal.hidden = true;
});
els.moodModal.addEventListener('click', (e) => {
  if (e.target === els.moodModal) els.moodModal.hidden = true;
});

document.querySelectorAll('.mood-card').forEach((card) => {
  card.addEventListener('click', () => {
    const mood = card.dataset.mood;
    const map = {
      energy: 'tonic',
      comfort: 'latte',
      dessert: 'frappe',
      zen: 'matcha',
    };
    state.filter = 'all';
    document.querySelectorAll('.filter-pills .pill[data-filter]').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.filter === 'all');
    });
    const targetIdx = DRINKS.findIndex((d) => d.id === map[mood]);
    state.activeIndex = targetIdx >= 0 ? targetIdx : 0;
    els.moodModal.hidden = true;
    renderDrink(true);
    showToast(`Подобрали для вас: ${DRINKS[state.activeIndex].title}`);
  });
});

/* Initialize */
renderDrink(false);
renderCart();
