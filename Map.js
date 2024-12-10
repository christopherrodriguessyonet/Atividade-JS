function myMap(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

Array.prototype.myMap = myMap;
const numeros = [1, 2, 3];
const quadrados = numeros.myMap(num => num * num);
console.log(quadrados);
