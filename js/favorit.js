
        // Wishlist funksiyaları
        document.querySelectorAll('.remove-wishlist').forEach(button => {
            button.addEventListener('click', function() {
                const item = this.closest('.wishlist-item');
                item.style.transform = 'scale(0.9)';
                item.style.opacity = '0';
                
                setTimeout(() => {
                    item.remove();
                    updateWishlistCount();
                }, 300);
            });
        });
        
        function updateWishlistCount() {
            const count = document.querySelectorAll('.wishlist-item').length;
            document.querySelector('.wishlist-count').textContent = count + ' məhsul';
            
            if (count === 0) {
                // Wishlist boşdursa boş səhifəni göstər
                document.querySelector('.wishlist-items').innerHTML = `
                    <div class="wishlist-empty">
                        <div class="wishlist-empty-icon">
                            <i class="far fa-heart"></i>
                        </div>
                        <h3>İstək siyahınız boşdur</h3>
                        <p>Bəyəndiyiniz turları istək siyahısına əlavə edin</p>
                        <a href="index.html#packages" class="btn btn-primary" style="margin-top: 20px;">
                            <i class="fas fa-suitcase"></i> Turlara bax
                        </a>
                    </div>
                `;
            }
        }
        
        // Səbətə əlavə et funksiyası
        document.querySelectorAll('.wishlist-item-actions .btn').forEach(button => {
            button.addEventListener('click', function() {
                const item = this.closest('.wishlist-item');
                const title = item.querySelector('.wishlist-item-title').textContent;
                const price = item.querySelector('.wishlist-item-price').textContent;
                const image = item.querySelector('.wishlist-item-image').src;
                
                alert(`"${title}" səbətə əlavə edildi! Qiymət: ${price}`);
                
                // Burada səbətə əlavə etmək üçün əlavə kodlar yazıla bilər
                // Məsələn, LocalStorage istifadəsi və ya API çağırışı
            });
        });
// Navbarın scroll davranışını sıfırlamaq üçün
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.wishlist-header');
    if (header) {
        // Wishlist səhifəsində header hər zaman ağ rəngdə olsun
        header.classList.add('scrolled');
        
        // Əgər scroll funksiyası varsa, onu dayandır
        window.onscroll = null;
    }
    
    // Hamburger menyu üçün
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});