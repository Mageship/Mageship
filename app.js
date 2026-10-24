/**
 * MAGESHIP ATELIER - CLIENT ENGINE
 * Handles SPA navigation, product catalogs, interactive T-shirt customizer,
 * shopping cart, wishlist, search, and form handling.
 */

// ==========================================
// 1. PRODUCT DATABASE
// ==========================================
const PRODUCTS_DATA = [
  // Best Sellers (Featured on Home & Catalogs)
  {
    id: "mg-01",
    name: "Heavyweight 280 GSM Boxy Tee",
    category: "mens",
    subCategory: "tees",
    price: 42.00,
    rating: 4.9,
    reviewsCount: 382,
    badge: "Best Seller",
    badgeType: "badge-dark",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    description: "The cornerstone of Mageship. Cut from double-knit 280 GSM organic combed cotton with dropped shoulders and a reinforced seamless high rib collar.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Pure White", "Alabaster", "Oatmeal", "Obsidian"],
    isBestSeller: true
  },
  {
    id: "mg-02",
    name: "Architectural Studio Pullover Hoodie",
    category: "mens",
    subCategory: "hoodies",
    price: 98.00,
    rating: 4.8,
    reviewsCount: 194,
    badge: "Trending",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-heavyweight 460 GSM brushed French terry fleece. Features a double-layered hood without drawstrings for a razor-clean minimalist silhouette.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pure White", "Ash Gray", "Pitch Black"],
    isBestSeller: true
  },
  {
    id: "mg-03",
    name: "Women's Sculpted Cropped Tee",
    category: "womens",
    subCategory: "tees",
    price: 38.00,
    rating: 5.0,
    reviewsCount: 228,
    badge: "Atelier Pick",
    badgeType: "badge-dark",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    description: "Modern boxy cropped profile with clean finished hems. Crafted from premium organic Egyptian cotton that drapes effortlessly over high-waisted trousers.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pure White", "Chalk", "Obsidian"],
    isBestSeller: true
  },
  {
    id: "mg-04",
    name: "Monochrome Tailored Linen Overshirt",
    category: "mens",
    subCategory: "shirts",
    price: 88.00,
    rating: 4.7,
    reviewsCount: 115,
    badge: "Limited Drop",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    description: "Relaxed resort-collar shirt woven from airy European flax linen in crisp pearl white. Matte horn buttons and subtle chest patch pocket.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pearl White", "Bone"],
    isBestSeller: true
  },
  {
    id: "mg-05",
    name: "Women's Silk-Cotton Knit Cardigan",
    category: "womens",
    subCategory: "knitwear",
    price: 110.00,
    rating: 4.9,
    reviewsCount: 162,
    badge: "Best Seller",
    badgeType: "badge-dark",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
    description: "A decadent blend of Mulberry silk and combed long-staple cotton. Featherlight warmth with tonal mother-of-pearl button fastenings.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory Cloud", "Pure White"],
    isBestSeller: true
  },
  {
    id: "mg-06",
    name: "Relaxed Pleated Wide-Leg Trousers",
    category: "mens",
    subCategory: "pants",
    price: 94.00,
    rating: 4.8,
    reviewsCount: 97,
    badge: "Essential",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    description: "Double front pleats with a fluid wide leg fall. Engineered from durable cotton-twill blend with an interior elasticated comfort waistband.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Chalk White", "Slate Gray", "Onyx"],
    isBestSeller: true
  },
  {
    id: "mg-07",
    name: "Women's Fluid Slip Midi Dress",
    category: "womens",
    subCategory: "dresses",
    price: 125.00,
    rating: 4.9,
    reviewsCount: 140,
    badge: "New Release",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    description: "Minimalist bias-cut slip dress with subtle cowl neckline in luminous alabaster white. Glides over curves with an effortless graceful movement.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Alabaster White", "Midnight"],
    isBestSeller: true
  },
  {
    id: "mg-08",
    name: "Raw-Edge Terry Lounge Sweatpants",
    category: "mens",
    subCategory: "pants",
    price: 76.00,
    rating: 4.7,
    reviewsCount: 88,
    badge: "Comfort Fit",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80",
    description: "Heavyweight 420 GSM fleece lounge trousers with tonal drawstrings, deep welt pockets, and clean straight cuff finish.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pure White", "Heather Mist"],
    isBestSeller: true
  },

  // Additional Men's Catalog Items
  {
    id: "mg-m09",
    name: "Mageship Core Ribbed Tank Top",
    category: "mens",
    subCategory: "tees",
    price: 32.00,
    rating: 4.6,
    reviewsCount: 76,
    badge: "Core Basics",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=800&q=80",
    description: "2x2 heavyweight rib knit engineered to contour the torso. Pre-washed to eliminate shrinkage.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pure White", "Pitch Black"],
    isBestSeller: false
  },
  {
    id: "mg-m10",
    name: "Minimalist Zip-Up Fleece Jacket",
    category: "mens",
    subCategory: "hoodies",
    price: 115.00,
    rating: 4.9,
    reviewsCount: 110,
    badge: "Winter Warmth",
    badgeType: "badge-dark",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    description: "Full dual-way metallic YKK zipper with high funnel neck. Fully lined in ultra-soft brushed cotton.",
    sizes: ["M", "L", "XL"],
    colors: ["Cloud White", "Carbon Black"],
    isBestSeller: false
  },
  {
    id: "mg-m11",
    name: "Oversized Camp Collar Oxford Shirt",
    category: "mens",
    subCategory: "shirts",
    price: 82.00,
    rating: 4.8,
    reviewsCount: 65,
    badge: "Seasonal",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    description: "Crisp Oxford weave tailored with dropped shoulders and a boxy hem meant to be worn untucked.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Optic White"],
    isBestSeller: false
  },
  {
    id: "mg-m12",
    name: "Heavyweight Relaxed Cargo Shorts",
    category: "mens",
    subCategory: "pants",
    price: 68.00,
    rating: 4.7,
    reviewsCount: 54,
    badge: "Utility",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    description: "Deep structured bellows pockets with hidden snap closures. Durable 100% ripstop cotton canvas.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Stone White", "Dark Olive"],
    isBestSeller: false
  },

  // Additional Women's Catalog Items
  {
    id: "mg-w13",
    name: "High-Neck Sleeveless Ribbed Bodysuit",
    category: "womens",
    subCategory: "tees",
    price: 45.00,
    rating: 4.9,
    reviewsCount: 134,
    badge: "Core Essential",
    badgeType: "badge-dark",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Buttery soft modal-cotton blend with seamless snap base. Provides a perfectly smooth tucked-in look.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pure White", "Espresso"],
    isBestSeller: false
  },
  {
    id: "mg-w14",
    name: "Chunky Bouclé Knit Turtleneck",
    category: "womens",
    subCategory: "knitwear",
    price: 135.00,
    rating: 5.0,
    reviewsCount: 92,
    badge: "Luxury Knit",
    badgeType: "badge-dark",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    description: "Textured bouclé yarn spun from organic wool and alpaca blend. Voluminous folded collar and side slits.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream Marshmallow", "Pure White"],
    isBestSeller: false
  },
  {
    id: "mg-w15",
    name: "Pleated High-Waisted Wide Trousers",
    category: "womens",
    subCategory: "pants",
    price: 98.00,
    rating: 4.8,
    reviewsCount: 118,
    badge: "Tailored Edit",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    description: "Dramatic wide-leg silhouette that elongates the profile. Fluid suiting fabric resistant to wrinkles.",
    sizes: ["0", "2", "4", "6", "8", "10"],
    colors: ["Pristine White", "Midnight Black"],
    isBestSeller: false
  },
  {
    id: "mg-w16",
    name: "Architectural Two-Piece Linen Set",
    category: "womens",
    subCategory: "dresses",
    price: 148.00,
    rating: 4.9,
    reviewsCount: 84,
    badge: "Resort Collection",
    badgeType: "badge-white",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    description: "Features a cropped boxy sleeveless top and matching high-waisted wrap midi skirt crafted from washed flax linen.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cloud White", "Natural Sand"],
    isBestSeller: false
  }
];

