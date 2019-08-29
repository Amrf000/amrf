### 原文:

[https://medium.com/@david.roegiers/building-a-real-time-collaborative-text-editor-for-the-web-draftjs-sharedb-1dd8e8826295](https://medium.com/@david.roegiers/building-a-real-time-collaborative-text-editor-for-the-web-draftjs-sharedb-1dd8e8826295)  

### 作者:[大卫罗伊吉尔](https://medium.com/@david.roegiers?source=post_header_lockup)

为Web构建自己的协作文本编辑器变得相当可行。在丰富但混乱的Javascript世界中有许多不同的方法：本文就是其中之一。如果您对我们的设置感兴趣或喜欢有关kamikaze模式的开发人员的故事，请继续阅读。
-------------------------------------------------------------------------------------------------------

几个月前，我和约翰内斯·魏斯和费利克斯·加斯特在周三晚上坐在会议桌旁。这是我们创业公司[Conode](http://www.conode.io/?src=medium)的每周Jour Fixe，这是一个帮助团队组织会议的生产力SaaS。

![1_ujuPMLlBNEGu8p39bFybfw.jpeg](https://bbs-img.huaweicloud.com/blogs/img/1545626323501067.jpeg "1545626323501067.jpeg")

我们的销售线索和用户希望协同编辑页面 - 您知道，Google Docs风格。我们最初认为这是一个太大的挑战，因为我们缺乏外包预算和内部专业知识来自己实施。直到那天晚上，我们意识到这对我们的生存至关重要，所以菲利克斯和我勇敢地说

接受挑战！

我说勇敢，因为我们刚刚从一个名为[Thinslices](http://thinslices.com/)的主管机构接管了代码库。我们真的不知道开始时的技术堆栈。所以，它承诺是一个颠簸的旅程...然后，这就是我们喜欢他们的方式。

### 理论

![1_225-MO-SoePzKz_Dpe25Jw.jpeg](https://bbs-img.huaweicloud.com/blogs/img/1545626339228651.jpeg "1545626339228651.jpeg")

在进入代码之前，我们需要谈论理论。这个分布式系统的复杂性不容小觑，因此高级概述将有助于了解正在发生的事情。

文本编辑器的行为和外观可以像快照一样在任何时间点提取并存储在简单的javascript对象中。我们称之为_文档__状态_。

![1_oHWiWnxgYYAKBiQE2ETs7Q.png](https://bbs-img.huaweicloud.com/blogs/img/1545626359222029.png "1545626359222029.png")

DraftJS可以将我们的Conode页面的文档状态呈现为一个简单的Javascript对象。

为了进行协作，必须通过在不安全的网络之间发送消息来在多个对等体之间共享该_文档__状态_。需要一个协议来正确管理它。

等等，究竟需要管理什么？为什么我们不能在有人编辑某些文本时立即发送状态对象？

在整个过程中用简单的问题挑战自己是一种很好的做法。它有助于解决问题。

好吧，想象两个用户同时输入内容。在这种情况下，

1.  两个客户最终都会有不同的状态，并且
    
2.  其中一个更改将被覆盖。
    

![1_XOz3gcMzXdfobY7cInaPng.png](https://bbs-img.huaweicloud.com/blogs/img/1545626373458673.png "1545626373458673.png")

此方案会导致不同的最终结果和覆盖操作。

这是一个糟糕的用户界面，所以我们绝对想避免这种情况。

上述两个问题对应于我们的协议需要满足的两个主要技术条件：

1.  [_融合_](https://irisate.com/collaborative-editing-solutions-round-up/)：所有编辑者必须在有限的时间内收敛到相同的_文档状态_。
    
2.  [_并发_](https://en.wikipedia.org/wiki/Concurrency_control)：并行发生的编辑会产生正确的最终结果，与执行顺序无关。
    

这有点简化。[研究论文](https://medium.com/@raphlinus/towards-a-unified-theory-of-operational-transformation-and-crdt-70485876f72f)将讨论最终的一致性，交换性和幂等条件，对中央服务器的需求，...所有这些学术文献都提出了过多的协议和算法 - 一些比其他协议和算法更合法（见下文）。为了简明起见，我们不会深入研究这个问题，只是说它们可以分为以下两类中的任何一类：

*   操作转换（OT）将_文档状态_表示为一系列操作。每个操作都是在本地快照之上创建的。现在，假设该操作被发送给同时进行编辑的对等体。该对等体将具有不同的快照，因此首先需要在应用之前_转换_操作_。_这是OT如何运作的本质。
    
*   无冲突复制数据类型（CRDT）比OT复杂一点。它使用更多的内存和带宽，但反过来保证了最终的一致性，而无需中央服务器。所以，你可以说它在理论上更完整。
    

我们选择从OT开始，因为（1）它是最受欢迎的，（2）我们找到了一个很好的javascript库，名为ShareDB，提供开箱即用的功能，（3）我们并不真正理解我们是什么这样做。

我们很高兴最终发现它是正确的选择:-)

[迈向统一的运营转型理论和CRDT  
更新（2017年3月2日）：现在有了这篇文章的工作代码，并进行了额外的优化。![0_NBUotoqiF8oMtoJZ_.jpg](https://bbs-img.huaweicloud.com/blogs/img/1545626703738875.jpg "1545626703738875.jpg")medium.com](https://medium.com/@raphlinus/towards-a-unified-theory-of-operational-transformation-and-crdt-70485876f72f "https://medium.com/@raphlinus/towards-a-unified-theory-of-operational-transformation-and-crdt-70485876f72f")

### 前端

Conode是一个单页面应用程序，它使用React + Redux。文本编辑器基于着名的Draft.js框架。它没有提供太多开箱即用的功能，但根据他们自己的说法_“在Draft.js中，一切都可以自定义。”_

![1_UQ6oU3L1BDSk9J0IU63JLA.png](https://bbs-img.huaweicloud.com/blogs/img/1545626384397029.png "1545626384397029.png")

看起来如何 - 试试conode.io吧

问题是Draft.js不是用于协作编辑。这与它的API主要暴露_状态_而不是_操作_的事实有关。社区实际上似乎在这个[问题](https://github.com/facebook/draft-js/issues/93)上存在[分歧](https://github.com/facebook/draft-js/issues/93)。最后，无论是否可行，取决于您的功能和性能要求。

还有其他Javascript编辑器，如Quill，可以更好地处理实时协作。在我们的例子中，我们已经有一个高度定制和代码密集的编辑器。重建它需要花费太多时间。既然我们知道社区中的其他人已经完成了这项工作，我们决定抓住机会并建立起来。

### 这个调查

要连接DraftJS编辑器以进行协作，我们需要Web套接字。这项技术允许我们以较少的开销向浏览器发送消息（双向），这是传统HTTP无法实现的。

到目前为止的消息传递但是，那个处理那个花哨的OT协议的应用程序层呢？经过大量的研究，主要包括阅读无数的Github问题，并且无可否认，使用Chrome开发者工具的网络选项卡调查现有应用程序，ShareDB是获胜的选择。

![1_3YB4AoNhAFGwGD8vEHIgGA.jpeg](https://bbs-img.huaweicloud.com/blogs/img/1545626391874025.jpeg "1545626391874025.jpeg")

通过简单地观察其他解决方案，您会惊讶地发现自己能学到多少东西。（Ben Affleck，Paycheck）

[ShareDB](https://github.com/share/sharedb)是一个库，它在服务器上存储javascript对象，并使用Web套接字在多个客户端上共享它。因此，如果任何客户端传递操作，ShareDB将自动通知其他订阅的客户端。

### 原型

是时候开始编码了。首先，我们创建了一个将Draft.js与ShareDB相结合的简单原型。这样就可以快速测试我们的架构，而无需面对将其构建到现有代码库中的复杂性。

![1_Dc_T4qSP1hwsYJQkZTOuPg.png](https://bbs-img.huaweicloud.com/blogs/img/1545626398786154.png "1545626398786154.png")

我们的原型架构。我们使用Editor组件的'onChange'和'value'支柱作为受控的React组件。我们在那里结合传入和传出操作。

请记住，我们说Draft.js不公开操作，只公开EditorState。但是，OT与_操作_一起_工作_......为了解决这个问题，我们使用了[json0-ot-diff](https://github.com/kbadk/json0-ot-diff)，这是一个将先前状态与新状态进行比较的库（使用[convertToRaw](https://draftjs.org/docs/api-reference-data-conversion)）。这为我们提供了一个JSON类型的OT事务，然后我们将其传递给ShareDB。

这样的计算在性能方面是昂贵的，但最终结果就像一个魅力。如果您希望收到该原型的副本，请随时与我们联系。

### 整合

下一步是将此工作解决方案集成到我们现有的代码库中。这带来了挑战 - 超出了我们的预期。

#### 1.单一的事实来源

要在我们的前端管理_文档状态_，我们使用Redux。因此，我们需要在Draft.js，Redux和ShareDB之间管理EditorState的单一事实来源。最后，我们构建了一个函数和事件循环，可以在下图中看到。

![1_oUqrZZRy6C1Km3BrGrZFEQ.png](https://bbs-img.huaweicloud.com/blogs/img/1545626404771333.png "1545626404771333.png")

传出操作的事件循环。传入操作的处理方式类似。

#### 2.令人不安的竞争条件

我们的文本编辑器React Component，包含Draft.js，有一些竞争条件。在单用户模式下，这些都不是问题。一旦用户开始同时进行更改，偶尔的编辑就会被覆盖。很难检测到模式，当我们修复模式时，会触发新的错误。

#### 3.微服务后端

ShareDB将每个更改存储为其数据库中的操作。在我们创建用于实时协作的文本编辑器时，这相当于大量操作，这将对存储容量和计算能力产生不利影响。因此，我们在REST API工作流程之上构建了一个协作服务，系统地清空自己。这使得存储操作的数量保持最小，并将协作的复杂性提取到独立的微服务中。

![项目管理.PNG](https://bbs-img.huaweicloud.com/blogs/img/1545626416641190.png "1545626416641190.png")

我们后端的简要概述：添加了彩色部分以进行协作。在单用户模式下，使用正常的RESTful API。只要与多个用户共享页面，通信就会切换到Web套接字。

#### 3.块级锁定

![1_pgsZ2ObZs20rcj5TIo4JxA.png](https://bbs-img.huaweicloud.com/blogs/img/1545626424113389.png "1545626424113389.png")

我们的编辑器在视觉上将每个段落分成块。为了最小化由于EditorState比较导致的性能问题，我们在选择更改后选择了块级锁定。因此，只要用户选择了EditorBlock，我们就会禁用所有协作者。这样就可以保持JSON类OT的差异，而无需为顶部的字符串计算它。

#### 4.从React组件中分离

我们的编辑器是一个非常大的React组件。超过1000行......为了不在无尽的重构努力中迷失自我，我们首先考虑创建一个_更高阶的组件_，这将为现有的编辑器增加协作风格。最后，将我们的协作逻辑放在从我们的编辑器处理更新的_redux动作创建_器中更简单。

#### 5.处理边缘情况

为了避免故障，需要涵盖许多边缘情况。例如，当wifi丢失时自动Web套接字重新连接，检测死Web套接字客户端，在用户转到仪表板并打开另一个页面时正确打开/关闭ShareDB订阅等。

### 结束

最终的结果是工作，但由于子-弹点2的竞争条件而留下了一些故障。这些漏洞非常困难，我们决定不再因为客户截止日期而失去任何时间。作为临时解决方案，我们对整个页面进行了锁定，可以请求并将其从一个用户传递到另一个用户。

不可否认，最终解决方案并不完美。但是，现在我们知道它的工作原理以及需要进行哪些重构才能使其发光。

#### 得到教训

*   原型设计确实可以带来回报，因为它可以快速验证您的架构。没有它，我们从来没有这么远。
    
*   计划更多时间重构代码。
    
*   一些理论在分布式系统中有很长的路要走。即使ShareDB是开箱即用的，理解背后的模型也是必要的。
    

我希望这篇博文能够为团队提供洞察力，为团队开发他们的第一个实时协作文本编辑器。如果有，请告诉我。如果它不...谢谢你，再来一次。
链接:[[转载]构建Web实时协作文本编辑器](https://bbs.huaweicloud.com/blogs/7fe9292e073511e9bd5a7ca23e93a891)