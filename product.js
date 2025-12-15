// Define product details
const products = {
  "Protein Brownie Bites": {
    img: "images/High-Protein-Brownie-Bites-Botanica4.jpg",
    description: "Delicious fudgy brownies packed with protein for a post-workout treat.",
    macros: "Protein: 12g | Carbs: 15g | Fat: 6g"
  },
  "Triple Milk Protein Cake": {
    img: "images/7399-tres-leches-milk-cake-ddmfs-beauty-2x1-BG-25702-f42c94b10c914753aa4dcb413658b8bf.jpg",
    description: "Moist and creamy triple milk cake with extra protein.",
    macros: "Protein: 18g | Carbs: 25g | Fat: 10g"
  },
  "Peanut Butter Protein Cups": {
    img: "images/Protein-Peanut-Butter-Cups-featured.jpg",
    description: "Rich peanut butter cups with a high-protein twist.",
    macros: "Protein: 10g | Carbs: 12g | Fat: 8g"
  },
  "Protein Cinnamon Rolls": {
    img: "images/Protein-Cinnamon-Rolls-05.jpg",
    description: "Soft and sweet cinnamon rolls with added protein.",
    macros: "Protein: 14g | Carbs: 20g | Fat: 7g"
  },
  "Protein Bars": {
    img: "images/protein-bars-recipe.jpg",
    description: "Homemade protein bars perfect for snacks or post-workout.",
    macros: "Protein: 15g | Carbs: 18g | Fat: 5g"
  },
  "Protein Cheesecake": {
    img: "images/protein-cheesecake-recipe.jpg",
    description: "Creamy cheesecake with protein boost, guilt-free dessert.",
    macros: "Protein: 16g | Carbs: 20g | Fat: 8g"
  }
};

// Create modal element
const modal = document.createElement("div");
modal.id = "productModal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.7)";
modal.style.zIndex = "1000";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.innerHTML = `
  <div style="background:#fff; padding:20px; max-width:500px; width:90%; position:relative; border-radius:8px;">
    <span id="closeModal" style="position:absolute; top:10px; right:15px; cursor:pointer; font-weight:bold;">X</span>
    <h2 id="modalName"></h2>
    <img id="modalImg" src="" alt="" style="width:100%; border-radius:6px;">
    <p id="modalDesc"></p>
    <p id="modalMacros" style="font-weight:bold;"></p>
  </div>
`;
document.body.appendChild(modal);

// Show product function
function showProduct(name) {
  const product = products[name];
  if (product) {
    document.getElementById("modalName").textContent = name;
    document.getElementById("modalImg").src = product.img;
    document.getElementById("modalImg").alt = name;
    document.getElementById("modalDesc").textContent = product.description;
    document.getElementById("modalMacros").textContent = product.macros;
    modal.style.display = "flex";
  }
}

// Close modal
document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

