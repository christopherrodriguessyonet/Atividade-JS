function myReduce(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

Array.prototype.myReduce = myReduce;
const numeros = [1, 2, 3, 4];
const soma = numeros.myReduce((acc, num) => acc + num, 0);
console.log(soma);
