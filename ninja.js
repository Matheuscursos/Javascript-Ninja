(function(win,doc) {
    'use strict'
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');

    var $button = doc.querySelector('button');
    button.addEventListener('click',function(event){
     $inputUsername.value = "";
     $inputPassword.value = "";
        event.preventDefault();
        console.log('Click no botao');
    }, false);

    $inputUsername.addEventListener('click',function(){
        alert('Serio');
    },false);

})(window,document);
