let products = ["IP 6s", "Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4"];

function showProduct() {
    let body = document.getElementById("tbProduct");
    body.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        body.innerHTML += `
                    <tr id='tr_${i}'>
                        <td>${products[i]}</td>
                        <td>
                            <a href="javascript:;" class="btn btn-success" onclick='changeProduct(${i})'>Edit</a>
                            <a href="javascript:;" class="btn btn-success" onclick='getProduct(${i})'>Update</a>
                            <a href="javascript:;" id='btn_${i}_1' class="btn btn-success" onclick='ModifyProduct(${i})'>InlineUpdate</a>
                            <a href="javascript:;" id='btn_${i}_2' class="btn btn-warning d-none" onclick='SaveProduct(${i})'>Save</a>
                            <a href="" class="btn btn-warning">Delete</a>
                        </td>
                    </tr>
        `;
    }
}

function reset() {
    document.getElementById("productName").value = "";
    document.getElementById("id").value = "-1";
    document.getElementsByClassName('add-product')[0].children[2].innerText = "Add";
}

function addProduct() {
    let pn = document.getElementById("productName").value;
    if (!isNullOrEmpty(pn)) {
        if (!isExistProduct(pn)) {
            let id = parseInt(document.getElementById("id").value);
            if (id != -1) {
                products[id] = pn;
            } else {
                products.push(pn);
            }

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

function changeProduct(oldIndex) {
    if (oldIndex >= 0 && oldIndex < products.length) {
        let newName;
        do {
            newName = prompt('Enter product name:');
        }
        while (isNullOrEmpty(newName) || isExistProduct(newName))
        products[oldIndex] = newName;
        showProduct();
    }
}

function getProduct(id) {
    document.getElementById("productName").value = products[id];
    document.getElementsByClassName('add-product')[0].children[2].innerText = "Update";
    document.getElementById("id").value = id;
}

function ModifyProduct(id) {
    let tr = document.getElementById(`tr_${id}`).children[0];
    let oldName = tr.innerText;
    tr.innerHTML = `<input id="pn_${id}" value="${oldName}">`;
    document.getElementById(`btn_${id}_1`).classList.add('d-none');
    document.getElementById(`btn_${id}_2`).classList.remove('d-none');
}

function SaveProduct(id) {
    products[id] = document.getElementById(`pn_${id}`).value;
    let tr = document.getElementById(`tr_${id}`).children[0];
    tr.innerHTML = products[id];
    document.getElementById(`btn_${id}_1`).classList.remove('d-none');
    document.getElementById(`btn_${id}_2`).classList.add('d-none');
}

function documentReady() {
    showProduct();
}

documentReady();