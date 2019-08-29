原文：

[https://blog.csdn.net/ITleaks/article/details/80394703](https://blog.csdn.net/ITleaks/article/details/80394703)

比特币的程序非常简单，由解锁脚本和锁定脚本构成。以太坊有智能合约，有图灵完备的虚拟机EVM，但是指令也相对简单，且自成一套。这两种程序本质上都是脚本程序，即由程序翻译指令并执行，而不是由本地机器CPU读取指令并执行，效率不高。但选择解释性语言有它的合理性，就是他的高度兼容性，它对智能合约的执行设备(矿机)没有限制。

那EOS的智能合约语言Web Assembly(wasm)有什么来头呢？它是谷歌、苹果、微软三大竞争公司同时支持的一种中间代码(字节码), 是浏览器都支持的一种代码。所有其他语言(c, c++, java)编写的程序都可以编程成wasm字节码的程序。看出这种设计的好处没？也就是说EOS兼容所有用c, c++等高级语言编写的程序，EOS的应用层生态基于此就建立了，开发人员的学习成本非常低。同时wasm字节码既可以编译成机器码后执行，又可以使用解释器直接执行, 兼容性和性能兼有，EOS选择了未来编程序语言，背靠Web Assembly生态, 至少在这方面它值得"区块链3.0”的称号。当然，wasm作为年轻的正在发展的技术，它的不稳定性可能会给EOS带来不好的影响，但EOS也还在开发中，且wasm本身具备柔性, 所以这个缺点并不重要了。

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

\* 本文来自CSDN博主"爱踢门"

\* 转载请标明出处:http://blog.csdn.net/itleaks

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

Web Assembly更详细的信息可以参考如下的知乎的引文

Javascript ，也叫Ecma script, 是这家伙用了 10 天时间赶出来的。。

所以，各位程序猿们，如果你觉得老板 10 天要你们上线一个 App 是一个丧心病狂的事情，那么可以多想想这位哥。

Youtube 上有位哥的采访，你可以听听大神当年的故事。

https://www.youtube.com/watch?v=IPxQ9kEaF8c

当然，码农和大神的区别在于：遇到这种事情，10 天以后码农死掉了，而大神成功了。

只是但凡这种极速上线的事情，都会留下一堆的坑，大神和码农的的区别，也就是水洼和天坑的区别。

这个是坑列表：

Javascript 从最开始设计，就是一种解释型语言，因为大神觉得让 Javascript 的目标用户－ “非专业编程人员和设计师”，了解什么是编译器是一件很残忍的事情。

类型自然也是没有的，因为学习类型就要学习 CPU 工作原理， 学习 CPU 工作原理就要学习组成原理， 大神觉得，让 “非专业编程人和设计师” 去了解 1 和 1.0 一个是 CPU 上处理， 一个是 FPU 上面处理这种显而易见的现象是一件很残忍的事情。

对象模型是惊人的奇葩，那是因为不想设计得和 Java 一样强大, Netscape 当初想法是主要工作都是 Java 来完成，只有轻量级的简单操作留给 Java script, 做为一种胶水语言( glue langurage). 现在知道为什么叫 Java script了吧？ 一个是Java, 一个是和Java 配合的 Script (脚本）。 之前还叫过Live script, 因为脚本和 Java 互动的技术叫 Live connect.

对于泛型， 缺省参数，操作符重载， 异常 等等这些黑科技， 大神的回答通通是：

好吧，异常后来加上去了。

如果故事到此为止，其实不算一个悲伤故事，大神 10 天时间完成预定目的，东西也发布了，市场反应也不错。

但是问题是，市场反应实在是太好了，好得 Javascript 一路窜红，红得各大浏览器厂商纷纷支持， 成为浏览器里面事实上的官方语言。 在这个过程中， 还顺手干掉了 VB script,

于是这个当初为 “非专业编程人员和设计师” 的解释型语言现在居然变成互联网上面最重要的语言之一，被用来做各种之前想也不敢想的东西，甚至还有人不顾死活的拿他来做WebOS.

于是这个时候，之前所有的小水洼都变成了天坑。之后很长段时间 JS 领域的发展史，都可以说是填坑史。

其中最大的一个坑，就是性能。

性能填坑阶段一

Javascript 一开始就是解释性语言，解释性语言的一大特点就是慢， 而网页应用越来越复杂，如果点个按钮要等几秒钟，那淘宝的秒杀就要变成10秒杀了。这个当然不能忍。 于是聪明的人类想到一个办法，虽然你是解释型语言，但是我可以偷偷的编译你啊。 这个也不需要让这帮 “非专业编程人员和设计师” 们知道， 我只要在程序运行前的一刹那，编译即将运行的代码就好。你看我机不机智。

于是 Google 在 2009 年在 V8 中引入了 JIT 技术 (Just in time compiling 江湖人称即时编译)。 有了这个buff, Javascript 瞬间提升了 20 － 40 倍的速度。直接导致一大-波大型网页应用的出现。从此 Javascript 一骑绝尘， 飞黄腾。。呃， 好像哪里不对嘛？

人类的性能的期望是无穷无尽的，JIT 的带来的性能提升很快就榨干了。实际上 JIT 有以下问题：

JIT 基于运行期分析编译，而 Javascript 是一个没有类型的语言，于是， 大部分时间，JIT 编译器其实是在猜测 Javascript 中的类型，举个例子：

function add(a, b) {return a+b}

Var c = add(1, 2)

JIT 看到这里， 觉得好开心， 马上把 add 编译成

function add(int a, int b) {return a+b} //a,b 被确认为int 类型

可是你随后又干了这样一个事情

var d = add(“hello”, “world”)

JIT 编译器的表情肯定是

怎么办， 已经编译成机器码了啊。

这种情况下，JIT 编译器只能推倒重来。JIT 带来的性能提升，有时候还没有这个重编的开销大。

有很多的情况下面， JIT 编译器都无法生成代码，比如异常， 比如 for in , 这个基本上是实现难度引起的，具体可以参考： Optimization killers · petkaantonov/bluebird Wiki · GitHub

事实上，大部分时间 JIT 都不会生成优化代码，有字节码的，直接字节码，没有字节码的，粗粗编译下就结了，因为 JIT 自己也需要时间，除非是一个函数被使用过很多遍，否则不会被编译成机器码，因为编译花的时间可能比直接跑字节码还多。

于是，整体上 Javascript JIT 提高的性能到达的天花板还是不高的，虽然是提高了 20 - 50倍，那只是因为之前解释执行实在是太慢了。。

性能填坑阶段二。

既然 JIT 遇到的问题是类型不确定问题和有一些语言功能，比如异常，for in ， JIT 起来很麻烦， 我可不可以搞个方法让用户不去用这些功能，同时让他们把用的类型都标注出来啊。

按照这个思路， 催生了两种实现路径：

一种是 Typescript, Dart, JSX 为代表的，基本思想是， 我搞个其他的语言，这个语言是强类型的，所以程序猿们需要指定类型，然后我把它编译成 Javacript 不就行了嘛。强类型的语言编译成弱类型还不容易，什么，不知道怎么编？ 把类型去掉就行了嘛。

另一种是火狐的 Asm.js 为代表的， 做一个 javascript 子集， 同时试图利用标注的方法，加上变量类型， 如果觉得好难理解，这就是个典型的例子：

加上一堆没有什么卵用提示 x 其实是个 int， 然后有一个能够识别这些符号的JS引擎，你就可以不用猜类型了哦， 事实上，由于有了类型，连传统的 AOT 都成为了可能 (Ahead of time, 不懂的话，想象一下，就是和 C/C++ 那种编译方式就好了）。

如果你没有注意到，第二种的速度提升潜力比第一种要大非常多。因为第一种，无论如何，也是就是让JIT (即时编译) 快一点, 第二种那可直接就编译了啊 (AOT).

这个是 Asm.js 相对于 JIT 和原生的性能对比

同时大家有没后注意到，这个不是原生代码哦， 性能堪比原生代码， 安全性和传统 Javascript 完全一样。 (尼玛，你让插件们怎么活）。

Web Assembly 就是第二种方式，说到底，Mozilla, Google, Microsoft, and Apple 觉得 Asm.js 这个方法有前途，想标准化一下，大家都能用。

有了大佬们的支持，Web Assembly 比 asm.js 要激进很多。 Web Assembly 连标注 Js 这种事情都懒得做了，不是要 AOT 吗？ 我直接给字节码好不好？（后来改成 AST 树）。对于不支持 Web Assembly 的浏览器， 会有一段 Javascript 把 Web Assembly 重新翻译为 Javascript 运行， 这个技术叫 polyfill, HTML5 刚出来的时候很常用的一个技术。

使用 AST 的原因是因为 AST 比字节码更容易压缩，也更容易翻译。

不了解 AST 可以看下面这张图， 说明 Javascript 引擎的执行过程。 Javascript 先编译为 AST， 然后到 Bytecode. AST 的抽象程度比 Bytecode 要高一级。

总结来说， Web Assembly 的工作方式如下：

好处是：

大幅度提高 Javascript 的性能，希望能把性能这个坑填完，同时也不损失安全性。Webapp 和 原生 App 的性能差距变得很小。

基本之前需要插件来提高速度这种技术已经没有必要了， 网页应用的移植性会变得更好。

文章二

提到了 WebAssembly，就必然首先提及对其有深远影响的 asm.js，这是 Mozilla 在 2013 年推出的一项新技术，它是 JavaScript 的一个子集，舍弃了大量会导致性能问题的语法，并且被设计为通过 C / C++ 代码编译生成，而非手工编写 asm.js 代码。上述的 sum 函数在 asm.js 中表现为：

function sum(a,b){

a = a | 0;

b = b | 0;

return ( a + b ) | 0;

}

上述代码中，标准的 JavaScript 引擎会对其进行解析，并生成正确的结果，而 asm.js 会根据一些不会对运行时造成计算结果错误的特殊标识对变量的类型进行声明（比如 a = a | 0 表示变量 a 是一个整数），通过这种方式，这种代码既可以在支持 asm.js 的JavaScript引擎上得到很高的性能，也会在不支持的设备上继续按照正确的逻辑进行执行，而非无法运行。

虽然如此，asm.js 仍然存在着一些问题，主要是基于 JavaScript 语法的文本格式解析速度不够快，并且代码尺寸偏大，为了解决这些问题，将 asm.js 进行二进制化的 WebAssembly 应运而生。

WebAssembly 是一种接近机器语言的跨平台二进制格式。2017年3月份，四大主流浏览器厂商 Google Chrome、Apple Safari、Microsoft Edge 和 Mozilla FireFox 均宣布已经于最新版本的浏览器中支持了 WebAssembly 的初始版本，这意味着 WebAssembly 技术已经实际落地、可以在特定生产环境进行尝试。

WebAssembly 目前可以通过 Emscripten SDK 生成，下图是 WebAssembly 的编译原理

上图展示了如何通过编写 C / C++代码生成 WebAssembly 内容。

首先通过 LLVM ，将 C/C++ 源代码编译为 LLVM bytecode。这 是一种跨语言的底层虚拟机字节码，理论上所有强类型编程语言均可以生成这种字节码。通过这一点可以得知，在未来理论上所有强类型编程语言（诸如 Java / C# 等）均可以开发 WebAssembly 程序。

其次，通过 EMScripten 中的后端编译器，将这种抽象字节码生成 asm.js 格式的文件。如上文所述，由于 asm.js 仍然是 JavaScript，所以哪怕 JavaScript 引擎不支持该特性，也会以通常的方式运行这段逻辑。这意味着使用 C/C++编写的源代码，哪怕用户设备不支持 WebAssembly，也可以回退到 JavaScript 运行并得到一致的结果。

接下来，asm.js 会通过另一个编译器生成为 WebAssembly 的 .wasm 文件，由于 WebAssembly 是二进制格式，相比 JavaScript 而言，其代码体积同比小很多，并且由于已经是面向机器码的格式，也无需在运行前对源代码耗费时间进行 JIT 编译操作。

通过上述内容可以看出，WebAssembly 理论上可以通过任何强类型语言生成，不强制依赖用户的本地运行环境，代码体积小、解析速度快，几乎是 Web 开发未来的一颗“银色子-弹”。

可惜的是在现阶段，WebAssembly 仍然存在着不少问题需要去解决。

首先是自身的稳定性，以 Chrome 浏览器为例，Chrome 57 支持 WebAssembly 的 MVP 版本，但是在 Chrome 58 上，大量的 WebAssembly 程序会直接导致进程崩溃，虽然后续的 Chrome 59 已经修复了绝大部分问题，但是仍然不得不对目前版本的稳定性持保留态度。

其次是可调试性，WebAssembly 被设计为了一种开放的、可调试的程序，但目前无论是 Chrome 还是 FireFox ，在调试方面还有很大的提升空间。由于在目前阶段调试较为困难，所以用 WebAssembly 编写业务逻辑代码对研发来说还是很不方便的。

还有就是与 Web 的互操作性。目前 WebAssembly 类似 WebWorker ，只能进行单纯的数值计算工作，不能在C++层直接操作 DOM 节点。虽然在未来路线图中提及这一特性会在后续加入，但是在目前阶段 WebAssembly 更适合被用于更纯粹的密集型数据计算工作，而非直接编写业务逻辑。

综上所述，在目前阶段，WebAssembly 不适合直接编写具体的业务逻辑，而更适合编写应用程序中对性能要求比较高的库，并与 JavaScript 编写的业务逻辑进行通讯，并在 JavaScript 端对 DOM 节点进行操作。

以笔者最近开发的白鹭引擎5.0的渲染库为例，白鹭引擎对外提供 JavaScript API，开发者编写的 JavaScript 逻辑代码会汇总为一组命令队列发送给 WebAssembly 层，然后 WebAssembly 负责所有的计算工作，最终生成一组基于 WebGL 格式的数据流，最后 JavaScript 对这组数据流进行简单的解析并直接调用 DOM 的WebGL 接口传递数据。

在实践过程中，白鹭团队总结出 WebAssembly 的几个不容易注意的优势和缺点：

代码体积很小，白鹭引擎团队将大约300k左右（压缩后）JavaScript 逻辑改用 WebAssembly 重写后，体积仅有90k左右。虽然使用 WebAssembly 需要引入一个50k-100k的JavaScript类库作为基础设施，但是总体来看资源尺寸的优势还是很大的。

由于代码格式是二进制、无法直接在浏览器中看到源码，尽管理论上仍然可以通过逆向工程一定程度上得到原有的业务逻辑，但是由于开发者可以在编译时使用了-O3 等激进的优化策略，所以最终反编译得到的业务逻辑也是很难阅读的。虽然理论上一切在客户端的内容都是不安全的，但是与所有代码都直接暴露给用户相比，代码安全性得到了很大的改善。

在运行 benchmark 等极限测试时，游戏引擎使用 WebAssembly 并不比 JavaScript 有几何量级的提升。笔者的推论是：由于 JavaScript 引擎的JIT机制会把经常运行的函数进行极限的编译优化，所以在 benchmark 这种代码大量反复执行的测试环境下，无论是 JavaScript 版本，还是 WebAssembly 版本，运行的都是高度优化后的机器码，虽然 WebAssembly 版本仍然比 JavaScript 版有一定的性能优势，但是并不明显。

在运行业务逻辑代码时，由于大部分业务逻辑代码只运行一次，所以 JavaScript 引擎只会对这部分代码进行简单的编译优化而非极限优化，所以运行这一部分代码 WebAssembly 相比 JavaScript 版本而言提升巨大，但是因为上文所述，不建议开发者在编写业务逻辑时使用 WebAssembly，所以这里陷入了一个两难。在目前而言，理想情况是除了底层库之外，部分关键的涉及性能问题的逻辑也可以使用 WebAssembly 进行编写。

综上所述，目前为止由于 WebAssembly 还不是非常完善，所以它目前的主要作用是作为JavaScript 生态的有益补充，与JavaScript共存而不是取而代之。但是通过其路线图我们可以得知，WebAssembly 的设计思想非常优秀，目前所有存在的问题从长远的角度来说都是可以解决的问题。在加上 WebAssembly 是非常罕见的由四大浏览器厂商共同宣布会大力支持并实现的功能，其浏览器兼容性问题也终究可以得到解决，再退一步，哪怕旧式浏览器不支持，由于 WebAssembly 支持回退到 JavaScript，也可以保证正常运行。

在目前阶段，WebAssembly 适合大量密集计算、并且无需频繁与 JavaScript 及 DOM 进行数据通讯的场景。比如游戏渲染引擎、物理引擎、图像音频视频处理编辑、加密算法等。

笔者认为，WebAssembly 就像当初的 HTML5 标准一样，在公布之后最开始不被很多人看好，认为会有浏览器兼容性问题、各大浏览器厂商的实现问题、性能问题、用户需求与用户体验问题，但在近年来 HTML5 终于得到了广泛的使用，甚至有些人认为他可以在很多场景下取代 NativeApp ，而非仅仅是当年“取代Flash”这一小目标。凭借着底层技术的跨越式发展，以及浏览器厂商的一致支持，WebAssembly一定会有一个光明的未来，也许真的可以成为一颗 Web 开发的“银色子-弹”

转自:知乎罗志宇，王泽

\---------------------

作者：ITleaks

来源：CSDN

原文：https://blog.csdn.net/ITleaks/article/details/80394703

版权声明：本文为博主原创文章，转载请附上博文链接！
链接:[Web Assembly(wasm)](https://bbs.huaweicloud.com/blogs/5471dd3eecd911e8bd5a7ca23e93a891)