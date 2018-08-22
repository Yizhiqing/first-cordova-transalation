// Select our element
var element = document.getElementById('tapme');


// Send an alert once it was tapped/clicked
element.addEventListener('click', function () {
    google.translate('test').then((result) => {
        alert('Hello there!' + result.result);
    });
});