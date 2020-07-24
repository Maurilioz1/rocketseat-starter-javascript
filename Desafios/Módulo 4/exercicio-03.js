var containerElement = document.querySelector('body');

var ulElement = document.createElement('ul');

var inputElement = document.createElement('input');
inputElement.setAttribute('placeholder', 'Usuario GitHub');

var buttonElement = document.createElement('button');
var buttonText = document.createTextNode('Buscar');
buttonElement.appendChild(buttonText);

buttonElement.onclick = function () {
    var valueInput = document.querySelector('input').value;
    var inputText = document.createTextNode(valueInput);

    carregando()

    axios.get('https://api.github.com/users/' + inputText.nodeValue + '/repos')
        .then(function (response) {
            ulElement.innerHTML = "";

            var repositories = response.data;

            for (repository of repositories) {

                var liElement = document.createElement('li');
                var liText = document.createTextNode(repository.name);

                liElement.appendChild(liText);
                ulElement.appendChild(liElement);
            }
        })
        .catch(function (error) {
            if (error.response.status === 404) {
                ulElement.innerHTML = "";

                var liElement = document.createElement("li");
                var liText = document.createTextNode("O usuário não existe");
                liElement.style.color = '#F00';

                liElement.appendChild(liText);
                ulElement.appendChild(liElement);
            }
        });
}

function carregando() {
    ulElement.innerHTML = "";

    var liElement = document.createElement("li");
    var liText = document.createTextNode("Carregando...");

    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
}

containerElement.appendChild(inputElement);
containerElement.appendChild(buttonElement);
containerElement.appendChild(ulElement);