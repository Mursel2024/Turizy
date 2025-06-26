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