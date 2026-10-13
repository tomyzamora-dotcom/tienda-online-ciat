// Productos disponibles
const products = [
    {
        id: 1,
        name: 'Placa Polimarmol',
        price: 999.99,
        description: 'Placa Polimarmol',
        emoji: '💻',
        variants: [
            { id: 'Placa Polimarmol 1', description: '3mm x 1.20m x 2.40m', price: 36000 },
            { id: 'Placa Polimarmol 2', description: '5mm x 1.20m x 2.40m', price: 48000 },
            { id: 'Placa Polimarmol 3', description: '8mm x 1.20m x 2.40m', price: 54000 },
            { id: 'Placa Polimarmol 4', description: '10mm x 1.20m x 2.40m', price: 66000 },
            { id: 'Placa Polimarmol 5', description: '20mm x 1.20m x 2.40m', price: 78000 }
        ]
    },
    {
        id: 2,
        name: 'Placa de Propileno',
        price: 29.99,
        description: 'Placa de propileno',
        emoji: '🖱️',
        variants: [
            { id: 'Placa de Propileno 1', description: '3mm x 1.20m x 2.40m', price: 36000 },
            { id: 'Placa de Propileno 2', description: '5mm x 1.20m x 2.40m', price: 48000 },
            { id: 'Placa de Propileno 3', description: '8mm x 1.20m x 2.40m', price: 54000 },
            { id: 'Placa de Propileno 4', description: '10mm x 1.20m x 2.40m', price: 66000 },
            { id: 'Placa de Propileno 5', description: '20mm x 1.20m x 2.40m', price: 78000 }
        ]
    },
    {
        id: 3,
        name: 'Placa de Tetrabrick',
        price: 149.99,
        description: 'Placa de tetrabrick',
        emoji: '⌨️',
        variants: [
            { id: 'Placa de Tetrabrick 1', description: '3mm x 1.20m x 2.40m', price: 36000 },
            { id: 'Placa de Tetrabrick 2', description: '5mm x 1.20m x 2.40m', price: 48000 },
            { id: 'Placa de Tetrabrick 3', description: '8mm x 1.20m x 2.40m', price: 54000 },
            { id: 'Placa de Tetrabrick 4', description: '10mm x 1.20m x 2.40m', price: 66000 },
            { id: 'Placa de Tetrabrick 5', description: '20mm x 1.20m x 2.40m', price: 78000 }
        ]
    },
    {
        id: 4,
        name: 'Tabla',
        price: 599.99,
        description: 'Tabla',
        emoji: '🖥️',
        variants: [
            { id: 'tabla 1', description: '2cm x 8cm x 1.98m', price: 6000 },
            { id: 'tabla 2', description: '4cm x 8cm x 1.98m', price: 12000 }
        ]
    },
    {
        id: 5,
        name: 'Perfiles',
        price: 199.99,
        description: 'Perfiles',
        emoji: '🎧',
        variants: [
            { id: 'perfiles 1', description: '12.5cm x 5cm x 2.50m', price: 36000 }
        ]
    },
    {
        id: 6,
        name: 'Alfajias',
        price: 79.99,
        description: 'Alfajias',
        emoji: '📷',
        variants: [
            { id: 'alfajias 1', description: '4cm x 4cm x 1.48m', price: 4000 },
            { id: 'alfajias 2', description: '5cm x 5cm x 2.90m', price: 12000 }
        ]
    },
    {
        id: 7,
        name: 'Retardadores',
        price: 599.99,
        description: 'Reductores de velocidad',
        emoji: '🖥️',
        variants: [
            { id: 'retardadores 1', description: '15cm x 4cm x 1.00m', price: 30000 }
        ]
    },
    {
        id: 8,
        name: 'Postes octogonales',
        price: 599.99,
        description: 'Postes octogonales',
        emoji: '🖥️',
        variants: [
            { id: 'postes octogonales 1', description: '12cm diámetro x 1.00m', price: 7500 },
            { id: 'postes octogonales 2', description: '12cm diámetro x 1.50m', price: 12000 },
            { id: 'postes octogonales 3', description: '12cm diámetro x 2.00m', price: 36000 },
            { id: 'postes octogonales 4', description: '12cm diámetro x 2.50m', price: 42000 },
            { id: 'postes octogonales 5', description: '12cm diámetro x 3.00m', price: 45000 },
            { id: 'postes octogonales 6', description: '12cm diámetro x 3.50m', price: 50000 }
        ]
    },
    {
        id: 9,
        name: 'Cesto H',
        price: 599.99,
        description: 'Cesto para material reciclado',
        emoji: '🖥️',
        variants: [
            { id: 'Cesto H 1', description: 'A medida especifica', price: 7500 }
        ]
    },
    {
        id: 10,
        name: 'Cesto 70L',
        price: 599.99,
        description: 'Cesto para material reciclado',
        emoji: '🖥️',
        variants: [
            { id: 'Cesto 70L 1', description: '30cm x 1.00m', price: 7500 }
        ]
    },
    {
        id: 11,
        name: 'Portabigback',
        price: 599.99,
        description: 'Portabigback',
        emoji: '🖥️',
        variants: [
            { id: 'Portabigback 1', description: '100 cm x 100 cm x 100 cm', price: 7500 }
        ]
    },
    {
        id: 12,
        name: 'Reposera',
        price: 599.99,
        description: 'Reposera',
        emoji: '🖥️',
        variants: [
            { id: 'Reposera 1', description: 'A medida especifica', price: 7500 }
        ]
    },
    {
        id: 13,
        name: 'Casa para perro',
        price: 599.99,
        description: 'Casa para perro',
        emoji: '🖥️',
        variants: [
            { id: 'Casa para perro 1', description: '74cm x 60cm', price: 100000 },
            { id: 'Casa para perro 2', description: '74cm x 90cm', price: 120000 },
            { id: 'Casa para perro 3', description: '74cm x 110cm', price: 145000 }
        ]
    },
    {
        id: 14,
        name: 'Tierra de compost',
        price: 599.99,
        description: 'Tierra de compost',
        emoji: '🖥️',
        variants: [
            { id: 'Tierra de compost 1', description: '5kg', price: 7500 },
            { id: 'Tierra de compost 2', description: '10kg', price: 12000 },
            { id: 'Tierra de compost 3', description: '20kg', price: 36000 },
            { id: 'Tierra de compost 4', description: 'Pedido por kg especifico', price: 7500 },
        ]
    },
    {
        id: 15,
        name: 'Tierra de humus',
        price: 599.99,
        description: 'Tierra de humus',
        emoji: '🖥️',
        variants: [
            { id: 'Tierra de humus 1', description: '5kg', price: 7500 },
            { id: 'Tierra de humus 2', description: '10kg', price: 12000 },
            { id: 'Tierra de humus 3', description: '20kg', price: 36000 },
            { id: 'Tierra de humus 4', description: 'Pedido por kg especifico', price: 7500 },
        ]
    },
];

