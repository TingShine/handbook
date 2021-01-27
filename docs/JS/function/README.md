# 函数 Function

函数是代码抽象的一种方式, 在JavaScript中函数是第一类对象

## 函数声明和调用

函数声明用`function`关键字

``` js
// 声明一个函数，名为firstFn，需要传入一个参数并赋值给printStr变量
function firstFn(printStr) {
    console.log(printStr);      // 函数作用域，这里是打印变量
}

// 函数的调用，函数名+()来调用
firstFn('hello world');  // 输出'hello world'
```

我们从上述例子可以看出函数声明后并不会运行，只有调用了才会运行

::: warning
大家可以尝试不传入参数，看看会报什么错误
:::

## 函数的返回值

函数如果没有明确的return或是`return;`语句，将会返回void(空值)

``` js
function secondFn() {
    return 25;
    console.log("Run after return.");   // 不会被调用，因为return后函数就终止了
}

// 使用receiver变量接收secondFn函数的返回值
const receiver = secondFn();    // 记住一定要加括号，如果没有加不会调用该函数，而是返回整个函数
console.log(receiver);      // 25
```

## 函数可赋值给变量

将函数赋值给变量时，可省略函数名，使用变量名去调用

``` js
let thirdFn = function() {};
thirdFn();  // 同样要用括号去调用
```

## ES6语法

[详细教程](https://es6.ruanyifeng.com/#docs/function)请自行查看

### 箭头函数

ES6 引入了箭头函数`() => {}`

- `()`里面的是参数，当参数只有一个时可省略`()`；`{}`里面的是函数表达式

``` js
// 以下这四个函数其实都是相同的，接收一个参数并返回它
const forthFn = function(arg1) { return arg1 };
const firthFn = (arg1) => { return arg1 };
const sixthFn = arg1 => { return arg1 };
const sevenFn = arg1 => arg1;   // 省略了{}, 表示返回值就是arg1
```

::: tip
相信你已经看到箭头函数的简洁性了，那么就请多使用它吧
:::

#### 箭头函数和function函数的区别

- 箭头函数没有this指针，这是重点, 所以也没有构造函数，不适合在属性中使用
- 箭头函数没有arguments参数

function函数中的this指的是调用函数的对象，而箭头函数里的this指向所在作用域
::: details 例子

``` js
globalThis.a = 20;
const obj = {
    a: "hello world",
    test1: function() {
        console.log(this.a);
    },
    test2: () => {
        console.log(this.a);
    }
}

obj.test1();    // "hello world"
obj.test2();    // 20;

```

:::

### 默认参数

有时，我们想要有默认参数，可以像下面一样声明函数

``` js
function test3(temp = 10) {
    return temp + 5;
}
console.log(test3());   // 15, 不会报错
console.log(test3(3));  // 8
```

### 剩余参数

由于箭头函数没有this，也就没有arguments参数，可以使用剩余参数

有时参数很多（无法预料个数），有很多不需要用到，就推荐使用剩余参数

``` js
function test4(arg1, ...args) {
    console.log(arg1, args);
}

test4("hello", 'a', 'b', 25);   // 输出"hello", ['a', 'b', 25]
```

::: tip 关于扩展运算符
扩展运算符（spread）是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列, 后面在数组和对象章节会用到
:::
