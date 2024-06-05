document.addEventListener("DOMContentLoaded", function() {
    const timelineData = [
        { date: "16-09-2022", title: "İlk Tanışma", description: "Tanıştığımız gün.", icon: "🌟", image: "https://via.placeholder.com/300" },
        { date: "04-10-2022", title: "İlk Fotoğraf", description: "İlk fotoğrafımızı çekindik.", icon: "📸", image: "assets/images/ilk_fotograf.jpg" },
        { date: "04-10-2022", title: "İlk Yüz Yüze", description: "İlk defa yüz yüze geldik.", icon: "👫", image: "https://via.placeholder.com/300" },
        { date: "24-10-2022", title: "İlk Sarılma", description: "İlk defa sarıldık.", icon: "🤗", image: "assets/images/ilk_sarilma.jpg" },
        { date: "24-10-2022", title: "İlk Jelibon", description: "İlk defa jelibon yedik.", icon: "🍬", image: "assets/images/ilk_jelibon.jpg" },
        { date: "26-10-2022", title: "İlk El Ele Tutuşma", description: "İlk defa el ele tutuştuk.", icon: "🤝", image: "https://via.placeholder.com/300" },
        { date: "28-10-2022", title: "Sevgili Olmak", description: "Resmen sevgili olduk.", icon: "💑", image: "https://via.placeholder.com/300" },
        { date: "28-10-2022", title: "İlk Sevgiliyken Fotoğraf", description: "Sevgiliyken çektiğimiz ilk fotoğraf.", icon: "📸", image: "https://via.placeholder.com/300" },
        { date: "30-10-2022", title: "Çıkma Teklifi", description: "Çıkma teklifi ettim.", icon: "💍", image: "https://via.placeholder.com/300" },
        { date: "01-11-2022", title: "İlk Şarkı", description: "İlk şarkımızı seçtik.", icon: "🎵", image: "https://via.placeholder.com/300" },
        { date: "04-11-2022", title: "İlk Birbirimize 'Seni Seviyorum' Dememiz", description: "İlk kez birbirimize 'Seni Seviyorum' dedik.", icon: "❤️", image: "https://via.placeholder.com/300" },
        { date: "05-11-2022", title: "İlk Beraber Ağlamamız", description: "İlk defa birlikte ağladık.", icon: "😭", image: "https://via.placeholder.com/300" },
        { date: "09-11-2022", title: "İlk Kavga", description: "İlk kavgamızı yaptık.", icon: "⚡", image: "assets/images/ilk_kavga.jpg" },
        { date: "28-11-2022", title: "İlk Couple Kıyafet", description: "İlk defa couple kıyafet giydik.", icon: "👕", image: "assets/images/ilk_kiyafet.jpg" },
        { date: "03-12-2022", title: "İlk Nesil'e Oje Sürmem", description: "Nesil'e ilk defa oje sürdüm.", icon: "💅", image: "https://via.placeholder.com/300" },
        { date: "01-01-2023", title: "İlk Couple Bileklik", description: "İlk defa couple bileklik taktık.", icon: "🎁", image: "assets/images/ilk_bileklik.jpg" },
        { date: "06-01-2023", title: "İlk Hediye", description: "Nesil'e ilk defa hediye aldım.", icon: "🎁", image: "assets/images/ilk_hediye.jpg" },
        { date: "21-01-2023", title: "İlk Yağmurda Islanma", description: "İlk defa yağmurda ıslandık.", icon: "🌧️", image: "assets/images/ilk_yagmur.jpg" },
        { date: "22-01-2023", title: "Şanslı'nın Bende Kaldığı İlk Gün", description: "Şanslı'nın ilk defa bende kaldığı gün.", icon: "🐱", image: "assets/images/ilk_sanslibendekalisi.jpg" },
        { date: "14-02-2023", title: "İlk Aynı Kitabı Beraber Okumak", description: "İlk defa aynı kitabı beraber okuduk.", icon: "📖", image: "https://via.placeholder.com/300" },
        { date: "08-03-2023", title: "İlk Kolye", description: "Nesil'e ilk kolye aldığım gün.", icon: "📿", image: "assets/images/ilk_kolye.jpg" },
        { date: "27-03-2023", title: "İlk Alışveriş", description: "İlk defa beraber alışveriş yaptık.", icon: "🛍️", image: "assets/images/ilk_alisveris.jpg" },
        { date: "17-04-2023", title: "Annem ile Nesil'in Tanışması", description: "Annem ile Nesil'in ilk tanışması.", icon: "👩‍👧", image: "https://via.placeholder.com/300" },
        { date: "24-04-2023", title: "Benim, Nesil'in Annesiyle Tanışmam", description: "Benim, Nesil'in annesiyle ilk tanışmam.", icon: "👨‍👩‍👧", image: "https://via.placeholder.com/300" },
        { date: "24-06-2023", title: "İlk Yemek", description: "İlk defa beraber yemek yedik.", icon: "🍽️", image: "assets/images/ilk_yemek.jpg" },
        { date: "03-07-2023", title: "İlk Festival", description: "İlk defa bir festivale katıldık.", icon: "🎉", image: "https://via.placeholder.com/300" },
        { date: "06-07-2023", title: "İlk Konser", description: "İlk defa bir konsere gittik.", icon: "🎤", image: "assets/images/ilk_konser.jpg" },
        { date: "21-07-2023", title: "İlk Gratis Ziyareti", description: "İlk defa birlikte Gratise gittik.", icon: "🛍️", image: "assets/images/ilk_gratisziyaret.jpg" },
        { date: "30-08-2023", title: "İlk Çizgi Film", description: "İlk defa birlikte çizgi film izledik.", icon: "🎬", image: "https://via.placeholder.com/300" },
        { date: "02-10-2023", title: "İlk Kiraz Getirişim", description: "Nesil'e ilk defa kiraz getirdim.", icon: "🍒", image: "https://via.placeholder.com/300" },
        { date: "22-10-2023", title: "İlk Çiçek", description: "Nesil'e ilk çiçek aldığım gün.", icon: "🌸", image: "assets/images/ilk_cicek.jpg" },
        { date: "21-11-2023", title: "İlk Couple Ayakkabı", description: "İlk defa couple ayakkabı giydik.", icon: "👟", image: "assets/images/ilk_ayakkabi.jpg" },
        { date: "24-12-2023", title: "İlk Beraber Uyuma", description: "İlk defa birlikte uyuduk.", icon: "🛏️", image: "https://via.placeholder.com/300" },
        { date: "24-12-2023", title: "İlk Maske", description: "İlk defa birlikte maske yaptık.", icon: "💆‍♀️", image: "assets/images/ilk_maske.jpg" },
        { date: "31-12-2023", title: "İlk Yemek Yapma", description: "İlk defa birlikte yemek yaptık.", icon: "🍳", image: "assets/images/ilk_yemekyapma.jpg" },
        { date: "31-12-2023", title: "İlk Nesil'in Evinde Kalışım", description: "İlk defa Nesil'in evinde kaldım.", icon: "🏠", image: "assets/images/ilk_nesildekalisim.jpg" },
        { date: "29-03-2024", title: "İlk Beraber Doğum Günü Kutlaması", description: "İlk defa Nesil'in doğum gününü kutladık.", icon: "🎂", image: "assets/images/ilk_dogumgunu.jpg" }
    ]    

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('li');
        timelineItem.className = 'timeline-item';

        const timelineBadge = document.createElement('div');
        timelineBadge.className = 'timeline-badge';
        timelineBadge.innerText = item.icon;

        const timelinePanel = document.createElement('div');
        timelinePanel.className = 'timeline-panel';
        
        const timelineDate = document.createElement('div');
        timelineDate.className = 'timeline-date';
        timelineDate.innerText = item.date;

        const timelineTitle = document.createElement('h4');
        timelineTitle.className = 'timeline-title';
        timelineTitle.innerText = item.title;

        const timelineDescription = document.createElement('p');
        timelineDescription.className = 'timeline-description';
        timelineDescription.innerText = item.description;

        // Add click event listener to open modal
        timelinePanel.addEventListener('click', function() {
            openModal(item);
        });

        timelinePanel.appendChild(timelineDate);
        timelinePanel.appendChild(timelineTitle);
        timelinePanel.appendChild(timelineDescription);
        timelineItem.appendChild(timelineBadge);
        timelineItem.appendChild(timelinePanel);
        timeline.appendChild(timelineItem);
    });

    // Function to open modal
    function openModal(item) {
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalImage = document.getElementById('modal-image');

        modalTitle.innerText = item.title;
        modalDescription.innerText = item.description;
        modalImage.src = item.image;

        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
});

// Modal kapanırken blur efektini kaldır
document.addEventListener('DOMContentLoaded', function() {
    var myModalEl = document.getElementById('exampleModal');
    myModalEl.addEventListener('hidden.bs.modal', function () {
        document.body.classList.remove('modal-open');
        var modalBackdropEl = document.querySelector('.modal-backdrop');
        modalBackdropEl.style.backdropFilter = 'none';
        setTimeout(function() {
            modalBackdropEl.style.backgroundColor = 'transparent';
        }, 100); // Arka planın blurunun kaldırılması için beklenen süre
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-img');
  
    galleryImages.forEach(img => {
      img.addEventListener('click', function () {
        const modalImage = document.getElementById('modal-image');
        modalImage.src = this.src;
        $('#exampleModal').modal('show');
      });
    });
  });
