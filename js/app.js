document.addEventListener('DOMContentLoaded', function () {
    // Yükləmə ekranını gizlət
    document.addEventListener('DOMContentLoaded', function () {
        const loader = document.querySelector('.loader');
        if (loader) {
            setTimeout(function () {
                loader.style.opacity = '0';
                setTimeout(function () {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        }
    });
    

    // Particles.js konfiqurasiyası
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4361ee"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4361ee",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    let navLinks2 = document.querySelectorAll(".header .nav-links a");
    navLinks2.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.toggle('active');
            // this.classList.toggle('active');
        })
    })

    // Mobil naviqasiya
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Scroll zamanı header effekti
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Typing efekti
    const typed = new Typed('.typing-effect', {
        strings: ['Xəyal etdiyiniz səyahəti ^500 <span class="highlight">həqiqətə çevirin</span>',
            'Yeni məkanları ^500 <span class="highlight">kəşf edin</span>',
            'Unudulmaz ^500 <span class="highlight">təcrübələr yaşayın</span>'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: false
    });
    //auth kecid
    const authBtn = document.querySelector(".btn-profil");
    authBtn.addEventListener("click", () => {
        window.location = "./profile.html"
    })
    const authBtn2 = document.querySelector(".btn-register");
    authBtn2.addEventListener("click", () => {
        window.location = "./Auth.html"
    })
    // Tarix seçici
    const travelDates = document.getElementById('travelDates');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    flatpickr(travelDates, {
        mode: 'range',
        minDate: 'today',
        defaultDate: [today, tomorrow],
        locale: 'az',
        dateFormat: 'd.m.Y',
        onReady: function (selectedDates, dateStr, instance) {
            travelDates.value = dateStr;
        },
        onChange: function (selectedDates, dateStr, instance) {
            travelDates.value = dateStr;
        }
    });

    // Nəfər sayğacı
    const decreaseBtn = document.getElementById('decreasePeople');
    const increaseBtn = document.getElementById('increasePeople');
    const peopleCount = document.getElementById('peopleCount');

    decreaseBtn.addEventListener('click', function () {
        let count = parseInt(peopleCount.value);
        if (count > 1) {
            peopleCount.value = count - 1;
        }
    });

    increaseBtn.addEventListener('click', function () {
        let count = parseInt(peopleCount.value);
        if (count < 20) {
            peopleCount.value = count + 1;
        }
    });

    peopleCount.addEventListener('change', function () {
        let count = parseInt(this.value);
        if (isNaN(count) || count < 1) {
            this.value = 1;
        } else if (count > 20) {
            this.value = 20;
        }
    });

    // Tur slayderi üçün düzgün skript
    const toursSlider = document.querySelector('.tours-slider');
    const prevTourBtn = document.querySelector('.prev-tour');
    const nextTourBtn = document.querySelector('.next-tour');

    if (toursSlider) {
        let currentScroll = 0;
        const cardWidth = document.querySelector('.tour-card').offsetWidth + 20; // Kart eni + margin
        const maxScroll = toursSlider.scrollWidth - toursSlider.clientWidth;

        nextTourBtn.addEventListener('click', () => {

            currentScroll = Math.min(currentScroll + cardWidth * 3, maxScroll);
            toursSlider.scrollTo({
                left: currentScroll,
                behavior: 'smooth'
            });
        });

        prevTourBtn.addEventListener('click', () => {
            currentScroll = Math.max(currentScroll - cardWidth * 3, 0);
            toursSlider.scrollTo({
                left: currentScroll,
                behavior: 'smooth'
            });
        });
    }
    // AI Planlayıcı addımları
    // const steps = document.querySelectorAll('.step');
    // const stepPanes = document.querySelectorAll('.step-pane');
    // const preferenceCards = document.querySelectorAll('.preference-card');

    // steps.forEach(step => {
    //     step.addEventListener('click', function () {
    //         const stepNumber = this.dataset.step;

    //         // Aktiv addımı yenilə
    //         steps.forEach(s => s.classList.remove('active'));
    //         this.classList.add('active');

    //         // Proqress barı yenilə
    //         const progressFill = document.querySelector('.progress-fill');
    //         progressFill.style.width = `${(stepNumber - 1) * 33.33}%`;

    //         // Aktiv paneli yenilə
    //         stepPanes.forEach(pane => pane.classList.remove('active'));
    //         document.querySelector(`.step-pane[data-step="${stepNumber}"]`).classList.add('active');
    //     });
    // });

    // Üstünlük seçimləri
    // preferenceCards.forEach(card => {
    //     card.addEventListener('click', function () {
    //         preferenceCards.forEach(c => c.classList.remove('selected'));
    //         this.classList.add('selected');
    //     });
    // });


    // Chatbot
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessageBtn = document.getElementById('sendMessage');

    const botResponses = [
        "Sizə necə kömək edə bilərəm?",
        "Hansı istiqamətə səyahət etmək istəyirsiniz?",
        "Tarixləri dəqiqləşdirə bilərsinizmi?",
        "Başqa sualınız var?",
        "Səyahətiniz üçün xüsusi tələbləriniz varmı?"
    ];

    chatbotToggle.addEventListener('click', function () {
        chatbotContainer.classList.toggle('active');
        this.classList.toggle('hidden');
    });

    chatbotClose.addEventListener('click', function () {
        chatbotContainer.classList.remove('active');
        chatbotToggle.classList.remove('hidden');
    });

    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message');
        if (isUser) messageDiv.classList.add('user');
        else messageDiv.classList.add('bot');

        const messageContent = document.createElement('p');
        messageContent.textContent = text;

        messageDiv.appendChild(messageContent);
        chatbotMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse() {
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        return botResponses[randomIndex];
    }

    sendMessageBtn.addEventListener('click', function () {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatbotInput.value = '';

            // Fake typing indicator
            setTimeout(function () {
                addMessage(getBotResponse());
            }, 1000);
        }
    });

    chatbotInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessageBtn.click();
        }
    });

    // İlk mesaj
    setTimeout(function () {
        addMessage("Salam! Mən Turizy səyahət köməkçisiyəm. Sizə necə kömək edə bilərəm?");
    }, 1500);

    // Form göndərmə
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Burada form göndərmə məntiqi olacaq
            alert('Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlanılacaq.');
            this.reset();
        });
    }

    // Dil dəyişdiricisi
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function () {
            // Burada dil dəyişikliyi məntiqi olacaq
            alert(`Dil ${this.value} olaraq dəyişdirildi`);
        });
    }

    // PWA yükləmə
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    // Bildiriş icazəsi
    function requestNotificationPermission() {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            }
        });
    }

    // İstifadəçi girişi yoxlaması
    function checkAuth() {
        // Burada real auth yoxlaması olacaq
        return false;
    }

    // Admin kontrolları
    function initAdminControls() {
        if (checkAuth()) {
            document.querySelectorAll('.admin-control').forEach(el => {
                el.style.display = 'block';
            });
        }
    }

    // Səhifə yükləndikdə
    initAdminControls();
});

