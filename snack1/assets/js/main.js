/*Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.*/

//array 

const zucchini = [
    {
        type: "zucchini 1",
        weigth: 300,
        length: 46
    },
    {
        type: "zucchini 2",
        weigth: 320,
        length: 48
    },
    {
        type: "zucchini 3",
        weigth: 340,
        length: 50
    },
    {
        type: "zucchini 4",
        weigth: 360,
        length: 52
    },
    {
        type: "zucchini 5",
        weigth: 380,
        length: 54
    },
    {
        type: "zucchini 6",
        weigth: 400,
        length: 56
    },
    {
        type: "zucchini 7",
        weigth: 420,
        length: 58
    },
    {
        type: "zucchini 8",
        weigth: 440,
        length: 60
    },
    {
        type: "zucchini 9",
        weigth: 460,
        length: 62
    },
    {
        type: "zucchini 10",
        weigth: 480,
        length: 64
    },
]

let sum = 0

zucchini.forEach(zucchina => {
    sum +=zucchina.weigth;
});

//console.log(`the total weigth is ${sum} grams`)
const kg = sum / 1000;
console.log(`the total weigth is ${kg} kg`)
