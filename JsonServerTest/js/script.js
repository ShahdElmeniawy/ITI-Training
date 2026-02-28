let productsContainer = document.getElementById("products-container");

// Initial load of products
function getData() {
    let req = new XMLHttpRequest();
    req.open("GET", "http://localhost:3000/Products");
    req.send();

    req.addEventListener("readystatechange", function () {
        if (req.readyState === 4) {
            if (req.status == 200) {
                let myData = JSON.parse(req.response);
                display(myData);
            }
        }
    });
}


function display(list) {
    let container = "";
    for (let item of list) {
        container += `
        <div class="product-card">
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <h3 class="product-name">${item.name}</h3>
            <p class="product-price">$${item.price}</p>
            <p class="product-description">${item.description}</p>
            <p class="product-rating">Rating: ${item.rating}</p>
            <p class="product-category">Category: ${item.category}</p>
        </div>
        `;
    }
    document.getElementById("products-container").innerHTML = container;
}

function postData(name, price, description, rating, category, image, id) {
    // First check if product exists
    searchData(id, function (found) {
        if (found) {
            console.log(`Product with ID ${id} already exists.`);
            return;
        }

        // Create new product
        let newProduct = {
            "id": id,
            "name": name,
            "price": price,
            "description": description,
            "rating": rating,
            "category": category,
            "image": image
        };

        let req = new XMLHttpRequest();
        req.open("POST", "http://localhost:3000/Products");
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(newProduct));

        req.addEventListener("readystatechange", function () {
            if (req.readyState === 4) {
                if (req.status == 201) {
                    console.log("Product added successfully!");
                    getData(); // Refresh the list
                }
            }
        });
    });
}

function deleteData(id) {
    // First check if product exists
    searchData(id, function (found) {
        if (!found) {
            console.log(`Product with ID ${id} not found.`);
            return;
        }

        let req = new XMLHttpRequest();
        req.open("DELETE", `http://localhost:3000/Products/${id}`);
        req.send();

        req.addEventListener("readystatechange", function () {
            if (req.readyState === 4) {
                if (req.status == 200) {
                    console.log("Product deleted successfully!");
                    getData(); // Refresh the list
                }
            }
        });
    });
}

// Modified to accept a callback function for async handling
function searchData(id, callback) {
    let req = new XMLHttpRequest();
    req.open("GET", `http://localhost:3000/Products?id=${id}`);
    req.send();

    req.addEventListener("readystatechange", function () {
        if (req.readyState === 4) {
            if (req.status == 200) {
                let myData = JSON.parse(req.response);
                callback(myData.length > 0);
            } else {
                callback(false);
            }
        }
    });
}

function updateData(id, name, price, description, rating, category, image) {
    // First check if product exists
    searchData(id, function (found) {
        if (!found) {
            console.log(`Product with ID ${id} not found.`);
            return;
        }

        let updatedProduct = {
            "id": id,
            "name": name,
            "price": price,
            "description": description,
            "rating": rating,
            "category": category,
            "image": image
        };

        let req = new XMLHttpRequest();  
        req.open("PUT", `http://localhost:3000/Products/${id}`); 
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(updatedProduct)); 

        req.addEventListener("readystatechange", function () {
            if (req.readyState === 4) {
                if (req.status == 200) {
                    console.log("Product updated successfully!");
                    getData();
                }
            }
        });
    });
}


document.getElementById("add-product-btn").addEventListener("click", function () {
    postData("New Product", "250", "A new product description", "4.3", "New Category", "https://example.com/images/new_product.jpg", "7");
});

document.getElementById("delete-product-btn").addEventListener("click", function () {
    deleteData("1");
});

document.getElementById("update-product-btn").addEventListener("click", function () {
    updateData("2", "Updated Product", "10000", "An updated product description", "4.7", "Updated Category", "https://example.com/images/updated_product.jpg");
});
getData();