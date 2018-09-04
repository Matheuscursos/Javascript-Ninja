/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var  qualquer = [" matheus ", 19, {a : 1 }, function() {} ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
  return arr;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(qualquer[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function segundo(arr, index){
  return arr[index];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var  myarray = ['ninja', 52.2, true, [1,2, 'Matheus'], {b:2} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(segundo(myarray,0) );
console.log(segundo(myarray,1));
console.log(segundo(myarray,3) );
console.log(segundo(myarray,4) );


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
  var allBooks = {
      "Harry Potter" : {
        quantidadeDePaginas : 488,
        autor: 'John Resig & Bear Bibeault',
        editora: 'Novatec'
      },
      "O poder do habito" : {
        quantidadeDePaginas : 220,
        autor: 'Bruce Lwason & Remy ',
        editora: 'Alta books'
      },
      "A sutil arte de ligar o fodac" : {
        quantidadeDePaginas : 283,
        autor: 'Erick A. Meyer',
        editora: 'Bookman'
      }
  };


  return !bookName ? allBooks : allBooks[bookName];
/*Se "BookName" nao for passado vai retornar "allBooks", caso contrario vai retornar o "bookName"
  */

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(" O livro Harry Potter tem " + book("Harry Potter").quantidadeDePaginas  +  " Paginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(" O autor do livro Harry Potter é "  + book("Harry Potter").autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(" O livro Harry Potter foi publicado pela editora " + book("Harry Potter").editora);
