"use strict";

var root = document.getElementById("root");
/* JSX - Javascript XML = JS içindeki etiketleri birer obje gibi yazmamızı sağlıyor */

var template = /*#__PURE__*/React.createElement("h1", null, "My first react app!");
/* React */

/* React DOM */

ReactDOM.render(template, root);
