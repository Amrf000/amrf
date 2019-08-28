架构概述[](https://angular.io/guide/architecture#architecture-overview "链接到此标题")
============================================================================

Angular是用于在HTML和TypeScript中构建客户端应用程序的平台和框架。Angular是用TypeScript编写的。它将核心和可选功能实现为您导入应用程序的一组TypeScript库。

Angular应用程序的基本构建块是_NgModules_，它为_组件_提供编译上下文。NgModules将相关代码收集到功能集中;Angular应用程序由一组NgModules定义。应用程序始终至少具有启用引导的_根模块_，并且通常具有更多_功能模块_。

*   组件定义_视图_，这些_视图_是Angular可以选择的屏幕元素集，并根据您的程序逻辑和数据进行修改。
    
*   组件使用_服务_，这些_服务_提供与视图不直接相关的特定功能。服务提供者可以作为_依赖项__注入_组件，使您的代码模块化，可重用和高效。
    

组件和服务都只是类，其中_装饰器_标记其类型并提供告知Angular如何使用它们的元数据。

*   组件类的元数据将其与定义视图的_模板_相关联。模板将普通HTML与Angular_指令_和_绑定标记_相_结合_，允许Angular在呈现HTML之前修改HTML。
    
*   服务类的元数据提供了Angular需要的信息，以通过_依赖注入（DI）_使其可用于组件。
    

应用程序的组件通常定义许多视图，按层次排列。Angular提供的`[Router](https://angular.io/api/router/Router)`服务可帮助您定义视图之间的导航路径。路由器提供复杂的浏览器内导航功能。

模块[](https://angular.io/guide/architecture#modules "链接到此标题")
------------------------------------------------------------

Angular_NgModules_与JavaScript（ES2015）模块不同并且互为补充。NgModule声明了一组专用于应用程序域，工作流或密切相关的功能组件的编译上下文。NgModule可以将其组件与相关代码（例如服务）相关联，以形成功能单元。

每个Angular应用程序都有一个常规命名的_根模块_，`AppModule`它提供启动应用程序的引导机制。应用程序通常包含许多功能模块。

与JavaScript模块一样，NgModules可以从其他NgModule导入功能，并允许其他NgModules导出和使用它们自己的功能。例如，要在应用程序中使用路由器服务，请导入`[Router](https://angular.io/api/router/Router)`NgModule。

将代码组织到不同的功能模块中有助于管理复杂应用程序的开发以及可重用性的设计。此外，这种技术允许您利用_延迟加载_\- 即按需加载模块 - 以最大限度地减少启动时需要加载的代码量。

有关更详细的讨论，请参阅[模块简介](https://angular.io/guide/architecture-modules)。

组件[](https://angular.io/guide/architecture#components "链接到此标题")
---------------------------------------------------------------

每个Angular应用程序至少有一个组件，即将组件层次结构与页面文档对象模型（DOM）连接起来的_根组件_。每个组件定义一个包含应用程序数据和逻辑的类，并与定义要在目标环境中显示的视图的HTML_模板_相关联。

所述装饰标识类正下方它作为一个组件，并且提供了模板和相关的特定于组件的元数据。`@[Component](https://angular.io/api/core/Component)()`

装饰器是修改JavaScript类的函数。Angular定义了许多将特定类型的元数据附加到类的装饰器，以便系统知道这些类的含义以及它们应该如何工作。

[详细了解网络上的装饰器。](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.x5c2ndtx0)

### 模板，指令和数据绑定[](https://angular.io/guide/architecture#templates-directives-and-data-binding "链接到此标题")

模板将HTML与Angular标记相结合，可以在显示HTML元素之前对其进行修改。模板_指令_提供程序逻辑，_绑定标记_连接应用程序数据和DOM。有两种类型的数据绑定：

*   _通过事件绑定_，您的应用可以通过更新应用程序数据来响应目标环境中的用户输入。
    
*   _通过属性绑定_，您可以将根据应用程序数据计算的值插入到HTML中。
    

在显示视图之前，Angular会根据您的程序数据和逻辑评估指令并解析模板中的绑定语法，以修改HTML元素和DOM。Angular支持_双向数据绑定_，这意味着DOM中的更改（例如用户选择）也会反映在程序数据中。

您的模板可以使用_管道_通过转换显示值来改善用户体验。例如，使用管道显示适合用户区域设置的日期和货币值。Angular为常见转换提供预定义管道，您还可以定义自己的管道。

有关这些概念的更详细讨论，请参阅[组件简介](https://angular.io/guide/architecture-components)。

服务和依赖注入[](https://angular.io/guide/architecture#services-and-dependency-injection "链接到此标题")
-------------------------------------------------------------------------------------------

对于与特定视图无关的数据或逻辑，以及要跨组件共享的数据或逻辑，您可以创建_服务_类。服务类定义紧跟在装饰器之后。装饰器提供元数据，允许您将服务作为依赖项_注入_客户端组件。`@[Injectable](https://angular.io/api/core/Injectable)()`

_依赖注入_（DI）使您可以保持组件类的精简和高效。它们不从服务器获取数据，验证用户输入或直接登录到控制台;他们将这些任务委托给服务。

有关更详细的讨论，请参阅[服务和DI简介](https://angular.io/guide/architecture-services)。

### 路由[](https://angular.io/guide/architecture#routing "链接到此标题")

Angular`[Router](https://angular.io/api/router/Router)`NgModule提供的服务允许您在不同的应用程序状态之间定义导航路径并查看应用程序中的层次结构。它以熟悉的浏览器导航约定为蓝本：

*   在地址栏中输入URL，浏览器导航到相应的页面。
    
*   单击页面上的链接，浏览器将导航到新页面。
    
*   单击浏览器的后退和前进按钮，浏览器会在您看到的页面的历史记录中前后导航。
    

路由器将类似URL的路径映射到视图而不是页面。当用户执行操作（例如单击链接）以在浏览器中加载新页面时，路由器会拦截浏览器的行为，并显示或隐藏视图层次结构。

如果路由器确定当前应用程序状态需要特定功能，并且尚未加载定义它的模块，则路由器可以根据需要_延迟加载_模块。

路由器根据您应用的视图导航规则和数据状态解释链接URL。当用户单击按钮或从下拉框中选择或响应来自任何来源的其他刺激时，您可以导航到新视图。路由器在浏览器的历史记录中记录活动，因此后退和前进按钮也可以工作。

要定义导航规则，请将_导航路径_与组件相关联。路径使用类似URL的语法来集成您的程序数据，就像模板语法将您的视图与程序数据集成一样。然后，您可以应用程序逻辑来选择要显示或隐藏的视图，以响应用户输入和您自己的访问规则。

有关更详细的讨论，请参阅[路由和导航](https://angular.io/guide/router)。

* * *

什么是下一个[](https://angular.io/guide/architecture#whats-next "链接到此标题")
-------------------------------------------------------------------

您已经学习了有关Angular应用程序的主要构建块的基础知识。下图显示了这些基本部分是如何相关的。

![overview2.png](https://bbs-img.huaweicloud.com/blogs/img/1543237475765803.png "1543237475765803.png")

*   组件和模板一起定义Angular视图。
    
    *   组件类上的装饰器添加元数据，包括指向关联模板的指针。
        
    *   组件模板中的指令和绑定标记根据程序数据和逻辑修改视图。
        
*   依赖注入器为组件提供服务，例如允许您在视图之间定义导航的路由器服务。
    

以下几页将更详细地介绍这些主题中的每一个。

模块简介[链接](https://angular.io/guide/architecture-modules#introduction-to-modules "链接到此标题")
========================================================================================

Angular应用程序是模块化的，Angular有自己的模块化系统，称为_NgModules_。NgModules是专用于应用程序域，工作流或一组密切相关的功能的内聚代码块的容器。它们可以包含组件，服务提供程序和其他代码文件，其范围由包含NgModule定义。他们可以导入从其他NgModule导出的功能，并导出所选功能以供其他NgModule使用。

每个Angular应用程序至少有一个NgModule类，[即_根模块_](https://angular.io/guide/bootstrapping)，它通常被命名`AppModule`并驻留在一个名为的文件中`app.module.ts`。您可以通过_引导_根NgModule来启动应用_程序_。

虽然一个小应用程序可能只有一个NgModule，但大多数应用程序都有更多的_功能模块_。应用程序的_根_NgModule是如此命名的，因为它可以包含任何深度层次结构中的子NgModule。

NgModule元数据[](https://angular.io/guide/architecture-modules#ngmodule-metadata "链接到此标题")
---------------------------------------------------------------------------------------

NgModule由装饰的类定义。的装饰是一个函数，它的单一元数据对象，其属性描述该模块。最重要的属性如下。`@[NgModule](https://angular.io/api/core/NgModule)()``@[NgModule](https://angular.io/api/core/NgModule)()`

*   `[declarations](https://angular.io/api/core/NgModule#declarations)`：属于此NgModule的[组件](https://angular.io/guide/architecture-components)，_指令_和_管道_。
    
*   `[exports](https://angular.io/api/core/NgModule#exports)`：应该在其他NgModules的_组件模板_中可见和可用的声明子集。
    
*   `[imports](https://angular.io/api/core/NgModule#imports)`：_此_NgModule中声明的组件模板需要导出类的其他模块。
    
*   `providers`：这个NgModule为全球服务集合做出贡献的[服务的](https://angular.io/guide/architecture-services)创造者;它们可以在应用程序的所有部分中访问。（您还可以在组件级别指定提供程序，这通常是首选。）
    
*   `[bootstrap](https://angular.io/api/core/NgModule#bootstrap)`：主应用程序视图，称为_根组件_，托管所有其他应用程序视图。只有_根NgModule_应该设置`[bootstrap](https://angular.io/api/core/NgModule#bootstrap)`属性。
    

这是一个简单的根NgModule定义。

SRC /应用程序/ app.module.ts

content\_copyimport { NgModule }      from '@angular/core';import { BrowserModule } from '@angular/platform-browser';@NgModule({
  imports:      \[ BrowserModule \],
  providers:    \[ Logger \],
  declarations: \[ AppComponent \],
  exports:      \[ AppComponent \],
  bootstrap:    \[ AppComponent \]})export class AppModule { }

这里包括的`export`财产`AppComponent`是为了说明;在这个例子中实际上并不需要。根NgModule没有理由_导出_任何东西，因为其他模块不需要_导入_根NgModule。

NgModules和组件[](https://angular.io/guide/architecture-modules#ngmodules-and-components "链接到此标题")
-----------------------------------------------------------------------------------------------

NgModules为其组件提供_编译上下文_。根NgModule始终具有在引导期间创建的根组件，但任何NgModule都可以包含任意数量的其他组件，这些组件可以通过路由器加载或通过模板创建。属于NgModule的组件共享编译上下文。

![compilation-context.png](https://bbs-img.huaweicloud.com/blogs/img/1543237537316943.png "1543237537316943.png")  

组件及其模板一起定义_视图_。组件可以包含_视图层次结构_，允许您定义可以作为一个单元创建，修改和销毁的任意复杂的屏幕区域。视图层次结构可以混合在属于不同NgModule的组件中定义的视图。通常就是这种情况，特别是对于UI库。

![view-hierarchy.png](https://bbs-img.huaweicloud.com/blogs/img/1543237543569938.png "1543237543569938.png")  

创建组件时，它直接与单个视图关联，称为_主机视图_。主机视图可以是视图层次结构的根，它可以包含_嵌入视图_，_嵌入视图_又是其他组件的主机视图。这些组件可以在同一个NgModule中，也可以从其他NgModule导入。树中的视图可以嵌套到任何深度。

注意：视图的层次结构是Angular检测和响应DOM和app数据中的更改的关键因素。

NgModules和JavaScript模块[](https://angular.io/guide/architecture-modules#ngmodules-and-javascript-modules "链接到此标题")
-----------------------------------------------------------------------------------------------------------------

NgModule系统与用于管理JavaScript对象集合的JavaScript（ES2015）模块系统不同且无关。这些是_互补_模块系统，您可以一起使用来编写应用程序。

在JavaScript中，每个_文件_都是一个模块，文件中定义的所有对象都属于该模块。该模块通过用`export`关键字标记它们来声明某些对象是公共的。其他JavaScript模块使用_import语句_从其他模块访问公共对象。

content\_copyimport { NgModule }     from '@angular/core';import { AppComponent } from './app.component';

content\_copyexport class AppModule { }

[了解有关Web模板系统的更多信息。](http://exploringjs.com/es6/ch_modules.html)

角度图书馆[](https://angular.io/guide/architecture-modules#angular-libraries "链接到此标题")
---------------------------------------------------------------------------------

![library-module.png](https://bbs-img.huaweicloud.com/blogs/img/1543237553337146.png "1543237553337146.png")

Angular加载为JavaScript模块的集合。您可以将它们视为库模块。每个Angular库名称都以`@angular`前缀开头。使用`npm`包管理器安装它们，并使用JavaScript`import`语句导入它们的一部分。

例如，像这样`[Component](https://angular.io/api/core/Component)`从`@angular/core`库中导入Angular的装饰器。

content\_copyimport { Component } from '@angular/core';

您还可以使用JavaScript import语句从Angular_库_导入NgModule。例如，以下代码`[BrowserModule](https://angular.io/api/platform-browser/BrowserModule)`从`platform-browser`库中导入NgModule。

content\_copyimport { BrowserModule } from '@angular/platform-browser';

在上面的简单根模块的示例中，应用程序模块需要来自内部的材料`[BrowserModule](https://angular.io/api/platform-browser/BrowserModule)`。要访问该材料，请将其添加到此类元数据中。`@[NgModule](https://angular.io/api/core/NgModule)``[imports](https://angular.io/api/core/NgModule#imports)`

content\_copyimports:      \[ BrowserModule \],

通过这种方式，你正在使用的角度和JavaScript模块系统_一起_。虽然很容易混淆两个系统，它们共享“导入”和“导出”的常用词汇，但您将熟悉使用它们的不同上下文。

从[NgModules](https://angular.io/guide/ngmodules)指南中了解更多信息。

组件简介[](https://angular.io/guide/architecture-components#introduction-to-components "链接到此标题")
============================================================================================

甲_组件_控制屏幕的补丁被称为_视图_。例如，各个组件定义并控制[教程](https://angular.io/tutorial)中的以下每个视图：

*   带有导航链接的app root。
    
*   英雄名单。
    
*   英雄编辑。
    

您可以定义组件的应用程序逻辑 - 它在类中支持视图的作用。该类通过属性和方法的API与视图交互。

例如，`HeroListComponent`有一个`heroes`包含英雄数组的属性。当用户单击以从该列表中选择英雄时，其`selectHero()`方法设置`selectedHero`属性。组件从服务获取英雄，该服务是构造函数上的TypeScript[参数属性](http://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties)。该服务通过依赖注入系统提供给组件。

src / app / hero-list.component.ts（class）

content\_copyexport class HeroListComponent implements OnInit {
  heroes: Hero\[\];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }}

当用户在应用程序中移动时，Angular会创建，更新和销毁组件。您的应用可以通过可选的[生命周期挂钩](https://angular.io/guide/lifecycle-hooks)在此生命周期的每个时刻执行操作，例如`ngOnInit()`。

组件元数据[](https://angular.io/guide/architecture-components#component-metadata "链接到此标题")
-------------------------------------------------------------------------------------

![metadata.png](https://bbs-img.huaweicloud.com/blogs/img/1543237728909552.png "1543237728909552.png")

所述装饰标识类正下方它作为一个组件类，并指定其元数据。在下面的示例代码中，您可以看到它只是一个类，根本没有特殊的Angular表示法或语法。在将它标记为装饰器之前，它不是一个组件。`@[Component](https://angular.io/api/core/Component)``HeroListComponent``@[Component](https://angular.io/api/core/Component)`

组件的元数据告诉Angular从哪里获取创建它所需的主要构建块以及呈现组件及其视图。特别是，它将_模板_与组件相关联，可以直接使用内联代码，也可以通过引用。组件及其模板一起描述_视图_。

除了包含或指向模板之外，元数据还配置了例如如何在HTML中引用组件以及它需要哪些服务。`@[Component](https://angular.io/api/core/Component)`

这是一个基本元数据的例子`HeroListComponent`。

src / app / hero-list.component.ts（元数据）

content\_copy@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  \[ HeroService \]})export class HeroListComponent implements OnInit {/\* . . . \*/}

此示例显示了一些最有用的配置选项：`@[Component](https://angular.io/api/core/Component)`

*   `selector`：一个CSS选择器，它告诉Angular在模板HTML中找到相应标记的任何位置创建并插入此组件的实例。例如，如果应用程序的HTML包含`<app-hero-list></app-hero-list>`，则Angular会`HeroListComponent`在这些标记之间插入视图实例。
    
*   `templateUrl`：此组件的HTML模板的模块相对地址。或者，您可以内联提供HTML模板，作为`[template](https://angular.io/api/core/Component#template)`属性的值。此模板定义组件的_主机视图_。
    
*   `providers`：组件所需服务的一组[提供程序](https://angular.io/guide/glossary#provider)。在示例中，这告诉Angular如何提供`HeroService`组件构造函数用于获取要显示的英雄列表的实例。
    

模板和视图[](https://angular.io/guide/architecture-components#templates-and-views "链接到此标题")
--------------------------------------------------------------------------------------

![template.png](https://bbs-img.huaweicloud.com/blogs/img/1543237719981457.png "1543237719981457.png")

您可以使用其随附模板定义组件的视图。模板是HTML的一种形式，它告诉Angular如何呈现组件。

视图通常按层次排列，允许您作为一个单元修改或显示和隐藏整个UI部分或页面。与组件直接关联的模板定义该组件的_主机视图_。该组件还可以定义_视图层次结构_，其中包含由其他组件托管的_嵌入式视图_。

![component-tree.png](https://bbs-img.huaweicloud.com/blogs/img/1543237710620976.png "1543237710620976.png")

视图层次结构可以包含来自同一NgModule中的组件的视图，但它也可以（并且经常）包含来自不同NgModule中定义的组件的视图。

模板语法[](https://angular.io/guide/architecture-components#template-syntax "链接到此标题")
---------------------------------------------------------------------------------

模板看起来像常规HTML，除了它还包含Angular[模板语法](https://angular.io/guide/template-syntax)，它根据应用程序的逻辑以及app和DOM数据的状态改变HTML。您的模板可以使用_数据绑定_来协调应用程序和DOM数据，在显示数据之前转换数据的_管道_，以及将应用程序逻辑应用于显示内容的_指令_。

例如，这是教程的模板`HeroListComponent`。

SRC /应用/英雄list.component.html

content\_copy<h2>Hero List</h2><p><i>Pick a hero from the list</i></p><ul>
  <li \*ngFor="let hero of heroes" (click)="selectHero(hero)">
    {{hero.name}}  </li></ul><app-hero-detail \*ngIf="selectedHero" \[hero\]="selectedHero"></app-hero-detail>

此模板使用典型的HTML元素，如`<h2>`和`<p>`，并且还包括角模板语法元素，，，，，和。模板语法元素告诉Angular如何使用程序逻辑和数据将HTML呈现到屏幕。`*[ngFor](https://angular.io/api/common/NgForOf)``{{hero.name}}``(click)``[hero]``<app-hero-detail>`

*   该指令告诉Angular迭代列表。`*[ngFor](https://angular.io/api/common/NgForOf)`
    
*   `{{hero.name}}`，`(click)`并将`[hero]`程序数据绑定到DOM和从DOM绑定，响应用户输入。请参阅下面的[数据绑定](https://angular.io/guide/architecture-components#data-binding)。
    
*   `<app-hero-detail>`示例中的标记是表示新组件的元素`HeroDetailComponent`。  
    `HeroDetailComponent`（代码未显示）定义了英雄 - 细节子视图`HeroListComponent`。请注意这样的自定义组件如何与相同布局中的本机HTML无缝混合。
    

### 数据绑定[](https://angular.io/guide/architecture-components#data-binding "链接到此标题")

如果没有框架，您将负责将数据值推送到HTML控件中，并将用户响应转换为操作和值更新。正如任何有经验的jQuery程序员都可以证明的那样，手工编写这样的推拉逻辑既繁琐又容易出错，也是一个噩梦。

Angular支持_双向数据绑定_，这是一种用于协调模板的各个部分与组件各部分的机制。将绑定标记添加到模板HTML以告知Angular如何连接双方。

下图显示了四种形式的数据绑定标记。每个表单都有一个方向：DOM，DOM，或两者。

![databinding.png](https://bbs-img.huaweicloud.com/blogs/img/1543237696451278.png "1543237696451278.png")

`HeroListComponent`模板中的此示例使用其中三种形式。

src / app / hero-list.component.html（绑定）

content\_copy<li>{{hero.name}}</li><app-hero-detail \[hero\]="selectedHero"></app-hero-detail><li (click)="selectHero(hero)"></li>

*   的`{{hero.name}}`[_插值_](https://angular.io/guide/displaying-data#interpolation)显示组件的`hero.name`所述内属性值`<li>`元素。
    
*   该`[hero]`[_属性绑定_](https://angular.io/guide/template-syntax#property-binding)传递的值`selectedHero`从父`HeroListComponent`到`hero`孩子的财产`HeroDetailComponent`。
    
*   该`(click)`[_事件绑定_](https://angular.io/guide/user-input#binding-to-user-input-events)调用组件的`selectHero`，当用户点击一个英雄的名字方法。
    

双向数据绑定（主要用于[模板驱动的表单](https://angular.io/guide/forms)）将属性和事件绑定组合在一个表示法中。以下`HeroDetailComponent`是使用与`[ngModel](https://angular.io/api/forms/NgModel)`指令进行双向数据绑定的模板示例。

src / app / hero-detail.component.html（ngModel）

content\_copy<input \[(ngModel)\]="hero.name">

在双向绑定中，数据属性值从属性绑定流向组件的输入框。用户的更改也会返回到组件，将属性重置为最新值，与事件绑定一样。

Angular为每个JavaScript事件周期处理一次_所有_数据绑定，从应用程序组件树的根到所有子组件。

![component-databinding.png](https://bbs-img.huaweicloud.com/blogs/img/1543237682936154.png "1543237682936154.png")

数据绑定在模板及其组件之间的通信中起着重要作用，对于父组件和子组件之间的通信也很重要。

![parent-child-binding.png](https://bbs-img.huaweicloud.com/blogs/img/1543237660721733.png "1543237660721733.png")

### 管道[](https://angular.io/guide/architecture-components#pipes "链接到此标题")

角度管道允许您在模板HTML中声明显示值转换。具有装饰器的类定义了一个函数，该函数将输入值转换为输出值以在视图中显示。`@[Pipe](https://angular.io/api/core/Pipe)`

Angular定义了各种管道，例如[日期](https://angular.io/api/common/DatePipe)管道和[货币](https://angular.io/api/common/CurrencyPipe)管道;有关完整列表，请参阅[管道API列表](https://angular.io/api?type=pipe)。您还可以定义新管道。

要在HTML模板中指定值转换，请使用[管道运算符（|）](https://angular.io/guide/template-syntax#pipe)。

`{{interpolated_value | pipe_name}}`

您可以链接管道，发送一个管道函数的输出以由另一个管道函数转换。管道还可以接受控制其转换方式的参数。例如，您可以将所需的格式传递给`date`管道。

content\_copy<!-- Default format: output 'Jun 15, 2015'-->
 <p>Today is {{today | date}}</p><!-- fullDate format: output 'Monday, June 15, 2015'--><p>The date is {{today | date:'fullDate'}}</p>

 <!-- shortTime format: output '9:43 AM'-->
 <p>The time is {{today | date:'shortTime'}}</p>

### 指令[](https://angular.io/guide/architecture-components#directives "链接到此标题")

![directive.png](https://bbs-img.huaweicloud.com/blogs/img/1543237642505689.png "1543237642505689.png")

角度模板是_动态的_。当Angular呈现它们时，它会根据指令给出的_指令_转换DOM。指令是带有装饰器的类。`@[Directive](https://angular.io/api/core/Directive)()`

组件在技术上是指令。然而，组件是如此独特和Angular应用程序的核心，Angular定义装饰器，它使用面向模板的功能扩展装饰器。`@[Component](https://angular.io/api/core/Component)()``@[Directive](https://angular.io/api/core/Directive)()`

除了组件之外，还有另外两种指令：_结构_和_属性_。Angular定义了两种类型的指令，您可以使用装饰器定义自己的指令。`@[Directive](https://angular.io/api/core/Directive)()`

与组件一样，指令的元数据将装饰类与`selector`用于将其插入HTML的元素相关联。在模板中，指令通常作为属性出现在元素标记内，可以是名称，也可以是赋值或绑定的目标。

#### 结构指令[](https://angular.io/guide/architecture-components#structural-directives "链接到此标题")

_结构指令_通过添加，删除和替换DOM中的元素来更改布局。示例模板使用两个内置结构指令将应用程序逻辑添加到视图的呈现方式。

src / app / hero-list.component.html（结构）

content\_copy<li \*ngFor="let hero of heroes"></li><app-hero-detail \*ngIf="selectedHero"></app-hero-detail>

*   [`*ngFor`](https://angular.io/guide/displaying-data#ngFor)是一个迭代;它告诉Angular`<li>`在`heroes`列表中标记出一个英雄。
    
*   [`*ngIf`](https://angular.io/guide/displaying-data#ngIf)是有条件的;`HeroDetail`仅当存在选定的英雄时，它才包含该组件。
    

#### 属性指令[](https://angular.io/guide/architecture-components#attribute-directives "链接到此标题")

_属性指令_可更改现有元素的外观或行为。在模板中，它们看起来像常规HTML属性，因此名称。

的`[ngModel](https://angular.io/api/forms/NgModel)`指令，它实现双向数据绑定，是属性指令的一个例子。通过设置其显示值属性并响应更改事件来修改`[ngModel](https://angular.io/api/forms/NgModel)`现有元素的行为（通常`<input>`）。

src / app / hero-detail.component.html（ngModel）

content\_copy<input \[(ngModel)\]="hero.name">

Angular有更多预定义的指令，可以改变布局结构（例如，[ngSwitch](https://angular.io/guide/template-syntax#ngSwitch)）或修改DOM元素和组件的方面（例如，[ngStyle](https://angular.io/guide/template-syntax#ngStyle)和[ngClass](https://angular.io/guide/template-syntax#ngClass)）。

服务和依赖注入[](https://angular.io/guide/architecture-services#introduction-to-services-and-dependency-injection "链接到此标题")
====================================================================================================================

_服务_是一个广泛的类别，包含应用程序所需的任何价值，功能或功能。服务通常是具有狭窄，明确定义目的的类。它应该做一些特定的事情，做得好。

Angular将组件与服务区分开来，以增加模块化和可重用性。通过将组件的视图相关功能与其他类型的处理分离，您可以使组件类精简且高效。

理想情况下，组件的工作是启用用户体验，仅此而已。组件应该呈现数据绑定的属性和方法，以便在视图（由模板呈现）和应用程序逻辑（通常包括_模型的_某些概念）之间进行调解。

组件可以将某些任务委派给服务，例如从服务器获取数据，验证用户输入或直接记录到控制台。通过在_可注入服务类中_定义此类处理任务，您可以将这些任务提供给任何组件。您还可以通过在不同情况下注入相同类型服务的不同提供商来使您的应用程序更具适应性。

Angular没有_强制执行_这些原则。Angular确实可以帮助您_遵循_这些原则，方便您将应用程序逻辑分解为服务，并通过_依赖注入_使这些服务可用于组件。

服务示例[](https://angular.io/guide/architecture-services#service-examples "链接到此标题")
--------------------------------------------------------------------------------

以下是记录到浏览器控制台的服务类的示例。

src / app / logger.service.ts（class）

content\_copyexport class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }}

服务可以依赖于其他服务。例如，这是一个`HeroService`取决于`Logger`服务，也用于`BackendService`获取英雄。反过来，该`[HttpClient](https://angular.io/api/common/http/HttpClient)`服务可能依赖于从服务器异步获取英雄的服务。

src / app / hero.service.ts（class）

content\_copyexport class HeroService {
  private heroes: Hero\[\] = \[\];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero\[\]) => {
      this.logger.log(\`Fetched ${heroes.length} heroes.\`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }}

依赖注入（DI）[](https://angular.io/guide/architecture-services#dependency-injection-di "链接到此标题")
-------------------------------------------------------------------------------------------

![dependency-injection.png](https://bbs-img.huaweicloud.com/blogs/img/1543237800942745.png "1543237800942745.png")

DI连接到Angular框架，并在任何地方用于为新组件提供所需的服务或其他东西。组件消耗服务;也就是说，您可以_将_服务注入组件，使组件可以访问该服务类。

要在Angular中将类定义为服务，请使用装饰器提供允许Angular将其作为_依赖项_注入组件的元数据。类似地，使用装饰器指示组件或其他类（例如另一个服务，管道或NgModule）_具有_依赖性。`@[Injectable](https://angular.io/api/core/Injectable)()`  
`@[Injectable](https://angular.io/api/core/Injectable)()`

*   该_喷射器_是主要的机制。Angular在引导过程中为您创建应用程序范围的注入器，并根据需要为其他注入器创建。您不必创建注射器。
    
*   注入器创建依赖项，并维护一个依赖项实例的_容器_，如果可能，它会重用它们。
    
*   甲_提供商_是一个对象，讲述了一个喷射器如何获得或创建依赖性。
    

对于应用程序中所需的任何依赖项，必须使用应用程序的注入器注册提供程序，以便注入器可以使用提供程序创建新实例。对于服务，提供者通常是服务类本身。

依赖关系不必是服务 - 例如，它可以是函数或值。

当Angular创建组件类的新实例时，它通过查看构造函数参数类型来确定组件需要哪些服务或其他依赖项。例如，`HeroListComponent`需求的构造函数`HeroService`。

src / app / hero-list.component.ts（构造函数）

content\_copyconstructor(private service: HeroService) { }

当Angular发现组件依赖于服务时，它首先检查注入器是否具有该服务的任何现有实例。如果请求的服务实例尚不存在，则注入器使用已注册的提供者创建一个，并在将服务返回到Angular之前将其添加到注入器。

解析并返回所有请求的服务后，Angular可以使用这些服务作为参数调用组件的构造函数。

`HeroService`注射过程看起来像这样。

![injector-injects.png](https://bbs-img.huaweicloud.com/blogs/img/1543237791384028.png "1543237791384028.png")

### 提供服务[](https://angular.io/guide/architecture-services#providing-services "链接到此标题")

您必须至少注册一个您将要使用的服务的_提供商_。提供者可以是服务自己的元数据的一部分，使该服务在任何地方都可用，或者您可以向提供者注册特定的模块或组件。您在注册该服务的元数据提供者（在装饰），或在或元数据`@[Injectable](https://angular.io/api/core/Injectable)()``@[NgModule](https://angular.io/api/core/NgModule)()``@[Component](https://angular.io/api/core/Component)()`

*   默认情况下，Angular CLI命令[`ng generate service`](https://angular.io/cli/generate)通过在装饰器中包含提供程序元数据来向服务提供者注册服务的根注入器。本教程使用此方法注册HeroService类定义的提供程序。`@[Injectable](https://angular.io/api/core/Injectable)()`
    
    content\_copy@Injectable({
     providedIn: 'root',})
    
    当您在根级别提供服务时，Angular会创建一个单独的共享实例，`HeroService`并将其注入任何要求它的类中。在元数据中注册提供程序还允许Angular通过从未编译的应用程序中删除服务来优化应用程序（如果未使用）。`@[Injectable](https://angular.io/api/core/Injectable)()`
    
*   当您使用[特定的NgModule](https://angular.io/guide/architecture-modules)注册提供程序时，该[NgModule](https://angular.io/guide/architecture-modules)中的所有组件都可以使用相同的服务实例。要在此级别注册，请使用装饰器的`providers`属性，`@[NgModule](https://angular.io/api/core/NgModule)()`
    
    content\_copy@NgModule({
      providers: \[
      BackendService,
      Logger
     \],
     ...})
    
*   在组件级别注册提供程序时，将为该组件的每个新实例获取该服务的新实例。在组件级别，`providers`在元数据的属性中注册服务提供者。`@[Component](https://angular.io/api/core/Component)()`
    
    src / app / hero-list.component.ts（组件提供者）
    
    content\_copy@Component({
      selector:    'app-hero-list',
      templateUrl: './hero-list.component.html',
      providers:  \[ HeroService \]})
    

后续步骤：工具和技术[](https://angular.io/guide/architecture-next-steps#next-steps-tools-and-techniques "链接到此标题")
=======================================================================================================

在了解了基本的Angular构建块之后，您可以开始了解可用于帮助您开发和交付Angular应用程序的功能和工具的更多信息。以下是一些主要功能。

响应式编程[](https://angular.io/guide/architecture-next-steps#responsive-programming "链接到此标题")
-----------------------------------------------------------------------------------------

*   [生命周期钩子](https://angular.io/guide/lifecycle-hooks)：通过实现生命周期钩子接口，挖掘组件[生命周期中的](https://angular.io/guide/lifecycle-hooks)关键时刻，从创建到销毁。
    
*   [Observable和事件处理](https://angular.io/guide/observables)：如何使用带有组件和服务的observable来发布和订阅任何类型的消息，例如用户交互事件和异步操作结果。
    

客户端 - 服务器交互[](https://angular.io/guide/architecture-next-steps#client-server-interaction "链接到此标题")
--------------------------------------------------------------------------------------------------

*   [HTTP](https://angular.io/guide/http)：与服务器通信以获取数据，保存数据，并使用HTTP客户端调用服务器端操作。
    
*   [服务器端呈现](https://angular.io/guide/universal)：Angular Universal通过服务器端呈现（SSR）在服务器上生成静态应用程序页面。这允许您在服务器上运行Angular应用程序，以提高性能并在移动和低功耗设备上快速显示第一页，并且还可以方便Web爬虫。
    
*   [服务工作者](https://angular.io/guide/service-worker-intro)：使用服务工作者来减少对网络的依赖，从而显着改善用户体验。
    

特定于域的库[](https://angular.io/guide/architecture-next-steps#domain-specific-libraries "链接到此标题")
---------------------------------------------------------------------------------------------

*   [动画](https://angular.io/guide/animations)：使用Angular的动画库来动画组件行为，而无需深入了解动画技术或CSS。
    
*   [表单](https://angular.io/guide/forms)：通过基于HTML的验证和脏检查支持复杂的数据输入方案。
    

支持开发周期[](https://angular.io/guide/architecture-next-steps#support-for-the-development-cycle "链接到此标题")
-----------------------------------------------------------------------------------------------------

*   [编译](https://angular.io/guide/aot-compiler)：Angular为开发环境提供即时（JIT）编译，为生产环境提供提前（AOT）编译。
    
*   [测试平台](https://angular.io/guide/testing)：在与Angular框架交互时，对应用程序部件运行单元测试。
    
*   [国际化](https://angular.io/guide/i18n)：使用Angular的国际化（i18n）工具，使您的应用程序以多种语言提供。
    
*   [安全准则](https://angular.io/guide/security)：了解Angular针对常见Web应用程序漏洞和跨站点脚本攻击等攻击的内置保护措施。
    

设置，构建和部署配置[](https://angular.io/guide/architecture-next-steps#setup-build-and-deployment-configuration "链接到此标题")
----------------------------------------------------------------------------------------------------------------

*   [CLI命令参考](https://angular.io/cli)：Angular CLI是一个命令行工具，可用于创建项目，生成应用程序和库代码以及执行各种正在进行的开发任务，如测试，捆-绑和部署。
    
*   [工作区和文件结构](https://angular.io/guide/file-structure)：了解Angular工作区和项目文件夹的结构。
    
*   [npm包](https://angular.io/guide/npm-packages)：Angular框架，Angular CLI和Angular应用程序使用的组件打包为[npm](https://docs.npmjs.com/)包，并通过npm注册表分发。Angular CLI创建一个默认`package.json`文件，该文件指定了一组可以很好地协同工作并且共同支持许多常见应用程序方案的启动程序包。
    
*   [TypeScript配置](https://angular.io/guide/typescript-configuration)：TypeScript是Angular应用程序开发的主要语言。
    
*   [浏览器支持](https://angular.io/guide/browser-support)：使您的应用在各种浏览器中兼容。
    
*   [构建和服务](https://angular.io/guide/build)：学习为项目定义不同的构建和代理服务器配置，例如开发，登台和生产。
    
*   [部署](https://angular.io/guide/deployment)：了解将Angular应用程序部署到远程服务器的技术。
链接:[angular基础（一）](https://bbs.huaweicloud.com/blogs/bf997f80f17c11e8bd5a7ca23e93a891)