

let url = 'http://jservice.io/api/categories?count=5'

let xhrttp = new XMLHttpRequest()

xhrttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let jsonData = JSON.parse(this.responseText);
        createButton(jsonData)
    }
};

xhrttp.open('GET', url, true);
xhrttp.send();

let createButton = (arr) => {
    let container = document.getElementById('container');
    for (let object of arr) {
        let createdButton = document.createElement('button')
        createdButton.setAttribute('categoryid', object.id)
        createdButton.innerText = object.title
        createdButton.addEventListener('click', loadCategories)
        container.insertBefore(createdButton, document.getElementById('demo'));
    }
};

function loadCategories(evt) {
    document.getElementById('answer').style.display = 'none'
    // console.log(evt.target.getAttribute('categoryid'));
    let url = 'http://jservice.io/api/clues?category=' + evt.target.getAttribute('categoryid')

    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonData = JSON.parse(this.responseText)
                question(jsonData[0].question)
                answer(jsonData[0].answer)
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
} 

function question(data) {
    document.getElementById('demo').innerHTML = data
}

function answer(data){
    document.getElementById('answer').innerHTML = data
}

function showAnswer(evt) {
    document.getElementById('answer').style.display = 'block' 
    console.log(evt);
}

const refreshButton = document.getElementById('nextQuest');
refreshButton.addEventListener('click', loadCategories)



