/*document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const decorativeSquare = document.querySelector('.decorative-square');
    const decorativeSquare2 = document.querySelector('.decorative-square-2');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.classList.add('hidden');
        } else {
            // Scroll up
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;

        // Check if user has reached the bottom
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setTimeout(() => {
                footer.style.display = 'block';
            }, 5000); // 5cm delay (approximately 5 seconds)
        } else {
            footer.style.display = 'none';
        }

        // Scale down the squares when scrolling down
        if (scrollTop > 0) {
            decorativeSquare.style.transform = 'scale(0.3)';
            decorativeSquare2.style.transform = 'scale(0.3)';
        } else {
            decorativeSquare.style.transform = 'scale(1)';
            decorativeSquare2.style.transform = 'scale(1)';
        }
    });

    const products = [
        { name: 'asparagus', image: 'asparagus.jpg', price: 14, link: 'asparagus.html' },
        { name: 'baby cabbage', image: 'baby cabbage.jpg', price: 18, link: 'baby_cabbage.html' },
        { name: 'bananas', image: 'bananas.jpg', price: 22, link: 'bananas.html' },
        { name: 'blueberries', image: 'blueberries.jpg', price: 26, link: 'blueberries.html' },
        { name: 'carrot', image: 'carrot.jpg', price: 30, link: 'carrot.html' },
        { name: 'cauliflower', image: 'cauliflower.jpg', price: 34, link: 'cauliflower.html' },
        { name: 'cherry', image: 'cherry.jpg', price: 38, link: 'cherry.html' },
        { name: 'corn', image: 'corn.jpg', price: 42, link: 'corn.html' },
        { name: 'cucumber', image: 'cucumber.jpg', price: 46, link: 'cucumber.html' },
        { name: 'garlic', image: 'garlic.jpg', price: 50, link: 'garlic.html' },
        { name: 'grapes', image: 'grapes.jpg', price: 54, link: 'grapes.html' },
        { name: 'green onion', image: 'green onion.jpg', price: 58, link: 'green_onion.html' },
        { name: 'green pepper', image: 'green pepper.jpg', price: 62, link: 'green_pepper.html' },
        { name: 'korean grapes', image: 'korean grapes.jpg', price: 66, link: 'korean_grapes.html' },
        { name: 'mandarin', image: 'mandarin.jpg', price: 70, link: 'mandarin.html' },
        { name: 'mango', image: 'mango.jpg', price: 14, link: 'mango.html' },
        { name: 'mushroom', image: 'mushroom.jpg', price: 18, link: 'mushroom.html' },
        { name: 'pineapple', image: 'pineapple.jpg', price: 22, link: 'pineapple.html' },
        { name: 'plum', image: 'plum.jpg', price: 26, link: 'plum.html' },
        { name: 'pomegranate', image: 'pomegranate.jpg', price: 30, link: 'pomegranate.html' },
        { name: 'potato', image: 'potato.jpg', price: 34, link: 'potato.html' },
        { name: 'red pepper', image: 'red pepper.jpg', price: 38, link: 'red_pepper.html' },
        { name: 'red potatoes', image: 'red potatoes.jpg', price: 42, link: 'red_potatoes.html' },
        { name: 'sliced mushroom', image: 'sliced mushroom.jpg', price: 46, link: 'sliced_mushroom.html' },
        { name: 'strawberry', image: 'strawberry.jpg', price: 50, link: 'strawberry.html' },
        { name: 'tomato', image: 'tomato.jpg', price: 54, link: 'tomato.html' },
        { name: 'watermelon', image: 'watermelon.jpg', price: 58, link: 'watermelon.html' }
    ];

    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <a href="${product.link}">
                <img src="${product.image}" alt="${product.name}">
                <p class="name">${product.name}</p>
            </a>
            <p class="price">${product.price} SAR</p>
        `;
        productsSection.appendChild(productDiv);
    });
});*/
