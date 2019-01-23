(function() {
	'use strict'

	function events(element, event, callback) {
		document.querySelector(element)
			.addEventListener(event, callback, false);
	}

	events('[data-js="link"]','click', function(event) {
		event.preventDefault();
		alert('clicou no link');
	});

	events('[data-js="div"]', 'click', function(event) {
		event.preventDefault();
		alert('clicou na div');
	});

	events('[data-js="span"]', 'click', function(event){
		event.preventDefault();
		alert('clicou no SPAN');
	})

})();
