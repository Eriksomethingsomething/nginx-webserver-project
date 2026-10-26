
const cartCount = document.querySelector("#cart-count");
const cartMessage = document.querySelector("#cart-message");
const productGrid = document.querySelector("#product-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const categoryLinks = document.querySelectorAll("[data-category-link]");
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

let cartItems = 0;

// Filter the products by category.
function filterProducts(category) {
  const products = productGrid.querySelectorAll(".product-card");

  products.forEach((product) => {
    const matches =
      category === "All" || product.dataset.category === category;

    product.hidden = !matches;
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === category;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

// Category filter buttons.
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterProducts(button.dataset.filter);
  });
});

// Links in the category cards and navigation.
categoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    filterProducts(link.dataset.categoryLink);
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Add products to the demo cart.
document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = cartItems;

    const productName = button.dataset.add;
    cartMessage.textContent =
      `${productName} added to your demo cart (${cartItems} ${
        cartItems === 1 ? "item" : "items"
      }).`;
  });
});

// Mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Toggle navigation"
  );
});

// Close the mobile menu when a navigation link is selected.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically update the copyright year.
document.querySelector("#year").textContent = new Date().getFullYear();
