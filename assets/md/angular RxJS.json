分析的项目代码可以在[https://github.com/loiane/angular-login-hide-navbar](https://github.com/loiane/angular-login-hide-navbar)找到

这个项目里有一段用户登录认证服务如下:

auth.guard.ts

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1545184610327971.png "1545184610327971.png")

auth.service.ts

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1545184659528327.png "1545184659528327.png")

可以注意到这三句代码

private loggedIn: BehaviorSubject<boolean\> \= new BehaviorSubject<boolean\>(false);

this.loggedIn.next(true);

this.authService.isLoggedIn.pipe

理解理解：

当Observer订阅了一个BehaviorSubject，它一开始就会释放Observable最近释放的一个数据对象，当还没有任何数据释放时，它则是一个默认值。接下来就会释放Observable释放的所有数据。如果Observable因异常终止，BehaviorSubject将不会向后续的Observer释放数据，但是会向Observer传递一个异常通知。简单来说，就是释放订阅前最后一个数据和订阅后接收到的所有数据:（参考:[理解RxJava（四）Subject用法及原理分析](https://blog.csdn.net/mq2553299/article/details/78848773)）

take使得Observable仅仅发射我们指定的前面的n个项(参考:[RxJS入门（5）----编写并发程序](https://blog.csdn.net/tianjun2012/article/details/51276290))

未完待续  

参考:[RxJS异步通信之Subject和BehaviorSubject](https://blog.csdn.net/u012631731/article/details/72935313)

参考:[Angular基础(八) Observable & RxJS](https://blog.csdn.net/zhixin9001/article/details/77658225)

参考:[理解RxJava（四）Subject用法及原理分析](https://blog.csdn.net/mq2553299/article/details/78848773)

参考:[PublishSubject，ReplaySubject，BehaviorSubject，AsyncSubject](https://blog.csdn.net/kongbaidepao/article/details/51240456)

参考:[Rxjs入门3-Operators\[实例操作符、静态操作符、弹珠图、选择操作符、操作符分类\]、Subject、为啥要定义Subject (主体)概念、Subject派生](https://blog.csdn.net/cuishizun/article/details/80367442)

参考:[rxjs-操作符](https://blog.csdn.net/qq_28949495/article/details/77351026)

参考:[angular6 rxjs6的新特性汇总](https://blog.csdn.net/weixin_41404460/article/details/83110952)

参考:[Angular 2 redirect on click](https://stackoverflow.com/questions/37252146/angular-2-redirect-on-click)

参考:[Why routerLink and router.navigate() act differently?](https://stackoverflow.com/questions/45632013/why-routerlink-and-router-navigate-act-differently)

参考:[How to use router.navigateByUrl and router.navigate in Angular](https://stackoverflow.com/questions/45025334/how-to-use-router-navigatebyurl-and-router-navigate-in-angular)

参考:[RxJS github.io](https://xgrommx.github.io/rx-book/index.html#)

参考:[rxjs-react-component](https://github.com/xgrommx/rxjs-react-component)
链接:[angular RxJS](https://bbs.huaweicloud.com/blogs/aa4e38c2033811e9bd5a7ca23e93a891)