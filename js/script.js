console.log('connected...')
function callOnData() {
    document.getElementById('answer').style.display = 'none'
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
}


function question(data){
    document.getElementById('demo').innerHTML = data
};

function answer(data){
    document.getElementById('answer').innerHTML = data
}

function showAnswer(evt) {
    document.getElementById('answer').style.display = 'block' 
    console.log(evt);
}

const refreshButton = document.getElementById('nextQuest');
refreshButton.addEventListener('click', callOnData)

callOnData();

