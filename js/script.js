console.log('connected...')

let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let jsonData = JSON.parse(this.responseText);
        document.getElementById('demo').innerHTML += jsonData[0].question;
    }
};

xhr.open('GET', 'http://jservice.io/api/random', true);
xhr.send();


