var create = {

    save: function () {

        let name = document.getElementById("categoryName").value;

        let data = {
            name
        }

        HTTPClient.post("Category/Store", data)
            .then(r => {
                return r.json()
            })
            .then(r => {
                alert(r.msg);
            })
            .catch((e) => {
                console.log("Error: " +e)
            });

    },
}