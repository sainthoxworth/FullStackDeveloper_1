var root = document.getElementById("root");

/* JSX - Javascript XML = JS içindeki etiketleri birer obje gibi yazmamızı sağlıyor */
var productName = "Samsung S10";
var productPrice = 4000;
var productDescription = "bu bir telefon";

function formatPrice(p) {
    return p + " TL";
}

var product = {
    name: "Samsung S10",
    price: 4000,
    description: "bu bir telefon"
}

function formatPrice2(p) {
    return p.price + " TL";
}

var template =
    <div id="productDetail">
        <h1 id="productName">Name : {productName}</h1>
        <p id="productPrice">Price : {formatPrice2(product)}</p>
        <p id="productDescription">Description : {productDescription}</p>
    </div>;

/* React DOM */
ReactDOM.render(template, root);