# 基础语法

[[toc]]

## 输出打印

``` js
// 控制台输出，推荐使用
console.log("hello")

// 浏览器弹窗
alert("world")
```

## 定义变量

定义变量有三个关键字，`var`、`let`和`const`

### var

var是ES5以前的写法，会有一些变量提升的问题，现在不建议使用，它在浏览器端会挂载到全局对象window下面

``` js
var a = "hello";
var b = 26;
var c = false;
var d = {
    foo: 'bar'
}
var d = ["yes", "no"]
```

### let

ES6的新关键字let定义变量来替代var

``` js
let a = "hello";
let b = 26;
let c = false;
let d = {
    foo: 'bar'
}
let d = ["yes", "no"]
```

::: details let与var的区别
let的作用域是在函数作用域里面，不会出现变量提升的问题，变量在同个作用域内不可重复定义，可修改变量内容，例如:

``` js
let a = "hello";
a = "world";    // ok
let a = 56;     // error, 因为已经定义过a变量了

let b;  // 声明变量b
b = false;  // ok
function test() {
    let b = 36;    // ok,又定义了一个变量b，但是是在函数作用域中,与外部的b不相关
    console.log(b);
}
test();    // 36
```

:::

### const

ES6的新关键字const定义不可修改的变量,同样在作用域内不可重复定义某变量

``` js
const a = "hello";
a = "yes";  // no, 因为a变量内容不可修改;
const a = "hello";  // no, 因为a变量已经定义

// 但是，array和object特殊
const b = ["hello", "world"];
b[0] = "test";  // ok
console.log(b);  // ["yes", "world"]

const c = {
    foo: 'bar'
}
c.foo = 'go';      // ok
console.log(c.foo);     // "go"
```

::: details 为什么const定义不可修改的变量，但array和object能够修改里面的内容呢？

因为定义的array和object是引用，有点像c中的地址，所以例子中const定义的b和c其实是引用，我们不能修改b和c的地址内容，但是却能够修改其对应引用的数据，例如：

``` js
const b = ["hello", "world"];
b = ['yes'];    // no
const c = {
    foo: 'bar'
};
c = { go: 'where' };    // no
```
:::

## 条件判断

跟c语言语法类似，`!`代表非

- ! true = false;
- ! false = true;

### if语句

``` js
if () {} else {}
if () {} else if() {} else {}
```

::: warning 注意
if条件语句中NaN, null, undefined, 0会被强制转化为false
:::

### switch语句

与c语言的语法类似，这里不再赘述(switch, case, break, default)

## 循环

### for语句

与c语言类似

``` js
let a = [];
let sum = 0;
for(let i = 0; i<10; i++) {
    a[i] = i+1;
    sum += a[i];
};
console.log(sum, a);    // 自己试一下
```

::: details var的怪异之处
关于var的变量提升问题已经是前端人尽皆知的问题，有兴趣可以把实例中的let i = 0改成 var i = 0试一下
:::

::: tip
for语句也可拓展成for in形式，这也是更加普遍的用法

``` js
let a = ["hello", "world", "test"];
let b = { foo: 'bar', hello: 'world'};
for(let i in a) {
    console.log(a[i]);
}
for(let key in b) {
    console.log(key, b[key]);
}
```

:::

### while语句

与c语言类似，不再赘述（while， do while）

## 三元表达式

三元表达式在条件语句中可以减少很多不必要的代码量

- 语法： `布尔值 ? A : B`, 布尔值为真是返回A，假时返回B

``` js
const a = 20;
const b = a > 15 ? 'bigger' : 'smaller';
console.log(`${b} than 15`);    // bigger than 15
``` 