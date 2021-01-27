## 基本数据类型

[[toc]]

### 字符串 String

字符串可用单引号或双引号括起来，例如'a'和"a"一样，也可以用反引符\`a\`(后面会讲)

``` js
let str1 = 'I';
let str2 = "am";
let str3 = `handsome`;
let str4 = str1 + " " + str2 + " " + str3;  // I am handsome
let str5 = `${str1} ${str2} ${str3}`;   // I am handsome
```

#### 类型转换 -> String

其他类型调用`.toString()`或`String(param)`即可

### 数字 Number

JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：

``` js
123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
```

#### 类型转换 -> Number

- `Number(param)`
- `Number.parseInt(param)`
- `Number.parseFloat(param)`
- 若param不规范，返回的仍是Number类型的NaN
- 若param为布尔类型，将转换为0或1

### 布尔值 Boolean

有true和false两个值

``` js
let isOk = true;
let isGo = false;
```

#### 类型转换 -> Boolean

调用`Boolean(param)`即可进行转换

- 数字类型，如果为0或NaN将转换为false，其余均为true
- 字符串类型，除了空字符串转换为false之外，其余均为true
- 对象类型，当对象存在或某属性存在时为true, Boolean({})为true
- 数组类型，均为true

::: tip 总结
在布尔类型转换中（包括条件判断强制转换）, 如果param是0，NaN，''，false，null或undefined时为false
:::

### 数组 Array

数组是有顺序的排列集合，里面可以是不同的数据结构的元素

``` js
let arr1 = [1, 2, 3];
let arr2 = ["hello", true, 20]
```

### 对象 Object

对象是一组由`键-值对`形式组成的无序组合

``` js
let obj = {
    key1: "hello world",
    key2: 25,
    key3: false
}
console.log(obj[key1])  // "hello world"
console.log(obj.key2)   // 25
```

### 时间 Date

获取当前系统时间，或定义一个时间

``` js
let now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳
```

### NULL和Undefined

`null`和`undefined`是相对特殊的数据结构，null代表空值，undefined代表没有被定义，两者是不一样的。

``` js
let obj = {
    a: "c"
}
obj.d = null;
console.log(obj.b)  // undefined
console.log(obj.d)  // null
```
