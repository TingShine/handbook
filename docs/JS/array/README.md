# 数组 Array

## 拓展运算符（...）

``` js
const a = [1, 2, 3, 4];
console.log(...a);      // 1 2 3 4，可以看作被拆出来了
const b = [1, ...[2, 3, 4], 5];
console.log(b);     // [1, 2, 3, 4, 5]
```

## 常用API

以数组a为例子`const a = [1, 2, 3, 4, 5]`

### 数组长度 length

``` js
console.log(a.length);      // 5
```

### 遍历数组

#### for in

``` js
// i是索引
for(let i in a) { console.log(a[i]) }   // 1, 2, 3, 4, 5
```

#### for of

``` js
// val是数组元素
for(let val of a) { console.log(val) }   // 1, 2, 3, 4, 5
```

#### .forEach((value, index) => {})

本人较常用

``` js
// val是遍历时每一次遍历到的元素，index是对应的索引
a.forEach((val, index) => { console.log(val) })   // 1, 2, 3, 4, 5
```

### 删除元素 delete

``` js
delete a[2];    // 直接操作a数组
console.log(a);     // [1, 2, 4, 5]
```

### 切片 slice

切片函数slice是比较常用的, 返回切片出来的数组，参数为负数时从右边开始数

- .slice(start, end)

``` js
const b = a.slice(1, 3); 
const c = a.slice(3, -1);
console.log(a.slice(3));    // [4, 5], 从start位置到最后
console.log(b, c);      // [2, 3]   [4]
```

### 头部插入删除

``` js
a.shift();      // 删除
console.log(a);     // [2, 3, 4, 5]
a.unshift(6, 7);    // 插入，可同时插入多个
console.log(a);     // [6, 7, 2, 3, 4, 5]
```

### 尾部插入删除

``` js
a.pop();      // 删除
console.log(a);     // [1, 2, 3, 4]
a.push(6, 7);    // 插入，可同时插入多个
console.log(a);     // [1, 2, 3, 4, 6, 7]
```

### map函数

map函数返回处理后的数组

- .map((val, index) => {})

``` js
const b = a.map((val, index) => val + index);
console.log(b);     // [1, 3, 5, 7, 9]
```

### filter函数

filter函数筛选每一项，返回过滤后的数组，每一次的返回值只能为false或true

- .filter((val, index) => {})

``` js
const b = a.filter((val, index) =>  val > 3);
console.log(b);     // [4, 5]
```

### every函数

every函数要求每一次遍历返回值都为布尔值，只有所有返回值都为true时最后才会返回true，否则都为false

- .every((val, index) => {})

``` js
const b = a.every((val, index) =>  val > 3);
console.log(b);     // false
```

### 删除插入 splice

splice函数非常强大，但使用时需了解透彻

`splice(start: number, deleteCount?: number): number[]`

``` js
// splice直接操作数组a
a.splice(1, 2);     // 从索引1位置开始，删除两个元素
console.log(a);     // [ 1, 4, 5 ]
a.splice(2, 0, 6);  // 从索引1位置开始，删除0个元素，插入6
console.log(a)  // [ 1, 4, 6, 5 ]
```