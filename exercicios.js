// Lista de exemplos JavaScript para cada exercício

// 1. Exibir "Olá, mundo" no console
console.log("Olá, mundo");

// 2. Declarar uma variável e imprimir seu valor
const nome = "Lucas";
console.log(nome);

// 3. Somar dois números
function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3));

// 4. Verificar se um número é par ou ímpar
function parOuImpar(n) {
  return n % 2 === 0 ? "par" : "ímpar";
}
console.log(parOuImpar(5));

// 5. Converter string para número
const num = Number("42");
console.log(num, typeof num);

// 6. Calcular a média de 3 números
function media(a, b, c) {
  return (a + b + c) / 3;
}
console.log(media(5, 7, 9));

// 7. Criar um array e exibir seus valores
const arr = [1, 2, 3];
console.log(arr);

// 8. Acessar um elemento do array
console.log(arr[1]);

// 9. Adicionar item ao array
arr.push(4);
console.log(arr);

// 10. Remover item do array
arr.pop();
console.log(arr);

// 11. Criar um objeto simples
const pessoa = { nome: "Ana", idade: 25 };
console.log(pessoa);

// 12. Acessar propriedade de objeto
console.log(pessoa.nome);

// 13. Criar uma função simples
function ola() {
  console.log("Olá");
}
ola();

// 14. Função que soma dois números
function soma2(a, b) {
  return a + b;
}
console.log(soma2(10, 15));

// 15. Usar if/else para verificar idade
function podeDirigir(idade) {
  if (idade >= 18) return "pode";
  else return "não pode";
}
console.log(podeDirigir(17));

// 16. Usar switch para dias da semana
function diaDaSemana(n) {
  switch (n) {
    case 1:
      return "Dom";
    case 2:
      return "Seg";
    case 3:
      return "Ter";
    case 4:
      return "Qua";
    case 5:
      return "Qui";
    case 6:
      return "Sex";
    case 7:
      return "Sáb";
    default:
      return "Inválido";
  }
}
console.log(diaDaSemana(3));

// 17. Loop for de 1 a 10
for (let i = 1; i <= 10; i++) console.log(i);

// 18. Loop while
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// 19. Imprimir números pares de 1 a 20
for (let n = 2; n <= 20; n += 2) console.log(n);

// 20. Contar de 10 até 0
for (let n = 10; n >= 0; n--) console.log(n);

// 21. Criar função que retorna maior número
function maior(a, b) {
  return a > b ? a : b;
}
console.log(maior(3, 7));

// 22. Verificar se uma string está vazia
function vazia(s) {
  return s.trim() === "";
}
console.log(vazia("  "));

// 23. Concatenar strings
const s = "oi" + " mundo";
console.log(s);

// 24. Converter string para maiúsculo
console.log("abc".toUpperCase());

// 25. Contar caracteres de uma string
console.log("JavaScript".length);

// 26. Criar array com números e somar todos
const nums = [1, 2, 3, 4];
console.log(nums.reduce((a, b) => a + b, 0));

// 27. Encontrar maior número em array
console.log(Math.max(...nums));

// 28. Encontrar menor número
console.log(Math.min(...nums));

// 29. Inverter array
console.log([...nums].reverse());

// 30. Copiar array
const copia = [...nums];
console.log(copia);

// 31. Filtrar números pares de um array
console.log(nums.filter(x => x % 2 === 0));

// 32. Usar map para dobrar valores
console.log(nums.map(x => x * 2));

// 33. Usar reduce para somar array
console.log(nums.reduce((a, b) => a + b, 0));

// 34. Ordenar array crescente
const desord = [4, 1, 3, 2];
console.log([...desord].sort((a, b) => a - b));

// 35. Ordenar array decrescente
console.log([...desord].sort((a, b) => b - a));

// 36. Remover duplicados de array
const dup = [1, 2, 2, 3, 3];
console.log([...new Set(dup)]);

// 37. Verificar se valor existe no array
console.log(nums.includes(3));

// 38. Encontrar índice de elemento
console.log(nums.indexOf(3));

// 39. Criar função arrow
const dobrar = x => x * 2;
console.log(dobrar(5));

