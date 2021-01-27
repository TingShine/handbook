# 模块 Module

JavaScript 现在有两种模块。一种是 ES6 模块，简称 ESM；另一种是 CommonJS 模块，简称 CJS

- CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。语法上面，两者最明显的差异是，CommonJS 模块使用require()和module.exports，ES6 模块使用import和export

## ES6模块

导出使用`export`或`export default`, 记住导出的是引用而非值

导入使用`import`，具体使用可以查看ES6教程

- 记住，ESM是异步的，nodejs中默认使用CJS，要在package.json加上`"type": "module"`

``` js
// tip.js
export function test1(str) {
    console.log(str);
}
// 函数名test2无关重要，因为是default导出
export default function test2() {
    console.log("这是default导出");
}

// main.js
import { test1 } from './tip.js'  // 记得一定有个{}，命名要对应得上
import Hello from './tip.js'  // 接收default内容，可任意命名变量
test1("这是test1导入的函数");   // "这是test1导入的函数"
Hello();    // "这是default导出"
```

## CommonJS 模块

导出使用`exports.a =`或`module.exports =`

导入使用`require('package')`

- CJS是同步的，是值导出，require也可用于ES6模块

``` js
// tip.js
const test1 = 666;
// 导出的对象中有a
exports.a = 20;
// 如果有这个语句，其余exports失效，尝试注释下面语句看会出现什么
module.exports = {
    test: test1     // 外部能访问到的是test变量,test1函数名无关重要
}

// main.js
const test = require('./tip.js')  // 导入模块，赋值给变量test
console.log(test);  // 接收到的是对象, { test: 666 }
```

## ESM和CJS的区别

### 引用导出和值导出

- ESM是引用导出

``` js
// tip.js
let a = 10;
const addA = () => {
    a += 1;
}
export default {
    a: a,
    addA: addA
}

// main.js
import { a, addA } from './tip.js';
console.log(a);     // 10
addA();
console.log(a);     // 11
```

- CJS是值导出

``` js
// tip.js
let a = 10;
const addA = () => {
    a += 1;
}
module.exports =  {
    a: a,
    addA: addA
}

// main.js
const { a, addA } = require('./tip.js');
console.log(a);     // 10
addA();
console.log(a);     // 10
```
