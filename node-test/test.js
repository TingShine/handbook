const obj = {
    foo: 'bar'
}
const objStr = obj.toString();      // 调用转化为字符串，但并不是JSON
const objJSON = JSON.stringify(obj);     // 将object转换为JSON格式
const obj2 = JSON.parse(objJSON);   // 将JSON转化为object格式
console.log(objJSON);    // false