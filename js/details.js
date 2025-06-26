const urlParams = new URLSearchParams(window.location.search);
const tourId = urlParams.get("id");

// Tur məlumatları (əsasında API-dən gələ bilər)
const tours = {
  1: {
    title: "Lənkəran - Qəbələ Macərası",
    image:
      "https://avatars.mds.yandex.net/i?id=0d741b103a059abf37de67f35be1f5d157b13e18-5233500-images-thumbs&n=13",
    days: "4 Gün",
    location: "Lənkəran",
    price: "30 AZN-dən",
    description:
      "Qəbələ təbiətinin gözəllikləri ilə dolu unudulmaz bir tur sizi gözləyir. Bu turda Qəbələnin ən məşhur görməli yerlərini ziyarət edəcəksiniz.",
  },
  2: {
    title: "Cəlilabad - Şəki Macərası",
    image:
      "https://avatars.mds.yandex.net/i?id=d75f62e7a067fab96faa6e82a64a4f0d2f63f234-3919804-images-thumbs&n=13",
    days: "8 Gün",
    location: "Cəlilabad",
    price: "35 AZN-dən",
    description:
      "Şəkinin tarixi abidələri və füsunkar təbiəti ilə dolu unudulmaz bir tur sizi gözləyir. Şəki xan sarayı, Karvansaray və ənənəvi şirniyyatları ilə tanış olacaqsınız.",
  },
  3: {
    title: "Masallı - Gəncə Macərası",
    image:
      "https://avatars.mds.yandex.net/i?id=bafb48cc1b750289e5ecdfe0c31fc1b388cad168-10871820-images-thumbs&n=13",
    days: "10 Gün",
    location: "Masallı",
    price: "38 AZN-dən",
    description:
      "Gəncənin zəngin mədəniyyəti ilə dolu unudulmaz bir tur sizi gözləyir. Gəncə şəhərinin tarixi abidələrini və təbiət gözəlliklərini kəşf edəcəksiniz.",
  },
  4: {
    title: "Yardlmlı - Quba Macərası",
    image:
      "https://avatars.mds.yandex.net/i?id=e973b30742ebac7e0d790ee3be4286b3a1ad948e-4590869-images-thumbs&n=13",
    days: "10 Gün",
    location: "Yardımlı",
    price: "38 AZN-dən",
    description:
      "Yardımlının vəhşi təbiəti və dağların qoynundakı sakitliyi ilə dolu unudulmaz bir səyahət sizi gözləyir. Bu bölgədəki meşələri, şəlalələri və təmiz dağ havasını kəşf edərək ruhunuzu dincəldəcəksiniz.",
  },
  5: {
    title: "Lənkəran - Şəki Macərası",
    image:
      "./assets/images/lankon.jpg",
    days: "10 Gün",
    location: "Lənkəran",
    price: "38 AZN-dən",
    description:
      "Lənkəranın dənizlə dağların qovuşduğu yaşıl təbiəti, Hirkan meşələri və cənubun ləzzətli mətbəxi ilə dolu sakit və unudulmaz bir səyahət sizi gözləyir.",
  }
};

// Seçilmiş turun məlumatlarını göstər
if (tourId && tours[tourId]) {
  const tour = tours[tourId];
  document.getElementById("detailTitle").textContent = tour.title;
  document.getElementById("detailDays").textContent = tour.days;
  document.getElementById("detailLocation").textContent = tour.location;
  document.getElementById("detailDescription").textContent = tour.description;
  document.getElementById("mainImage").src = tour.image;
}

// Şəkil dəyişdirmə funksiyası
function changeMainImage(thumb) {
  // Bütün thumbnail-lərdən active klasını sil
  document.querySelectorAll(".thumbnail").forEach((t) => {
    t.classList.remove("active");
  });

  // Kliklənən thumbnail-ə active klasını əlavə et
  thumb.classList.add("active");

  // Əsas şəkli dəyiş
  document.getElementById("mainImage").src = thumb.src;
}

// İştirakçı sayını idarə etmə
document
  .getElementById("increasePeople")
  .addEventListener("click", function () {
    const input = document.getElementById("participants");
    if (parseInt(input.value) < 10) {
      input.value = parseInt(input.value) + 1;
    }
  });

document
  .getElementById("decreasePeople")
  .addEventListener("click", function () {
    const input = document.getElementById("participants");
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  });

// Səbətə əlavə et düyməsi üçün (id="addToBasket" olmalıdır)
document.getElementById("addToBasket").addEventListener("click", function () {
  if (!tourId || !tours[tourId]) return;

  const participants = parseInt(document.getElementById("participants").value) || 1;

  // Səbəti oxu və ya boş massiv yarat
  let basket = JSON.parse(localStorage.getItem("basket")) || [];

  // Əgər bu tur artıq səbətdədirsə, miqdarı artır
  const existing = basket.find(item => item.id == Number(tourId));
  if (existing) {
    existing.count += participants;
  } else {
    basket.push({ id: Number(tourId), count: participants });
  }

  localStorage.setItem("basket", JSON.stringify(basket));
  alert("Tur səbətə əlavə olundu!");
});