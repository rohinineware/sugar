

// product show when search-----------------------------------------------------------------------------------------------------

const products = [
    { name: "Mousse Muse Lip Cream", price: "500", discount: "10%", image: "./images/A1.webp" },
    { name: "Matte Attack Transferproof", price: "600", discount: "15%", image: "./images/A2.webp" },
    { name: "Matte As Hell Crayon Lipstick Minis Set Of 3", price: "700", discount: "20%", image: "./images/A3.webp" },
    { name: "Dream Cover SPF15 Mattifying Compact", price: "800", discount: "25%", image: "./images/A4.webp" },
];

document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredProducts = products.filter(pro => pro.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
});

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear existing products

    if (products.length > 0) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>Price: Rs. ${product.price}</p>
                <p>Discount: ${product.discount}</p>
                <button class="select-shade-btn">Select Shade</button>
            `;
            productList.appendChild(productDiv);
        });
        productList.classList.remove('hidden');
    } else {
        productList.innerHTML = '<p>No products found</p>';
        productList.classList.remove('hidden');
    }
}