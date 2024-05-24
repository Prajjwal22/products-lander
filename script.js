fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    displayProducts(data);
    displayMobileProducts(data);
  })
  .catch((error) => console.error("Error fetching the product data:", error));

fetch("relatedproducts.json")
  .then((response) => response.json())
  .then((data) => {
    displayRelatedProducts(data);
  })
  .catch((error) => console.error("Error fetching the product data:", error));

const dateDiv = document.getElementById("dateDiv");
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
const year = today.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
dateDiv.textContent = formattedDate

function displayProducts(products) {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productRow = document.createElement("div");
    productRow.classList.add("product-row");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productRibbon = document.createElement("p");
    productRibbon.classList.add("ribbon");

    const ribbonText = document.createElement("span");
    ribbonText.classList.add("text");
    ribbonText.textContent = product.ribbon
    productRibbon.appendChild(ribbonText)
    if(!product.ribbon) {
        productRibbon.classList.add("hidden");
    }
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.width = 300;
    productImage.height = 300;
    productImage.classList.add("product-image");
    console.log(product);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productBrand = document.createElement("span");
    productBrand.classList.add("text-mute");
    productBrand.textContent = product.brand;

    const productDiscount = document.createElement("span");
    productDiscount.classList.add("text-badge");
    productDiscount.textContent = product.discount;

    productInfo.appendChild(productName);
    productInfo.appendChild(productBrand);
    productInfo.appendChild(productDiscount);

    const productRating = document.createElement("div");
    productRating.classList.add("product-rating");

    const ratingValue = document.createElement("span");
    ratingValue.textContent = product.rating;

    const ratingImage = document.createElement("img");
    ratingImage.src =
      "/assets/ratings/" + (product.rating / 2).toFixed() + ".png";
    ratingImage.width = 300;
    ratingImage.height = 150;

    const productVerdict = document.createElement("span");
    productVerdict.classList.add("product-verdict");
    productVerdict.textContent = product.verdict;

    productRating.appendChild(ratingValue);
    productRating.appendChild(ratingImage);
    productRating.appendChild(productVerdict);

    const productLinks = document.createElement("div");
    productLinks.classList.add("product-links");

    const viewDealLink = document.createElement("a");
    viewDealLink.href = product.link;
    viewDealLink.classList.add("product-cta");
    viewDealLink.textContent = "View Deal";

    const buyLinks = document.createElement("span");
    buyLinks.classList.add("buy-links");

    const checkOnAmazon = document.createElement("span");
    checkOnAmazon.textContent = " Check on Amazon";

    const showMore = document.createElement("span");
    showMore.textContent = "Show More";

    showMore.addEventListener("click", () => {
      productSpecs.className === "product-specs hidden"
        ? productSpecs.classList.remove("hidden")
        : productSpecs.classList.add("hidden");
    });

    const productSpecs = document.createElement("div");
    productSpecs.classList.add("product-specs");
    productSpecs.classList.add("hidden");

    const specsHeading = document.createElement("span");
    specsHeading.textContent = "Main Hightlights";

    const specsList = document.createElement("ul");
    product.specs.forEach((spec) => {
      const specItem = document.createElement("li");
      specItem.textContent = spec;
      specsList.appendChild(specItem);
    });

    productSpecs.appendChild(specsHeading);
    productSpecs.appendChild(specsList);

    buyLinks.appendChild(checkOnAmazon);
    buyLinks.appendChild(showMore);

    productLinks.appendChild(viewDealLink);
    productLinks.appendChild(buyLinks);

    productDiv  .appendChild(productRibbon)

    productDiv.appendChild(productImage);
    productDiv.appendChild(productInfo);
    productDiv.appendChild(productRating);
    productDiv.appendChild(productLinks);

    productRow.appendChild(productDiv);
    productList.appendChild(productRow);
    productRow.appendChild(productSpecs);
  });
}
    

