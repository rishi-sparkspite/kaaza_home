// Import components for navbar and footer (assuming they are pre-defined in your project)
import footer_main from "../components/footer.js";
import navbar_main from "../components/navbar.js";

// Render the navbar and footer
document.getElementById("footer_main").innerHTML = footer_main();
document.getElementById("navbar_main").innerHTML = navbar_main();

// Add a loader element
const loader = document.createElement("div");
loader.id = "loader";
loader.textContent = "Loading...";
loader.style = `
    display: none;
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: #347584;
`;
document.getElementById("sh-main").appendChild(loader);

// Show loader
const showLoader = () => {
    loader.style.display = "block";
};

// Hide loader
const hideLoader = () => {
    loader.style.display = "none";
};

// Function to fetch categories
const fetchCategories = async () => {
    try {
        const response = await fetch("https://kaazahome.sparkspite.com/api/categories", {
            method: "GET",
            redirect: "follow"
        });
        const categories = await response.json();
        const categoryList = document.getElementById("category-list");
        categoryList.innerHTML = ""; // Clear existing categories

        categories.forEach(category => {
            const categoryItem = document.createElement("p");
            const categoryLink = document.createElement("a");

            categoryLink.textContent = category.name;
            categoryLink.href = "#"; // Prevent full page reload
            categoryLink.style = "cursor: pointer; text-decoration: none; color: black;";
            categoryLink.addEventListener("click", () => fetchProducts(category._id));

            categoryItem.appendChild(categoryLink);
            categoryList.appendChild(categoryItem);
        });

        // Fetch products for the first category by default
        if (categories.length > 0) {
            fetchProducts(categories[0]._id);
        }
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
};

// Function to fetch products by category
const fetchProducts = async (categoryId) => {
    showLoader(); // Show loader before fetching
    try {
        const response = await fetch(`https://kaazahome.sparkspite.com/api/products/category/${categoryId}`, {
            method: "GET",
            redirect: "follow"
        });
        const products = await response.json();
        const productContainer = document.getElementById("sh-product");
        productContainer.innerHTML = ""; // Clear existing products

        // Track images loading
        let imagesToLoad = products.length;

        const checkAllImagesLoaded = () => {
            imagesToLoad--;
            if (imagesToLoad === 0) {
                hideLoader(); // Hide loader when all images are loaded
            }
        };

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.style = "border: 1px solid #ddd; padding: 10px; margin: 10px;";

            const productImage = document.createElement("img");
            productImage.src = `https://kaazahome.sparkspite.com/api${product.images[0]}`;
            productImage.alt = product.name;
            productImage.style = "width: 100%; height: auto;";
            productImage.onload = checkAllImagesLoaded;
            productImage.onerror = checkAllImagesLoaded; // To handle any image load failure gracefully

            const productName = document.createElement("h3");
            productName.textContent = product.name;

            productCard.appendChild(productImage);
            productCard.appendChild(productName);

            productContainer.appendChild(productCard);
        });

        // If no images are present, hide the loader immediately
        if (imagesToLoad === 0) {
            hideLoader();
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        hideLoader(); // Ensure the loader is hidden on error
    }
};

// Initial fetch for categories
fetchCategories();
