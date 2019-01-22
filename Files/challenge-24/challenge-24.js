(function(win, doc) {
	'use strict';
	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:
	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;
	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/
	var $tela = doc.querySelector('[data-js="tela"]');
	var $numbers = doc.querySelectorAll('[data-js="button-number"]');
	var $ce = doc.querySelector('[data-js="button-ce"]');
	var $operation = doc.querySelectorAll('[data-js="button-operation"]');
	var $equal = doc.querySelector('[data-js="button-equal"]')

	function initialize() {
		initEvents();
	}

	function initEvents() {
		Array.prototype.forEach.call($numbers, function(button) {
			button.addEventListener('click', ClickNumber, false);
		});
		Array.prototype.forEach.call($operation, function(button) {
			button.addEventListener('click', ClickOperation, false);
		});
		$ce.addEventListener('click', limpaTela, false);
		$equal.addEventListener('click', resultado, false);
	}

	function ClickOperation() {
		$tela.value = removeLastItem($tela.value);
		$tela.value += this.value;
	}

	function isLastItemAnOpretation(number) {
		var operation = getOperation();
		var lastItem = number.split('').pop();
		return operation.some(function(operator) {
			return operator === lastItem;
		});
	}

	function removeLastItem(string) {
		if (isLastItemAnOpretation(string))
			return string.slice(0, -1);
		return string;
	}

	function ClickNumber() {
		$tela.value += this.value;
	}

	function limpaTela() {
		$tela.value = 0;
	}

	function resultado() {
		$tela.value = removeLastItem($tela.value);
		var allValues = $tela.value.match(getRegexOperation());
		$tela.value = allValues.reduce(calculateAllValues);
	}

	function getOperation() {
		return Array.prototype.map.call($operation, function(button) {
			return button.value;
		});
	}

	function getRegexOperation() {
		return new RegExp('\\d+[' + getOperation().join('') + ']?', 'g');
	}

	function calculateAllValues(acumulado, atual) {
		var firstValue = acumulado.slice(0, -1);
		var operador = acumulado.split('').pop();
		var lastValue = removeLastItem(atual);
		var lastOperator = getLastOperator(atual)
		return doOperation(operador, firstValue, lastValue) + lastOperator;
	}

	function getLastOperator(value) {
		return isLastItemAnOpretation(value) ? value.split('').pop() : '';
	}

	function doOperation(operador, firstValue, lastValue) {
		switch (operador) {
			case '+':
				return Number(firstValue) + Number(lastValue);
			case '-':
				return Number(firstValue) - Number(lastValue);
			case '*':
				return Number(firstValue) * Number(lastValue);
			case '÷':
				return Number(firstValue) / Number(lastValue);
		}
	}

	initialize();

})(window, document);
