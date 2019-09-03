![Golang中的JSON简介](https://medium.com/@ciaranmcveigh5/json-in-golang-an-introduction-8e889c29a83)
Golang中的JSON简介
==============

关于如何在Golang应用程序中使用和返回JSON的简单说明
------------------------------

[![Ciaran Mcveigh](https://miro.medium.com/fit/c/48/48/1*_p2yp_UexRhbktpMoNcaig.jpeg)](/@ciaranmcveigh5?source=post_page-----8e889c29a83----------------------)

[Ciaran Mcveigh](/@ciaranmcveigh5?source=post_page-----8e889c29a83----------------------)

跟随

[9月2日](/@ciaranmcveigh5/json-in-golang-an-introduction-8e889c29a83?source=post_page-----8e889c29a83----------------------) · 7 分钟阅读

![](https://miro.medium.com/max/30/1*30aoNxlSnaYrLhBT0O1lzw.png?q=20)

![](https://miro.medium.com/max/1500/1*30aoNxlSnaYrLhBT0O1lzw.png)

介绍
==

在本文中，我将向您展示如何在Go中解析和返回JSON的基础知识，同时还向您提供对该过程的理解。

首先，让我们看一下如何在其他语言中解析JSON，特别是动态类型的，我将以python为例。

##############   
RETURNING JSON   
############## import json #a   
  
Python对象（dict）：  
p\_dict = {   
 “name”：“John” ，  
 “age”：30，  
 “city”：“New York”   
}   
  
＃转换为JSON：  
y = json.dumps（p\_dict）  
  
＃结果是一个JSON字符串：  
print（y）######### #####   
CONSUMING JSON   
############## import json #dome   
  
JSON：  
j\_str ='{“name”：“John”，“age”：30，“city”：“纽约“}'   
  
#parse x：  
y = json.loads（j\_str）  
  
＃结果是一个Python字典：  
print（y \[”age“\]）

代码看起来相对简单，在返回JSON的情况下，我们有一个python字典“p\_dict”，我们可以使用它转换为JSON字符串`json.dumps(p_dict)`。当使用JSON时，我们有一个JSON字符串“j\_str”，我们可以使用它转换为python diction `json.loads(j_str)`。

现在，在像Go这样的**静态类型**语言中解析像JSON这样的格式会带来一些问题。Go是静态类型的，这意味着程序中每个变量的类型都需要在编译时知道。这意味着您作为程序员必须指定每个变量的类型。其他语言（python）提供某种形式的类型推断，类型系统能够推断出变量的类型。静态类型语言的主要优点  是所有类型的检查都可以由编译器完成，因此在很早的阶段就会发现许多琐碎的错误。一个简单的代码示例可能会澄清。

PYTHON x = 3 GOLANG var x int = 3

在解析JSON时，任何东西都可以显示在JSON主体中，那么编译器如何知道如何设置内存，因为它不知道类型？

这有两个答案。当你知道你的数据会是什么样子时会得到一个答案，而当你不了解数据时会得到答案。我们将首先介绍第一个选项，因为这是最常见的情况并导致最佳实践。

当JSON中的数据类型已知时，您应该将JSON解析为您定义的结构。任何不适合结构的字段都将被忽略。我们将在返回和使用JSON时探索此选项。

![](https://miro.medium.com/max/30/1*Hup2haY1IpFdiUC2Url2gw.png?q=20)

![](https://miro.medium.com/max/275/1*Hup2haY1IpFdiUC2Url2gw.png)

返回JSON
======

假设我们想要返回以下JSON对象。

{   
 “key1”：“value 1”，  
 “key2”：“value 2”   
}

下面的代码显示了这是如何完成的，让我们来谈谈它。

*   第3-6行：我们导入encoding / json和fmt包以解析JSON并打印结果。
*   第8-11行：JSONReponse结构是JSON的Go变量表示，与python字典是JSON的python变量表示的方式相同。
*   第8-11行：注意在JSONReponse中我们只声明类型没有值，我们还添加“Go Tags” `` `json: "key1"` ``，让我们知道JSON对象中关联的键是什么。
*   第15-18行：jsonResponse是JSONResponse结构的实例化并填充值。
*   第20-21行：我们将jsonResponse变量打印到控制台，以便我们可以将其与稍后打印的JSON进行对比。
*   第23-24行：我们将变量jsonResponse编组为JSONResponse类型，将其转换为字节数组并考虑“Go Tags”中声明的映射。返回的字节数组存储在byteArray变量中。
*   第26-28行：我们对Marshal函数进行错误检查，如果不是nil则打印错误。
*   第30-31行：我们将byteArray转换为字符串并打印它，我们现在可以查看打印结构和打印JSON之间的区别。

请在此处运行代码以查看结果，使用代码也是学习[https://play.golang.org/p/gaBMvz21LiA](https://play.golang.org/p/gaBMvz21LiA)的最佳方式。

嵌套的JSON
-------

现在让我们看一下具有嵌套项的更复杂的JSON对象

{   
 “key1”：“value 1”，  
 “key2”：“value 2”，  
 “nested”：{   
 “nestkey1”：“nest value 1”，  
 “nestkey2”：“nest value 2”   
 }   
}

下面的代码显示了这是如何完成的，让我们来讨论改变了什么。

*   第11行：不是将Nested声明为类型字符串，而是将Nested声明为Nested类型，这是我们即将创建的类型。
*   第14-17行：我们声明了我们在JSONResponse中使用的嵌套类型结构，遵循我们想要返回的JSON的格式。
*   第21-30行：我们实例化Nested类型的嵌套变量和JSONResponse类型的jsonResponse变量，后者又引用我们刚刚声明的嵌套变量。

这些是这个例子和前一个例子之间的主要区别。再次运行此处的代码进行测试，并在评论[https://play.golang.org/p/GcRceKe1jC-中](https://play.golang.org/p/GcRceKe1jC-)进行一些修改。

JSON中的数组
--------

最后，让我们看一下返回包含数组的JSON对象。

{   
 “key1”：“value 1”，  
 “key2”：“value 2”，  
 “nested”：{   
 “nestkey1”：“nest value 1”，  
 “nestkey2”：“nest value 2”   
 }，  
 “arrayitems”：\[   
 {   
 “iteminfokey1”：“item info 1 array index 0”，  
 “iteminfokey2”：“item info 2 array index 0”   
 }，  
 {   
 “iteminfokey1”：“item info 1 array index 1”，  
 “iteminfokey2”：“item info 2数组索引1“   
 }   
 \]   
}

下面的代码显示了这是如何完成的，再次让我们讨论一下发生了什么变化。

*   第12行：我们将ArrayItems添加到我们的JSONResponse，它是\[\] ArrayItem类型，ArrayItem类型的数组，我们将在下面声明。
*   第20-23行：声明ArrayItem结构这是数组中每个项目所包含内容的定义。
*   第27-36行：实例化类型为\[\] ArrayItem的arrayItem，并填充每个索引中的值。
*   第47行：在jsonResponse的声明中引用arrayItems变量。

测试它并在这里使用代码[https://play.golang.org/p/YhqKR6lZ\_ge](https://play.golang.org/p/YhqKR6lZ_ge)。

消耗JSON
======

好的，现在让我们看一下从其他API中消耗JSON，我将从API中模拟返回的JSON以简化该过程。由于我们现在已经了解Go结构如何与JSON字符串相关，因此我们将直接使用复杂的JSON对象。

这是我们将从API获得的JSON响应。我正在使用从[https://httpbin.org/get](https://httpbin.org/get)返回的JSON，这是一个用于测试HTTP请求和响应的优秀网站。这是我们将要收到的JSON。（在终端运行测试）`curl [https://httpbin.org/get](https://httpbin.org/get)`

{   
 “args”：{}，  
 “headers”：{   
 “接受”：“\* / \*”，  
 “主持人”：“httpbin.org”，  
 “用户代理”：“curl / 7.54.0”   
 }，  
 “来源” “：”83.7.252.17,83.7.252.17“，  
 ”url“：”https：//httpbin.org/get“   
}

请注意，“来源”对您来说会有所不同，因为您的请求来自不同的IP。空的“args”对象将包含URL中传递的任何参数。所以[https://httpbin.org/get?testArg=testValue&x=3](https://httpbin.org/get?testArg=testValue&x=3)会返回，

“args”：{   
 “testArg”：“testValue”，  
 “x”：“3”   
}

当我们不知道键名称或值的类型将是什么时，这个args值是一个很好的例子。为了解决这个问题，我们设置了“args”类型，`map[string]interface{}`它是一个带有类型为string的键和类型为interface {}的值的映射（散列表）。空`interface{}`是一种在Go中定义变量的方法，因为“这可能是任何东西”。在运行时，Go将分配适当的内存以适合您决定存储在其中的任何内容。

让我们看一下在代码中使用API​​中的JSON并讨论文件主要部分的示例。

*   第8-19行：声明Structs以匹配返回的JSON的结构。
*   第22行：类型为字符串的模拟JSON响应。
*   第24行：实例化JSONResponse类型的jsonResponse。
*   第25行：从JSON字符串和jsonResponse变量，Go标签`` `json:"headers"` ``等中解组数据，使特定的JSON键值能够加载到结构中的适当变量中。
*   第25行：unmarshal函数要求JSON数据在字节数组中传递，这就是我们将JSON字符串转换为字节数组的原因。
*   第25行：unmarshal函数需要传递变量的指针，这就是为什么在jsonResponse之前有一个＆符号。＆jsonResponse是jsonResponse的内存位置，请参阅[此处](https://dave.cheney.net/2017/04/26/understand-go-pointers-in-less-than-800-words-or-your-money-back)以获取有关指针的更多信息。
*   第27-29行：解组时的错误检查。
*   第31行：打印jsonResponse Go变量，该变量现在包含JSON字符串中的数据。

亲自试试吧[https://play.golang.org/p/oqFjZii\_yjA](https://play.golang.org/p/oqFjZii_yjA)。

解析接口
====

我们现在知道如果我们不确定要在JSON中使用的值类型或键名，我们可以将JSON解析为map \[string\] interface {}类型。如果我们查看前面的示例并想象值是通过URL（[https://httpbin.org/get?testArg=testValue&x=3](https://httpbin.org/get?testArg=testValue&x=3)）传入的结果，

“args”：{   
 “testArg”：“testValue”，  
 “x”：“3”   
}

只需通过引用`jsonResponse.Args["testArg"]`和访问这些值即可`jsonResponse.Args["x"]`。看看这里[https://play.golang.org/p/WehVIkK8CRd](https://play.golang.org/p/WehVIkK8CRd)，我已经更新了模拟的JSON以包含“args”对象中的值，并在最后添加了2个打印语句，向您展示如何访问值。

希望这有助于您更好地理解如何在Go中使用JSON。一如既往，欢迎任何反馈，如果我犯了任何错误，请告诉我。