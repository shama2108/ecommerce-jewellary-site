const products = [
    { id: 1, name: "Diamond Ring", price: 999.99, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 2, name: "Gold Necklace", price: 599.99, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 3, name: "Pearl Earrings", price: 299.99, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: 4, name: "Sapphire Bracelet", price: 449.99, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
];

const productList = document.getElementById('product-list');

function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-3 mb-4';
        productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

function initializeCart() {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    const productId = event.target.getAttribute('data-id');
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        alert(`Added ${product.name} to cart!`);
        // Here you would typically update the cart state and UI
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    initializeCart();
});