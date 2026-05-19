// ==========================================
// Mock Product Data
// ==========================================
const products = [
    {
        id: 1,
        name: "Sony WH-1000XM5 Wireless Headphones",
        category: "Electronics",
        price: 348.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Industry-leading noise canceling headphones.",
        fullDesc: "The WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise cancellation and exceptional call quality. With a newly developed driver, DSEE – Extreme and Hires audio support, these headphones provide awe-inspiring audio quality."
    },
    {
        id: 2,
        name: "Apple Watch Series 8",
        category: "Electronics",
        price: 399.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Advanced health sensors and apps, plus a bright Always-On display.",
        fullDesc: "Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health. Crash Detection for emergency assistance. Sleep stages to better understand your sleep. And new ways to train using the enhanced Workout app."
    },
    {
        id: 3,
        name: "Canon EOS R5 Mirrorless Camera",
        category: "Electronics",
        price: 3899.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Next-generation full-frame mirrorless camera for pros.",
        fullDesc: "The EOS R5 builds off of the powerful legacy of Canon's full frame cameras offering next generation refinements in image quality, performance and reliability. Capture stunning 8K video, track subjects effortlessly, and enjoy massive 45 Megapixel resolution."
    },
    {
        id: 4,
        name: "Organic Cotton Vintage Tee",
        category: "Clothing",
        price: 35.00,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Premium heavyweight organic cotton t-shirt with a vintage wash.",
        fullDesc: "Our vintage tee is crafted from 100% GOTS certified organic cotton, washed down for a perfect vintage feel right out of the box. Designed for a relaxed fit, it features a durable ribbed collar and reinforced stitching to last for years to come."
    },
    {
        id: 5,
        name: "Levi's 501 Original Fit Jeans",
        category: "Clothing",
        price: 79.50,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
        shortDesc: "The blueprint for every pair of jeans in existence.",
        fullDesc: "Close your eyes. Think “jeans.” Now open. They were 501 Originals, right? With a classic straight leg and iconic styling, they’re literally the blueprint for every pair of jeans in existence—burned into the world’s collective cortex ever since Levi Strauss invented them in 1873."
    },
    {
        id: 6,
        name: "Patagonia Nano Puff Jacket",
        category: "Clothing",
        price: 239.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Warm, windproof, water-resistant jacket.",
        fullDesc: "Warm, windproof, water-resistant—the Nano Puff Jacket uses incredibly lightweight and highly compressible 60-g PrimaLoft Gold Insulation Eco 100% postconsumer recycled polyester with P.U.R.E. (Produced Using Reduced Emissions) technology, wrapped in a 100% recycled polyester shell and lining."
    },
    {
        id: 7,
        name: "Fresh Whole Hass Avocados",
        category: "Groceries",
        price: 5.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Pack of 4 fresh, perfectly ripe organic Hass avocados.",
        fullDesc: "Our Hass avocados are sustainably grown, hand-picked, and delivered fresh to ensure you get the perfect creamy texture and nutty flavor. Ideal for guacamole, toast, salads, or eating straight out of the skin."
    },
    {
        id: 10,
        name: "Mid-Century Modern Armchair",
        category: "Home",
        price: 299.00,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Comfortable lounge chair with solid wood legs and premium upholstery.",
        fullDesc: "Add a touch of mid-century elegance to your living space. This armchair features a sturdy kiln-dried hardwood frame, plush high-density foam cushioning, and highly durable, stain-resistant fabric tailored to perfection."
    },
    {
        id: 11,
        name: "Hand-Poured Soy Wax Candle",
        category: "Home",
        price: 24.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Sandalwood and vanilla scented candle with a 50-hour burn time.",
        fullDesc: "Create a warm, inviting atmosphere with our artisanal soy wax candle. Infused with natural essential oils, it delivers a rich blend of earthy sandalwood and sweet vanilla. Features a lead-free cotton wick for a clean, even burn."
    },
    {
        id: 12,
        name: "Ceramic Minimalist Planter",
        category: "Home",
        price: 45.00,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
        shortDesc: "Matte white ceramic pot with drainage hole and wooden stand.",
        fullDesc: "Elevate your indoor greenery with this sleek, matte white ceramic planter. It comes complete with a perfectly fitted mid-century inspired wooden stand and features a drainage hole with a silicone plug to keep your plants healthy."
    }
];

// ==========================================
// DOM Elements
// ==========================================
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const navbar = document.querySelector('.navbar');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Carousel Elements
const slides = document.querySelectorAll('.carousel-slide');
const prevSlideBtn = document.getElementById('prevSlideBtn');
const nextSlideBtn = document.getElementById('nextSlideBtn');
let currentSlide = 0;
let slideInterval;

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Modal Elements
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');

// Cart & Interactions
const decreaseQty = document.getElementById('decreaseQty');
const increaseQty = document.getElementById('increaseQty');
const productQty = document.getElementById('productQty');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartBadge = document.querySelector('.cart-badge');
const toast = document.getElementById('toast');

