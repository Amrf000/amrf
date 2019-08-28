教程：英雄之旅[](https://angular.io/tutorial#tutorial-tour-of-heroes "链接到此标题")
=======================================================================

的_英雄之旅_教程涵盖角的基本面。  
在本教程中，您将构建一个应用程序，帮助人员管理机构管理其稳定的英雄。

这个基本应用程序具有许多您希望在数据驱动的应用程序中找到的功能。它获取并显示英雄列表，编辑选定英雄的细节，并在不同的英雄数据视图之间导航。

在本教程结束时，您将能够执行以下操作：

*   使用内置的Angular指令来显示和隐藏元素并显示英雄数据列表。
    
*   创建角度组件以显示英雄详细信息并显示一组英雄。
    
*   对只读数据使用单向数据绑定。
    
*   添加可编辑字段以使用双向数据绑定更新模型。
    
*   将组件方法绑定到用户事件，例如击键和单击。
    
*   允许用户从主列表中选择英雄，并在详细信息视图中编辑该英雄。
    
*   使用管道格式化数据。
    
*   创建一个共享服务来组装英雄。
    
*   使用路由在不同视图及其组件之间导航。
    

你将学习足够的Angular来开始并获得Angular可以做任何你需要做的事情的信心。

完成所有教程步骤后，最终应用程序将如下所示[实例](https://angular.io/generated/live-examples/toh-pt6/stackblitz.html "实例")/[下载示例](https://angular.io/generated/zips/toh-pt6/toh-pt6.zip "下载示例")。

你将建立什么[](https://angular.io/tutorial#what-youll-build "链接到此标题")
---------------------------------------------------------------

以下是本教程引导的视觉概念，从“仪表板”视图和最英雄的英雄开始：

![heroes-dashboard-1.png](https://bbs-img.huaweicloud.com/blogs/img/1543159212772929.png "1543159212772929.png")

您可以单击仪表板上方的两个链接（“仪表板”和“英雄”）在此仪表板视图和英雄视图之间导航。

如果单击仪表板英雄“Magneta”，路由器将打开“英雄详细信息”视图，您可以在其中更改英雄的名称。

![hero-details-1.png](https://bbs-img.huaweicloud.com/blogs/img/1543159260590603.png "1543159260590603.png")

单击“返回”按钮可返回仪表板。顶部的链接将您带到任一主视图。如果单击“英雄”，应用程序将显示“英雄”主列表视图。

![heroes-list-2.png](https://bbs-img.huaweicloud.com/blogs/img/1543159267272456.png "1543159267272456.png")

单击其他英雄名称时，列表下方的只读迷你详细信息将反映新选项。

您可以单击“查看详细信息”按钮以深入查看所选英雄的可编辑详细信息。

下图捕获了所有导航选项。

![nav-diagram.png](https://bbs-img.huaweicloud.com/blogs/img/1543159273559947.png "1543159273559947.png")

这是应用程序的实际应用：

![toh-anim.gif](https://bbs-img.huaweicloud.com/blogs/img/1543159278919489.gif "1543159278919489.gif")

Application Shell [](https://angular.io/tutorial/toh-pt0#the-application-shell "链接到此标题")
========================================================================================

首先，使用Angular CLI创建初始应用程序。在本教程中，您将修改并扩展该入门应用程序以创建Tour of Heroes应用程序。

在本教程的这一部分中，您将执行以下操作：

1.  设置您的环境。
    
2.  创建一个新工作区和初始应用程序项目。
    
3.  提供申请。
    
4.  对应用程序进行更改。
    

设置环境[](https://angular.io/tutorial/toh-pt0#set-up-your-environment "链接到此标题")
----------------------------------------------------------------------------

要设置开发环境，请按照“[入门”中的](https://angular.io/guide/quickstart)说明进行操作：

*   [先决条件](https://angular.io/guide/quickstart#prerequisites)
    
*   [安装Angular CLI](https://angular.io/guide/quickstart#install-cli)
    

注意：您无需完成整个“入门”。完成“入门”的上述两个部分后，即可设置您的环境。继续下面创建Tour of Heroes工作区和一个初始应用程序项目。

创建新工作区和初始应用程序[](https://angular.io/tutorial/toh-pt0#create-a-new-workspace-and-an-initial-application "链接到此标题")
---------------------------------------------------------------------------------------------------------------

您可以在Angular[工作区](https://angular.io/guide/glossary#workspace)的上下文中开发应用程序。工作空间包含一个或多个[项目](https://angular.io/guide/glossary#project)的文件。项目是包含应用程序，库或端到端（e2e）测试的文件集。在本教程中，您将创建一个新工作区。

要创建新工作区和初始应用程序项目：

1.  确保您不在Angular工作区文件夹中。例如，如果您之前已创建“入门”工作区，请更改为该文件夹的父级。
    
2.  运行CLI命令`ng new`并提供名称`angular-tour-of-heroes`，如下所示：
    
    ng new angular-tour-of-heroes
    
3.  该`ng new`命令会提示您输入有关要包含在初始应用程序项目中的功能的信息。按Enter或Return键接受默认值。
    

Angular CLI安装必要的Angular`npm`包和其他依赖项。这可能需要几分钟。

它还会创建以下工作空间和入门项目文件：

*   一个新工作区，其根文件夹名为`angular-tour-of-heroes`。
    
*   一个初始骨架应用程序项目，也称为`angular-tour-of-heroes`（在`src`子文件夹中）。
    
*   端到端测试项目（在e2e子文件夹中）。
    
*   相关配置文件。
    

初始应用程序项目包含一个简单的欢迎应用程序，可以运行。

提供应用程序[](https://angular.io/tutorial/toh-pt0#serve-the-application "链接到此标题")
----------------------------------------------------------------------------

转到工作区目录并启动应用程序。

cd angular-tour-of-heroes
ng serve --open

该`ng serve`命令构建应用程序，启动开发服务器，监视源文件，并在对这些文件进行更改时重建应用程序。

该`--open`标志打开浏览器`[http](https://angular.io/api/common/http)://localhost:4200/`。

您应该会在浏览器中看到该应用正在运行

角度组件[](https://angular.io/tutorial/toh-pt0#angular-components "链接到此标题")
-----------------------------------------------------------------------

您看到的页面是_应用程序shell_。shell由名为的Angular组件控制`AppComponent`。

_组件_是Angular应用程序的基本构建块。它们在屏幕上显示数据，监听用户输入，并根据该输入采取措施。

更改应用程序[](https://angular.io/tutorial/toh-pt0#make-changes-to-the-application "链接到此标题")
--------------------------------------------------------------------------------------

在您喜欢的编辑器或IDE中打开项目，然后导航到该`src/app`文件夹以对启动器应用程序进行一些更改。

你会发现shell的实现`AppComponent`分布在三个文件中：

1.  `app.component.ts`\- 用TypeScript编写的组件类代码。
    
2.  `app.component.html`\- 用HTML编写的组件模板。
    
3.  `app.component.css`\- 组件的私有CSS样式。
    

### 更改应用程序标题[](https://angular.io/tutorial/toh-pt0#change-the-application-title "链接到此标题")

打开组件类文件（`app.component.ts`）并将`title`属性的值更改为“英雄之旅”。

app.component.ts（类标题属性）

title = 'Tour of Heroes';

打开组件模板文件（`app.component.html`）并删除Angular CLI生成的默认模板。将其替换为以下HTML行。

app.component.html（模板）

<h1>{{title}}</h1>

双花括号是Angular的_插值绑定_语法。此插值绑定`title`在HTML标头标记内显示组件的属性值。

浏览器刷新并显示新的应用程序标题。

### 添加应用程序样式[](https://angular.io/tutorial/toh-pt0#add-application-styles "链接到此标题")

大多数应用都力求在整个应用中保持一致的外观。`styles.css`为此，CLI生成了一个空。将应用程序范围的样式放在那里。

以下_是英雄_`styles.css`之_旅_示例应用程序的摘录。

src / styles.css（摘录）

/\* Application-wide Styles \*/h1 {  color: #369;  font-family: Arial, Helvetica, sans-serif;  font-size: 250%;}h2, h3 {  color: #444;  font-family: Arial, Helvetica, sans-serif;  font-weight: lighter;}body {  margin: 2em;}body, input\[type="text"\], button {  color: #888;  font-family: Cambria, Georgia;}/\* everywhere else \*/\* {  font-family: Arial, Helvetica, sans-serif;}

最终代码审查[](https://angular.io/tutorial/toh-pt0#final-code-review "链接到此标题")
------------------------------------------------------------------------

本教程的源代码和完整_的英雄之旅_全局样式可在[实例](https://angular.io/generated/live-examples/toh-pt0/stackblitz.html "实例")/[下载示例](https://angular.io/generated/zips/toh-pt0/toh-pt0.zip "下载示例")。

以下是此页面上讨论的代码文件。

SRC /应用程序/ app.component.ts

SRC /应用程序/ app.component.html

src / styles.css（摘录）

import { Component } from '@angular/core';@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: \['./app.component.css'\]})export class AppComponent {
  title = 'Tour of Heroes';
}
//====
<h1>{{title}}</h1>
//====
/\* Application-wide Styles \*/
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input\[type="text"\], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/\* everywhere else \*/
\* {
  font-family: Arial, Helvetica, sans-serif;
}

摘要[](https://angular.io/tutorial/toh-pt0#summary "链接到此标题")
----------------------------------------------------------

*   您使用Angular CLI创建了初始应用程序结构。
    
*   您了解到Angular组件显示数据。
    
*   您使用插值的双花括号来显示应用程序标题。
    

英雄编辑[](https://angular.io/tutorial/toh-pt1#the-hero-editor "链接到此标题")
====================================================================

该应用程序现在有一个基本的标题。接下来，您将创建一个新组件来显示英雄信息并将该组件放在应用程序shell中。

创建英雄组件[](https://angular.io/tutorial/toh-pt1#create-the-heroes-component "链接到此标题")
----------------------------------------------------------------------------------

使用Angular CLI，生成一个名为的新组件`heroes`。

ng generate component heroes

CLI创建一个新文件夹，`src/app/heroes/`并生成三个文件`HeroesComponent`。

在`HeroesComponent`类文件如下：

app / heroes / heroes.component.ts（初始版）

import { Component, OnInit } from '@angular/core';@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: \['./heroes.component.css'\]})export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }}

您始终`[Component](https://angular.io/api/core/Component)`从Angular核心库导入符号并使用注释组件类。`@[Component](https://angular.io/api/core/Component)`

`@[Component](https://angular.io/api/core/Component)`是一个装饰器函数，它指定组件的Angular元数据。

CLI生成了三个元数据属性：

1.  `selector`\- 组件的CSS元素选择器
    
2.  `templateUrl`\- 组件模板文件的位置。
    
3.  `[styleUrls](https://angular.io/api/core/Component#styleUrls)`\- 组件的私有CSS样式的位置。
    

在[CSS元素选择](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)，`'app-heroes'`是相匹配的标识父组件模板内此组件的HTML元素的名称。

这`ngOnInit`是一个[生命周期的钩子](https://angular.io/guide/lifecycle-hooks#oninit)。`ngOnInit`创建组件后不久就会进行Angular调用。这是放置初始化逻辑的好地方。

总是`export`组件类，所以你可以`import`在其他地方......就像在`AppModule`。

### 添加_英雄_属性[](https://angular.io/tutorial/toh-pt1#add-a-hero-property "链接到此标题")

为名为“Windstorm”的英雄添加一个`hero`属性`HeroesComponent`。

heroes.component.ts（英雄财产）

hero = 'Windstorm';

### 显示英雄[](https://angular.io/tutorial/toh-pt1#show-the-hero "链接到此标题")

打开`heroes.component.html`模板文件。删除Angular CLI生成的默认文本，并将其替换为绑定到新`hero`属性的数据。

heroes.component.html

{{hero}}

使用_UppercasePipe _[](https://angular.io/tutorial/toh-pt1#format-with-the-uppercasepipe "Link to this heading")格式化[](https://angular.io/tutorial/toh-pt1#format-with-the-uppercasepipe "链接到此标题")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

`hero.name`像这样修改绑定。

<h2>{{hero.name | uppercase}} Details</h2>

浏览器刷新，现在英雄的名字以大写字母显示。

`[uppercase](https://angular.io/api/common/UpperCasePipe)`插值绑定中的单词，在管道运算符（|）之后，激活内置函数`UppercasePipe`。

[管道](https://angular.io/guide/pipes)是格式化字符串，货币金额，日期和其他显示数据的好方法。角船有几个内置管道，你可以自己创建。

编辑英雄[](https://angular.io/tutorial/toh-pt1#edit-the-hero "链接到此标题")
------------------------------------------------------------------

用户应该能够在`<input>`文本框中编辑英雄名称。

文本框应_显示_英雄的`name`属性，并在用户键入时_更新_该属性。这意味着数据从组件类_流出到屏幕_，从屏幕_返回到类_。

要自动化该数据流，请在`<input>`表单元素和`hero.name`属性之间设置双向数据绑定。

### 双向绑定[](https://angular.io/tutorial/toh-pt1#two-way-binding "链接到此标题")

重构`HeroesComponent`模板中的详细信息区域，使其如下所示：

src / app / heroes / heroes.component.html（HeroesComponent的模板）

<div>
  <label>name:    <input \[(ngModel)\]="hero.name" placeholder="name">
  </label></div>

\[（ngModel）\]是Angular的双向数据绑定语法。

在这里，它将`hero.name`属性绑定到HTML文本框，以便数据可以_在两个方向上_流动_：_从`hero.name`属性到文本框，从文本框返回到`hero.name`。

### 缺少的_FormsModule _[](https://angular.io/tutorial/toh-pt1#the-missing-formsmodule "链接到此标题")

请注意，添加后应用程序停止工作。`[([ngModel](https://angular.io/api/forms/NgModel))]`

要查看错误，请打开浏览器开发工具，然后在控制台中查找消息

Template parse errors:Can't bind to 'ngModel' since it isn't a known property of 'input'.

虽然`[ngModel](https://angular.io/api/forms/NgModel)`是有效的Angular指令，但默认情况下不可用。

它属于可选项`[FormsModule](https://angular.io/api/forms/FormsModule)`，您必须_选择_使用它。

_AppModule _[](https://angular.io/tutorial/toh-pt1#appmodule "链接到此标题")
----------------------------------------------------------------------

Angular需要知道应用程序的各个部分是如何组合在一起的，以及应用程序需要的其他文件和库。此信息称为_元数据_

某些元数据位于您添加到组件类的装饰器中。其他关键元数据在装饰器中。`@[Component](https://angular.io/api/core/Component)`[`@NgModule`](https://angular.io/guide/ngmodules)

最重要的装饰器注释顶级AppModule类。`@[NgModule](https://angular.io/api/core/NgModule)`

Angular CLI`AppModule`在`src/app/app.module.ts`创建项目时生成了一个类。这是您_选择加入_的地方`[FormsModule](https://angular.io/api/forms/FormsModule)`。

### 导入_FormsModule _[](https://angular.io/tutorial/toh-pt1#import-formsmodule "链接到此标题")

打开`AppModule`（`app.module.ts`）并`[FormsModule](https://angular.io/api/forms/FormsModule)`从`@angular/forms`库中导入符号。

app.module.ts（FormsModule符号导入）

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

然后添加`[FormsModule](https://angular.io/api/forms/FormsModule)`到元数据的数组，其中包含应用程序所需的外部模块列表。`@[NgModule](https://angular.io/api/core/NgModule)``[imports](https://angular.io/api/core/NgModule#imports)`

app.module.ts（@NgModule导入）

imports: \[
  BrowserModule,
  FormsModule\],

当浏览器刷新时，应用程序应该再次运行。您可以编辑英雄的名称，并查看`<h2>`文本框上方立即反映的更改。

### 声明_HeroesComponent _[](https://angular.io/tutorial/toh-pt1#declare-heroescomponent "链接到此标题")

每个组件必须在_一个_[NgModule中](https://angular.io/guide/ngmodules)声明。

_你_没有申报`HeroesComponent`。那么为什么应用程序有效呢？

它起作用是因为Angular CLI`HeroesComponent`在`AppModule`生成该组件时声明了。

打开`src/app/app.module.ts`并找到`HeroesComponent`顶部附近的进口。

import { HeroesComponent } from './heroes/heroes.component';

的`HeroesComponent`是在中声明阵列。`@[NgModule.declarations](https://angular.io/api/core/NgModule#declarations)`

declarations: \[
  AppComponent,
  HeroesComponent\],

请注意，`AppModule`声明两个应用程序组件，`AppComponent`和`HeroesComponent`。

最终代码审阅[](https://angular.io/tutorial/toh-pt1#final-code-review "链接到此标题")
------------------------------------------------------------------------

你的应用应该是这样的[实例](https://angular.io/generated/live-examples/toh-pt1/stackblitz.html "实例")/[下载示例](https://angular.io/generated/zips/toh-pt1/toh-pt1.zip "下载示例")。以下是此页面上讨论的代码文件。

SRC /应用/英雄/ heroes.component.ts

SRC /应用/英雄/ heroes.component.html

SRC /应用程序/ app.module.ts

SRC /应用程序/ app.component.ts

SRC /应用程序/ app.component.html

SRC /应用程序/ hero.ts

略

摘要[](https://angular.io/tutorial/toh-pt1#summary "链接到此标题")
----------------------------------------------------------

*   您使用CLI创建了第二个`HeroesComponent`。
    
*   您`HeroesComponent`通过将其添加到`AppComponent`shell来显示。
    
*   您应用了`UppercasePipe`格式化名称。
    
*   您使用了与`[ngModel](https://angular.io/api/forms/NgModel)`指令的双向数据绑定。
    
*   你了解了这个`AppModule`。
    
*   你进口`[FormsModule](https://angular.io/api/forms/FormsModule)`的`AppModule`，这样就会角度认识和应用的`[ngModel](https://angular.io/api/forms/NgModel)`指令。
    
*   您了解了声明组件的重要性，`AppModule`并了解CLI为您声明了它。
    

显示英雄列表[](https://angular.io/tutorial/toh-pt2#display-a-heroes-list "链接到此标题")
============================================================================

在此页面中，您将展开英雄之旅应用程序以显示英雄列表，并允许用户选择英雄并显示英雄的详细信息。

创建模拟英雄[](https://angular.io/tutorial/toh-pt2#create-mock-heroes "链接到此标题")
-------------------------------------------------------------------------

你需要一些英雄来展示。

最终，您将从远程数据服务器获取它们。现在，你将创建一些_模拟英雄_并假装他们来自服务器。

创建在文件夹中调用`mock-heroes.ts`的`src/app/`文件。将`HEROES`常量定义为十个英雄的数组并将其导出。该文件应如下所示。

SRC /应用程序/模拟heroes.ts

import { Hero } from './hero';export const HEROES: Hero\[\] = \[
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }\];

显示英雄[](https://angular.io/tutorial/toh-pt2#displaying-heroes "链接到此标题")
----------------------------------------------------------------------

你将要在顶部显示英雄列表`HeroesComponent`。

打开`HeroesComponent`类文件并导入模拟`HEROES`。

src / app / heroes / heroes.component.ts（导入英雄）

华为云输入内容检测有问题，转载比较费劲

原文：[https://angular.io/tutorial](https://angular.io/tutorial)

  

---
链接:[angular.io教程转载](https://bbs.huaweicloud.com/blogs/d70e8069f0c511e8bd5a7ca23e93a891)