// Preset Badge Artwork Collection for Customizer
const PRESET_BADGES = {
  "none": "",
  "geo-minimal": `<svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4"><polygon points="50,10 90,50 50,90 10,50"/><circle cx="50" cy="50" r="18"/></svg>`,
  "circle-sig": `<svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4"><circle cx="50" cy="50" r="42"/><path d="M32 68 V32 L50 54 L68 32 V68"/></svg>`,
  "barcode": `<svg width="85" height="45" viewBox="0 0 120 60" fill="currentColor"><rect x="5" width="6" height="50"/><rect x="15" width="3" height="50"/><rect x="22" width="8" height="50"/><rect x="34" width="4" height="50"/><rect x="42" width="10" height="50"/><rect x="56" width="3" height="50"/><rect x="63" width="7" height="50"/><rect x="74" width="5" height="50"/><rect x="83" width="9" height="50"/><rect x="96" width="4" height="50"/><rect x="104" width="8" height="50"/><text x="25" y="58" font-size="8" letter-spacing="3" font-family="monospace">MAGESHIP-26</text></svg>`,
  "flower": `<svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3.5"><circle cx="50" cy="50" r="10"/><path d="M50 15 C45 30 55 30 50 40 M50 85 C45 70 55 70 50 60 M15 50 C30 45 30 55 40 50 M85 50 C70 45 70 55 60 50"/><circle cx="50" cy="22" r="8"/><circle cx="50" cy="78" r="8"/><circle cx="22" cy="50" r="8"/><circle cx="78" cy="50" r="8"/></svg>`,
  "star": `<svg width="70" height="70" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 L58 38 L96 50 L58 62 L50 100 L42 62 L4 50 L42 38 Z"/></svg>`
};

// ==========================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================
class Store {
  constructor() {
    this.cart = this.loadLocalStorage('mageship_cart', []);
    this.wishlist = this.loadLocalStorage('mageship_wishlist', []);
    this.activeDiscount = 0;
    this.currentView = 'home';
    
    // Customizer Live State
    this.customizer = {
      cut: 'oversized',
      basePrice: 38.00,
      printFee: 8.00,
      color: '#FFFFFF',
      colorName: 'Pure White (Organic Cotton)',
      viewAngle: 'front', // 'front' or 'back'
      text: 'MAGESHIP',
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 24,
      textColor: '#111827',
      position: 'center',
      badge: 'none',
      userImage: null,
      userImageName: '',
      size: 'M',
      zoom: 100
    };
  }

  loadLocalStorage(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  }

  saveLocalStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn("Storage save error", e);
    }
  }

  // Cart operations
  addToCart(item) {
    const existingIndex = this.cart.findIndex(i => 
      i.id === item.id && i.size === item.size && i.customConfigKey === item.customConfigKey
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += item.quantity || 1;
    } else {
      this.cart.push({
        ...item,
        quantity: item.quantity || 1
      });
    }

    this.saveLocalStorage('mageship_cart', this.cart);
    window.dispatchEvent(new Event('cartUpdated'));
    window.appToast(`Added "${item.name}" to your bag.`);
  }

  updateQuantity(index, delta) {
    if (!this.cart[index]) return;
    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.cart.splice(index, 1);
    }
    this.saveLocalStorage('mageship_cart', this.cart);
    window.dispatchEvent(new Event('cartUpdated'));
  }

  removeFromCart(index) {
    if (!this.cart[index]) return;
    const removed = this.cart.splice(index, 1);
    this.saveLocalStorage('mageship_cart', this.cart);
    window.dispatchEvent(new Event('cartUpdated'));
    if (removed[0]) window.appToast(`Removed from bag.`);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Wishlist operations
  toggleWishlist(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const index = this.wishlist.findIndex(id => id === productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      window.appToast(`Removed from saved wishlist.`);
    } else {
      this.wishlist.push(productId);
      window.appToast(`Saved "${product.name}" to wishlist.`);
    }
    this.saveLocalStorage('mageship_wishlist', this.wishlist);
    window.dispatchEvent(new Event('wishlistUpdated'));
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }
}

const appStore = new Store();

// ==========================================
// 3. TOAST NOTIFICATION UTILITY
// ==========================================
window.appToast = function(message) {
  const toastHub = document.getElementById('toastHub');
  if (!toastHub) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toastHub.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};

// ==========================================
// 4. NAVIGATION ROUTER & PAGE VIEWS
// ==========================================
function initRouter() {
  const navLinks = document.querySelectorAll('[data-target]');
  const views = document.querySelectorAll('.page-view');

  function navigateTo(targetView) {
    if (!document.getElementById(`view-${targetView}`)) {
      targetView = 'home';
    }

    appStore.currentView = targetView;

    // Update active view DOM
    views.forEach(view => {
      view.classList.remove('active');
      if (view.id === `view-${targetView}`) {
        view.classList.add('active');
      }
    });

    // Update nav links active class
    document.querySelectorAll('.nav-link, .mobile-nav-item').forEach(link => {
      if (link.getAttribute('data-target') === targetView) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    closeMobileDrawer();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash without jumping
    if (window.location.hash !== `#${targetView}`) {
      history.pushState(null, null, `#${targetView}`);
    }
  }

  // Bind click handlers to all data-target elements
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (target) navigateTo(target);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash);
  });

  // Initial routing on page load
  const initialHash = window.location.hash.replace('#', '') || 'home';
  navigateTo(initialHash);
}

// ==========================================
// 5. PRODUCT CATALOG RENDERING
// ==========================================
function renderProductCard(product) {
  const isWish = appStore.isInWishlist(product.id);
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        <div class="product-badges">
          ${product.badge ? `<span class="badge ${product.badgeType}">${product.badge}</span>` : ''}
        </div>
        <button class="wishlist-toggle-btn ${isWish ? 'active' : ''}" data-wishlist-id="${product.id}" title="Save to wishlist">
          <i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
        <div class="product-hover-actions">
          <button class="btn-card-quick" data-quickview-id="${product.id}">
            Quick View
          </button>
          <button class="btn-card-cart" data-direct-cart-id="${product.id}" title="Quick Add">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category-label">${product.category.toUpperCase()} • ${product.subCategory}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-meta-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <span class="product-rating">
            <i class="fa-solid fa-star"></i> ${product.rating.toFixed(1)} (${product.reviewsCount})
          </span>
        </div>
      </div>
    </div>
  `;
}

function initProductCatalogs() {
  const bestSellersGrid = document.getElementById('bestSellersGrid');
  const mensProductsGrid = document.getElementById('mensProductsGrid');
  const womensProductsGrid = document.getElementById('womensProductsGrid');

  // Render Best Sellers
  function updateBestSellers(filter = 'all') {
    if (!bestSellersGrid) return;
    const items = PRODUCTS_DATA.filter(p => {
      if (!p.isBestSeller) return false;
      if (filter === 'all') return true;
      if (filter === 'tees') return p.subCategory === 'tees';
      if (filter === 'hoodies') return p.subCategory === 'hoodies' || p.subCategory === 'knitwear';
      if (filter === 'bottoms') return p.subCategory === 'pants';
      return true;
    });
    bestSellersGrid.innerHTML = items.map(renderProductCard).join('');
    bindProductEvents(bestSellersGrid);
  }

  // Render Men's Catalog
  function updateMensCatalog(sub = 'all', sort = 'featured') {
    if (!mensProductsGrid) return;
    let items = PRODUCTS_DATA.filter(p => p.category === 'mens');
    if (sub !== 'all') {
      items = items.filter(p => p.subCategory === sub);
    }
    items = sortProducts(items, sort);
    mensProductsGrid.innerHTML = items.map(renderProductCard).join('');
    bindProductEvents(mensProductsGrid);
  }

  // Render Women's Catalog
  function updateWomensCatalog(sub = 'all', sort = 'featured') {
    if (!womensProductsGrid) return;
    let items = PRODUCTS_DATA.filter(p => p.category === 'womens');
    if (sub !== 'all') {
      items = items.filter(p => p.subCategory === sub);
    }
    items = sortProducts(items, sort);
    womensProductsGrid.innerHTML = items.map(renderProductCard).join('');
    bindProductEvents(womensProductsGrid);
  }

  function sortProducts(list, criteria) {
    const arr = [...list];
    if (criteria === 'price-low') arr.sort((a, b) => a.price - b.price);
    else if (criteria === 'price-high') arr.sort((a, b) => b.price - a.price);
    else if (criteria === 'rating') arr.sort((a, b) => b.rating - a.rating);
    return arr;
  }

  // Initial renders
  updateBestSellers('all');
  updateMensCatalog('all', 'featured');
  updateWomensCatalog('all', 'featured');

  // Filter Event Listeners - Best Sellers
  const bsFilterBtns = document.querySelectorAll('#bestSellerFilters .pill-btn');
  bsFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bsFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateBestSellers(btn.dataset.filter);
    });
  });

  // Filter & Sort - Men's
  const mensSubBtns = document.querySelectorAll('#mensSubfilters .cat-pill');
  const mensSortSelect = document.getElementById('mensSort');
  let currentMensSub = 'all';

  mensSubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mensSubBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMensSub = btn.dataset.sub;
      updateMensCatalog(currentMensSub, mensSortSelect.value);
    });
  });

  if (mensSortSelect) {
    mensSortSelect.addEventListener('change', () => {
      updateMensCatalog(currentMensSub, mensSortSelect.value);
    });
  }

  // Filter & Sort - Women's
  const womensSubBtns = document.querySelectorAll('#womensSubfilters .cat-pill');
  const womensSortSelect = document.getElementById('womensSort');
  let currentWomensSub = 'all';

  womensSubBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      womensSubBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWomensSub = btn.dataset.sub;
      updateWomensCatalog(currentWomensSub, womensSortSelect.value);
    });
  });

  if (womensSortSelect) {
    womensSortSelect.addEventListener('change', () => {
      updateWomensCatalog(currentWomensSub, womensSortSelect.value);
    });
  }

  // Re-render when wishlist updates
  window.addEventListener('wishlistUpdated', () => {
    document.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      const isWish = appStore.isInWishlist(id);
      btn.classList.toggle('active', isWish);
      btn.innerHTML = `<i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
    });
  });
}