// 40. Função com parâmetro padrão
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}`;
}
console.log(saudacao());

// 41. Desestruturar objeto
const { nome: n, idade: idadePessoa } = pessoa;
console.log(n, idadePessoa);

// 42. Desestruturar array
const [a, b] = nums;
console.log(a, b);

// 43. Usar spread operator
const arr2 = [...nums, 5];
console.log(arr2);

// 44. Clonar objeto
const p2 = { ...pessoa };
console.log(p2);

// 45. Merge de objetos
const c = { ...pessoa, cidade: "SP" };
console.log(c);

// 46. Converter objeto em array
const entries = Object.entries(pessoa);
console.log(entries);

// 47. Converter array em objeto
const objFromArr = Object.fromEntries([ ["x", 1], ["y", 2] ]);
console.log(objFromArr);

// 48. Criar função recursiva (fatorial)
function fatorial(n) {
  return n <= 1 ? 1 : n * fatorial(n - 1);
}
console.log(fatorial(5));

// 49. Fibonacci
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

// 50. Verificar palíndromo
function palindromo(word) {
  const w = word.toLowerCase().replace(/\W/g, "");
  return w === w.split("").reverse().join("");
}
console.log(palindromo("arara"));

// 51. Contar vogais em string
function contarVogais(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(contarVogais("teste"));

// 52. Capitalizar primeira letra
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizar("javascript"));

// 53. Remover espaços extras
function trimTodos(str) {
  return str.replace(/\s+/g, " ").trim();
}
console.log(trimTodos("  a   b  "));

// 54. Contar palavras
function contarPalavras(str) {
  return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
}
console.log(contarPalavras("um dois três"));

// 55. Validar email simples
function validaEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(validaEmail("x@y.com"));

// 56. Gerar número aleatório
console.log(Math.floor(Math.random() * 100) + 1);

// 57. Criar jogo de adivinhação
function adivinhar(chute) {
  const alvo = 7;
  return chute === alvo ? "acertou" : "errou";
}
console.log(adivinhar(7));

// 58. Simular dado (1–6)
console.log(Math.floor(Math.random() * 6) + 1);

// 59. Criar timer com setTimeout
setTimeout(() => console.log("timeout"), 500);

// 60. Usar setInterval
let c2 = 0;
const id = setInterval(() => {
  console.log(c2++);
  if (c2 === 3) clearInterval(id);
}, 100);

// 61. Parar interval
// Utiliza clearInterval(id) no bloco acima.

// 62. Manipular DOM (selecionar elemento)
const el = document.querySelector("body");
console.log(el);

// 63. Alterar texto HTML
if (el) el.textContent = "Olá DOM";

// 64. Alterar estilo CSS via JS
if (el) el.style.backgroundColor = "lightblue";

// 65. Criar botão dinamicamente
const btn = document.createElement("button");
btn.textContent = "Clique";
document.body?.appendChild(btn);

// 66. Evento de clique
btn.addEventListener("click", () => alert("clicou!"));

// 67. Evento de teclado
document.addEventListener("keydown", e => console.log("tecla", e.key));

// 68. Criar formulário simples
// no HTML:
// <form id="f"><input id="i" /><button>OK</button></form>
const form = document.getElementById("f");

// 69. Validar formulário
form?.addEventListener("submit", e => {
  e.preventDefault();
  const v = (document.getElementById("i") as HTMLInputElement).value;
  if (!v) alert("Obrigatório");
});

// 70. Mostrar alerta com dados do form
form?.addEventListener("submit", e => {
  e.preventDefault();
  alert("enviado");
});

// 71. Trabalhar com Promises
const p = new Promise((res, rej) => setTimeout(() => res("ok"), 100));
p.then(console.log);

// 72. Criar Promise manual
function espera(ms) {
  return new Promise(res => setTimeout(res, ms));
}
espera(100).then(() => console.log("passou"));

// 73. Usar async/await
async function testeAsync() {
  await espera(10);
  return "feito";
}
testeAsync().then(console.log);

// 74. Consumir API com fetch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(r => r.json())
  .then(console.log);

// 75. Tratar erro com try/catch
async function rodar() {
  try {
    await Promise.reject("erro");
  } catch (e) {
    console.error(e);
  }
}
rodar();

// 76. Criar classe
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome);
  }
}
const a = new Animal("Rex");
a.falar();

// 77. Usar herança
class Cachorro extends Animal {
  latir() {
    console.log("Au");
  }
}
new Cachorro("Bolt").latir();

// 78. Criar método estático
class MathUtils {
  static soma(a, b) {
    return a + b;
  }
}
console.log(MathUtils.soma(3, 4));

// 79. Encapsulamento com getters/setters
class PessoaEncapsulada {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(v) {
    this._nome = v;
  }
}
const p3 = new PessoaEncapsulada("João");
p3.nome = "José";
console.log(p3.nome);

// 80. Criar módulo JS
// em modulo.js: export function add(a,b){ return a+b; }
// em main.js: import {add} from './modulo.js'; console.log(add(2,2));

// 81. Exportar/importar funções
// Mesma explicação do item 80.

// 82. Manipular JSON
const json = JSON.stringify(pessoa);
console.log(json);
console.log(JSON.parse(json));

// 83. Salvar dados no localStorage
localStorage.setItem("chave", "valor");

// 84. Ler dados do localStorage
console.log(localStorage.getItem("chave"));

// 85. Criar To-Do List completa
const tarefas = [];
function adicionarTarefa(text) {
  tarefas.push({ text, feito: false });
}
function marcarFeito(i) {
  if (tarefas[i]) tarefas[i].feito = true;
}
adicionarTarefa("test");
console.log(tarefas);

// 86. Criar contador com persistência
let cont = Number(localStorage.getItem("cont") || 0);
cont++;
localStorage.setItem("cont", String(cont));
console.log(cont);

// 87. Criar sistema de login fake
function loginFake(user, pass) {
  return user === "admin" && pass === "123";
}
console.log(loginFake("admin", "123"));

// 88. Criar debounce function
function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// 89. Criar throttle function
function throttle(fn, ms) {
  let pronto = true;
  return (...args) => {
    if (!pronto) return;
    pronto = false;
    fn(...args);
    setTimeout(() => (pronto = true), ms);
  };
}

// 90. Criar função curry
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}
const somaC = curry((a, b, c) => a + b + c);
console.log(somaC(1)(2)(3));

// 91. Criar deep clone
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
console.log(deepClone({ x: 1, y: { z: 2 } }));

// 92. Implementar busca binária
function buscaBin(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) return mid;
    if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(buscaBin([1, 3, 5, 7], 5));

// 93. Ordenação (bubble sort)
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}
console.log(bubbleSort([5, 1, 4, 2]));

// 94. Ordenação (quick sort)
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const equal = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...equal, ...quickSort(right)];
}
console.log(quickSort([5, 1, 4, 2]));

// 95. Criar mini framework simples
class MiniFrame {
  constructor(root) {
    this.root = root;
  }
  render(html) {
    this.root.innerHTML = html;
  }
}
const mf = new MiniFrame(document.body);
mf.render("<h1>ok</h1>");

// 96. Criar observer pattern
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}
const subject = new Subject();
subject.subscribe(data => console.log("notified", data));
subject.notify(1);

// 97. Criar event emitter
class Emitter {
  constructor() {
    this.events = {};
  }
  on(event, fn) {
    (this.events[event] = this.events[event] || []).push(fn);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new Emitter();
emitter.on("x", v => console.log(v));
emitter.emit("x", 42);

// 98. Criar sistema de rotas simples
const rotas = { "#home": "Home", "#sobre": "Sobre" };
window.addEventListener("hashchange", () => console.log(rotas[location.hash] || "404"));

// 99. Criar SPA básica
if (document.body) {
  document.body.innerHTML = `<nav><a href="#home">home</a><a href="#sobre">sobre</a></nav><div id="app"></div>`;
  const app = document.getElementById("app");
  window.addEventListener("hashchange", () => {
    if (app) app.textContent = rotas[location.hash] || "404";
  });
  window.dispatchEvent(new Event("hashchange"));
}

// 100. Criar app consumindo API real (ex: clima)
async function clima(cidade) {
  const apiKey = "SEU_API_KEY";
  const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`);
  const data = await resp.json();
  console.log(data);
}
