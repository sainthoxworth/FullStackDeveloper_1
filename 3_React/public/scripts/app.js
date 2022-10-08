"use strict";

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
};

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
  return description ? description : "no-description";
}

var template = /*#__PURE__*/React.createElement("div", {
  id: "productDetail"
}, /*#__PURE__*/React.createElement("h1", {
  id: "productName"
}, "Name : ", product.name ? product.name : "no-name"), /*#__PURE__*/React.createElement("p", {
  id: "productPrice"
}, "Price : ", product.price == 0 ? "free" : product.price), /*#__PURE__*/React.createElement("p", {
  id: "productDescription"
}, getDescription(product.description)), /*#__PURE__*/React.createElement("p", null, product.type.length ? product.type.length + " tip var" : "seçenek yok"), /*#__PURE__*/React.createElement("p", null, product.type.map(function (item) {
  return /*#__PURE__*/React.createElement("p", null, item);
})));
/* React DOM */

ReactDOM.render(template, root);