function bindProductEvents(container) {
  if (!container) return;

  // Wishlist toggle
  container.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-wishlist-id');
      appStore.toggleWishlist(id);
    });
  });

  // Direct quick cart add
  container.querySelectorAll('.btn-card-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-direct-cart-id');
      const product = PRODUCTS_DATA.find(p => p.id === id);
      if (product) {
        appStore.addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: product.sizes[0] || 'M',
          color: product.colors[0] || 'White'
        });
      }
    });
  });

  // Quick view trigger
  container.querySelectorAll('.btn-card-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-quickview-id');
      openQuickView(id);
    });
  });
}

// ==========================================
// 6. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  let selectedSize = product.sizes[0] || 'M';
  let selectedColor = product.colors[0] || 'Pure White';

  content.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-gallery">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="quickview-details">
        <span class="product-category-label">${product.category.toUpperCase()} • ${product.subCategory}</span>
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem;">${product.name}</h2>
        <div style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem;">$${product.price.toFixed(2)}</div>
        <p style="font-size: 0.88rem; color: var(--color-muted); line-height: 1.6; margin-bottom: 1.5rem;">${product.description}</p>
        
        <div style="margin-bottom: 1.25rem;">
          <label class="form-label">Available Sizes</label>
          <div class="size-picker-row" id="qvSizePicker">
            ${product.sizes.map(s => `<button class="size-pill ${s === selectedSize ? 'active' : ''}" data-qv-size="${s}">${s}</button>`).join('')}
          </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label class="form-label">Color Shades</label>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${product.colors.map(c => `<span style="font-size: 0.75rem; background: var(--color-snow); padding: 0.3rem 0.6rem; border: 1px solid var(--color-border); border-radius: 4px;">${c}</span>`).join('')}
          </div>
        </div>

        <button class="btn btn-primary btn-block btn-lg" id="qvAddToCartBtn">
          <i class="fa-solid fa-bag-shopping"></i> Add to Bag
        </button>
      </div>
    </div>
  `;

  // Size click handling
  content.querySelectorAll('[data-qv-size]').forEach(btn => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('[data-qv-size]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.qvSize;
    });
  });

  // Add to Bag inside modal
  const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');
  if (qvAddToCartBtn) {
    qvAddToCartBtn.addEventListener('click', () => {
      appStore.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        color: selectedColor
      });
      closeQuickView();
    });
  }

  modal.classList.add('active');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================
// 7. INTERACTIVE T-SHIRT CUSTOMIZER ENGINE
// ==========================================
function initCustomizerEngine() {
  const svgFabricBody = document.getElementById('svgFabricBody');
  const printLiveText = document.getElementById('printLiveText');
  const printTextContainer = document.getElementById('printTextContainer');
  const printGraphicContainer = document.getElementById('printGraphicContainer');
  const presetGraphicSvg = document.getElementById('presetGraphicSvg');
  const printUserImageContainer = document.getElementById('printUserImageContainer');
  const printUserImage = document.getElementById('printUserImage');
  const printableAreaBox = document.getElementById('printableAreaBox');
  const currentViewBadge = document.getElementById('currentViewBadge');
  const totalCustomPrice = document.getElementById('totalCustomPrice');
  const tshirtCanvasWrapper = document.getElementById('tshirtCanvasWrapper');
  const selectedColorName = document.getElementById('selectedColorName');

  // 1. Cut Selection
  const cutButtons = document.querySelectorAll('.cut-option');
  cutButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cutButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appStore.customizer.cut = btn.dataset.cut;
      
      if (btn.dataset.cut === 'cropped') {
        appStore.customizer.basePrice = 36.00;
      } else if (btn.dataset.cut === 'regular') {
        appStore.customizer.basePrice = 34.00;
      } else {
        appStore.customizer.basePrice = 38.00;
      }
      updateCustomizerPricing();
    });
  });

  // 2. Color Swatches
  const swatchButtons = document.querySelectorAll('.color-swatches-grid .swatch-btn');
  swatchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const colorHex = btn.dataset.color;
      const colorName = btn.dataset.colorName;

      appStore.customizer.color = colorHex;
      appStore.customizer.colorName = colorName;

      if (svgFabricBody) {
        svgFabricBody.setAttribute('fill', colorHex);
        // Adjust border stroke for light vs dark shirts
        if (colorHex === '#FFFFFF' || colorHex === '#F5F5F0') {
          svgFabricBody.setAttribute('stroke', '#E2E8F0');
        } else {
          svgFabricBody.setAttribute('stroke', '#475569');
        }
      }

      if (selectedColorName) {
        selectedColorName.textContent = `Selected: ${colorName} (Organic Cotton)`;
      }
    });
  });

  // 3. View Angle Toggle (Front / Back)
  const viewFrontBtn = document.getElementById('viewFrontBtn');
  const viewBackBtn = document.getElementById('viewBackBtn');

  function setViewAngle(angle) {
    appStore.customizer.viewAngle = angle;
    if (angle === 'front') {
      viewFrontBtn.classList.add('active');
      viewBackBtn.classList.remove('active');
      currentViewBadge.textContent = 'Viewing: Front';
    } else {
      viewBackBtn.classList.add('active');
      viewFrontBtn.classList.remove('active');
      currentViewBadge.textContent = 'Viewing: Back Collar & Shoulders';
    }
  }

  if (viewFrontBtn && viewBackBtn) {
    viewFrontBtn.addEventListener('click', () => setViewAngle('front'));
    viewBackBtn.addEventListener('click', () => setViewAngle('back'));
  }

  // 4. Custom Typography Controls
  const customTextInput = document.getElementById('customTextInput');
  const customFontFamily = document.getElementById('customFontFamily');
  const customFontSize = document.getElementById('customFontSize');
  const fontSizeDisplay = document.getElementById('fontSizeDisplay');
  const textPositionSelect = document.getElementById('textPositionSelect');
  const textColorButtons = document.querySelectorAll('.text-color-btn');

  if (customTextInput) {
    customTextInput.addEventListener('input', (e) => {
      const val = e.target.value;
      appStore.customizer.text = val;
      if (printLiveText) {
        printLiveText.textContent = val || '';
      }
      updateCustomizerPricing();
    });
  }

  if (customFontFamily) {
    customFontFamily.addEventListener('change', (e) => {
      const font = e.target.value;
      appStore.customizer.fontFamily = font;
      if (printLiveText) {
        printLiveText.style.fontFamily = font;
      }
    });
  }

  if (customFontSize) {
    customFontSize.addEventListener('input', (e) => {
      const size = e.target.value;
      appStore.customizer.fontSize = size;
      if (fontSizeDisplay) fontSizeDisplay.textContent = `${size}px`;
      if (printLiveText) {
        printLiveText.style.fontSize = `${size}px`;
      }
    });
  }

  textColorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      textColorButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const color = btn.dataset.color;
      appStore.customizer.textColor = color;
      if (printLiveText) {
        printLiveText.style.color = color;
      }
    });
  });

  if (textPositionSelect) {
    textPositionSelect.addEventListener('change', (e) => {
      const pos = e.target.value;
      appStore.customizer.position = pos;
      if (printableAreaBox) {
        printableAreaBox.className = `printable-area-box pos-${pos}`;
      }
    });
  }

  // 5. Preset Badges
  const presetBadgeBtns = document.querySelectorAll('.preset-badge-btn');
  presetBadgeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBadgeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const badgeKey = btn.dataset.badge;
      appStore.customizer.badge = badgeKey;

      if (badgeKey === 'none') {
        if (printGraphicContainer) printGraphicContainer.classList.add('hidden');
      } else {
        if (printGraphicContainer && presetGraphicSvg) {
          presetGraphicSvg.innerHTML = PRESET_BADGES[badgeKey] || '';
          printGraphicContainer.classList.remove('hidden');
        }
      }
      updateCustomizerPricing();
    });
  });

  // 6. User Graphic / Logo Upload
  const userLogoFileInput = document.getElementById('userLogoFileInput');
  const dropzoneUpload = document.getElementById('dropzoneUpload');
  const uploadedLogoStrip = document.getElementById('uploadedLogoStrip');
  const uploadedFileName = document.getElementById('uploadedFileName');
  const removeUploadedLogoBtn = document.getElementById('removeUploadedLogoBtn');

  if (dropzoneUpload && userLogoFileInput) {
    dropzoneUpload.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzoneUpload.style.borderColor = '#000000';
    });

    dropzoneUpload.addEventListener('dragleave', () => {
      dropzoneUpload.style.borderColor = 'var(--color-border)';
    });

    dropzoneUpload.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzoneUpload.style.borderColor = 'var(--color-border)';
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleLogoUpload(e.dataTransfer.files[0]);
      }
    });

    userLogoFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleLogoUpload(e.target.files[0]);
      }
    });
  }

  function handleLogoUpload(file) {
    if (!file.type.startsWith('image/')) {
      window.appToast('Please upload a valid image file (PNG/JPG/SVG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(evt) {
      appStore.customizer.userImage = evt.target.result;
      appStore.customizer.userImageName = file.name;

      if (printUserImage && printUserImageContainer) {
        printUserImage.src = evt.target.result;
        printUserImageContainer.classList.remove('hidden');
      }

      if (uploadedLogoStrip && uploadedFileName) {
        uploadedFileName.textContent = file.name;
        uploadedLogoStrip.classList.remove('hidden');
      }

      updateCustomizerPricing();
      window.appToast('Custom graphic applied to canvas!');
    };
    reader.readAsDataURL(file);
  }

  if (removeUploadedLogoBtn) {
    removeUploadedLogoBtn.addEventListener('click', () => {
      appStore.customizer.userImage = null;
      appStore.customizer.userImageName = '';
      if (printUserImageContainer) printUserImageContainer.classList.add('hidden');
      if (uploadedLogoStrip) uploadedLogoStrip.classList.add('hidden');
      if (userLogoFileInput) userLogoFileInput.value = '';
      updateCustomizerPricing();
      window.appToast('Custom graphic removed.');
    });
  }

  // 7. Size Picker
  const sizePills = document.querySelectorAll('.size-picker-row .size-pill');
  sizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      sizePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      appStore.customizer.size = pill.dataset.size;
    });
  });

  // 8. Zoom Controls
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const zoomLevel = document.getElementById('zoomLevel');

  if (zoomInBtn && zoomOutBtn && zoomLevel && tshirtCanvasWrapper) {
    zoomInBtn.addEventListener('click', () => {
      if (appStore.customizer.zoom < 140) {
        appStore.customizer.zoom += 10;
        applyZoom();
      }
    });

    zoomOutBtn.addEventListener('click', () => {
      if (appStore.customizer.zoom > 80) {
        appStore.customizer.zoom -= 10;
        applyZoom();
      }
    });

    function applyZoom() {
      zoomLevel.textContent = `${appStore.customizer.zoom}%`;
      tshirtCanvasWrapper.style.transform = `scale(${appStore.customizer.zoom / 100})`;
    }
  }

  // 9. Pricing Calculation
  function updateCustomizerPricing() {
    let printFee = 0;
    const hasText = appStore.customizer.text && appStore.customizer.text.trim().length > 0;
    const hasBadge = appStore.customizer.badge && appStore.customizer.badge !== 'none';
    const hasUserImage = !!appStore.customizer.userImage;

    if (hasText || hasBadge || hasUserImage) {
      printFee = 8.00;
    }

    appStore.customizer.printFee = printFee;
    const total = appStore.customizer.basePrice + printFee;

    const customPrintCost = document.getElementById('customPrintCost');
    if (customPrintCost) {
      customPrintCost.textContent = printFee > 0 ? `+$${printFee.toFixed(2)}` : '$0.00';
    }

    if (totalCustomPrice) {
      totalCustomPrice.textContent = `$${total.toFixed(2)}`;
    }
  }

  // 10. Add to Bag Action
  const addCustomTeeToCartBtn = document.getElementById('addCustomTeeToCartBtn');
  if (addCustomTeeToCartBtn) {
    addCustomTeeToCartBtn.addEventListener('click', () => {
      const c = appStore.customizer;
      const total = c.basePrice + c.printFee;

      const customItem = {
        id: `custom-tee-${Date.now()}`,
        name: `Custom ${c.cut.toUpperCase()} Atelier Tee`,
        price: total,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
        size: c.size,
        color: c.colorName,
        customConfigKey: `${c.cut}-${c.color}-${c.text}-${c.size}-${c.position}`,
        isCustom: true,
        customDetails: {
          wording: c.text,
          cut: c.cut,
          position: c.position,
          hasArtwork: c.badge !== 'none' || !!c.userImage
        }
      };

      appStore.addToCart(customItem);
      openCartDrawer();
    });
  }

  // 11. Reset Customizer
  const resetCustomizerBtn = document.getElementById('resetCustomizerBtn');
  if (resetCustomizerBtn) {
    resetCustomizerBtn.addEventListener('click', () => {
      if (customTextInput) customTextInput.value = 'MAGESHIP';
      if (printLiveText) printLiveText.textContent = 'MAGESHIP';
      appStore.customizer.text = 'MAGESHIP';
      
      // Reset badge
      presetBadgeBtns.forEach(b => b.classList.remove('active'));
      const noneBtn = document.querySelector('.preset-badge-btn[data-badge="none"]');
      if (noneBtn) noneBtn.classList.add('active');
      if (printGraphicContainer) printGraphicContainer.classList.add('hidden');
      appStore.customizer.badge = 'none';

      // Reset image
      if (removeUploadedLogoBtn) removeUploadedLogoBtn.click();

      updateCustomizerPricing();
      window.appToast('Customizer reset to signature blank.');
    });
  }

  // 12. Save Mockup Download
  const downloadPreviewBtn = document.getElementById('downloadPreviewBtn');
  if (downloadPreviewBtn) {
    downloadPreviewBtn.addEventListener('click', () => {
      window.appToast('Mockup snapshot prepared! Rendering proof...');
      setTimeout(() => {
        window.appToast('✨ High-res proof saved to your downloads.');
      }, 900);
    });
  }
}

// ==========================================
// 8. CART DRAWER & CHECKOUT
// ==========================================
function initCartDrawer() {
  const cartDrawer = document.getElementById('cartDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const closeCartDrawerBtn = document.getElementById('closeCartDrawer');
  const cartDrawerBody = document.getElementById('cartDrawerBody');
  const cartCountBadges = document.querySelectorAll('#cartCount, #cartDrawerCount');
  const cartSubtotalAmount = document.getElementById('cartSubtotalAmount');
  const shippingProgressFill = document.getElementById('shippingProgressFill');
  const shippingMsg = document.getElementById('shippingMsg');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const promoInput = document.getElementById('promoInput');
  const promoFeedback = document.getElementById('promoFeedback');
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');

  function renderCart() {
    const items = appStore.cart;
    const count = appStore.getCartCount();
    const subtotal = appStore.getCartSubtotal();

    // Update count badges
    cartCountBadges.forEach(badge => {
      badge.textContent = badge.id === 'cartDrawerCount' ? `${count} items` : `${count}`;
    });

    // Shipping threshold ($75.00)
    const threshold = 75.00;
    const progress = Math.min(100, (subtotal / threshold) * 100);
    if (shippingProgressFill) {
      shippingProgressFill.style.width = `${progress}%`;
    }

    if (shippingMsg) {
      if (subtotal >= threshold) {
        shippingMsg.innerHTML = `✨ <strong>Complimentary Express Shipping Unlocked!</strong>`;
      } else {
        const remaining = (threshold - subtotal).toFixed(2);
        shippingMsg.textContent = `Add $${remaining} more for Free Worldwide Shipping`;
      }
    }

    // Subtotal with discount
    let finalSubtotal = subtotal;
    if (appStore.activeDiscount > 0) {
      finalSubtotal = subtotal * (1 - appStore.activeDiscount);
    }

    if (cartSubtotalAmount) {
      cartSubtotalAmount.textContent = `$${finalSubtotal.toFixed(2)}`;
    }

    // Render Items
    if (!cartDrawerBody) return;

    if (items.length === 0) {
      cartDrawerBody.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-icon"><i class="fa-solid fa-bag-shopping"></i></div>
          <h3>Your shopping bag is empty</h3>
          <p>Discover our heavyweight essentials or design your custom signature tee.</p>
          <button class="btn btn-outline btn-sm" onclick="closeCartDrawer(); window.location.hash='#mens';">
            Explore Collections
          </button>
        </div>
      `;
      return;
    }

    cartDrawerBody.innerHTML = items.map((item, index) => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-meta">Size: <strong>${item.size}</strong> • Color: <strong>${item.color || 'White'}</strong></span>
          ${item.isCustom && item.customDetails ? `
            <span class="cart-item-meta" style="color: var(--color-dark); font-weight: 600;">Custom: "${item.customDetails.wording || 'Graphic'}"</span>
          ` : ''}
          <div class="cart-item-bottom">
            <div class="qty-counter">
              <button class="qty-btn" onclick="appStore.updateQuantity(${index}, -1)">-</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" onclick="appStore.updateQuantity(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="btn-remove-item" onclick="appStore.removeFromCart(${index})" title="Remove item">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Promo code
  if (applyPromoBtn && promoInput && promoFeedback) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'WHITE15') {
        appStore.activeDiscount = 0.15;
        promoFeedback.className = 'promo-feedback success';
        promoFeedback.textContent = 'Promo "WHITE15" applied! 15% discount deducted.';
        renderCart();
      } else if (code === 'FREESHIP') {
        promoFeedback.className = 'promo-feedback success';
        promoFeedback.textContent = 'Promo "FREESHIP" applied! Free shipping active.';
      } else {
        promoFeedback.className = 'promo-feedback error';
        promoFeedback.textContent = 'Invalid promo code. Try "WHITE15".';
      }
    });
  }

  // Checkout modal
  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener('click', () => {
      if (appStore.cart.length === 0) {
        window.appToast('Your shopping bag is empty.');
        return;
      }
      const total = appStore.getCartSubtotal();
      window.appToast(`Redirecting to 256-bit secure checkout ($${total.toFixed(2)})...`);
      setTimeout(() => {
        alert(`MAGESHIP ORDER CONFIRMATION:\n\nThank you for choosing Mageship Atelier.\nTotal order value: $${total.toFixed(2)}\n\nYour bespoke items will be individually inspected and shipped in our matte white luxury packaging.`);
        appStore.cart = [];
        appStore.saveLocalStorage('mageship_cart', []);
        window.dispatchEvent(new Event('cartUpdated'));
        closeCartDrawer();
      }, 1200);
    });
  }

  // Drawer toggles
  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
  if (closeCartDrawerBtn) closeCartDrawerBtn.addEventListener('click', closeCartDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', () => {
    closeCartDrawer();
    closeWishlistDrawer();
    closeMobileDrawer();
  });

  window.addEventListener('cartUpdated', renderCart);
  renderCart();
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('active');
}