const productImagePaths = {
    1: 'imagenes de productos/Placa polimarmol.png',
    2: 'imagenes de productos/Placa polipropileno.png',
    3: 'imagenes de productos/Placa Tetrabrick.png',
    4: 'imagenes de productos/Tabla.png',
    6: 'imagenes de productos/Alfajia.png',
    8: 'imagenes de productos/Poste octogonal.png',
    13: 'imagenes de productos/Casa para perros.jpg'
};

// LocalStorage seguro
function hasLocalStorage() {
    try {
        return typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.getItem === 'function';
    } catch (error) {
        return false;
    }
}

function loadStorage(key, fallback = null) {
    if (!hasLocalStorage()) {
        return fallback;
    }

    try {
        const rawValue = window.localStorage.getItem(key);
        if (rawValue === null || rawValue === undefined) {
            return fallback;
        }

        const parsedValue = JSON.parse(rawValue);
        return parsedValue ?? fallback;
    } catch (error) {
        return fallback;
    }
}

function saveStorage(key, value) {
    if (!hasLocalStorage()) {
        return false;
    }

    try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        return false;
    }
}

// Carrito inicial en localStorage o memoria temporal
let cart = Array.isArray(loadStorage('cart', [])) ? loadStorage('cart', []) : [];

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCart();
});

