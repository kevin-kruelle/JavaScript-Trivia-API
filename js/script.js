console.log('connected...')

let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let jsonData = JSON.parse(this.responseText);
        question(jsonData[0].question);
        answer(jsonData[0].answer);
    }
};

xhr.open('GET', 'http://jservice.io/api/random', true);
xhr.send();


function question(categories){
    document.getElementById('demo').innerHTML = categories
};

function answer(categories){
    document.getElementById('answer').innerHTML = categories
}