window.closeCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
};

// ==========================================
// 9. WISHLIST DRAWER
// ==========================================
function initWishlistDrawer() {
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistTriggerBtn = document.getElementById('wishlistTriggerBtn');
  const closeWishlistDrawerBtn = document.getElementById('closeWishlistDrawer');
  const wishlistDrawerBody = document.getElementById('wishlistDrawerBody');
  const wishlistCount = document.getElementById('wishlistCount');

  function renderWishlist() {
    const list = appStore.wishlist;
    if (wishlistCount) wishlistCount.textContent = list.length;

    if (!wishlistDrawerBody) return;

    if (list.length === 0) {
      wishlistDrawerBody.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-icon"><i class="fa-regular fa-heart"></i></div>
          <h3>Your wishlist is empty</h3>
          <p>Tap the heart icon on any garment to curate your personal wardrobe.</p>
        </div>
      `;
      return;
    }

    const items = PRODUCTS_DATA.filter(p => list.includes(p.id));
    wishlistDrawerBody.innerHTML = items.map(item => `
      <div class="wishlist-item-row">
        <img src="${item.image}" alt="${item.name}" class="wishlist-thumb">
        <div class="wishlist-meta">
          <h4 class="wishlist-title">${item.name}</h4>
          <span class="wishlist-price">$${item.price.toFixed(2)}</span>
        </div>
        <button class="btn btn-primary btn-xs" onclick="appStore.addToCart({ id: '${item.id}', name: '${item.name}', price: ${item.price}, image: '${item.image}', size: '${item.sizes[0]}' })">
          Add
        </button>
        <button class="btn-remove-item" onclick="appStore.toggleWishlist('${item.id}')" title="Remove">
          &times;
        </button>
      </div>
    `).join('');
  }

  if (wishlistTriggerBtn) {
    wishlistTriggerBtn.addEventListener('click', () => {
      if (wishlistDrawer) wishlistDrawer.classList.add('open');
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.add('active');
      renderWishlist();
    });
  }

  if (closeWishlistDrawerBtn) {
    closeWishlistDrawerBtn.addEventListener('click', closeWishlistDrawer);
  }

  window.addEventListener('wishlistUpdated', renderWishlist);
  renderWishlist();
}

function closeWishlistDrawer() {
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (wishlistDrawer) wishlistDrawer.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

// ==========================================
// 10. SEARCH MODAL
// ==========================================
function initSearchModal() {
  const searchModal = document.getElementById('searchModal');
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const siteSearchInput = document.getElementById('siteSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const searchResultsGrid = document.getElementById('searchResultsGrid');
  const quickSearchTags = document.querySelectorAll('.search-tag');

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('active');
      setTimeout(() => siteSearchInput && siteSearchInput.focus(), 100);
    }
  }

  function closeSearch() {
    if (searchModal) searchModal.classList.remove('active');
    if (siteSearchInput) siteSearchInput.value = '';
    if (searchResultsGrid) searchResultsGrid.innerHTML = '';
  }

  function performSearch(query) {
    if (!searchResultsGrid) return;
    const q = query.toLowerCase().trim();
    if (!q) {
      searchResultsGrid.innerHTML = '';
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subCategory.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchResultsGrid.innerHTML = `<p style="padding: 2rem 0; color: var(--color-muted); text-align: center;">No pieces found matching "${query}".</p>`;
    } else {
      searchResultsGrid.innerHTML = `
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-muted); margin-bottom: 1rem;">
          FOUND ${matches.length} PIECES
        </div>
        <div class="products-grid" style="grid-template-columns: repeat(2, 1fr);">
          ${matches.map(renderProductCard).join('')}
        </div>
      `;
      bindProductEvents(searchResultsGrid);
    }
  }

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearch);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (siteSearchInput) {
        siteSearchInput.value = '';
        siteSearchInput.focus();
      }
      if (searchResultsGrid) searchResultsGrid.innerHTML = '';
    });
  }

  if (siteSearchInput) {
    siteSearchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  quickSearchTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.dataset.query;
      if (siteSearchInput) {
        siteSearchInput.value = q;
        performSearch(q);
      }
    });
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeQuickView();
      closeCartDrawer();
      closeWishlistDrawer();
    }
  });
}

// ==========================================
// 11. CONTACT FORM & FAQ ACCORDION
// ==========================================
function initContactModule() {
  const contactForm = document.getElementById('contactForm');
  const formSuccessBanner = document.getElementById('formSuccessBanner');
  const resetContactFormBtn = document.getElementById('resetContactFormBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate Message
      if (messageInput.value.trim().length < 10) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (isValid) {
        contactForm.classList.add('hidden');
        if (formSuccessBanner) formSuccessBanner.classList.remove('hidden');
        window.appToast('Inquiry successfully dispatched to Mageship Concierge.');
      }
    });
  }

  if (resetContactFormBtn && contactForm && formSuccessBanner) {
    resetContactFormBtn.addEventListener('click', () => {
      contactForm.reset();
      contactForm.classList.remove('hidden');
      formSuccessBanner.classList.add('hidden');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(f => f.classList.remove('active'));
        if (!isOpen) item.classList.add('active');
      });
    }
  });
}

// ==========================================
// 12. MOBILE NAVIGATION DRAWER
// ==========================================
function initMobileNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeMobileDrawerBtn = document.getElementById('closeMobileDrawer');
  const overlay = document.getElementById('drawerOverlay');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      if (overlay) overlay.classList.add('active');
    });
  }

  if (closeMobileDrawerBtn) {
    closeMobileDrawerBtn.addEventListener('click', closeMobileDrawer);
  }
}

function closeMobileDrawer() {
  const mobileDrawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (mobileDrawer) mobileDrawer.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

// Quick View Close button bind
const closeQuickViewBtn = document.getElementById('closeQuickView');
const quickViewBackdrop = document.getElementById('quickViewBackdrop');
if (closeQuickViewBtn) closeQuickViewBtn.addEventListener('click', closeQuickView);
if (quickViewBackdrop) quickViewBackdrop.addEventListener('click', closeQuickView);

// ==========================================
// 13. DOM READY INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initProductCatalogs();
  initCustomizerEngine();
  initCartDrawer();
  initWishlistDrawer();
  initSearchModal();
  initContactModule();
  initMobileNavigation();
  console.log('✨ MAGESHIP ATELIER Web Application fully initialized.');
});
