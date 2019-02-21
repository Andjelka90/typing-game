const A = document.getElementById('a')
const B = document.getElementById('b')
const C = document.getElementById('c')
const D = document.getElementById('d')
const E = document.getElementById('e')
const F = document.getElementById('f')
const G = document.getElementById('g')
const H = document.getElementById('h')
const I = document.getElementById('i')
const J = document.getElementById('j')
const K = document.getElementById('k')
const L = document.getElementById('l')
const M = document.getElementById('m')
const N = document.getElementById('n')
const O = document.getElementById('o')
const P = document.getElementById('p')
const Q = document.getElementById('q')
const R = document.getElementById('r')
const S = document.getElementById('s')
const T = document.getElementById('t')
const U = document.getElementById('u')
const V = document.getElementById('v')
const W = document.getElementById('w')
const X = document.getElementById('x')
const Y = document.getElementById('y')
const Z = document.getElementById('z')


// niz
const random = document.getElementById('random')
const start = document.getElementById('pocetakIgre')
const slovo = document.getElementById('slovo')
const niz = [];

for (let i = 0; i < 26; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * 26) + 1;

    for (var y = 0; y < 26; y++) {
        if (niz[y] == randomNumber) {
            add = false; //provera da li se ponavljaju brojevi

        }
    }
        if (add) {
        niz.push(randomNumber)
        } else {
        i--;
    }

}
