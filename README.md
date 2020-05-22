# fed-e-task-01-01
## 题目1
答案：10

解析：在ES6出现前作用域包含全局作用域与函数作用域，块级作用域的概念是在ES6中新增加的，使用let来实现。题目原本的目的是想为a[i]赋对应的i值，但是var存在变量提升的情况，定义的i真实的作用域是在全局，当循环结束后，i值已经自增为10，此时调用任何一个a[i]()，打印的结果都是10。如果想实现输出对应的i值，我们可以有几种处理方式。方法一：使用let声明i，此时i处于块级作用域。方法二：使用闭包。

## 题目2
答案：无法正确打印，控制台报引用错误。在if中使用了let声明tmp，创造了块级作用域。但是let不存在变量提升，所以执行console.log时tmp还未被初始化，语句执行报错。

## 题目4
- var、let、const 都是用来声明变量的关键字
- var 存在变量提升的现象，先调用后声明不会报错。let/const必须在声明之后调用。
- const是一个常量，与let的区别是它是只读的。const的只读概念为声明后不可指向新内存地址，所以属性值是可以修改的。

## 题目5
答案：20

解析：obj.fn中使用了箭头函数，箭头函数中this的指向是不能改变的，此时this指向当前作用域，即obj。故this.a值为obj的a，而不是window.a

## 题目6
解答：Symbol是ES6中新增加的原始数据类型，特点是表示一个独一无二的值，主要的作用的是为对象添加独一无二的属性名，避免属性覆盖问题。

## 题目7
解答：浅拷贝是增加了一个指针，指向了对象的内存地址。拷贝的对象改变，复制的对象也会改变。深拷贝是开辟一个新的内存地址和新的指针，拷贝完成后，复制对象与拷贝对象不会互相影响。

## 题目8
解答：JS本质是单线程的，为了解决耗时过长的函数导致的阻塞，使用异步编程，让程序先执行，待有返回时，调用callback将任务插入到队列中执行。Event loop负责监听调用栈和消息队列，确定事件的执行顺序。同步任务在主线程上排队执行，而异步任务进入任务队列，主线程中的任务执行完毕后，开始读取任务队列中的结果进入主线程执行。
第一个宏任务执行结束后，看是否有可执行的微任务，若有先将所有微任务执行完毕，然后再次查看是否有宏任务、执行、确认是否有微任务、执行。周而复始。
setTimeout、setInterval、script属于宏任务，Promise、process.nextTick属于微任务

## 题目10
解答：TS是JS的超集，基于JS，解决JS在自有类型上的不足，可以被编译成纯JS，在浏览器等操作系统上运行。

## 题目11
优点：
- 生态健全完善
- 是一种渐进式语言
- 将问题在编程阶段就暴露出来，减少运行阶段出错概率
- 避免因类型不明确造成的函数功能转变问题
- 使编码更准确，减少不必要的代码类型判断
- 重构更加牢靠

缺点：
- 存在一定学习成本
- 在项目初期成本高于其他
- 更适合运用在长期维护的大型项目中，使项目健壮易于维护