document.addEventListener('DOMContentLoaded', function () {
    // Tab dəyişdirmə funksionallığı
    const tabButtons = document.querySelectorAll('.tab-btn');
    const searchForms = {
        tours: document.getElementById('tours-form'),
        flights: document.getElementById('flights-form'),
        hotels: document.getElementById('hotels-form')
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Aktiv tabı dəyişdir
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Bütün formları gizlət
            Object.values(searchForms).forEach(form => form.classList.add('none2'));

            // Seçilmiş tabın formunu göstər
            const tabType = this.getAttribute('data-tab');
            searchForms[tabType].classList.remove('none2');
        });
    });

    // Sərnişin/Qonaq sayğacları
    function setupCounter(containerClass) {
        document.querySelectorAll(`.${containerClass} .plus`).forEach(btn => {
            btn.addEventListener('click', function () {
                const input = this.previousElementSibling;
                if (input.value < input.max) input.value = parseInt(input.value) + 1;
            });
        });

        document.querySelectorAll(`.${containerClass} .minus`).forEach(btn => {
            btn.addEventListener('click', function () {
                const input = this.nextElementSibling;
                if (input.value > input.min) input.value = parseInt(input.value) - 1;
            });
        });
    }

    setupCounter('passenger-controls');
    setupCounter('guest-controls');

    // Tarix seçiciləri
    flatpickr('.datepicker', {
        mode: 'range',
        minDate: 'today',
        locale: 'az',
        dateFormat: 'd.m.Y'
    });

    // Axtarış düyməsi funksionallığı
    document.querySelector('.btn-search').addEventListener('click', function () {
        const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
        let searchData = {};

        switch (activeTab) {
            case 'tours':
                searchData = {
                    from: document.getElementById('tour-from').value,
                    to: document.getElementById('tour-to').value,
                    dates: document.getElementById('tour-dates').value,
                    people: document.getElementById('tour-people').value
                };
                searchTours(searchData);
                break;

            case 'flights':
                const passengers = [];
                document.querySelectorAll('#flights-form .passenger-controls input').forEach(input => {
                    passengers.push(parseInt(input.value));
                });

                searchData = {
                    from: document.getElementById('flight-from').value,
                    to: document.getElementById('flight-to').value,
                    dates: document.getElementById('flight-dates').value,
                    passengers: passengers
                };
                searchFlights(searchData);
                break;

            case 'hotels':
                const guests = [];
                document.querySelectorAll('#hotels-form .guest-controls input').forEach(input => {
                    guests.push(parseInt(input.value));
                });

                searchData = {
                    location: document.getElementById('hotel-location').value,
                    dates: document.getElementById('hotel-dates').value,
                    rooms: guests[0],
                    adults: guests[1],
                    stars: document.getElementById('hotel-stars').value
                };
                searchHotels(searchData);
                break;
        }

        console.log('Axtarış məlumatları:', searchData);
    });

    // Axtarış funksiyaları (nümunə)
    function searchTours(data) {
        // API çağırışı və ya lokal məlumatların filtirlənməsi
        alert('Tur axtarışı: ' + JSON.stringify(data));
        // Nəticələri göstər
        showResults('tours', filterTours(data));
    }

    function searchFlights(data) {
        alert('Uçuş axtarışı: ' + JSON.stringify(data));
        showResults('flights', filterFlights(data));
    }

    function searchHotels(data) {
        alert('Otel axtarışı: ' + JSON.stringify(data));
        showResults('hotels', filterHotels(data));
    }

    // Filtirləmə funksiyaları (nümunə)
    function filterTours(data) {
        // Real tətbiqdə burada API çağırışı və ya lokal məlumatların filtirlənməsi olacaq
        return [];
    }

    function filterFlights(data) {
        return [];
    }

    function filterHotels(data) {
        return [];
    }

    // Nəticələrin göstərilməsi (nümunə)
    function showResults(type, results) {
        // Burada nəticələrin ekranda göstərilmə məntiqi olacaq
        console.log(`${type} nəticələri:`, results);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Planlayıcı dəyişənləri
    let selectedPackage = null;
    let selectedServices = [];
    let totalPrice = 0;

    // Addım dəyişdiriciləri
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const finishButton = document.querySelector('.finish-btn');
    const restartButton = document.querySelector('.restart-btn');
    const printButton = document.querySelector('.print-btn');
    const steps = document.querySelectorAll('.step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const finalMessage = document.getElementById('finalMessage');

    // Seçim elementləri
    const optionCards = document.querySelectorAll('.option-card');
    const departureAddress = document.getElementById('departureAddress');
    const returnAddress = document.getElementById('returnAddress');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const peopleCount2 = document.getElementById('peopleCount2');
    const decreasePeople = document.getElementById('decreasePeople2');
    const increasePeople = document.getElementById('increasePeople2');
    const serviceCheckboxes = document.querySelectorAll('.additional-options input[type="checkbox"]');

    // Xülasə elementləri
    const summaryType = document.getElementById('summary-type');
    const summaryDeparture = document.getElementById('summary-departure');
    const summaryReturn = document.getElementById('summary-return');
    const summaryDates = document.getElementById('summary-dates');
    const summaryPeople = document.getElementById('summary-people');
    const summaryServices = document.getElementById('summary-services');
    const totalPriceElement = document.getElementById('totalPrice');
    const pricePerPersonElement = document.getElementById('summary-price-per-person');
    const totalPriceBanner = document.getElementById('totalPriceBanner');
    const pricePerPersonBanner = document.getElementById('pricePerPerson');

    // Tarix seçiciləri üçün default dəyərlər
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    startDate.valueAsDate = today;
    endDate.valueAsDate = tomorrow;
    const guideCheckbox = document.getElementById('guide');
    const photographerCheckbox = document.getElementById('photographer');
    const hotelCheckbox=document.getElementById("hotel")
    const diningCheckbox=document.getElementById("dining");
    const diningSelection=document.getElementById("diningSelection")
    const guideSelection = document.getElementById('guideSelection');
    const hotelSelection=document.getElementById("hotelSelection")
    const photographerSelection = document.getElementById('photographerSelection');
    const guideCards = document.querySelectorAll('.guide-card');
    const photographerCards = document.querySelectorAll('.photographer-card');
    const diningCards= document.querySelectorAll(".dining-card")
    const hotelCards=document.querySelectorAll(".hotel-card")

    let selectedGuide = null;
    let selectedPhotographer = null;

    document.addEventListener('DOMContentLoaded', function () {
        const serviceCheckboxes = [
            { id: 'guide', sectionId: 'guideSelection' },
            { id: 'nutrition', sectionId: 'nutritionSelection' },
            { id: 'hotel', sectionId: 'hotelSelection' },
            { id:'dining', sectionId:'diningSelection'},
              { id:'hotel', sectionId:'hotelSelection'}
        ];

        serviceCheckboxes.forEach(service => {
            const checkbox = document.getElementById(service.id);
            const section = document.getElementById(service.sectionId);

            if (checkbox && section) {
                // İlk yüklənmədə checkbox vəziyyətinə görə göstər/gizlət
                section.style.display = checkbox.checked ? 'block' : 'none';

                // Dəyişəndə reaksiya ver
                checkbox.addEventListener('change', function () {
                    section.style.display = this.checked ? 'block' : 'none';
                });
            }
        });
    });

    guideCheckbox.addEventListener('change', function () {
        if (this.checked) {
            guideSelection.style.display = 'block';
        } else {
            guideSelection.style.display = 'none';
            selectedGuide = null;
            document.getElementById('summary-guide').textContent = '-';
        }
        updatePrice();
    });
     hotelCheckbox.addEventListener('change', function () {
        if (this.checked) {
            hotelSelection.style.display = 'block';
        } else {
            hotelSelection.style.display = 'none';
            selectedHotel = null;
            document.getElementById('summary-hotel').textContent = '-';
        }
        updatePrice();
    });

    photographerCheckbox.addEventListener('change', function () {
        if (this.checked) {
            photographerSelection.style.display = 'block';
        } else {
            photographerSelection.style.display = 'none';
            selectedPhotographer = null;
            document.getElementById('summary-photographer').textContent = '-';
        }
        updatePrice();
    });
   diningCheckbox.addEventListener('change', function () {
        if (this.checked) {
            diningSelection.style.display = 'block';
        } else {
            diningSelection.style.display = 'none';
            selectedDining = null;
            document.getElementById('summary-dining').textContent = '-';
        }
        updatePrice();
    });
    guideCards.forEach(card => {
        card.addEventListener('click', function () {
            guideCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedGuide = {
                name: this.querySelector('.guide-name').textContent,
                price: parseInt(this.dataset.price)
            };
            document.getElementById('summary-guide').textContent = selectedGuide.name;
            updatePrice();
        });
    });
    hotelCards.forEach(card => {
        card.addEventListener('click', function () {
            hotelCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedHotel = {
                name: this.querySelector('.hotel-name').textContent,
                price: parseInt(this.dataset.price)
            };
            document.getElementById('summary-hotel').textContent = selectedHotel.name;
            updatePrice();
        });
    });
    photographerCards.forEach(card => {
        card.addEventListener('click', function () {
            photographerCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedPhotographer = {
                name: this.querySelector('.photographer-name').textContent,
                price: parseInt(this.dataset.price)
            };
            document.getElementById('summary-photographer').textContent = selectedPhotographer.name;
            updatePrice();
        });
    });
diningCards.forEach(card => {
        card.addEventListener('click', function () {
            diningCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedDining = {
                name: this.querySelector('.dining-name').textContent,
                price: parseInt(this.dataset.price)
            };
            document.getElementById('summary-dining').textContent = selectedDining.name;
            updatePrice();
        });
    });

    

    // Paket seçimi
    optionCards.forEach(card => {
        card.addEventListener('click', function () {
            optionCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');

            selectedPackage = {
                type: this.querySelector('.option-title').textContent,
                value: this.dataset.value,
                price: parseInt(this.dataset.price)
            };

            summaryType.textContent = selectedPackage.type;
            updatePrice();
        });
    });

    // Nəfər sayğacı
    decreasePeople.addEventListener('click', function () {
        console.log("Ff")
        let count = parseInt(peopleCount2.value);
        if (count > 1) {
            peopleCount2.value = count - 1;
            updatePeopleSummary();
            updatePrice();
        }
    });

    increasePeople.addEventListener('click', function () {
        let count = parseInt(peopleCount2.value);
        if (count < 100) {
            peopleCount2.value = count + 1;
            updatePeopleSummary();
            updatePrice();
        }
    });

    peopleCount2.addEventListener('change', function () {
        let count = parseInt(this.value);
        if (isNaN(count) || count < 1) {
            this.value = 1;
        } else if (count > 100) {
            this.value = 100;
        }
        updatePeopleSummary();
        updatePrice();
    });

    function updatePeopleSummary() {
        summaryPeople.textContent = peopleCount2.value;
    }

    // Xidmət seçimləri
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                selectedServices.push({
                    name: this.nextElementSibling.querySelector('div').textContent,
                    price: parseInt(this.value)
                });
            } else {
                selectedServices = selectedServices.filter(s => s.name !== this.nextElementSibling.querySelector('div').textContent);
            }

            updateServicesSummary();
            updatePrice();
        });
    });

    function updateServicesSummary() {
        const servicesText = selectedServices.length > 0
            ? selectedServices.map(s => s.name).join(', ')
            : '-';

        summaryServices.textContent = servicesText;
    }
    document.addEventListener('DOMContentLoaded', function () {
        const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
        const summaryServices = document.getElementById('summaryServices');
        const totalPriceElement = document.getElementById('totalPrice');
        let selectedServices = [];

        serviceCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const serviceName = this.closest('.service-item').querySelector('.service-name').textContent;
                const servicePrice = parseInt(this.value);

                if (this.checked) {
                    selectedServices.push({
                        name: serviceName,
                        price: servicePrice
                    });
                } else {
                    selectedServices = selectedServices.filter(s => s.name !== serviceName);
                }

                updateServicesSummary();
                updateTotalPrice();
            });
        });

        function updateServicesSummary() {
            summaryServices.textContent = selectedServices.length > 0
                ? selectedServices.map(s => s.name).join(', ')
                : '-';
        }

        function updateTotalPrice() {
            const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
            totalPriceElement.textContent = total;
        }
    });

    // Qiymət hesablaması
    function updatePrice() {
        if (!selectedPackage) return;

        let basePrice = selectedPackage.price;
        let servicesPrice = 0;

        selectedServices.forEach(service => {
            servicesPrice += service.price;
        });

        const people = parseInt(peopleCount2.value) || 1;
        totalPrice = (basePrice + servicesPrice) * people;
        const perPersonPrice = Math.round(totalPrice / people);

        // Xülasəni yenilə
        totalPriceElement.textContent = totalPrice;
        pricePerPersonElement.textContent = perPersonPrice;
        totalPriceBanner.textContent = totalPrice;
        pricePerPersonBanner.textContent = perPersonPrice;
    }

    // Addım naviqasiyası
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentStep = this.closest('.step');
            const nextStepId = this.dataset.next;
            const nextStep = document.getElementById(nextStepId);

            // Validasiya
            if (nextStepId === 'step3' && !selectedPackage) {
                alert('Zəhmət olmasa marşrut növünü seçin');
                return;
            }

            if (nextStepId === 'step2' && (!departureAddress.value || !returnAddress.value)) {
                alert('Zəhmət olmasa gediş və qayıtma ünvanlarını daxil edin');
                return;
            }

            if (nextStepId === 'step4' && (!startDate.value || !endDate.value)) {
                alert('Zəhmət olmasa tarixləri daxil edin');
                return;
            }

            // Ünvan xülasəsini yenilə
            if (nextStepId === 'step2') {
                summaryDeparture.textContent = departureAddress.value || '-';
                summaryReturn.textContent = returnAddress.value || '-';
            }

            // Tarix xülasəsini yenilə
            if (nextStepId === 'step4') {
                const start = new Date(startDate.value).toLocaleDateString('az-AZ');
                const end = new Date(endDate.value).toLocaleDateString('az-AZ');
                summaryDates.textContent = `${start} - ${end}`;
            }

            // Addımı dəyiş
            currentStep.classList.remove('active');
            nextStep.classList.add('active');

            // Proqress barı yenilə
            updateProgressBar(nextStepId);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentStep = this.closest('.step');
            const prevStepId = this.dataset.prev;
            const prevStep = document.getElementById(prevStepId);

            currentStep.classList.remove('active');
            prevStep.classList.add('active');

            // Proqress barı yenilə
            updateProgressBar(prevStepId);
        });
    });

    // Proqress bar yeniləmə
    function updateProgressBar(currentStepId) {
        let activeIndex = 0;

        switch (currentStepId) {
            case 'step1': activeIndex = 0; break;
            case 'step2': activeIndex = 1; break;
            case 'step3': activeIndex = 2; break;
            case 'step4': activeIndex = 3; break;
            case 'step5': activeIndex = 4; break;
        }

        progressSteps.forEach((step, index) => {
            const number = step.querySelector('.step-number');
            const label = step.querySelector('.step-label');

            if (index <= activeIndex) {
                number.classList.add('active');
                label.classList.add('active');
            } else {
                number.classList.remove('active');
                label.classList.remove('active');
            }
        });
    }

    // Sifarişi tamamlama
    finishButton.addEventListener('click', function () {
        const currentStep = this.closest('.step');
        currentStep.classList.remove('active');
        finalMessage.style.display = 'block';

        // Bütün addımları tamamlandı kimi qeyd et
        progressSteps.forEach(step => {
            step.querySelector('.step-number').classList.add('active');
            step.querySelector('.step-label').classList.add('active');
        });
    });

    // Yeni sifariş
    restartButton.addEventListener('click', function () {
        // Bütün seçimləri sıfırla
        optionCards.forEach(card => card.classList.remove('selected'));
        selectedPackage = null;

        departureAddress.value = '';
        returnAddress.value = '';

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        startDate.valueAsDate = today;
        endDate.valueAsDate = tomorrow;

        peopleCount2.value = '1';

        serviceCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        selectedServices = [];

        // Xülasəni sıfırla
        summaryType.textContent = '-';
        summaryDeparture.textContent = '-';
        summaryReturn.textContent = '-';
        summaryDates.textContent = '-';
        summaryPeople.textContent = '-';
        summaryServices.textContent = '-';
        totalPriceElement.textContent = '0';
        pricePerPersonElement.textContent = '0';
        totalPriceBanner.textContent = '0';
        pricePerPersonBanner.textContent = '0';

        // Final mesajını gizlət
        finalMessage.style.display = 'none';

        // İlk addıma qayıt
        steps.forEach(step => step.classList.remove('active'));
        document.getElementById('step1').classList.add('active');

        // Proqress barı sıfırla
        updateProgressBar('step1');
    });

    // Çap et funksiyası
    document.addEventListener('DOMContentLoaded', function () {
        const printButton = document.getElementById('printButton');
        if (printButton) {
            printButton.addEventListener('click', function () {
                window.print();
            });
        }
    });
    
    // İlk addımı aktiv et
    updateProgressBar('step1');
});
