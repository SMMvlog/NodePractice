// const skr = {
// 	area : (a) => (a*a),
// 	prameter : (a) => (4*a)
// }

const skr = require('./square.js');

const squar = (a) => {
	console.log(`the value of a is ${a} and the area is ` + skr.area(a));
	console.log(`the value of a is ${a} and the area is ` + skr.prameter(a))
}

console.log(__filename)
console.log(__dirname)

squar(5);