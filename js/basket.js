document.addEventListener("DOMContentLoaded", function() {
    // Tur məlumatları (id, ad, qiymət və s.)
    const tours = [
        {
            id: 1,
            title: "Lənkəran - Qəbələ Macərası",
            price: 30,
            image: "https://avatars.mds.yandex.net/i?id=0d741b103a059abf37de67f35be1f5d157b13e18-5233500-images-thumbs&n=13",
            meta: "4 Gün, Lənkəran"
        },
        {
            id: 2,
            title: "Cəlilabad - Şəki Macərası",
            price: 35,
            image: "https://avatars.mds.yandex.net/i?id=d75f62e7a067fab96faa6e82a64a4f0d2f63f234-3919804-images-thumbs&n=13",
            meta: "8 Gün, Cəlilabad"
        },
        {
            id: 3,
            title: "Masallı - Gəncə Macərası",
            price: 38,
            image: "https://avatars.mds.yandex.net/i?id=bafb48cc1b750289e5ecdfe0c31fc1b388cad168-10871820-images-thumbs&n=13",
            meta: "10 Gün, Masallı"
        }
        // Digər turlar əlavə oluna bilər
    ];

    function renderBasket() {
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        const basketItemsDiv = document.querySelector('.basket-items');
        basketItemsDiv.innerHTML = "";

        if (basket.length === 0) {
            basketItemsDiv.innerHTML = `<div class="basket-empty">
                <div class="basket-empty-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3>Səbətiniz boşdur</h3>
                <p>Bəyəndiyiniz turları səbətə əlavə edin</p>
                <a href="index.html#packages" class="btn btn-primary">
                    <i class="fas fa-suitcase"></i> Turlara bax
                </a>
            </div>`;
            updateBasketSummary();
            return;
        }

        basket.forEach(item => {
            const tour = tours.find(t => t.id === item.id);
            if (tour) {
                basketItemsDiv.innerHTML += `
                <div class="basket-item" data-id="${tour.id}">
                    <img src="${tour.image}" alt="${tour.title}" class="basket-item-image">
                    <div class="basket-item-content">
                        <button class="remove-basket" title="Sil">
                            <i class="fas fa-times"></i>
                        </button>
                        <h3 class="basket-item-title">${tour.title}</h3>
                        <div class="basket-item-meta">
                            <span>${tour.meta}</span>
                        </div>
                        <div class="basket-item-price">${tour.price} AZN</div>
                        <div class="quantity-selector">
                            <button class="quantity-btn decrease"><i class="fas fa-minus"></i></button>
                            <input type="number" class="quantity-input" value="${item.count}" min="1">
                            <button class="quantity-btn increase"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                `;
            }
        });

        addBasketEvents();
        updateBasketSummary();
    }

    function addBasketEvents() {
        // Sil düyməsi
        document.querySelectorAll('.remove-basket').forEach(button => {
            button.addEventListener('click', function() {
                const itemDiv = this.closest('.basket-item');
                const id = Number(itemDiv.getAttribute('data-id'));
                let basket = JSON.parse(localStorage.getItem('basket')) || [];
                basket = basket.filter(item => item.id !== id);
                localStorage.setItem('basket', JSON.stringify(basket));
                renderBasket();
            });
        });

        // Miqdar dəyişdirilməsi
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const itemDiv = this.closest('.basket-item');
                const id = Number(itemDiv.getAttribute('data-id'));
                let basket = JSON.parse(localStorage.getItem('basket')) || [];
                const item = basket.find(i => i.id === id);
                if (!item) return;
                if (this.classList.contains('decrease') && item.count > 1) {
                    item.count -= 1;
                } else if (this.classList.contains('increase')) {
                    item.count += 1;
                }
                localStorage.setItem('basket', JSON.stringify(basket));
                renderBasket();
            });
        });

        // Input dəyəri dəyişdikdə
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', function() {
                const itemDiv = this.closest('.basket-item');
                const id = Number(itemDiv.getAttribute('data-id'));
                let basket = JSON.parse(localStorage.getItem('basket')) || [];
                const item = basket.find(i => i.id === id);
                let val = parseInt(this.value);
                if (isNaN(val) || val < 1) val = 1;
                item.count = val;
                localStorage.setItem('basket', JSON.stringify(basket));
                renderBasket();
            });
        });
    }

    // Kupon tətbiq etmə
    document.querySelector('.coupon-btn').addEventListener('click', function() {
        const couponCode = document.querySelector('.coupon-input').value;
        let discount = 0;
        if (couponCode === "YAY2025") {
            discount = 10;
            alert(`"${couponCode}" kupon kodu tətbiq edildi! 10 AZN endirim alındı.`);
        } else if (couponCode) {
            discount = 5;
            alert(`"${couponCode}" kupon kodu tətbiq edildi! 5 AZN endirim alındı.`);
        }
        updateBasketSummary(discount);
    });

    function updateBasketSummary(discount = 5) {
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        let totalItems = 0;
        let subtotal = 0;
        const toursMap = {};
        tours.forEach(t => toursMap[t.id] = t);

        basket.forEach(item => {
            const tour = toursMap[item.id];
            if (tour) {
                totalItems += item.count;
                subtotal += tour.price * item.count;
            }
        });

        // Endirim hesablaması (default 5 AZN)
        const total = subtotal - discount;

        // Xülasəni yenilə
        document.querySelector('.summary-item:nth-child(1) span:last-child').textContent = subtotal.toFixed(2) + ' AZN';
        document.querySelector('.summary-item:nth-child(2) span:last-child').textContent = '-' + discount.toFixed(2) + ' AZN';
        document.querySelector('.summary-total span:last-child').textContent = total.toFixed(2) + ' AZN';
        document.querySelector('.summary-item:first-child span:first-child').textContent = totalItems + ' məhsul';

        // Əgər səbət boşdursa
        if (totalItems === 0) {
            document.querySelector('.basket-items').innerHTML = `
                <div class="basket-empty">
                    <div class="basket-empty-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <h3>Səbətiniz boşdur</h3>
                    <p>Bəyəndiyiniz turları səbətə əlavə edin</p>
                    <a href="index.html#packages" class="btn btn-primary">
                        <i class="fas fa-suitcase"></i> Turlara bax
                    </a>
                </div>
            `;
        }
    }

    renderBasket();
});