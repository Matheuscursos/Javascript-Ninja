(function() {
    'use strict'

    function myFuntion(name,lastName){
        this.fullName = name + ' ' + lastName;
        this.lastName = lastName;
    }
    myFuntion.prototype.fullName = function(){
      return this.name + ' ' + this.lastName;
    }
    var matheus = new myFuntion('matheus','silva');
    console.log(fernando.fullName);
})();
