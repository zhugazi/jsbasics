// 第一课作用域区分
/**
 * 一.作用域:浏览器给js的一个生存环境 (栈内存)。
 * 二.作用域链:js中的关键字var和fuanction都可以提前声明和定义，提前声明和定义的放在我们的内存地址 (堆内存)中。
     然后js从上到下逐行执行，遇到变量就去内存地址查找是否存在这个变量，如果有就使用，没有就继续向父级作用域
     查找直到window下结束，这种查找机制叫做作用域链。

 * 全局变量
 * var 声明变量如果是在最外层则表示是全局变量
 * a = 0 不加var 或者 let 或者const声明 则表示当前变量挂载在Windows对象上，亦表示全局变量
 */
var i = 0
a = 0

// console.log('i === ', i)
// console.log('a === ', a)
/**
 * 属于 ECMAScript 的写法
 * let 用来声明变量
 * const 用来声明常量(表示不可变得数据)
 */
let b = 0
const c = 0

/**
 * let const 和 var的区别
 * 这里涉及到了声明量提升的问题
 * var 实际上是在一个作用域中的全局变量
 * let 和 const 的作用域 自声明的地方开始往下生效
 * let 是可变的变量声明
 * const 是不可变的常量声明，但是由于js是弱语言所以如果是用const声明的数组和objct里边的内容是可以修改的
 */
function func () {
  // console.log(a) // undefiend
  var a = 3
  // console.log(a) // 3
  // console.log(b) // 会报错
  // console.log(c) // 会报错
  let b = 1
  b = 2
  // console.log(b) // 2
  const c = 2
  // c = 3 // 报错不可以这么修改, 因为const声明是常量不是变量，不可以直接修改值
  // console.log(c)
  const o = {
    a: '1'
  }
  o.a = 2
  // console.log(o.a) // 2
}
func()

// console.log('b ===', b)
// console.log('c ===', c)
/**
 * 函数声明 也属于声明和定义的一中
 * function 和 箭头函数
 */

 function fun1 () {
   return '111'
 }
 const fun2 = () => {
   return '222'
 }
 // 也可以写成这样
 const fun3 = () => '333'
//  console.log('fun1 ===', fun1())
//  console.log('fun2 ===', fun2())
//  console.log('fun3 ===', fun3())

// this 的作用域
/**
 * this是js的一个关键字，指定一个对象然后去替代它。
 * 函数内的this和函数外的this，函数内的this指向行为发生的主体（如果是使用的function 声明的函数则这个this指向的是当前函数，如果使用的箭头函数则指向最外层的主体或者Windows对象）。
 * 函数外的this都指向window没有意义。
 */

 var obj = {
   name: 'ceshi',
   play: () => {
     // 这个时候因为用的是箭头函数所以他的this指向是最外层的对象
     console.log('this = ', this)
   },
   play2: function () {
     // 这个时候使用的是function函数所以他的对象指的是当前的主体对象
     console.log('function = ', this)
   },
   play3: function () {
     function cFun () {
       console.log('cFun = ', this)
     }
     cFun()
   },
   play4: () => {
    function cFun () {
      console.log('cFun2 = ', this)
    }
    return cFun
   }
 }

//  obj.play() // 指向最外层的主体，也是Windows对象
//  obj.play2() // 指向当前的调用主体也就是obj这个对象
//  obj.play3() // 指向当前的调用主体也就是cFun这个方法
// obj.play4()() // 指向当前的调用主体也就是cFun这个方法(因为使用了闭包函数，这个函数体所打印的this对象指的就是当前运行环境下的函数方法或者windows)



/**
 * 引用指向和赋值
 */
var o = {
  name: 'ceshi'
}

// 这个是赋值o这个对象的数据，所以_o这个对象的数据源指向是o的数据源修改_o会导致o的原有数据被修改
var _o = o

// console.log('=====', _o.name) // 输出是ceshi
// _o.name = '张晓明'
// console.log('=====', _o.name) // 输出是张晓明
// console.log('=====', o.name) // 输出是张晓明

var a = {
  name: 'ceshi'
}
// 这个时候其实是用的js的内置方法，assign是js的对象扩展方法，可以把另一个对象数据的值拷贝到这个对象中，所以他的引用指向是当前的对象不再是引用上一个对象的值，所以修改之后不会被覆盖掉
var _a = Object.assign({}, {}, a)

// console.log(_a.name)
// _a.name = '张晓明'
// console.log(_a.name)
// console.log(a.name)
