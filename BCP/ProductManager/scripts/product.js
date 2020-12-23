let products = ["IP 6s", "Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4"];

function showProduct() {
    let body = document.getElementById("tbProduct");
    body.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        body.innerHTML += `
                    <tr>
                        <td>${products[i]}</td>
                        <td>
                            <a href="" class="btn btn-success">Edit</a>
                            <a href="" class="btn btn-warning">Delete</a>
                        </td>
                    </tr>
        `;
    }
}

function reset() {
    document.getElementById("productName").value = "";
}

function addProduct() {
    let pn = document.getElementById("productName").value;
    if (!isNullOrEmpty(pn)) {
        if (!isExistProduct(pn)) {
            products.push(pn);
            showProduct();
        } else {
            alert(`The product name ${pn} is exits.`);
        }

    } else {
        alert("Product name is required.");
    }
    reset();
}

function isExistProduct(pn) {
    pn = formatString(pn);
    for (let p of products) {
        if (p.toLowerCase() == pn.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function isNullOrEmpty(str) {
    return str == null || str.trim() == "";
}


function formatString(str) {
    str = str.trim();
    return str;
}

function documentReady() {
    showProduct();
}

documentReady();