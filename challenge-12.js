(function() {
/*Envolva todo o conteúdo desse arquivo em uma IIFE.

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var eu = {
  name: "Matheus",
  lastname: "Silva",
  age: 20
};
console.log( 'Propriedades de person');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log(Object.keys(eu));

/*
Crie um array vazio chamado `books`.
*/
var books =[];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

books.push({name:'Harry potter', pages:250});
books.push({name:'crepusculo',pages:300});
books.push({name:'Fique rico',pages:400});

/*
Mostre no console todos os livros.
*/

console.log( '\nLista de livros:');
console.log(books);
/*
Remova o último livro, e mostre-o no console.
*/

var removido = books.pop();
console.log('\nLivro que está sendo removido:');
console.log(removido)
/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:' );
console.log(books)
/*
Converta os objetos que ficaram em `books` para strings.
*/

books = JSON.stringify(books);

console.log( '\nLivros em formato string:' );


/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:');

console.log(books);
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(var i = 0; i < books.length; i++ ) {
  for(var prop in books[i]){
    console.log(  prop + ':' + books[i][prop] );
  }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName  = ['M', 'A', 'T', 'H', 'E', 'U', 'S'];
console.log( '\nMeu nome é:' );
console.log(myName);
/*
Juntando todos os itens do array, mostre no console seu nome.
*/

nome= myName.join('');
console.log("meu nome é " +  nome);

nome= myName.reverse();
nome= myName.join('');
console.log( '\nMeu nome invertido é:' + nome  );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/

nome = myName.sort()
console.log( '\nAgora em ordem alfabética:' + nome);
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

})();
