[https://github.com/voduytuan/restful-aiml-bot/blob/master/src/server.js](https://github.com/voduytuan/restful-aiml-bot/blob/master/src/server.js)

[https://gist.github.com/onlurking/f6431e672cfa202c09a7c7cf92ac8a8b](https://gist.github.com/onlurking/f6431e672cfa202c09a7c7cf92ac8a8b)

[https://github.com/penguinmenac3/alice-ai](https://github.com/penguinmenac3/alice-ai)

[https://github.com/pandorabots/rosie](https://github.com/pandorabots/rosie)

[https://github.com/hlcfan/active-alice](https://github.com/hlcfan/active-alice)

[https://github.com/csu/ALICEChatAPI/blob/master/aiml-dir/pickup.aiml](https://github.com/csu/ALICEChatAPI/blob/master/aiml-dir/pickup.aiml)

[https://github.com/AIMLang/aiml-bots/tree/master/bots/alice2/maps](https://github.com/AIMLang/aiml-bots/tree/master/bots/alice2/maps)

[https://github.com/AIMLang/aiml-java-interpreter](https://github.com/AIMLang/aiml-java-interpreter)

[https://github.com/patrickschur/aiml2-chatbot-prototype](https://github.com/patrickschur/aiml2-chatbot-prototype)

[https://github.com/pandorabots/Free-AIML/blob/master/botcompare.aiml](https://github.com/pandorabots/Free-AIML/blob/master/botcompare.aiml)

[https://github.com/pandorabots/pandorabots.github.io](https://github.com/pandorabots/pandorabots.github.io)

[https://github.com/hosford42/AIML\_Sets/blob/master/aiml\_sets/standard/std-hello.aiml](https://github.com/hosford42/AIML_Sets/blob/master/aiml_sets/standard/std-hello.aiml)

项目早期用的aiml1,这里主要看看aiml2

[https://code.google.com/archive/p/program-ab/wikis](https://code.google.com/archive/p/program-ab/wikis)

program-ab - TerminalInteraction.wiki
=====================================

程序AB终端交互
========

对于聊天模式或模式建议模式，程序AB尝试确定最后修改了哪个目录：aiml或aimlif。如果aiml /中的文件较新，则从这些文件加载bot。如果aimlif /更新，它会加载它们。（在运行AB之前，请注意不要编辑两个aiml和aimlif文件）如果使用它打开任何.csv文件，请务必关闭电子表格编辑器（Excel）。

交互式命令：
------

### 从聊天模式：

|q |退出而不保存|| - |：--------------------- ||wq |编写AIML和AIMLIF（.csv）文件并退出||ab |输入catgeory browser / pattern suggestor mde |

### 模式建议器（类别浏览器）模式：

Program AB的Pattern Suggestor（类别浏览器）功能扫描文件中的大量会话数据样本（当前设置为c：/ab/data/sample.txt）并自动查找新模式，botmaster可以从中快速创建新的AIML类别。

注意：此数据文件未随免提供程序AB。您可以创建自己的数据文件，也可以使用[AIML Superbot Development Kit](http://alicebot.org/superbot.html)。

另请注意：要试验提供的sample.txt文件，请创建一个名为（例如）blankbot的新机器人，并创建空目录：`bots/blankbot/aiml bots/blankbot/aimlif bots/blankbot/sets bots/blankbot/maps bots/blankbot/config`您可以训练一个空白机器人，并将模式建议应用于sample.txt。

提供的sample.txt文件是从[每个Mobile Assistant应该能够回答的1000个问题中](http://www.answerdevices.com/index.php?/blog/2/entry-13-1000-questions-every-mobile-assistant-should-be-able-to-answer/)复制的。机器人/超级中提供的机器人SUPER已经包含对sample.txt中大多数输入的响应。

文件sample.txt包含1000个输入，但更大的样本通常更好。在我们的测试中，我们使用了500,000个输入的样本。应该对文件sample.txt进行预规范化，以减少运行模式建议器算法的时间。

请参阅配套文档[AIML类别浏览器 - 模式建议器](https://docs.google.com/document/d/1WJ3HsFR6k3Z8XdNVS9EownhIxoiUe7DbNZwNr7yVYc8/pub)。

|q |退出而不保存文件|| - |：--------------------------- ||wq |编写AIML和AIMLIF文件并退出||`<Enter>`或跳过|跳过此类||d |删除此模式||x |使用`<sraix>`模式创建一个类别\- 保存在sraix.aiml中||p |不当内容 - 创建一个类别`<srai>FILTER INAPPROPRIATE</srai>`\- 保存在impro.aiml中|f |亵渎 - 创建一个类别`<srai>FILTER PROFANITY</srai>`\- 保存在profanity.aiml ||我|侮辱 - 创建一个类别`<srai>FILTER INSULT</srai>`\- 保存在insult.aiml |

### 编写模板：

如果Catgeory浏览器的输入不是上面列出的命令之一，则响应将被视为新的AIML模板。您无需输入`<template>`标签。

程序AB尝试猜测新类别的文件名。

|**模板conatins**|**类别保存在**||：---------------------- |：---------------------- ||`<srai>`| reductions\_update.aiml ||`<sraix>`|sraix.aiml ||`<oob>`|oob.aiml ||`<set name`|client\_profile.aiml ||`<get name`（除了`<get name=”name”/>`）|client\_profile.aiml ||别的什么personality.aiml |

或者，你可以写

`<pattern>SOME PATTERN</pattern> response`

它将创建一个带有模式SOME PATTERN和模板“response”的类别。

program-ab - RunningAB.wiki
===========================

AB计划
====

Program AB是ALICE AI Foundation提供的AIML 2.0的免费参考实现。

下载并安装
=====

注意：如果尚未安装Java，则必须先安装Java。请参阅[Oracle Free Java Download](http://www.java.com/en/download/index.jsp)。

在该项目主页的“下载程序AB”链接下下载zip文件。您可以将此文件下载到您希望的任何目录中，但是出于本文档的目的，我们假设您将.zip文件扩展到名为c：/ ab的目录中。如果您使用的是其他根目录，请将以下文本中的c：/ ab替换为根目录。

展开.zip文件时，您应该看到以下目录和文件：

|c：/ ab / bots |AIML机器人进入这个目录||：----------- |：----------------------------------- ||c：/ ab / lib |运行此代码所需的Java库|c：/ ab / out |Java类文件目录||c：/ab/run.bat |批处理文件运行程序AB |

程序AB附带了一个名为ALICE 2.0的样本机器人，位于bots / alice2目录中。

Bot目录结构
=======

c：/ ab / bots目录包含您的AIML机器人。如果你有一个名为**botname**的机器人，那么你应该创建以下目录：

|c：/ ab / bots / botname / aiml |将您的AIML文件存储在此处||：------------------------ |：---------------------- ----- ||c：/ ab / bots / botname / aimlif |程序AB在这里存储AIMLIF文件|c：/ ab / bots / botname / config |Bot配置文件||c：/ ab / bots / botname / sets |AIML集||c：/ ab / bots / botname / maps |AIML地图|

有关为程序AB配置的示例AIML 2.0 bot，请参阅配套项目[SUPER AIML Bot](https://code.google.com/p/aiml-en-us-foundation-super/)。

运行程序AB
======

视窗
--

根据需要修改run.bat文件。命令行选项是

|action = chat |运行机器人并聊天||：------------ |：---------------------------- ||action = ab |运行实验模式建议者||action = csv2aiml |将AIMLIF文件转换为AIML ||action = aiml2csv |将AIML文件转换为AIMLIF ||bot = botname |运行botname目录中的bot|trace = true |打印出有用的跟踪信息|

Mac或Linux
---------

与Windows相同，但使用run.sh而不是run.bat。

program-ab - SetsMaps.wiki
==========================

在程序AB中定义集合和映射
=============

对于名为botname的bot，目录bot / botname / sets和bot / botname / maps分别包含AIML集和映射的定义。

细节
==

有关详细信息，请参阅[AIML 2.0中](https://docs.google.com/document/d/1DWHiOOcda58CflDZ0Wsm1CgP3Es6dpicb4MBbbpwzEk/pub)的配套文档[集和映射](https://docs.google.com/document/d/1DWHiOOcda58CflDZ0Wsm1CgP3Es6dpicb4MBbbpwzEk/pub)。

program-ab - CompileAB.wiki
===========================

编译和构建程序AB
=========

程序AB定义了一个名为org.alicebot.ab的Java包。源文件存储在src / org / alicebot / ab中。还提供了一个额外的类src / Main.java。

程序AB是作为[JetBrains IntelliJ IDEA中](http://www.jetbrains.com/idea/)的项目开发的。分发包括模块文件Ab.iml和.idea目录。

内存优化
----

程序AB中使用的内存优化，包括AIMLIF格式，节点升级和快捷方式，在[配套文档中](https://docs.google.com/document/d/1Y-rzwTOvMQqvKHVwR35rebJxhJ4gTL7-cLphHuXTGoE/pub)进行了描述。

编译程序AB需要Java库
-------------

编译程序AB需要一些Java库。这些库不包含在此源代码分发中。

*   JGoodies数据-common.jar
    
*   JGoodies数据，forms.jar
    
*   JSON-20090211.jar
    
*   sanmoku-0.0.5.jar
    
*   sanmoku-功能ex.0.0.1.jar
    

httpcomponents客户端-4.2.1：

*   公地编解码器1.6.jar
    
*   共享记录-1.1.1.jar
    
*   流利-HC-4.2.1.jar
    
*   HttpClient的-4.2.1.jar
    
*   HttpClient的缓存-4.2.1.jar
    
*   的HttpCore-4.2.1.jar
    
*   httpmime-4.2.1.jar
    

program-ab - EditingAIMLIF.wiki
===============================

AIML中间格式
========

AIMLIF（AIML中间格式）目录以电子表格格式包含存储在AIML目录中的信息的并行副本。您可以使用MS Excel，Google Docs或任何其他能够读取和写入CSV格式的电子表格编辑器编辑此目录中的CSV文件。

AIMLIF将每个AIML类别转换为单行文本。这些行由以“，”字符分隔的字段组成。字段（或列）的顺序是：

激活计数，输入模式，该模式，主题模式，模板，文件名。

AIMLIF不是XML格式。输入模式，该模式和主题模式的字段不包含AIML标记`<pattern>`，`<that>`或`<topic>`。该`<category>`标签也省略。这种简化有助于提高AIML的编写效率，避免重复键入这些标记。

但是，模板列确实包含XML格式的AIML模板。AIML是电子表格式数据（六列激活计数，输入模式，该模式，主题模式，模板，文件名）和模板中的分层XML数据的混合体。

我们来看几个例子。此AIML类别来自文件reductions.aiml：

`<category> <pattern>DO YOU THINK YOU WILL *</pattern> <template><srai>WILL YOU <star/></srai> </template> </category>`

有一个中间格式表示

`0,DO YOU THINK YOU WILL *,*,*,<srai>WILL YOU <star/></srai>,reductions.aiml`

激活计数为0.模式是你认为你会**。该模式和主题模式都是**。模板是`<srai>WILL YOU <star/></srai>`，文件名是reductions.aiml。

如果文件personality.aiml包含该类别

`<category><pattern>HI</pattern> <template><random> <li>Hi, nice to see you!</li> <li>Hi it's great to see you!</li> <li>Hi how are you?</li> <li>Hi! I can really feel your smile today.</li> <li>Hi! It's delightful to see you.</li> </random></template>`

它将在AIMLIF文件personality.aiml.csv中表示为

`0,HI,*,*,<random>#Newline<li>Hi#Comma nice to see you!</li>#Newline<li>Hi it's great to see you!</li>#Newline<li>Hi how are you?</li>#Newline<li>Hi! I can really feel your smile today.</li>#Newline<li>Hi! It's delightful to see you.</li>#Newline</random>,personality.aiml`

一切都在一条线上。

特殊字符
----

由于AIMLIF表示使用逗号分隔这些字段，因此避免在AIML模板中使用“，”字符非常重要。（注意：AIML模式，主题或文件名字段中不允许使用“，”）。如果您正在编辑AIMLIF文件，而不是在模板中编写“，”，请使用宏#Comma。

由于AIMLIF表示每个类别仅使用一行文本，因此避免AIML模板中的换行也很重要。（注意：AIML模式，主题或文件名字段中不允许使用换行符）。如果您正在编辑AIMLIF文件，请使用宏#Newline而不是输入换行符。

csv2aiml.bat程序将#Comma转换为“，”并将#Newline转换为换行符。相反，aiml2csv.bat程序将任何“，”转换为#Comma和换行符为#Newline。

激活计数
----

激活计数列显示样本数据中每个类别的激活次数。程序AB不提供此数据。修改机器人的一个好策略是首先使用激活计数最高的类别。这将有助于快速区分您的机器人个性与其他机器人。

文件名
---

每个AIMLIF文件都包含一个文件名字段。最初，此字段值将与转换AIMLIF文件的AIML文件相同。您可以更改AIMLIF文件中任何特定类别的文件名值。将CSV文件转换回AIML时，类别将保存在最后一列值指定的文件名中，无论它来自哪个AIMLIF文件。

program-ab - ExtendingAIML.wiki
===============================

AIMLProcessorExtension
======================

程序AB定义了一个名为AIMLProcessorExtension的Java接口，可用于定义新的AIML标记。

实现AIMLProcessorExtension的类必须提供：

*   一组标签名称。
    
*   用于递归评估与新标记关联的每个节点的XML分析树的函数。
    

Program AB源包括一个名为[PCAIMLProcessorExtension](https://code.google.com/p/program-ab/source/browse/src/org/alicebot/ab/PCAIMLProcessorExtension.java)的此接口的示例实现，它定义了一组模拟联系人数据库的标记。

细节
==

通过定义函数extensionTagSet（）来为AIMLProcessor提供扩展标记名称列表：`public Set<String> extensionTagSet();`它返回一组扩展标记名称。

定义一个函数`public String recursEval(Node node, ParseState ps);`来递归计算XML解析树。由于您的自定义标记本身可能包含普通的AIML 2.0标记，因此评估函数`AIMLProcessor.evalTagContent(node, parseState ignoreAttributes);`应用于评估任何标记或子标记内容。

`public String recursEval(Node node, ParseState ps);`该函数应返回评估标记内容的结果。

如果定义AIMLProcessorExtension类，例如PCAIMLProcessorExtension，则需要在AIMLProcessor中设置静态变量扩展：

`AIMLProcessorExtension.extension = new PCAIMLProcessorExtension();`

program-ab - ProgrammingInterface.wiki
======================================

链接到Ab.jar
=========

将Ab.jar库添加到您的应用程序中。在Java文件中，使用

`import org.alicebot.ab.*;`

创建一个机器人
=======

创建一个机器人

`String botname="mybot"; Bot bot = new Bot(botname);`

您还可以使用指定机器人文件的根路径

`String botname="mybot"; String path="c:/example"; Bot bot = new Bot(botname, path);`

如果Program AB bot文件位于c：/ example目录中，那么名为**mybot**的bot应该使用以下目录：

|目录|内容||：---------- |：--------- ||c：/ example / bots / mybot / aiml |AIML文件||c：/ example / bots / mybot / aimlif |AIMLIF格式文件||c：/ example / bots / mybot / config |Bot配置文件||c：/ example / bots / mybot / sets |AIML集||c：/ example / bots / mybot / maps |AIML地图|

构造函数方法将加载所有bot的类别，替换，配置文件以及set和map定义。

创建聊天会话
======

使用创建客户端聊天会话

`Chat chatSession = new Chat(bot);`

与机器人聊天
======

使用multisentenceResponse方法获取机器人对多句（一个或多个句子）输入的回复：

`String request = "Hello. Are you alive? What is your name?" String response = chatSession.multisentenceRespond(request); System.out.println(response);`

program-ab - Configuration.wiki
===============================

配置文件
====

正常化
---

对于名为botname的bot，规范化文件位于bots / botname / config / normal.txt中。

替换每行写一个，双引号围绕这两个术语。该程序正在寻找与正则表达式匹配的输入，`"\"(.*?)\",\"(.*?)\""`例如`" haven't "," have not " " realy "," really " ".uk "," dot uk "`许多替换以空格开始和结束。这是为了确保全字替换。预处理器在每个句子的开头和结尾附加一个空格，应用所有替换，然后修剪前导和结束空格。

一个特殊的例子是`"""," "`

双引号不必转义以匹配正则表达式。

谓词默认值
-----

文件config / predicates.txt包含任何谓词默认值。格式是

`predicate:value`

例如：

`age:how many baby:who bestfriend:who birthday:when birthplace:where boyfriend:who brother:who cat:what city:which country:which county:which customname:unknown daughter:who dialnumber:unknown dog:who`

机器人属性
-----

文件config / properties.txt包含bot属性。格式与谓词默认值的格式相同。例如：

`url:http://www.alicebot.org name:SUPER email:callmom-info@pandorabots.com gender:male botmaster:Dr. Richard S. Wallace organization:ALICE AI Foundation version:0.0.4`

换人
--

这些文件存储某些AIML标记的替换。格式与规范化替换的格式相同。以下是person.txt的示例：

`" with you "," with me2 " " with me "," with you2 " " to you "," to me2 " " to me "," to you2 " " of you "," of me2 " " of me "," of you2 "`

从上到下依次应用替换。

下表总结了替换文件的组织：

|**档案**|**AIML标签**||：--------- |：------------- ||normal.txt |`<normalize>`||person.txt |`<person>`||person2.txt |`<person2>`||gender.txt |`<gender>`|

版权
--

版权声明

目录config /包含一个名为copyright.txt的文件。转换程序将读取此文件并将版权声明放在每个AIML文件顶部的XML注释中。copyright.txt文件可能包含一些宏命令，转换程序将根据下表进行扩展。这些宏可帮助您编写适用于您的机器人的自定义版权声明。

|宏|扩张||：------ |：----------- ||`[url]`|由文件properties.txt |中的bot属性url指定的URL|`[date]`|当前日期||`[YYYY]`|当前日历年||`[version]`|来自properties.txt |的bot属性版本|`[botname]`|properties.txt中的botname属性|`[botmaster]`|来自properties.txt |的botmaster属性|`[organization]`|来自properties.txt的组织属性

API密钥
-----

如果您计划使用[Pannous Web服务](https://demo.pannous.com/)有`<sraix>`，请参阅[珍妮API](https://www.mashape.com/pannous/jeannie#pricing)以获取登录和apikey。程序AB在文件中查找这些值：

config / pannous-login.txt config / pannous-apikey.txt

如果没有这些文件，程序将分配默认值

`pannous_api_key = "guest" pannous_login = "test-user"`

AIML - 在AIML 2.0中设置和映射
----------------------

AIML 2.0草案标准包括用于表示集合和地图的新功能。AIML集是单词和短语的集合，AIML映射是将一个集合的元素转换为另一个集合的元素的函数。例如，我们可以定义一组动物{狗，蛇，袋鼠，马}以及从动物到腿数的地图{dog：4，snake：0，kangaroo：2，horse：4}。

集合和地图功能对机器人学习和推理具有重要意义。它们还减少了botmaster的工作量。在<set>存在之前，botmaster可能必须为集合中的每个成员编写不同的类别。现在，可以将大量类别的效果压缩为单个类别。

模式侧<set\>

AIML 2.0定义了模式端<set>标记。<pattern>（或<that>）元素中<set>的含义与<template>元素中<set>的含义完全不同。在模板方面，<set name =“age”> 40 </ set>表示将名为“age”的谓词设置为40.在模式方面，<set>标记没有属性。模式端<set>包含集的名称，如：

*   <set> color </ set> -一组颜色
    
*   <set> company </ set> -一组公司
    
*   <set> verb3sp </ set> -一组第三人称动词，简单形式，现在时。
    

AIML 2.0草案标准没有规定这些集合的定义。这个细节留给了AIML解释器的实现。在程序AB中，每个机器人都有一个名为sets /的子目录，其中集合在文本文件中定义。这些文件的格式为每行文本一个元素，例如文件color.txt以：

空军蓝色

爱丽丝蓝

茜素深红

杏仁

苋菜

琥珀色

美国玫瑰

紫晶

...

在模式匹配中，<set>元素的工作方式与通配符元素\_或\*非常相似。特别，

1.  \- <set>元素可以匹配一个或多个单词
    
2.  \- 如果在集合中找不到输入的单词，则匹配失败。
    
3.  \- AIML匹配订单修改如下：
    
4.  首先尝试下划线\_。
    
5.  尝试找到确切的单词匹配。
    
6.  尝试找到<set>匹配 -此步骤与AIML 1.1不同
    
7.  试试明星\*最后。
    
8.  \- 与通配符匹配的情况一样，AIML模式匹配器首先尝试一个单词集匹配，然后是两个单词匹配，然后是三个单词，依此类推，直到没有更多输入单词。这意味着当一个集合元素是另一个元素的前缀时，较短的匹配优先于较长的匹配。例如，应该注意一组包含“给”和“放弃”的动词 - “给”将首先匹配。
    
9.  \- 匹配<set>元素的单词可以在<template>中使用<star />访问，就好像<set>元素是另一个通配符一样。
    

让我们使用<set>查看一些简单的类别，以了解这些规则的应用方式。

<category> <pattern> MY FAVORITE COLOR <set> color </ set> </ pattern>

<模板>

<set name =“favoritecolor”> <formal> <star /> </ formal> </ set>是一个不错的颜色。

<think> <set name =“it”> <set name =“topic”> <star /> </ set> </ set> </ think>

</模板>

</类别>

<category> <pattern> MY FAVORITE COLOR IS \* </ pattern>

<template>我没有将<star />识别为颜色。</ template>

</类别>

<category> <pattern>我最喜欢的颜色是绿色</ pattern>

<template> <set name =“favoritecolor”>绿色</ set>也是我最喜欢的颜色！<think> <set name =“it”> <set name =“topic”>绿色</ set> </ set> </ think> </ template>

</类别>

<category> <pattern>我喜欢<set> color </ set> </ pattern>

<template> <srai>我最喜欢的颜色是<star /> </ srai> </ template>

</类别>

这些类别允许以下示例对话框。

人：我最喜欢的颜色是红色

机器人：红色是一种很好的颜色。

注释：输入匹配模式MY FAVORITE COLOR IS <set> color </ set>。机器人能够通过<star />标签访问“Red”。

人类：我最喜欢的颜色是空军蓝色

机器人：空军蓝色是一个很好的颜色。

注释：该集可能包含多个单词的短语。短语“Air Force Blue”在颜色集中。

人：我最喜欢的颜色是绿色

机器人：绿色也是我最喜欢的颜色！

评论：还有另一个类别，模式MY FAVORITE COLOR IS GREEN。由于精确单词匹配优先于<set>匹配，因此输入“我最喜欢的颜色为绿色”与此更具体的模式匹配。机器人响应“绿色也是我最喜欢的颜色！”

人类：我最喜欢的颜色是春天的巴黎

机器人：我在春天不认识巴黎是一种颜色。

评论：“春天的巴黎”这个短语不在颜色集中。<set>匹配失败，模式匹配器移动到具有MY FAVORITE COLOR IS \*模式的类别。

人：我喜欢紫蓝色

机器人：紫罗兰色是一种很好的颜色。

注释：只要用户说“我喜欢X”并且X是颜色的名称，最终类别就会应用缩减。

模板端<map>

AIML <map>标记将一个元素的元素转换为另一个元素的元素。第一组称为地图的域，第二组称为范围。（请注意，AIML <map>标记与AIML <oob> <map>标记不同.OOB <map>标记在地图上查找位置.AIML 2.0 <map>标记具有指定的属性“name”地图的名称。

<oob> <map>洛杉矶</ map> </ oob>\- 表示打开地图应用程序并显示洛杉矶。

<map name =“city2state”\>洛杉矶</ map>\- 查找名为“city2state”的地图，并返回“洛杉矶”的地图，大概是“加利福尼亚”。

与模式端<set>的情况一样，AIML 2.0草案规范没有说明如何定义地图。这取决于实施。在程序AB中，机器人具有关联的地图/子目录，其中地图在文本文件中定义。这些文件的格式是每行一个映射对，用冒号分隔，例如：

state2capital set：

缅因州：奥古斯塔

加利福尼亚州：萨克拉门托

纽约：奥尔巴尼

伊利诺伊州：斯普林菲尔德

简单的目标：

<类别>

<pattern> <set> state </ set> </ pattern>的大写是什么？

<template> <map name =“state2capital”> <star /> </ map> </ template>

</类别>

模板侧<map>元素使用属性“name”来指定命名映射。

如果命名映射不存在，<map>将返回默认值（程序AB中的“未知”）。如果映射存在，则解释器尝试在映射域中查找指定的元素。如果元素不在域中，则<map>返回另一个默认值（当前在程序AB中也是“未知”）。

如果地图存在且找到了domain元素，则<map>标记将返回地图范围中的关联元素。

要了解<map>的工作原理，让我们看一下测试类别：

<category> <pattern> \* <set> verb2sp </ set> \* </ pattern>

<template>谁<star index =“2”/> <star index =“3”/>？<星/>。

<star /> <map name =“verb2sp2verb1sp”> <star index =“2”/> </ map>是什么？<star index =“3”/>。

</模板>

pattern-side <set>和template-side <map>的含义：

<set> verb2sp </ set> -匹配的单词是一组名为verb2sp的成员，在sets /目录中定义。\[这里的符号约定意味着第二人称动词（2），简单形式，现在时（p）\]。

<map name =“verb2sp2verb1sp”> X </ map> -使用地图“verb2sp2verb1sp”，返回键X的地图条目。

地图在maps /目录中定义。

<star index =“2”/> -可以访问集合中找到的匹配单词，就好像<set> </ set>是另一个\*。

简单的演示对话：

人：乔确实有效

机器人：谁工作？乔。

乔做什么？工作。

人类：简似乎很累

机器人：谁似乎累了？简。

简看起来是什么？累。

人类：史蒂夫认为AIML设置和地图很酷。

机器人：谁认为AIML套装和地图很酷？史蒂夫。

史蒂夫怎么想？AIML集和地图很酷。

set verb2sp是

具有

不

说

得到

品牌

去

知道

需要

看到

来

想

容貌

希望

给

使用

认定

告诉

问

作品

似乎

感觉

尝试

树叶

电话

地图verb2sp2verb1sp是

有：有

确实做

说：说

获得：获得

使得：使

云：走

知道：知道

需要：取

看：看

来自：来

认为：认为

看：看

希望：希望

给：给

用途：使用

发现：发现

讲述：告诉

问：问

工作原理：工作

似乎是：似乎

感觉：感觉

尝试：尝试

叶：离开

电话：电话

上面的简化类别不包含<learn>或<learnf>标记，但是它们的模板说明了改进bot学习的潜力。

逆转AIML

Charles Chevallier创造了“Reversed AIML”一词来指代机器人可以将事实陈述转换为新的AIML类别的特征。例如，根据“Joe确实有效”的说法，机器人可以编写新的AIML类别来回答“Joe做什么？”和“谁工作？”这一问题。新的AIML是输入语句的“反向”。使用集合和映射，botmaster可以更轻松地编写反向AIML类别。通过使用<learn>标签构建新类别，机器人可以回答新问题：

人：乔做的。

机器人：我会记得乔做的。

人：谁工作？

机器人：乔。

人：乔做什么？

机器人：工作。

乔赚钱。→谁赚钱？

梅赛德斯生产汽车。→是什么让汽车？

练习：将<learnf>表达式写入本节中的示例类别，以便机器人可以实际回答新问题。

答：这是一种方法：

<category> <pattern> QUESTIONWORD <set> name </ set> </ pattern>

<模板>谁</模板>

</类别>

<category> <pattern> QUESTIONWORD <set> name </ set> \* </ pattern>

<模板>谁</模板>

</类别>

<category> <pattern> QUESTIONWORD \* </ pattern>

<模板>什么</模板>

</类别>

<category> <pattern> \* <set> verb2sp </ set> \* </ pattern>

<模板> <认为>

<set name =“learnpattern”> <srai> QUESTIONWORD <star /> </ srai> <star index =“2”/> <person> <star index =“3”/> </ person> </ set>？

<set name =“learntemplate”> <star /> </ set>。

<LEARNF>

<类别>

<pattern> <eval> <get name =“learnpattern”/> </ eval> </ pattern>

<template> <eval> <get name =“learntemplate”/> </ eval> </ template>

</类别>

</ LEARNF>

</认为>

现在你可以问我：“<get name =”learnpattern“/>？”

<认为>

<set name =“learnpattern”> <star /> <map name =“verb2sp2verb1sp”> <star index =“2”/> </ map> </ set>是什么？

<set name =“learntemplate”> <person> <star index =“3”/> </ person> </ set>。

<LEARNF>

<类别>

<pattern> <eval> <get name =“learnpattern”/> </ eval> </ pattern>

<template> <eval> <get name =“learntemplate”/> </ eval> </ template>

</类别>

</ LEARNF>

</认为>

和“<get name =”learnpattern“/>？”</ template>

</类别>

外部（远程）设置和地图

对于具有数千到数十万成员的大型集合和地图，可能不希望花费在小型设备上加载该集合所需的存储器资源。作为替代方案，程序AB允许使用远程服务器指定外部集和映射。

远程设置

构建和使用外部集的步骤如下：

1.编写一个AIML文件，其中包含set setName的每个成员setMember的类别，其中模式指定为

“ISA”\+ setName +“”\+ setMember

而模板是

“<template> true </ template>”

例如，如果setName是“color”，则“red”的类别将是

<category>  
<pattern> ISACOLOR RED </ pattern>  
<template> true </ template>  
</ category>

请注意，编写一个可以读取set成员文件并编写AIML类别文件的程序（几乎任何语言）都相当简单。

2.再添加一个类别以指示集合中未找到的任何内容不是成员，例如：

<category>  
<pattern> ISACOLOR \* </ pattern>  
<template> false </ template>  
</ category>

3.在Pandorabots服务器上创建Pandorabot并上传AIML文件。发布机器人，并记下主机名和机器人ID。

4.在Program AB sets /目录中，创建一个文本文件，其中包含该名称，如color.txt。在该文件中添加一行，以“external：”开头，其格式如下：

外部：www.pandorabots.com:8e3fc4b44e342400:4

*   “external”关键字表示这是一个外部集。
    
*   “www.pandorabots.com”指定主机名。
    
*   数字4是该组中任何成员的最大长度（以字为单位）。此参数通过省略对组中太长而无法进行检查的短语来节省处理和网络资源。
    

5.当程序AB加载sets /目录中的集合时，它会检测外部集合。

6.通常在模式表达式中使用<set>标记。如果颜色是外部设置，

<pattern> IS <set> color </ set> A COLOR </ pattern>

将检查“IS”和“COLOR”之间的输入词是否是外部集的成员。

远程地图

定义远程地图的步骤几乎与远程地图的步骤相同。

1.在map mapName中为每个对domainElement，rangeElement编写一个包含类别的AIML文件，其中模式被指定为

mapName +“”\+ domainElement

而模板是

“<template>”\+ rangeElement +“</ template>”

例如，如果setName是“zip2city”，则“94618”的类别将是

<category>  
<pattern> ZIP2CITY 94618 </ pattern>  
<template>加利福尼亚州奥克兰</ template>  
</ category>

请注意，与集合的情况一样，编写一个程序（几乎任何语言）都可以读取集合成员的文件并写入AIML类别的文件。

2.再添加一个类别以指示对于域中未找到的任何内容，映射是未知的。

<category>  
<pattern> ZIP2CITY \* </ pattern>  
<template> unknown </ template>  
</ category>

3.在Pandorabots服务器上创建Pandorabot并上传AIML文件。发布机器人，并记下主机名和机器人ID。（您可以使用与套装相同的机器人）。

4.在Program AB maps /目录中，创建一个带有地图名称的文本文件，如zip2city.txt。在该文件中添加一行，以“external：”开头，其格式如下：

外部：www.pandorabots.com：8e3fc4b44e342400

*   “external”关键字表示这是一个外部集。
    
*   “www.pandorabots.com”指定主机名。
    
*   请注意，不需要为映射指定最大元素长度，也不需要为集合指定。这是因为<pattern>元素可以比<template>侧的<map>元素更频繁地激活<pattern>元素。
    

5.当程序AB从maps /目录加载地图时，它会检测外部地图。

6.通常在模式表达式中使用<map>标记。如果zip2city是外部设置，

<template> 94618的城市是<map name =“zip2city”> 94618 </ set> </ pattern>

将向“远程服务器”发送“ZIP2CITY 94618”形式的请求，如果一切正常，远程服务器将返回“Oakland，CA”。

内置集和地图

解释器内置了一些AIML集和映射：

*   number\- 自然数{0,1,2，...}的集合
    
*   后继\- 函数f（x）= x + 1.（如果x不是数字，则返回“unknown”）
    
*   前身\- 函数f（x）= x -1。（如果x不是数字，则返回“unknown”）
    
*   单数\- 从复数名词到其单数形式的映射（仅英文）
    
*   复数\- 从单数名词到复数形式的映射（仅英文）
    

  

===
链接:[aiml 2  查询记录](https://bbs.huaweicloud.com/blogs/ddbc0a4eed7011e8bd5a7ca23e93a891)