//My Products
const shirts =[
    {
        id: 1,
        name: "FUBAR",
        price: 439,
        discription: "Spread Collar Slim Fit Casual Shirt",
        image :"../images/img1.jpg",
        quantinty: 0
    },
    {
        id: 2,
        name: "HIGHLANDER",
        price: 410,
        discription: "Men White Slim Fit Printed Casual",
        image :"../images/img2.jpg",
        quantinty: 0
    },
    {
        id: 3,
        name: "LOCOMOTIVE",
        price: 419,
        discription: "Men Navy Blue & White Slim Fit",
        image :"../images/img3.jpg",
        quantinty: 0
    },
    {
        id: 4,
        name: "KETCH",
        price: 399,
        discription: "Men Pink and Navy Blue Slim Fit",
        image: "../images/img4.jpg",
        quantinty: 0
    },
    //add more products here
]

const trousers =[
    {
        id: 5,
        name: "COMBRAIDED",
        price: 492,
        discription: "Men Relaxed Mid Rise Plain Knitted",
        image: "../images/img5.jpg",
        quantinty: 0
    },
    {
        id: 6,
        name: "DENNIS LINGO",
        price: 999,
        discription: "Men Black Tapered Fit Cargos Trousers",
        image: "../images/img6.jpg",
        quantinty: 0
    },
    {
        id: 7,
        name: "ROADSTER",
        price: 881,
        discription: "Men White Tapered Fit Solid Chinos",
        image: "../images/img7.jpg",
        quantinty: 0
    },
    {
        id: 8,
        name: "LEVIS",
        price: 1619,
        discription: "Men Mid-Rise Tapered Fit Chinos",
        image: "../images/img8.jpg",
        quantinty: 0
    }
    //add more products here
]


function renderProductCards() {
    const productList = document.getElementById("Shirts-list");
    if (!productList) return;
  
    productList.innerHTML = "";
  
    const allProducts = [...shirts, ...trousers]; 
  
    allProducts.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
      card.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <span class="card-title h4">${product.name}</span>
            <div class="card-text">${product.discription}</div> 
            <span class="card-text h5">Rs. ${product.price}</span>
            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary add-to-cart-btn" data-product-id="${product.id}">Add to cart</button>
            </div>
          </div>
        </div>
      `;
  
      if (product instanceof Object && product.id >= 5 && product.id <= 8) {
        const smartwatchList = document.getElementById("Trousers-list");
        if (smartwatchList) {
          smartwatchList.appendChild(card);
        }
      } else {
        productList.appendChild(card);
      }
    });
  
    // Add event listeners to the "Add to cart" buttons
    const addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
    for (let i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", addToCart);
    }
  }

document.addEventListener("DOMContentLoaded",function(){
    renderProductCards();
})