// Cart Sidebar Elements
const navCartBtn = document.getElementById('navCartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalAmount = document.getElementById('cartTotalAmount');

let cart = [];
let currentModalProductId = null;
let currentSearchQuery = '';
let currentCategory = 'all';

// ==========================================
// Event Listeners
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProducts(products);
    updateCartUI();

    // Carousel Logic
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function prevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        // Start auto-slide
        slideInterval = setInterval(nextSlide, 4000);

        // Next Button
        nextSlideBtn.addEventListener('click', () => {
            nextSlide();
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 4000);
        });

        // Prev Button
        prevSlideBtn.addEventListener('click', () => {
            prevSlide();
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 4000);
        });
    }

    // Filter and Search Logic
    function applyFilters(shouldScroll = false) {
        let filteredProducts = products;

        // Apply Category Filter
        if (currentCategory !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
        }

        // Apply Search Filter
        if (currentSearchQuery !== '') {
            const normalizedQuery = currentSearchQuery.replace(/[-\s]/g, '');
            const searchTerms = currentSearchQuery.split(/\s+/);

            filteredProducts = filteredProducts.filter(p => {
                const searchableText = `${p.name} ${p.category} ${p.shortDesc} ${p.fullDesc}`.toLowerCase();
                const normalizedText = searchableText.replace(/[-\s]/g, '');

                if (normalizedText.includes(normalizedQuery)) return true;
                return searchTerms.every(term => searchableText.includes(term));
            });
        }

        renderProducts(filteredProducts);

        if (shouldScroll) {
            document.getElementById('products').scrollIntoView({behavior: 'smooth'});
        }
    }

    searchBtn.addEventListener('click', () => {
        currentSearchQuery = searchInput.value.toLowerCase().trim();
        applyFilters(true);
    });
    
    searchInput.addEventListener('input', () => {
        currentSearchQuery = searchInput.value.toLowerCase().trim();
        applyFilters(false);
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            currentSearchQuery = searchInput.value.toLowerCase().trim();
            applyFilters(true);
        }
    });

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    // Category Cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            const matchingBtn = Array.from(filterBtns).find(b => b.getAttribute('data-filter') === currentCategory);
            if(matchingBtn) matchingBtn.classList.add('active');
            
            applyFilters();
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Modal Close
    closeModalBtn.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeModal();
        }
    });

    // Quantity Selectors
    decreaseQty.addEventListener('click', () => {
        let val = parseInt(productQty.value);
        if (val > 1) {
            productQty.value = val - 1;
        }
    });

    increaseQty.addEventListener('click', () => {
        let val = parseInt(productQty.value);
        if (val < 10) {
            productQty.value = val + 1;
        }
    });

    // Add to Cart
    addToCartBtn.addEventListener('click', () => {
        const qty = parseInt(productQty.value);
        if (currentModalProductId) {
            addToCart(currentModalProductId, qty);
            closeModal();
            showToast(`Added ${qty} item(s) to your cart!`);
        }
    });

    // Cart Sidebar Toggle
    navCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Contact Form Prevent Default
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Message sent successfully! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

// ==========================================
// Functions
// ==========================================

function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; font-size: 1.125rem;">No products found matching your search.</p>';
        return;
    }

    productsToRender.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="product-image-wrap">
                <span class="product-category">${product.category}</span>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <div style="display:flex; align-items:center; gap:4px; margin-bottom:0.75rem; color:#FBBF24; font-size:0.9rem;">
                    <i class="ph-fill ph-star"></i>
                    <span style="color:var(--text-main); font-weight:600; margin-left:4px;">${product.rating}</span>
                </div>
                <p class="product-desc">${product.shortDesc}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <div style="display:flex; gap: 0.5rem;">
                        <button class="view-btn" style="padding: 0.5rem;" aria-label="Add to cart" onclick="addToCartAndShowToast(${product.id}, 1)"><i class="ph ph-shopping-cart"></i></button>
                        <button class="view-btn" onclick="openModal(${product.id})">View</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

window.addToCartAndShowToast = function(productId, qty) {
    addToCart(productId, qty);
    showToast(`Added item to your cart!`);
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId;

    // Populate Data
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalCategory.textContent = product.category;
    modalTitle.textContent = product.name;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    modalDescription.textContent = product.fullDesc;
    productQty.value = 1;

    // Update Modal Rating
    const modalRatingContainer = document.querySelector('.modal-rating');
    if (modalRatingContainer) {
        modalRatingContainer.innerHTML = `
            <i class="ph-fill ph-star"></i>
            <span style="color:var(--text-main); font-weight:600; margin-left:4px;">${product.rating}</span>
            <span style="color:var(--text-muted); font-size:0.875rem; margin-left:8px;">(124 reviews)</span>
        `;
    }

    // Show Modal
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function showToast(message) {
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==========================================
// Cart Functions
// ==========================================

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartUI();
}

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    // Update total price
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalAmount.textContent = `$${totalPrice.toFixed(2)}`;
    
    // Render items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        return;
    }
    
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-qty">
                    <span>Qty: ${item.quantity}</span>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
}
