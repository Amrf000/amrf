[https://www.outlook-apps.com/insert-html-to-outlook-emails/](https://www.outlook-apps.com/download/bells-whistles/)

[如何将HTML代码插入Outlook电子邮件](https://www.outlook-apps.com/insert-html-to-outlook-emails/ "永久链接：如何将HTML代码插入Outlook电子邮件")
===================================================================================================================

假设您使用的是Microsoft Outlook，您必须设计并发送HTML电子邮件（例如，带有一些文本和图像的HTML简报）。首先，您将很快了解到 - 如果您使用Outlook或Word设计电子邮件 - 电子邮件源代码实际上会在其他电子邮件客户端上呈现错误。发生这种情况是因为Outlook主要使用VML（矢量标记语言）生成电子邮件源代码，其他电子邮件客户端支持不当。  
  
您必须以某种方式将干净的HTML源代码导入到Outlook电子邮件中，以便在大多数电子邮件客户端应用程序中正确显示它。  

除非您使用OFT模板文件，宏技巧或Bells＆Whistles for Outlook，否则Outlook始终会更改导入的HTML代码

  
要插入您自己的HTML电子邮件代码，Web上有许多文章建议您将HTML文件拖放到Outlook上或使用“作为文本插入”功能插入HTML文件。嗯，他们完全错了。您很快就会发现Outlook改变/转换您的HTML代码：只需执行复制/粘贴或拖放操作，就无法将自己的干净HTML代码插入Outlook。

**基本上，要将干净的HTML代码插入到Outlook电子邮件中，您有三种解决方案：**

1.将您的HTML文件保存为Outlook OFT电子邮件模板，然后使用OFT模板预加载您的电子邮件（请参阅本教程，[了解如何从HTML创建Outlook OFT模板](https://www.outlook-apps.com/outlook-template-emails/)）;

2.使用宏脚本将HTML代码直接加载到Outlook电子邮件中;

3.使用[Bells＆Whistles for Outlook](https://www.outlook-apps.com/product/bells-whistles-for-outlook/)：它在Outlook电子邮件编辑器中添加了“插入HTML”按钮，使您可以非常轻松地选择HTML文件并将其HTML代码插入Outlook电子邮件中。

### 如何将干净的HTML代码插入Outlook

假设您已经下载了Bells＆Whistles（[下载链接](https://www.outlook-apps.com/download/bells-whistles/)），您所要做的就是打开一个新的Outlook电子邮件，然后转到Bells菜单并单击蓝色的“Insert HTML”按钮并浏览以选择HTML文件这将加载到您的电子邮件中。而已！  
[![insert-html-Outlook-addin.png](https://bbs-img.huaweicloud.com/blogs/img/1548594253599074.png "1548594253599074.png")](https://www.outlook-apps.com/wp-content/uploads/insert-html-Outlook-addin.png)

**如果您不想使用Bells＆Whistles插件来插入HTML代码，我们将在下面描述一种编程方式，将您自己的HTML代码添加到Outlook电子邮件中，而不会被Outlook更改。**

确保您没有使用试用版的Office（在过期的Office试用版中禁用了开发人员模式）。以下过程在Microsoft Outlook 2010和2013上进行了测试。

1.右键单击Outlook功能区（菜单区域） - >选择自定义功能区 - >**标记/启用开发人员**，启用Outlook Developer模式;  
![customize_outlook_ribbon-300x60.png](https://bbs-img.huaweicloud.com/blogs/img/1548594365690189.png "1548594365690189.png")

2.在Developer选项卡中，转到Macro Security - >**enable“Notification for all macros”**;  
![Outlook_macro_security-300x141.png](https://bbs-img.huaweicloud.com/blogs/img/1548594481364506.png "1548594481364506.png")

3.在“开发工具”选项卡中，单击“Visual Basic” - >“工具” - >“引用” - >**启用“Microsoft WORD 15.0对象库”**（不要将其与“Microsoft Office 15.0对象库”混淆）。如果您使用的是Office 2010，请查找Word 14.0（15.0表示Office 2013）;  
![Word-library-300x242.png](https://bbs-img.huaweicloud.com/blogs/img/1548594415765686.png "1548594415765686.png")

4.在Developer Macros-> Macros菜单中，键入新宏的名称（例如，InsertHTMLFile），然后单击Create;  
![new_Outlook_macro-300x230.png](https://bbs-img.huaweicloud.com/blogs/img/1548594424283648.png "1548594424283648.png")

5.在宏编辑器中，在Sub < - > End Sub行之间复制并粘贴以下源代码：  

Dim insp As Inspector  
Set insp = ActiveInspector  
如果insp.IsWordMail然后  
Dim wordDoc As Word.Document  
Set wordDoc = insp.WordEditor  
wordDoc.Application.Selection.InsertFile“**e：\\ test.html**”,, False，False，False  
End If

6.**将“e：\\ test.html”替换为**要插入Outlook电子邮件正文**的所需HTML文件的实际路径**。确保使用HTML文件的绝对路径（例如“C：\\ MyDocs \\ outlook-file.html”而不是“MyDocs \\ outlook-file.html”）;

7.保存宏。以防万一，重启Outlook以激活更改;

8.创建一个新的Outlook电子邮件，然后转到“开发人员”选项卡 - >“宏”并选择新创建的宏。它应将未经修改的HTML代码插入您的Outlook电子邮件

![insert-clean-HTML-300x147.png](https://bbs-img.huaweicloud.com/blogs/img/1548594770179733.png "1548594770179733.png")

虽然上面的HTML插入方法远不是一个双击解决方案，但它实际上是**向Outlook电子邮件中插入未经修改的，干净的HTML代码的最简单方法**。虽然在常规日常电子邮件中使用此方法肯定会产生反效果，但如果您通过Easy Mail Merge等邮件合并插件发送电子邮件简报，则可能是一种有用的解决方案。

### Outlook HTML限制

即使您将自己的HTML代码插入Outlook电子邮件，Outlook也不会正确呈现它，除非您遵循以下简单指南：  
1。**所有链接和图像必须链接为绝对URL**（使用类似_img src =“images / image1.png） “_无法使用，你必须使用像www.domain.com/images/image1.png这样的绝对网址;  
2.**不要从外部CSS文件加载CSS样式**\- 你必须使用内联CSS。这是一个很好的工具，可以检查和清理HTML电子邮件文件：[http](http://premailer.dialect.ca/)：[//premailer.dialect.ca/](http://premailer.dialect.ca/);  
3.确保使用Outlook实际支持的HTML标记和属性。**Outlook旨在仅支持HTML 4的子集**，所以一些HTML标签被忽略了。这些标记不会从您的电子邮件代码中删除（它们将在支持它们的其他电子邮件客户端上显示正常），但Outlook会跳过它们。以下是已[忽略的电子邮件HTML标记](https://www.outlook-apps.com/html-ignored-by-outlook/)列表。

outlookhtmleditor
=================

[https://archive.codeplex.com/?p=outlookhtmleditor](https://archive.codeplex.com/?p=outlookhtmleditor)  

对于电子邮件程序员，本机HTML编码是创建HTML电子邮件的标准过程。它是Outlook加载项，用于在Outlook上启用本机HTML代码编辑。
------------------------------------------------------------------------

**项目描述**  
对于电子邮件程序员，本机HTML编码是创建HTML电子邮件的标准过程。它是Outlook加载项，用于在Outlook上启用本机HTML代码编辑。  
  
![bfd6b1b1-e534-4ebf-a133-132346ce54e1.jpg](https://bbs-img.huaweicloud.com/blogs/img/1548596349127165.jpg "1548596349127165.jpg")  
它具有HTML电子邮件程序员的基本功能。

*   导入HTML文件：选择要导入的HTML文件
    
*   编辑HTML源：直接在编辑器对话框中编辑HTML源代码。关闭对话框后，更改将受到影响。请记住，如果您在其WYSIWYG编辑器上编辑任何位，Outlook将自动添加杂乱的代码。
    

  
**要求（面向开发人员）**

*   Visual Studio 2010 Professional
    
*   使用VSTO的Microsoft Outlook 2010或2013
    

  
**要求（针对用户）**

*   Microsoft Outlook 2010或2013
    

  
**谁需要这个？**

*   使用Outlook编辑和爆炸的电子邮件营销人员
    
*   想要将HTML内容导入Outlook电子邮件
    
*   在Outlook 2010或更高版本上创建HTML电子邮件的程序员
    
*   希望在Outlook 2010或Outlook 2013上控制HTML电子邮件的HTML / CSS源的程序员
    

  
**新功能**

*   HTML代码编辑器的HTML颜色标记（ICSharpCode.TextEditor \*）
    

  
**下一步计划**

*   没有对话框的HTML代码编辑器的集成界面（嵌入到撰写窗口）
    
*   Outlook 2007或更低版本
    

[https://www.msoutlook.info/question/insert-html-code-directly-into-an-email](https://www.msoutlook.info/question/insert-html-code-directly-into-an-email)

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1548596444491347.png "1548596444491347.png")
===================================================================================================

编辑电子邮件HTML源的循序渐进指南
==================

在Windows Live Mail和Outlook Express中编辑HTML源
------------------------------------------

Windows Live Mail和Outlook Express已停用包含View Source功能的电子邮件客户端。它们被Windows Mail取代，它快速，轻便，并且只能处理电子邮件的核心基础，因此可以快速运行。它不包括查看电子邮件的HTML源的方法。

### 在Windows Live Mail和Outlook Express中编辑电子邮件的HTML源

如果您在Windows Live Mail或Outlook Express中[撰写](https://www.lifewire.com/use-rich-html-formatting-windows-mail-1173500)丰富的HTML邮件，则可以使用格式化工具栏执行大量操作，但不能执行HTML必须提供的所有操作。通过访问[HTML](https://www.lifewire.com/what-is-html-3482374)源代码，您可以。

如果您想了解传入电子邮件如何管理其引人注目的外观，请检查传入电子邮件上的HTML源代码。

### 在Windows Live Mail和Outlook Express中编辑邮件的HTML源

编辑正在Windows Live Mail或Outlook Express中撰写的邮件的HTML源代码。

1.  从消息菜单中选择“**查看”**\>“**源编辑**”。
    
2.  单击窗口底部的“**源”**选项卡。
    
3.  现在，根据需要**编辑HTML**源代码。
    

要返回默认的Windows Live Mail或Outlook Express组合窗口，请转到“**编辑”**选项卡。

### 编辑您收到的邮件的HTML源

如果要在Windows Live Mail或Outlook Express中收到的消息中查看HTML源代码：

1.  在Windows Live Mail或Outlook Express中打开邮件。
    
2.  按住**Ctrl**键并单击**F2**键。
    

这会在编辑器中显示其中的电子邮件源文本，您可以在其中查看编码并对其进行编辑以供您自己使用。

### 关闭HTML代码突出显示

如果您发现突出显示分散注意力的默认HTML源代码，则可以将其关闭。

[https://www.linkedin.com/pulse/how-insert-html-source-code-outlook-emails-maurizio-la-cava/](https://www.linkedin.com/pulse/how-insert-html-source-code-outlook-emails-maurizio-la-cava/)

### 在Outlook 365中导入HTML电子邮件

1.选择更多命令以自定义快速访问工具栏

![0.jpg](https://bbs-img.huaweicloud.com/blogs/img/1548596597226389.jpg "1548596597226389.jpg")

2.选择“附加”功能并将其“添加”到工具栏中

![0 (1).jpg](https://bbs-img.huaweicloud.com/blogs/img/1548596625388243.jpg "1548596625388243.jpg")

3.从快速访问工具栏中打开“附加文件”窗口

![0 (1).jpg](https://bbs-img.huaweicloud.com/blogs/img/1548596647417744.jpg "1548596647417744.jpg")

4.选择HTML文件，你需要进口，但不点击INSERT但

![0 (2).jpg](https://bbs-img.huaweicloud.com/blogs/img/1548596674721097.jpg "1548596674721097.jpg")

5.使用“作为文本插入”按钮切换“插入”按钮，然后单击

![0 (4).jpg](https://bbs-img.huaweicloud.com/blogs/img/1548596700173732.jpg "1548596700173732.jpg")

这是魔术！HTML文件将在您的电子邮件中正确导入和可视化。此时，您只需将其发送给您的观众即可。

我希望这篇简短的指南可以帮助您在Outlook 365中处理HTML电子邮件时加快速度。

我很期待你的意见。
链接:[[转载]向OutLook中添加HTML源码](https://bbs.huaweicloud.com/blogs/b87f14af223411e9bd5a7ca23e93a891)