function myFilter(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.myFilter = myFilter;
const numeros = [1, 2, 3, 4];
const pares = numeros.myFilter(num => num % 2 === 0);
console.log(pares);
