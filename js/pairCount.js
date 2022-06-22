console.clear();
/*
const input = '361008863024251240112601705515294694062613036204073307724184152890580429122575193473194074179638353519071970423129392496150045395137407531822306558977272750536';

function pairCount(str) {
    const ats = Array(100).fill(0);  // masyvo susikurimas
    for (let i = 0; i < str.length - 1; i++) {
        const current = str[i];
        const next = str[i + 1];
        const index = parseInt(next + current);

        ats[index]++;

    }
    return ats;
}

function max(list) {
    const biggest = [...list].sort((a, b) => b - a)[0];
    const ats = [];
    for( let i=0; i < list.length; i++ ) {
        if (list[i] === biggest){
            ats.push(i);
        }
    }return ats;
}
const pairs = pairCount(input)
const maxList= max(pairs)

console.log(pairs);
console.log(maxList);
*/


/*
i < str.length
1234
i=0 c=1 n=2
i1 c=2 n=3
i=2 c=3 n=4
i=3 c=4 n=undeff
*/
/*
i < str.length - 1 
1234
i=0 c=1 n=2
i1 c=2 n=3
i=2 c=3 n=4
*/
