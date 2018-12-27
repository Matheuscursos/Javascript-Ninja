(function(){
    'use strict';

    var regex = /\d/g;
    var name = 'math123eus';
    var result;

    while(result = regex.exec(name) !== null){
        console.log(result);
    }
})();