// Renderizar productos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) {
        return;
    }

    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const firstVariant = Array.isArray(product.variants) && product.variants.length > 0 ? product.variants[0] : null;
        const currentDescription = firstVariant ? firstVariant.description : product.description;
        const currentPrice = firstVariant ? firstVariant.price : product.price;
        const imagePath = productImagePaths[product.id];

        const variantSelector = Array.isArray(product.variants) && product.variants.length > 1 ? `
            <label class="variant-label" for="product-variant-${product.id}">Elegir ${product.name}:</label>
            <select id="product-variant-${product.id}" class="product-variant" onchange="updateProductVariant(${product.id})">
                ${product.variants.map(variant => `
                    <option value="${variant.id}">${variant.description} - $${Number(variant.price || 0).toFixed(2)}</option>
                `).join('')}
            </select>
        ` : '';

        card.innerHTML = `
            <div class="product-image${[4, 6, 8].includes(product.id) ? ` product-image-${product.id}` : ''}">
                ${imagePath
                    ? `<img src="${imagePath}" alt="${product.name}">`
                    : `<span>${product.emoji || '📦'}</span>`}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                ${variantSelector}
                <p class="product-description" id="product-description-${product.id}">${currentDescription || product.description || ''}</p>
                <div class="product-footer">
                    <span class="product-price" id="product-price-${product.id}">$${Number(currentPrice || 0).toFixed(2)}</span>
                    <button class="btn-add" onclick="addToCart(${product.id})">Agregar</button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Actualizar la descripción y el precio de la variante seleccionada
function updateProductVariant(productId) {
    const product = products.find(item => item.id === productId);
    if (!product || !Array.isArray(product.variants) || product.variants.length === 0) {
        return;
    }

    const selector = document.getElementById(`product-variant-${productId}`);
    if (!selector) {
        return;
    }

    const variant = product.variants.find(item => item.id === selector.value);
    if (!variant) {
        return;
    }

    const descriptionNode = document.getElementById(`product-description-${productId}`);
    const priceNode = document.getElementById(`product-price-${productId}`);

    if (descriptionNode) {
        descriptionNode.textContent = variant.description || product.description || '';
    }

    if (priceNode) {
        priceNode.textContent = `$${Number(variant.price || 0).toFixed(2)}`;
    }
}

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) {
        return;
    }

    const selector = document.getElementById(`product-variant-${productId}`);
    const variant = product.variants && selector
        ? product.variants.find(item => item.id === selector.value) || product.variants[0]
        : null;

    const cartKey = `${productId}-${variant ? variant.id : 'default'}`;
    const cartItem = cart.find(item => (item.cartKey || String(item.id)) === cartKey);

    if (cartItem) {
        cartItem.quantity = Number(cartItem.quantity || 0) + 1;
    } else {
        cart.push({
            ...product,
            ...(variant || {}),
            cartKey,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
    showNotification(`${product.name} agregado al carrito`);
}

// Actualizar carrito visual
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');

    if (!cartItems || !cartCount || !totalPrice) {
        return;
    }

    const itemCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
    cartCount.textContent = String(itemCount);

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        totalPrice.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const unitPrice = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        const itemName = item.name || 'Producto';
        const itemDescription = item.description ? ` - ${item.description}` : '';
        const cartKey = item.cartKey || String(item.id || '');

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${itemName}${itemDescription}</div>
                    <div class="cart-item-price">$${unitPrice.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button onclick="changeQuantity('${cartKey}', -1)">−</button>
                        <span>${quantity}</span>
                        <button onclick="changeQuantity('${cartKey}', 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart('${cartKey}')">Eliminar</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const total = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);
    totalPrice.textContent = total.toFixed(2);
}

// Cambiar cantidad
function changeQuantity(cartKey, change) {
    const normalizedCartKey = String(cartKey || '');
    const item = cart.find(entry => (entry.cartKey || String(entry.id || '')) === normalizedCartKey);

    if (!item) {
        return;
    }

    const nextQuantity = (Number(item.quantity) || 0) + Number(change || 0);

    if (nextQuantity <= 0) {
        removeFromCart(normalizedCartKey);
        return;
    }

    item.quantity = nextQuantity;
    saveCart();
    updateCart();
}

// Eliminar del carrito
function removeFromCart(cartKey) {
    const normalizedCartKey = String(cartKey || '');
    cart = cart.filter(item => (item.cartKey || String(item.id || '')) !== normalizedCartKey);
    saveCart();
    updateCart();
    showNotification('Producto eliminado del carrito');
}

// Limpiar carrito
function clearCart() {
    if (cart.length === 0) {
        showNotification('El carrito ya está vacío');
        return;
    }

    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        cart = [];
        saveCart();
        updateCart();
        showNotification('Carrito vaciado');
    }
}

// Guardar carrito
function saveCart() {
    saveStorage('cart', cart);
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('El carrito está vacío', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 0)), 0);
    const items = cart.map(item => {
        const variantDescription = item.description ? ` - Medida: ${item.description}` : '';
        return `${item.name || 'Producto'}${variantDescription} - Precio unitario: $${(Number(item.price) || 0).toFixed(2)} - Unidades: ${Number(item.quantity) || 0}`;
    }).join(', ');

    const whatsappNumber = '+5493814456786';
    const message = `✅ *¡COMPRA REALIZADA!*%0A%0A📋 *Artículos:* ${encodeURIComponent(items)}%0A💰 *Total:* $${total.toFixed(2)}%0A%0A¡Gracias por tu compra en Tafi Recicla!`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    alert(`
✅ ¡COMPRA REALIZADA!

Artículos: ${items}
Total: $${total.toFixed(2)}

Gracias por tu compra.
    `);

    const savedOrders = loadStorage('orders', []);
    const orders = Array.isArray(savedOrders) ? savedOrders : [];

    orders.push({
        id: Date.now(),
        date: new Date().toLocaleString('es-ES'),
        items: cart,
        total: total
    });

    saveStorage('orders', orders);
    cart = [];
    saveCart();
    updateCart();
    showNotification('¡Compra completada exitosamente!');

    setTimeout(() => {
        if (typeof window !== 'undefined' && window.open) {
            window.open(whatsappUrl, '_blank');
        }
    }, 1500);
}

// Alternar vista del carrito
function toggleCart() {
    const panel = document.getElementById('cartPanel');
    if (!panel) {
        return;
    }

    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    if (!document || !document.body) {
        return;
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.background = type === 'error' ? '#e74c3c' : '#27ae60';

    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Mostrar órdenes (opcional - para debug)
function showOrders() {
    const orders = Array.isArray(loadStorage('orders', [])) ? loadStorage('orders', []) : [];
    console.log('Órdenes:', orders);
    alert(`Total de compras realizadas: ${orders.length}\n\nRevisa la consola para detalles.`);
}
