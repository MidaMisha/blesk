
// burger
document.querySelector('.overlay').addEventListener('click', function() {
    document.getElementById('menu-toggle').checked = false;
});

// slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const circles = document.querySelectorAll('.circle');
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));

        circles.forEach(circle => circle.classList.remove('active'));
        
        slides[index].classList.add('active');
        
        circles[index].classList.add('active');
        
        currentIndex = index;
    }
    
    function startSlider() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000);
    }
    
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            clearInterval(interval);
            const index = parseInt(circle.getAttribute('data-index'));
            showSlide(index);
            startSlider();
        });
    });
    
    showSlide(0);
    startSlider();
});

// authorization

document.addEventListener('DOMContentLoaded', function() {
    window.openAuthModal = function() {
      document.getElementById('authModal').style.display = 'block';
    }
  
    window.closeAuthModal = function() {
      document.getElementById('authModal').style.display = 'none';
    }
    
    window.onclick = function(event) {
      const modal = document.getElementById('authModal');
      if (event.target == modal) {
        closeAuthModal();
      }
    }
  });

  // cab_edit
  
  document.addEventListener('DOMContentLoaded', function() {
    const editDatamodal_cab = document.getElementById('editDatamodal_cab');
    const editPasswordmodal_cab = document.getElementById('editPasswordmodal_cab');
    const addAddressmodal_cab = document.getElementById('addAddressmodal_cab');
    
    const editDataBtn = document.querySelector('.cab_btns .btn_cabinet:first-child');
    const editPasswordBtn = document.querySelector('.cab_btns .btn_cabinet:last-child');
    const addAddressBtn = document.querySelector('.del_card .btn_cabinet');
    
    const closeButtons = document.querySelectorAll('.close-modal_cab');

    editDataBtn.addEventListener('click', () => editDatamodal_cab.style.display = 'block');
    editPasswordBtn.addEventListener('click', () => editPasswordmodal_cab.style.display = 'block');
    addAddressBtn.addEventListener('click', () => addAddressmodal_cab.style.display = 'block');
    
    closeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        this.closest('.modal_cab').style.display = 'none';
      });
    });
    
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal_cab')) {
        event.target.style.display = 'none';
      }
    });
    
    document.getElementById('editDataForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Данные успешно сохранены!');
      editDatamodal_cab.style.display = 'none';
    });
    
    document.getElementById('editPasswordForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Пароль успешно изменен!');
      editPasswordmodal_cab.style.display = 'none';
    });
    
    document.getElementById('addAddressForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Адрес успешно добавлен!');
      addAddressmodal_cab.style.display = 'none';
    });
  });

  // orders
  document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-orders-btn');
    const hiddenOrders = document.querySelector('.hidden-orders');
    
    toggleBtn.addEventListener('click', function() {
        if (hiddenOrders.style.display === 'none') {
            hiddenOrders.style.display = 'block';
            this.textContent = 'СВЕРНУТЬ';
        } else {
            hiddenOrders.style.display = 'none';
            this.textContent = 'ВСЕ ЗАКАЗЫ';
        }
    });
});

// filter
const modal_filter = document.getElementById("moreCategoriesmodal_filter");
    const btnMore = document.querySelector(".btn_first");
    const spanClose = document.querySelector(".modal_filter .close");
  
    btnMore.onclick = function () {
      modal_filter.style.display = "block";
    }
  
    spanClose.onclick = function () {
      modal_filter.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target === modal_filter) {
        modal_filter.style.display = "none";
      }
    }