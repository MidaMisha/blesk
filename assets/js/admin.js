function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const btn_sidebar = document.querySelector('.mobile-menu-btn');
    
    if (!sidebar.contains(event.target) && event.target !== btn_sidebar) {
        sidebar.classList.remove('active');
    }
});

const modal = document.getElementById('editModal');
const closeBtn = document.getElementById('closeModal');
const editButtons = document.querySelectorAll('.edit-btn');

editButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});