# 对象 Object

对象在JavaScript中非常重要，函数也是一种对象，让我们去了解它

## ES6新特性

### 解构赋值

可以用以下方式对对象进行解构赋值, 这也是ES6的新特性

``` js
const obj = {
    foo: 'bar'
};
const { foo, a } = obj;
console.log(foo);   // 'bar'
console.log(a);     // undefined
```

同时，在定义对象时，如果key和value是一样的，可以简写

``` js
const key1 = 10;
const obj = {
    key1,       // key是'key1‘字符串，value是key1变量
    key2: key1
};
console.log(obj);   // { key1: 10, key2: 10 }
```

## JSON和对象Object

JSON是一种数据格式，而对象Object是属于JavaScript的数据结构，虽然两者很相似，都是以键值对的形式存在，但还是有不同之处

- JSON的数据格式更加严格, 字符串必须是双引号括起来`""`, 键只能是字符串

``` json
{
    "code": 200,
    message: '',    // error, message没有用双引号括起来， 使用了单引号
    "data": [
        {
            "username": "hello",
            "password": "world"
        }
    ]
}
```

- JSON和Object的转换

``` js
const obj = {
    foo: 'bar'
}
const objStr = obj.toString();      // 调用转化为字符串，但并不是JSON
const objJSON = JSON.stringify(obj);     // 将object转换为JSON格式
const obj2 = JSON.parse(objJSON);   // 将JSON转化为object格式
console.log(objStr === objJSON);    // false
```

## 原型链

进阶内容，以后再写……