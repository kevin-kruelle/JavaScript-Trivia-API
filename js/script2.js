function callOnCategoryData() {
    document.getElementById('category').style.display = 'none'
    let xhrttp = new XMLHttpRequest()

    xhrttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonData = JSON.parse(this.responseText);
            chooseCategory(jsonData[0].title )
        }
    };

    xhrttp.open('GET', 'http://jservice.io/api/categories', true);
    xhrttp.send();
}

let chooseCategory = function category(data) {
    document.getElementById('category').innerHTML = data
} 

function showCategory(evt) {
    document.getElementById('category').style.display = 'block'
}

callOnCategoryData();