function displayMobileProducts(products) {
  const mobileProductList = document.querySelector(".mobile-grid");
  const relatedProductsList = document.querySelector(".related-products-list");
  mobileProductList.innerHTML = "";
  relatedProductsList.innerHTML = "";

  products.forEach((product) => {
    const smProduct = document.createElement("div");
    smProduct.classList.add("sm-product");

    const smProductRow = document.createElement("div");
    smProductRow.classList.add("sm-product-row");

    const productRibbon = document.createElement("p");
    if(!product.ribbon) {
        productRibbon.classList.add("hidden");
    }
    productRibbon.classList.add("ribbon");

    const ribbonText = document.createElement("span");
    ribbonText.classList.add("text");
    ribbonText.textContent = product.ribbon
    productRibbon.appendChild(ribbonText)


    const smProductImageDiv = document.createElement("div");
    smProductImageDiv.classList.add("sm-product-image");

    const smProductImage = document.createElement("img");
    smProductImage.src = product.image; // Placeholder image
    smProductImage.width = 300;
    smProductImage.height = 300;

    const smProductBrand = document.createElement("span");
    smProductBrand.classList.add("text-mute");
    smProductBrand.textContent = product.brand;

    smProductImageDiv.appendChild(smProductImage);
    smProductImageDiv.appendChild(smProductBrand);

    const smProductRating = document.createElement("div");
    smProductRating.classList.add("sm-product-rating");

    const smRatingValue = document.createElement("span");
    smRatingValue.textContent = product.rating;

    const smRatingImage = document.createElement("img");
    smRatingImage.src =
      "/assets/ratings/" + (product.rating / 2).toFixed() + ".png";
    smRatingImage.width = 300;
    smRatingImage.height = 150;

    const smProductVerdict = document.createElement("span");
    smProductVerdict.classList.add("sm-product-verdict");
    smProductVerdict.textContent = product.verdict;

    smProductRating.appendChild(smRatingValue);
    smProductRating.appendChild(smRatingImage);
    smProductRating.appendChild(smProductVerdict);

    smProductRow.appendChild(smProductImageDiv);
    smProductRow.appendChild(smProductRating);

    const smProductInfo = document.createElement("div");
    smProductInfo.classList.add("product-info");

    const smProductDiscount = document.createElement("span");
    smProductDiscount.classList.add("text-badge");
    smProductDiscount.textContent = product.discount;

    const smProductName = document.createElement("h3");
    smProductName.textContent = product.name;

    const smProductLinks = document.createElement("div");
    smProductLinks.classList.add("product-links");

    const smViewDealLink = document.createElement("a");
    smViewDealLink.href = product.link;
    smViewDealLink.classList.add("product-cta");
    smViewDealLink.textContent = "View Deal";

    const smBuyLinks = document.createElement("span");
    smBuyLinks.classList.add("buy-links");

    const smCheckOnAmazon = document.createElement("span");
    smCheckOnAmazon.textContent = "Amazon";

    const smShowMore = document.createElement("span");
    smShowMore.textContent = "Show More";

    smShowMore.addEventListener("click", () => {
        productSpecs.className === "product-specs hidden"
          ? productSpecs.classList.remove("hidden")
          : productSpecs.classList.add("hidden");
      });
  
      const productSpecs = document.createElement("div");
      productSpecs.classList.add("product-specs");
      productSpecs.classList.add("hidden");
  
      const specsHeading = document.createElement("span");
      specsHeading.textContent = "Main Hightlights";
  
      const specsList = document.createElement("ul");
      product.specs.forEach((spec) => {
        const specItem = document.createElement("li");
        specItem.textContent = spec;
        specsList.appendChild(specItem);
      });
  
      productSpecs.appendChild(specsHeading);
      productSpecs.appendChild(specsList);

    smBuyLinks.appendChild(smCheckOnAmazon);
    smBuyLinks.appendChild(smShowMore);

    smProductLinks.appendChild(smViewDealLink);
    smProductLinks.appendChild(smBuyLinks);

    smProductInfo.appendChild(smProductDiscount);
    smProductInfo.appendChild(smProductName);
    smProductInfo.appendChild(smProductLinks);

    smProduct.appendChild(smProductRow);
    smProduct.appendChild(smProductInfo);
    smProduct.appendChild(productSpecs);
    smProduct.appendChild(productRibbon)


    mobileProductList.appendChild(smProduct);

    const smProductClone = smProduct.cloneNode(true);
    relatedProductsList.appendChild(smProductClone);
  });
}

function displayRelatedProducts(products) {

}
