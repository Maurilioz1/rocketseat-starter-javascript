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

    axios.get('https://api.github.com/users/' + inputText.nodeValue + '/repos')
        .then(function (response) {            
            var repositories = response.data;

            for (repository of repositories) {

                var liElement = document.createElement('li');
                var liText = document.createTextNode(repository.name);

                liElement.appendChild(liText);
                ulElement.appendChild(liElement);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

containerElement.appendChild(inputElement);
containerElement.appendChild(buttonElement);
containerElement.appendChild(ulElement);