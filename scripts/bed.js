import footer_main from "../components/footer.js"
document.getElementById("footer_main").innerHTML = footer_main()



import navbar_main from "../components/navbar.js"
document.getElementById("navbar_main").innerHTML = navbar_main();



var ProductList = [{
    image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Printfresh Organic Quilt",
    price: 278.00,
    price2: 338.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 1,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Luxe Linen Blend Pillow",
    price: 54.40,
    price2: 94.40,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 2,
}, {
    image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Printfresh Organic Quilt",
    price: 278.00,
    price2: 338.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 1,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Luxe Linen Blend Pillow",
    price: 54.40,
    price2: 94.40,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 2,
}, {
    image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Printfresh Organic Quilt",
    price: 278.00,
    price2: 338.00,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45407869AA_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 1,
},
{
    image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    name: "Luxe Linen Blend Pillow",
    price: 54.40,
    price2: 94.40,
    hover_image: "https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    id: 2,
},

];

window.addEventListener("load", function () {
    display(ProductList)
})
// Adjust product display for spacing and padding
function display(list) {
    document.getElementById("sh-product").innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("id", "sh-mainDiv");
        div.addEventListener("click", function () {
            addLocal(list[i]);
        });

        var img = document.createElement("img");
        img.setAttribute("class", "sh-image1");
        img.setAttribute("id", `sh-image${list[i].id}`);
        img.src = list[i].image;

        img.addEventListener("mouseenter", function () {
            mouseEnterfunction(list[i]);
        });

        img.addEventListener("mouseout", function () {
            mouseOutfunction(list[i]);
        });

        var name = document.createElement("p");
        name.setAttribute("id", "sh-name");
        name.textContent = list[i].name;

        var price = document.createElement("p");
        price.setAttribute("id", "sh-price");
        price.textContent = `$${list[i].price} - $${list[i].price2}`;

        div.append(img, name, price);
        document.querySelector("#sh-product").append(div);
    }
}

function mouseEnterfunction(product) {
    // console.log("onhover")

    const img = document.getElementById(`sh-image ${product.id}`)
    img.src = product.hover_image;
}
function mouseOutfunction(product) {
    // console.log("onhover")

    const img = document.getElementById(`sh-image ${product.id}`)
    img.src = product.image;
}

document.getElementById("sh-sort").addEventListener("change", shipra);
function shipra() {
    var selected = document.getElementById("sh-sort").value;
    var all = ProductList;
    if (selected == "low") {
        all = all.sort(function (a, b) {
            console.log(a, b)
            return a.price - b.price
        })
    }

    if (selected == "high") {
        all = all.sort(function (a, b) {
            console.log(a, b)
            return b.price - a.price
        })
    }
    display(all)
}



// document.querySelector("#filter").addEventListener("change",handleBrandFilter);
// function handleBrandFilter() {
//     var selected = document.querySelector("#filter").value;
//     console.log(selected);
//     if(selected=="1")
//     console.log("shipra")
//     var newdata = ProductList.filter(function (el) {
//         console.log(newdata);
//     return el.price >= 50 &&
//     el.price <=100;
//     });
// display(newdata);
// } 
var array1;

document.querySelector("#filter").addEventListener("change", handleBrandFilter);
function handleBrandFilter() {
    var selected = document.querySelector("#filter").value;
    array1 = [];
    // console.log(selected);
    if (selected == "1") {
        array1.innerHTML = null;
        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML = "";
            var current = ProductList[i];
            // console.log(current)
            if (current.price >= 50.00 && current.price <= 100.00) {

                array1.push(ProductList[i]);

            }
        }
        console.log(array1);
        displayfilter(array1)

    }
    array1 = [];
    if (selected == 2) {
        array1.innerHTML = null;

        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML = "";
            var current = ProductList[i];

            if (current.price >= 101.00 && current.price <= 200.00) {

                array1.push(ProductList[i]);
            }
        }
        console.log(array1);
        displayfilter(array1)
    }
    array1 = [];
    if (selected == 3) {
        array1.innerHTML = null;
        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML = null;
            var current = ProductList[i];

            if (current.price >= 201.00 && current.price <= 300.00) {

                array1.push(ProductList[i]);
            }
        }

        displayfilter(array1)
        console.log(array1);
    }

    function displayfilter(array1) {


        for (let i = 0; i < array1.length; i++) {
            console.log(array1[i]);

            var div = document.createElement("div");
            div.setAttribute("id", "sh-mainDiv");

            var img = document.createElement("img");
            img.setAttribute("class", "sh-image1");
            img.setAttribute("id", `sh-image ${array1[i].id}`)
            img.src = array1[i].image;
            img.addEventListener("mouseenter", function () {
                mouseEnterfunction(array1[i]);
            })

            img.addEventListener("mouseout", function () {
                mouseOutfunction(array1[i]);
            })

            var name = document.createElement("p");
            name.setAttribute("id", "sh-name")
            name.textContent = array1[i].name;

            var price = document.createElement("p");
            price.setAttribute("id", "sh-price");
            price.textContent = `$${array1[i].price} `;

            div.append(img, name, price);

            document.querySelector("#sh-product").append(div);

        }
    }



}

let email = JSON.parse(localStorage.getItem("email"))
let otp = JSON.parse(localStorage.getItem("otp"))
if (email !== null && otp !== null) {
    document.getElementById("right").innerHTML = `<i class="fa fa-user" aria-hidden="true"></i>${"  "}My Profile`
}


// function goto() {
//     window.location.href = "bed-product-detail.html"
// }