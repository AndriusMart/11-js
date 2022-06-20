/*
console.clear();

const n1 = '77';
const n2 = 5;
*/

function suma(a, b) {
    const initialAsize = ('' + a).length;
    const initialBsize = ('' + b).length;

    a = parseInt(a); // atrenka skaicius iki pirmo string zenklo.
    b = parseInt(b);

    const afterAsize = ('' + a).length; // skaicius pavarcia i stringa ir apskaiciuoja jo ilgi.
    const afterBsize = ('' + b).length;

    if (isNaN(a) || initialAsize !== afterAsize) {
        return 'ERROR: Pirmas parametras yra ne tikras skaicius';
    }
    if (isNaN(b) || initialBsize !== afterBsize) {
        return 'ERROR: Antras parametras yra ne tikras skaicius';
    }

    return a + b;
}

module.exports = suma;

/*
const ats = suma(n1, n2);
console.log(ats);
*/