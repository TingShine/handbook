# 介绍

本手册目的是为了便于自己快速查阅知识点和体系结构，温习之前的技术难点和总结

::: tip 联系
手册若有错误，请联系791405318@qq.com进行勘误
:::

## JavaScript

[JS教程](/JS)

### JavaScript与ECMAScript的关系

JavaScript有很多版本，其中最大变化的版本是ES6（ECMAScript2015的简写），包括箭头函数等重大更新，这些新特性无疑给JavaScript带来更加强大的功能，但是旧的浏览器有些不能兼容（例如IE9，10）所以有时需要靠Babel转译成ES5以前版本来兼容浏览器

::: tip
总而言之，当看到ECMAScript的时候，你把它看成JavaScript就行了，现在有ES7，ES2020等版本，但是最大更新的还是ES6
:::

### JavaScript和Nodejs的关系

Nodejs就是将JavaScript和C语言中一些IO的库等结合起来，运行在Chrome的V8引擎的后台语言，语法用的还是JavaScript的

::: details 小故事
在2009年，Ryan（大佬）正式推出了基于JavaScript语言和V8引擎的开源Web服务器项目，命名为Node.js。虽然名字很土，但是，Node第一次把JavaScript带入到后端服务器开发，加上世界上已经有无数的JavaScript开发人员，所以Node一下子就火了起来。（摘自廖雪峰网站）
:::

### JavaScript的优势

最开始JavaScript的作用是作为网页的脚本，但随着Nodejs的发展，使得它有了前所未有的前景。

- 前端方面，有三大框架React，Vue和Angular占据着前端的大壁江山，使得前端开发逐渐工程化也能完成很多复杂的任务;

- 后台方面，使用Nodejs来搭建高并发的后台也越来越流行，Express、Koa2、egg、Nextjs等后台的市场占有率也越来越高;

- 跨端能力，JavaScript有非常强大的跨端能力，在移动端方面Flutter能同时运行在Android和IOS上，PC客户端上Electron能同时运行在Windows、Linux和MacOS上，强大的跨端能力将会是未来的发展方向之一。

::: tip
阿里2020年双十一的后台已经采用Nodejs重构(高并发），足以见还是有很大前景的
:::