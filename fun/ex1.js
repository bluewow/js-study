const ex1 = (str) => console.log(str.split("").reverse().join(""));
// ex1("hello");

const ex2 = (list) => console.log(list.reduce((a, b) => (a > b ? a : b), 0));
ex2([3, 4, 1, 2, 5]);
