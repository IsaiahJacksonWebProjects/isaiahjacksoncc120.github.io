// Product data
const products = {
  "protein-brownie": {
    name: "Protein Brownie Bites",
    img: "High-Protein-Brownie-Bites-Botanica4.jpg",
    description: "Delicious chocolate brownie bites packed with protein for a healthy snack.",
    macros: "Calories: 120 | Protein: 10g | Carbs: 15g | Fat: 4g"
  },
  "triple-milk-cake": {
    name: "Triple Milk Protein Cake",
    img: "7399-tres-leches-milk-cake-ddmfs-beauty-2x1-BG-25702-f42c94b10c914753aa4dcb413658b8bf.jpg",
    description: "Moist and creamy tres leches cake with extra protein for your fitness goals.",
    macros: "Calories: 250 | Protein: 15g | Carbs: 30g | Fat: 8g"
  },
  "peanut-butter-cups": {
    name: "Protein Peanut Butter Cups",
    img: "Protein-Peanut-Butter-Cups-featured.jpg",
    description: "Rich peanut butter chocolate cups with a protein boost.",
    macros: "Calories: 180 | Protein: 12g | Carbs: 14g | Fat: 8g"
  },
  "protein-cinnamon-rolls": {
    name: "Protein Cinnamon Rolls",
    img: "Protein-Cinnamon-Rolls-05.jpg",
    description: "Soft cinnamon rolls with added protein, perfect for breakfast or snack time.",
    macros: "Calories: 200 | Protein: 12g | Carbs: 25g | Fat: 6g"
  },
  "protein-bars": {
    name: "Protein Bars",
    img: "protein-bars-recipe.jpg",
    description: "Convenient protein bars to fuel your workouts or satisfy hunger on-the-go.",
    macros: "Calories: 220 | Protein: 15g | Carbs: 20g | Fat: 7g"
  },
  "protein-cheesecake": {
    name: "Protein Cheesecake",
    img: "protein-cheesecake-recipe.jpg",
    description: "Creamy cheesecake with a protein twist, perfect dessert without guilt.",
    macros: "Calories: 250 | Protein: 18g | Carbs: 22g | Fat: 10g"
  }
};

// Get the product ID from URL query
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Default to first product if ID is missing or invalid
const product = products[id] || products["protein-brownie"];

// Populate the page
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-img").src = product.img;
document.getElementById("product-img").alt = product.name;
document.getElementById("product-description").textContent = product.description;
document.getElementById("product-macros").textContent = product.macros;

// Dark mode toggle
document.getElementById("toggleBtn").onclick = function() {
  document.body.classList.toggle("dark-mode");
};
