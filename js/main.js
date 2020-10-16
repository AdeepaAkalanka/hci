// Run wow.js
new WOW().init();
// Global
var products = [];
var cartItems = [];
var carn_n = document.getElementById("fruitDIV");
// DIVS
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");
// Information
var FRUIT = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 1 },
    { name: 'Pomegranape', price: 1 },
    { name: 'Grapes', price: 1 },
    { name: 'Pineapple', price: 1 },
    { name: 'Woodapple', price: 1 },
];
var JUICE = [
    { name: 'Kist Nectar', price: 10 },
    { name: 'Apple Juice', price: 11 },
    { name: 'Kist Cordial', price: 12 },
];
var SALAD = [
    { name: 'Sunsilk', price: 11 },
    { name: 'Dove', price: 12 },
    { name: 'Dandex', price: 15 },
];
// HTML
function HTMLfruitProduct(con) {
    let URL = `img/fruits/fruit${con}.jpeg`;
    let btn = `btnFruits${con}`;
    return `
        <div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style"height:16rem;" src="${URL}" alt"Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>  
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${FRUIT[con - 1].name}<p>
                    <p class="card-text">Price: Rs.${FRUIT[con - 1].price}.00<p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${FRUIT[con - 1].name}','${FRUIT[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="cart.html">Buy<a/>
                            </a>  
                            </button>
                            <button id="${btn}" type="button" onclick="cart('${FRUIT[con - 1].name}','${FRUIT[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" >Add to cart<a/>
                            </a>  
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" onclick="window.location.href='./Gayani/Onecatpage.html';"><a style="color:inherit;">View<a/></button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>    
                </div>
            </div>
        </div> 
    `;
}

function HTMLjuiceProduct(con) {
    let URL = `img/juice/juice${con}.jpeg`;
    let btn = `btnJuice${con}`;
    return `
        <div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style"height:16rem;" src="${URL}" alt"Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${JUICE[con - 1].name}<p>
                    <p class="card-text">Price: Rs.${JUICE[con - 1].price}.00<p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${JUICE[con - 1].name}','${JUICE[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="cart.html">Buy<a/>
                            </a>  
                            </button>
                            <button id="${btn}" type="button" onclick="cart('${JUICE[con - 1].name}','${JUICE[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" >Add to cart<a/>
                            </a>  
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" onclick="window.location.href='./Gayani/Onecatpage.html';"><a style="color:inherit;">View<a/></button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>    
                </div>
            </div>
        </div> 
    `;
}

function HTMLsaladProduct(con) {
    let URL = `img/salads/salad${con}.jpeg`;
    let btn = `btnSalad${con}`;
    return `
        <div class="col-md-4 wow zoomIn data-wow-duration="10s" data-wow-offset="240" ">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style"height:16rem;" src="${URL}" alt"Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${SALAD[con - 1].name}<p>
                    <p class="card-text">Price: Rs.${SALAD[con - 1].price}.00<p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SALAD[con - 1].name}','${SALAD[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="cart.html">Buy<a/>
                            </a>  
                            </button>
                            <button id="${btn}" type="button" onclick="cart('${SALAD[con - 1].name}','${SALAD[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;">Add to cart<a/>
                            </a>  
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" onclick="window.location.href='./Gayani/Onecatpage.html';"><a style="color:inherit;">View<a/></button>
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>    
                </div>
            </div>
        </div> 
    `;
}

// Animation
function animation() {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    });
    toast({
        type: 'success',
        title: 'Added to shopping cart'
    });
}

// cart 
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    product = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    animation();
}

function cart2(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    product = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementsById(btncart).style.display = "none";

}
// Render
function render() {
    for (let index = 1; index <= 6; index++) {
        fruitDIV.innerHTML += `${HTMLfruitProduct(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        juiceDIV.innerHTML += `${HTMLjuiceProduct(index)}`;
        saladDIV.innerHTML += `${HTMLsaladProduct(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
}
//login
document.getElementById("formA").addEventListener("submit", (e) => {
    e.preventDefault();
    var userLogin = document.getElementById("usera");
    var passLogin = document.getElementById("passworda");
    if (userLogin.value == "ADMIN" && passLogin.value == "123") {
        swal({
            title: 'Welcome',
            html: 'Access granted',
            type: 'success'
        });
        setTimeout(() => {
            loadPage();
        }, 3000);
    } else {
        swal({
            title: 'Error',
            html: 'Access denied',
            type: 'error'
        });
    }
    function loadPage() {
        window.location.href = "./admin./admin.php";
    }
});

// 3.16.20