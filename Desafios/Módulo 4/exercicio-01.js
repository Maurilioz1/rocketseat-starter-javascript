var checaIdade = function (idade) {
    return new Promise(function (resolve, reject) {

        if (idade >= 18) {
            resolve();
        } else {
            reject();
        }
    });
}

checaIdade(20)
    .then(function () {

        function maior() {
            console.log('Maior que 18');
        }

        setTimeout(maior, 2000);
    })
    .catch(function () {

        function menor() {
            console.log('Menor que 18');
        }

        setTimeout(menor, 2000);
    });

