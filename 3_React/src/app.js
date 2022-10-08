var root = document.getElementById("root");

/* JSX - Javascript XML = JS içindeki etiketleri birer obje gibi yazmamızı sağlıyor */
var productName = "Samsung S10";
var productPrice = 4000;
var productDescription = "bu bir telefon";

function formatPrice(p) {
    return p + " TL";
}

var product = {
    name: "",
    price: 4000,
    description: "bu bir telefon",
    type: ["red", "blue"]
}

function formatPrice2(p) {
    return p.price + " TL";
}

function getDescription(description) {
    /*if(description) {
        return description;
    } else {
        return "no-description";
    }*/
    /*if(description) {
        return <h5 style={{color: "red"}}>Description : {description}</h5>
    } */
    return description ? description : "no-description"
}

var template =
    <div id="productDetail">
        <h1 id="productName">Name : {product.name ? product.name : "no-name"}</h1>
        {/* <p id="productPrice">Price : {formatPrice2(product)}</p> */}
        <p id="productPrice">Price : {product.price == 0 ? "free" : product.price}</p>
        <p id="productDescription">{getDescription(product.description)}</p>
        <p>{product.type.length ? product.type.length + " tip var" : "seçenek yok"}</p>
        <p>
            {
                product.type.map((item)=> <p>{item}</p>)
            }
        </p>
    </div>;

/* React DOM */
ReactDOM.render(template, root);