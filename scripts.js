/* Place your JavaScript in this file */

// Toggle sidebar visibility
function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
}

// Highlight active sidebar link
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
   sidebarLinks.forEach(l => l.classList.remove('active'));
   link.classList.add('active');
  });
});

// Change language icon on hover
const languageImage = document.getElementById('language-icon');
if (languageImage) {
  languageImage.addEventListener('mouseenter', () => {
    languageImage.src = 'language-hover.png'; // Replace with your hover image
  });
  languageImage.addEventListener('mouseleave', () => {
    languageImage.src = 'language-icon.png'; // Original image
  });
}

// Show contact modal
function showContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.style.display = 'block';
  }
}

// Hide contact modal
function hideContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}


