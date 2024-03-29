const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

// Close the mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
  // Check if the click is outside of the menu and the menu button
  if (!menu.contains(e.target) && !menuLinks.contains(e.target) && menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
  }
});

// Prevent the menu from closing when clicking inside the menu
menuLinks.addEventListener('click', (e) => e.stopPropagation());

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.navbar__links');
  
    // Add a click event listener to each menu item
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        // Call the highlightMenu function when a menu item is clicked
        highlightMenu(menuItem);
      });
    });
  
    // Call the highlightMenu function on page load to highlight the active menu item
    highlightMenu(getActivePage());
  });
  
  // Your highlightMenu function
  const highlightMenu = (selectedMenuItem) => {
    const menuItems = document.querySelectorAll('.navbar__links');
  
    // Remove 'highlight' class from all menu items
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('highlight');
    });
  
    // Add 'highlight' class to the clicked menu item or the active menu item
    selectedMenuItem.classList.add('highlight');
  };
  
  // Function to get the active page based on the URL
  const getActivePage = () => {
    const currentPage = window.location.pathname.split('/').pop(); // Assumes the page is the last part of the URL
  
    // Find the corresponding menu item based on the current page
    const activeMenuItem = document.querySelector(`.navbar__links[href="${currentPage}"]`);
  
    return activeMenuItem || menuItems[0]; // If no corresponding menu item found, default to the first one
  };

  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);