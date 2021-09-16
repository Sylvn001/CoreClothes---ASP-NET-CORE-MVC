var create = {

    save: function () {

        let name = document.getElementById("productName").value;
        let price = document.getElementById("productPrice").value;
        let stock = document.getElementById("productStock").value;
        let category = document.getElementById("productCategory").value;

        let data = {
            name,
            price,
            stock,
            category
        }

        HTTPClient.post("Product/Store", data)
            .then(r => {
                return r.json()
            })
            .then(r => {
                alert(r.msg);
            })
            .catch((e) => {
                console.log("Error: " + e)
            });

    },
}