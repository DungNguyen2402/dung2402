let a = 999;
let b = 111;

const obj = {a : 24 , b: 5 ,c: 10};
// Phải có dấu ngoặc đơn để nó thay đổi đc giá trị
({a , b} = obj)
console.log(a ,b)