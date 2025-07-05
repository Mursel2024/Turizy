document.querySelectorAll('.tour-footer .btn-primary').forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        // Turun id-sini tap (index.html-dəki sıraya görə)
        const tourId = idx + 1;
        // Səbətə əlavə et (localStorage)
        let basket = JSON.parse(localStorage.getItem('basket')) || [];
        // Əgər artıq səbətdə varsa, miqdarı artır
        const existing = basket.find(item => item.id === tourId);
        if (existing) {
            existing.count += 1;
        } else {
            basket.push({ id: tourId, count: 1 });
        }
        localStorage.setItem('basket', JSON.stringify(basket));
        alert("Tur səbətə əlavə olundu!");
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Bütün sərnişin tip bloklarını seçin
    const passengerTypes = document.querySelectorAll('.passenger-type');

    passengerTypes.forEach(typeBlock => {
        // Hər bir sərnişin tip blokunun daxilindəki elementləri seçin
        const passengerInput = typeBlock.querySelector('input[type="number"]');
        const passengerMinusBtn = typeBlock.querySelector('.passenger-minus');
        const passengerPlusBtn = typeBlock.querySelector('.passenger-plus');

        if (passengerInput && passengerMinusBtn && passengerPlusBtn) {
            let passengerCount = parseInt(passengerInput.value);
            const minCount = parseInt(passengerInput.min);
            const maxCount = parseInt(passengerInput.max);

            passengerPlusBtn.addEventListener('click', () => {
                if (passengerCount < maxCount) {
                    passengerCount++;
                    passengerInput.value = passengerCount;
                }
            });

            passengerMinusBtn.addEventListener('click', () => {
                if (passengerCount > minCount) {
                    passengerCount--;
                    passengerInput.value = passengerCount;
                }
            });
        } else {
            console.error("Sərnişin sayğacı elementlərindən biri tapılmadı.");
        }
    });
});