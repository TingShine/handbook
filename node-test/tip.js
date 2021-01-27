const test1 = 666;

// 导出的对象中有a
exports.a = 20;

// 如果有这个语句，其余exports失效，尝试注释下面语句看会出现什么
module.exports = {
    test: test1     // 外部能访问到的是test变量,test1函数名无关重要
}