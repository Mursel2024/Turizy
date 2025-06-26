// Bölmələr arasında keçid
function showSection(sectionId) {
  // Bütün bölmələri gizlə
  document.querySelectorAll(".profile-section").forEach((section) => {
    section.classList.remove("active");
  });

  // Seçilmiş bölməni göstər
  document.getElementById(sectionId).classList.add("active");

  // Aktiv tabı yenilə
  document.querySelectorAll(".profile-nav a").forEach((tab) => {
    tab.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}

// AI turlar bölməsi üçün funksiyalar
function showAIPlanner() {
  alert("AI Tur Planlayıcı səhifəsinə yönləndirilirsiniz...");
  window.location = "./index.html#planner";
}

function backToAIList() {
  document.getElementById("tour-details").style.display = "none";
  document.getElementById("ai-tours").style.display = "block";
}

function editTour() {
  alert("Tur redaktə rejiminə keçilir...");
}

function shareTour() {
  alert("Tur paylaşım seçimləri göstərilir...");
}

// Səhifə yüklənəndə AI turlarını yüklə
document.addEventListener("DOMContentLoaded", function () {
  // Burada real tətbiqdə API çağırışı olacaq
  setTimeout(loadAITours, 1000);
});

function loadAITours() {
  const aiToursContainer = document.getElementById("aiToursContainer");

  // Demo məlumatlar
  const tours = [
    {
      id: 1,
      title: "Qəbələ Macəra Turu",
      image:
        "https://avatars.mds.yandex.net/i?id=2497881efa60a5a3b0ee9c8dd1a7553268de719d-4113334-images-thumbs&n=13",
      date: "15-17 İyun 2023",
      people: "2 nəfər",
      price: "320 AZN",
    },
    {
      id: 2,
      title: "Şəki Mədəniyyət Turu",
      image:
        "https://avatars.mds.yandex.net/i?id=fd383f3ac5047b08af479e4af6ffb0ef0717a539-9834975-images-thumbs&n=13",
      date: "22-24 İyul 2023",
      people: "4 nəfər",
      price: "450 AZN",
    },
  ];

  if (tours.length > 0) {
    aiToursContainer.innerHTML = "";

    tours.forEach((tour) => {
      const tourCard = document.createElement("div");
      tourCard.className = "tour-card";
      tourCard.innerHTML = `
                <div class="tour-card-image">
                    <img src="${tour.image}" alt="${tour.title}">
                    <div class="tour-card-badge">
                        <i class="fas fa-robot"></i> AI
                    </div>
                </div>
                <div class="tour-card-content">
                    <div class="tour-card-title">${tour.title}</div>
                    <div class="tour-card-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${tour.date}</span>
                        <span><i class="fas fa-users"></i> ${tour.people}</span>
                    </div>
                    <div class="tour-card-meta">
                        <span><i class="fas fa-tag"></i> ${tour.price}</span>
                    </div>
                    <div class="tour-card-actions">
                        <div class="tour-card-btn view-btn" onclick="viewTourDetails(${tour.id})">
                            <i class="fas fa-eye"></i> Bax
                        </div>
                    </div>
                </div>
            `;

      aiToursContainer.appendChild(tourCard);
    });
  }
}

function viewTourDetails(tourId) {
  // Burada real tətbiqdə API çağırışı olacaq
  const tourDetails = {
    id: tourId,
    title: "Qəbələ Macəra Turu",
    date: "15-17 İyun 2023",
    people: "2 nəfər",
    price: "320 AZN",
  };

  document.querySelector("#tourTitle").textContent = tourDetails.title;
  document.querySelector("#tourDates").textContent = tourDetails.date;
  document.querySelector("#tourPeople").textContent = tourDetails.people;
  document.querySelector("#tourPrice").textContent = tourDetails.price;

  document.querySelector("#ai-tours").style.display = "none";
  document.querySelector("#tour-details").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  // Yeni kart əlavə et
  const addCardBtn = document.querySelector(".payment-methods .btn-primary");
  const paymentMethods = document.querySelector(".payment-methods");

  addCardBtn.addEventListener("click", function () {
    // Sadə input ilə kart nömrəsi soruşulur
    const cardNumber = prompt("Yeni kart nömrəsini daxil edin (son 4 rəqəm):");
    if (!cardNumber || cardNumber.length < 4) return;

    // Kart tipi seçimi (sadə)
    const cardType = prompt("Kart tipi (VISA/Mastercard):", "VISA");

    // Yeni kart elementi yaradılır
    const newCard = document.createElement("div");
    newCard.className = "payment-method";
    newCard.innerHTML = `
      <i class="fas fa-credit-card"></i>
      <span>•••• •••• •••• ${cardNumber.slice(-4)} (${cardType})</span>
      <button class="btn btn-outline"><i class="fas fa-trash"></i> Sil</button>
    `;
    // "Yeni kart əlavə et" düyməsindən əvvəl əlavə et
    paymentMethods.insertBefore(newCard, addCardBtn);

    // Sil düyməsinə event əlavə et
    newCard
      .querySelector(".btn-outline")
      .addEventListener("click", function () {
        newCard.remove();
      });
  });

  // Mövcud sil düymələrinə event əlavə et
  paymentMethods
    .querySelectorAll(".payment-method .btn-outline")
    .forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.closest(".payment-method").remove();
      });
    });
});


