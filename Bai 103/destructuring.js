"use strict"

const restaurant = {
    name : 'Mường Thanh',
    location: 'Hà Nội , Thanh Hóa , Đà Nẵng',
    categories: ['VietNam' , 'Italian' ,'Organic' ,'Pizzeria'],
    starterMenu: ['Focaccia' , 'Bruschetta', 'Garlic', 'Bread' , 'Salad'],
    main: ['Pizza' , 'Pasta', 'Risotto'],
}

// Sử dụng destructuring trong object
const [first , second] = restaurant.categories;
console.log(first , second)

// Lấy value của mảng
const arr = [2 , 3 ,4];
const a = arr[0];
const b = arr[1];
const c = arr[2]

//console.log(a , b ,c)

// sử dụng destructuring trong mảng
const [x , y ,z] = arr;
console.log(x , y ,z)
console.log(arr)


// Nested destructuring
const nested = [2 ,3, [4 ,5]];
const [j , , i] = nested;
// console.log(j , i)
const [n, ,[m ,Lấy]] = nested;
console.log(n , Lấy, m)


// Defaule values : có thể lấy giá trị mặc định để nó không trả về giá trị undefine
const [p=1 , q=1 ,r=1] = [8 , 9];
console.log (p, q , r)