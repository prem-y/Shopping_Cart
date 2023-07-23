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
        discription: "Men White Slim Fit Printed Casual Shirt",
        image :"../images/img2.jpg",
        quantinty: 0
    },
    {
        id: 3,
        name: "LOCOMOTIVE",
        price: 419,
        discription: "Men Navy Blue & White Slim Fit Printed Casual Shirt",
        image :"../images/img3.jpg",
        quantinty: 0
    },
    {
        id: 4,
        name: "KETCH",
        price: 399,
        discription: "Men Pink and Navy Blue Slim Fit Striped Casual Shirt",
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
        discription: "Men Relaxed Mid Rise Plain Knitted Slim Fit Chinos Trousers",
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
        discription: "Men Mid-Rise Tapered Fit Chinos Trousers",
        image: "../images/img8.jpg",
        quantinty: 0
    }
    //add more products here
]

function renderProductCards(){
    const productlist = documnet.getElementById("Shirts-list");
    const allProducts = [...shirts,...trousers];

    allProducts.forEach(product =>{
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-header">
                                <img src="${product.image}" alt="" class="card-img-top">
                            </div>
                            <div class="card-body">
                                <span style="font-size: 2em;">₹</span>
                                <span style="font-size: 2em;" value="cost">${product.price}</span>
                                <button onclick="changeNumSub()" class="btn btn-outline-success" style="float: right; margin: 5px;">-</button>
                                <button onclick="changeNumAdd()" class="btn btn-outline-success" style="float: right; margin: 5px;">+</button> <br>
                                <span style="font-size: 1em; font-weight: bolder;">${product.name}</span> <br>
                                <span>${product.discription}</span>
                                <br><br>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })
}

document.addEventListener("DOMContentLoaded",function(){
    renderProductCards();
})