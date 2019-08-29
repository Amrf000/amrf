List of all @Decorators available in Angular
============================================

**原文:[https://medium.com/@madhavmahesh/list-of-all-decorators-available-in-angular-71bdf4ad6976](https://medium.com/@madhavmahesh/list-of-all-decorators-available-in-angular-71bdf4ad6976)**

List of all the decorators in Angular and their usage.

Here’s the list of decorators available in Angular:

1.  @NgModule
    
2.  @Component
    
3.  @Injectable
    
4.  @Directive
    
5.  @Pipe
    
6.  @Input
    
7.  @Output
    
8.  @HostBinding
    
9.  @HostListener
    
10.  [@ContentChild](https://medium.com/@scottabel)
    
11.  @ContentChildren
    
12.  @ViewChild
    
13.  @ViewChildren
    

Explanation of each Decorator:

1.  @NgModule:
    

Defines a module that contains components, directives, pipes, and providers.

Usage:

import { NgModule } from '@angular/core';@NgModule({ 
 declarations:\[Component1, Component2\], 
 imports: \[Module1, Module2\],
 exports: \[MyModule\],
 providers: \[Service1, Service2\], 
 bootstrap: \[AppComponent\]})
class MyModule {}

2\. @Component:

Declares that a class is a component and provides metadata about the component.

Usage:

import { Component } from '@angular/core';@Component({ 
 changeDetection?: ChangeDetectionStrategy
 viewProviders?: Provider\[\]
 moduleId?: string
 templateUrl?: string
 template?: string
 styleUrls?: string\[\]
 styles?: string\[\]
 animations?: any\[\]
 encapsulation?: ViewEncapsulation
 interpolation?: \[string, string\]
 entryComponents?: Array<Type<any> | any\[\]>
 preserveWhitespaces?: boolean
 
 // inherited from core/Directive
 selector?: string
 inputs?: string\[\]
 outputs?: string\[\]
 host?: {...}
 providers?: Provider\[\]
 exportAs?: string
 queries?: {...}
 }

#### class ComponentName{}

3\. @Injectable:

Declares that a class has dependencies that should be injected into the constructor when the dependency injector is creating an instance of this class.

Usage:

import { Injectable } from '@angular/core';
@Injectable()

4\. @Directive

Declares that a class is a directive and provides metadata about the directive.

Usage:

import { Directive } from ‘@angular/core’;
@Directive({ 
 selector?: string
 inputs?: string\[\]
 outputs?: string\[\]
 host?: {…}
 providers?: Provider\[\]
 exportAs?: string
 queries?: {…}
})

5\. @Pipe

Declares that a class is a pipe and provides metadata about the pipe.

Usage:

import { Pipe } from ‘@angular/core’;
@Pipe({ 
 name: string
 pure?: boolean
})

6\. @Input

Declares an input property that you can update via property binding (example:`<my-cmp [myProperty]="someExpression">`).

import { Input } from ‘@angular/core’; 
@Input({ 
 bindingPropertyName?: string
})

7\. @OutPut

Declares an output property that fires events that you can subscribe to with an event binding (example:`<my-cmp (myEvent)="doSomething()">`).

import { Output } from ‘@angular/core’; 
@Output({ 
 bindingPropertyName?: string
})

8\. @HostBinding

Binds a host element property (here, the CSS class`valid`) to a directive/component property (`isValid`).

import { HostBinding } from ‘@angular/core’; 
@HostBinding({ 
 hostPropertyName?: string
})

9\. @HostListener

Subscribes to a host element event (`click`) with a directive/component method (`onClick`), optionally passing an argument (`$event`).

import { HostListener } from ‘@angular/core’; 
@HostListener({ 
 eventName?: string
 args?: string\[\]
})

10\. @ContentChild

Binds the first result of the component content query (`myPredicate`) to a property (`myChildComponent`) of the class.

import { ContentChild } from ‘@angular/core’; 
@ContentChild(Pane) pane: Pane;

11\. @ContentChildren

Binds the results of the component content query (`myPredicate`) to a property (`myChildComponents`) of the class.

import { ContentChildren } from ‘@angular/core’; 
@ContentChildren(Pane) topLevelPanes: QueryList<Pane>;

12\. @ViewChild

Binds the first result of the component view query (`myPredicate`) to a property (`myChildComponent`) of the class. Not available for directives.

import { ViewChild } from '@angular/core'; 
@ViewChild(Pane)

13\. @ViewChildren

Binds the results of the component view query (`myPredicate`) to a property (`myChildComponents`) of the class. Not available for directives.

import { ViewChildren } from ‘@angular/core’; 
@ViewChildren(Pane) panes: QueryList<Pane>;

**添加一个新组件的命令:**ng generate component xxxx(nav)

**简写指令为：**ng g c xxx(about)

<router-outlet></router-outlet>

<section></section>

<a routerLink="/about">About</a>

{{appTitle}}

appTitle:string = 'myApp';  

const routes:Routes = \[

{path:'',componet:HomeComponent}

...

{path:'contact/:id',componet:ContactComponent}

\];

<button (click)="firstClick()">click me</button>

firstClick(){

console.log('click');  

}

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1554173246386905.png "1554173246386905.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1554173297457547.png "1554173297457547.png")

<h1 \[class.gray\]="h1Style">Home</h1>

h1Style:boolean = false;

firstCLick(){

this.h1Style=true;

}

.gray{  

color:gray;  

}

.large{

font-szie:4em;

}

//============================

<h1 \[ngClass\]="{

'gray':h1Style,  

'large':!h1Style,

}">Home</h1>

//========================

<h1 \[style.color\]="h1Style?'gray':'black'">Home<h1>

<h1 \[ngStyle\]="{

'color':h1Style ? 'gray':'black',  

'font-size':!h1Style?'1em':'4em'  

}">Home<h1>

//========================

**添加服务的命令:**ng g s xxx(data)

_in service_  

firstClick()

{

return console.log('clicked');

}

_in homecomp_

constructor(private data: Dataservice){}  

firstClick(){  

this.data.firstClick();  

}

//======================

angular自带httpclient

_in app.mod_  

import { HttpClientModule} from '...'

imports:\[

...

HttpClientModule

\]

_in data.service_

_import httpClient  
_

..

constructor(private http:HttpClient){}

getUsers()

{

return this.http.get('https://reqres.in/api/users');  

}

_in homecom_

_users:Object;_

_ngOnInit(){  
this.data.getUsers().subscribe(data=>{_

_this.users = data;_

_console.log(this.users);_

_});_

_}_

<ul \*ngIf="users">

<li \*ngFor="let user of users.data">

<img \[src\]="user.avatar">

<p>{{ user.first\_name }} {{ user.lats\_name}}</p>

</li>

</ul>

//==============================

有两种形式驱动的表单

import { reactiveFormsModule } from ...

..  

_in contactcom_

import {FormBuilder,FormGroup,Validators} from ...

messageForm:FromGroup;

submitted = false;

success = false;

constructor(private formBuilder:FormBuilder){

this.messageForm = this.formBuilder.group({

name:\['',Validators.required\],  

message:\['',Validators.required\],

});

}  

onSubmit(){

this.submitted = true;

if(this.messageForm.invalid){

return;

}

this.success = true;

}

<h1>Contact us<h1>

<form \[formGroup\]="messageForm" (ngSubmit)='onSubmit()'>

<h5 \*ngIf="success">Your Form is valid!</h5>

<label>

Name:

<input type="text" formControlName="name">

<div \*ngIf="submitted && messageForm.controls.name.errors" class="error">

<div \*ngIf="messageForm.controls.name.required">Your name is required,bro.</div>

</div>

</label>

<label>

Message:

<textarea formControlName="message"></textarea>

<div \*ngIf="submitted && messageForm.controls.message.errors" class="error">

<div \*ngIf="messageForm.controls.message.required">A message is required</div>

</div>

</label>

<input type="submit" value="Sned message" class="cta">

</form>

<div \*ngIf="submitted" class="results">

<strong>Name:</strong>  

<span>{{messageForm.controls.name.vale}}</span>

<strong>Message:</strong>  

<span>{{messageForm.controls.message.vale}}</span>

</div>

...add some css

//=======================

**部署** deploy

ng build==>dist=>some static file

for prodcuct build smaller

ng build --prod

****部署**运行**

cd dist

cd ng7

http-server -o

//=======================  

[https://www.youtube.com/watch?v=5wtnKulcquA](https://www.youtube.com/watch?v=5wtnKulcquA)

**Angular 5 文档读书笔记**

Angular offers two ways to compile your application:

1\. Just-in-Time (**JIT**), which compiles your app in the browser at runtime

2\. Ahead-of-Time (**AOT**), which compiles your app at build time.

NgModule is a decorator function that takes a single metadata object whose properties describe the

module. The most important properties are: \* **declarations** - the view classes that belong to this module.

Angular has three kinds of view classes: **components**, **directives**, and **pipes**.

**exports** \- the subset of declarations that should be visible and usable in the component templates of

other modules.

**imports** - other modules whose exported classes are needed by component templates declared in this

module.

**providers** - creators of services that this module contributes to the global collection of services; they

become accessible in all parts of the app.

**bootstrap** - the main application view, called the root component, that hosts all other app views. Only

the root module should set this bootstrap property.

Here are a few of the most useful **@Component** configuration options:

**selector** : CSS selector that tells Angular to create and insert an instance of this component where it

Metadata

finds a <hero-list> tag in parent HTML. For example, if an app's HTML contains

<hero-list></hero-list> , then Angular inserts an instance of the HeroListComponent view

between those tags.

**templateUrl** : module-relative address of this component's HTML template, shown above.

**providers** : array of dependency injection providers for services that the component requires. This

is one way to tell Angular that the component's constructor requires a HeroService so it can get the

list of heroes to display.

The **template**, **metadata**, and **component** together describe a view.

Apply other metadata decorators in a similar fashion to guide Angular behavior. **@Injectable** , **@Input** ,

and **@Output** are a few of the more popular decorators.

![databind.png](https://bbs-img.huaweicloud.com/blogs/img/1543284209332402.png "1543284209332402.png")

属性绑定

事件绑定

双向（属性+事件）  

In two-way binding, a data **property value flows to the input box from the component** as with property binding.

The **user's changes also flow back to the component**, resetting the property to the latest value, as with event

binding.

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543284559692239.png "1543284559692239.png")

Angular processes all data bindings once per JavaScript event cycle, from the root of the application

component tree through all child components.

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543284569997383.png "1543284569997383.png")

Data binding plays an important role in communication between a template and its component.

Data binding is also important for communication between parent and child components.

A directive is a class with a @Directive decorator. A component is a directive-with-a-template; a

@Component decorator is actually a @Directive decorator extended with template-oriented features.

Two other kinds of directives exist: **structural** and **attribute directives**.

**Structural directives** alter layout by adding, removing, and replacing elements in DOM.

The example template uses two built-in structural directives:

\*ngFor tells Angular to stamp out one <li> per hero in the heroes list.

\*ngIf includes the HeroDetail component only if a selected hero exists.

**Attribute directives** alter the appearance or behavior of an existing element. In templates they look like regular

HTML attributes, hence the name.

The **ngModel directive**, which implements two-way data binding, is an example of an **attribute directive**.

ngModel modifies the behavior of an existing element (typically an <input> ) by setting its display value

property and responding to change events.

Angular has a few more directives that either alter the layout structure (for example, **ngSwitch**) or modify

aspects of DOM elements and components (for example, **ngStyle and ngClass**).

Of course, you can also write your own directives. Components such as HeroListComponent are one kind

of custom directive.

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543285125528999.png "1543285125528999.png")

If the injector doesn't have a HeroService , how does it know how to make one?

In brief, you must have previously **registered a provider** of the HeroService with the **injector**. A provider is

something that can create or return a service, typically the service class itself.

You can register providers in modules or in components.

Here is a brief, alphabetical list of other important Angular **features** and **services**. Most of them are covered in

this documentation (or soon will be).

**Animations**: Animate component behavior without deep knowledge of animation techniques or CSS with

Angular's animation library.

Change detection: The change detection documentation will cover how Angular decides that a

component property value has changed, when to update the screen, and how it uses zones to intercept

asynchronous activity and run its change detection strategies.

Events: The events documentation will cover how to use components and services to raise events with

mechanisms for publishing and subscribing to events.

**Forms**: Support complex data entry scenarios with HTML-based validation and dirty checking.

**HTTP**: Communicate with a server to get data, save data, and invoke server-side actions with an HTTP

client.

**Lifecycle hooks**: Tap into key moments in the lifetime of a component, from its creation to its destruction,

by implementing the lifecycle hook interfaces.

**Pipes**: Use pipes in your templates to improve the user experience by transforming values for display.

Consider this currency pipe expression:

price | currency:'USD':true

It displays a price of 42.33 as $42.33 .

**Router**: Navigate from page to page within the client application and never leave the browser.

**Testing**: Run unit tests on your application parts as they interact with the Angular framework using the

Angular Testing Platform.

1\. **Components**—directives with a template.

2\. **Structural directives**—change the DOM layout by adding and removing DOM elements.

3\. **Attribute directives**—change the appearance or behavior of an element, component, or another directive.

Components are the most common of the three directives. You saw a component for the first time in the

QuickStart guide.

Structural Directives change the structure of the view. Two examples are **NgFor and NgIf**. Learn about them in

the Structural Directives guide.

Attribute directives are used as attributes of elements. The built-in **NgStyle** directive in the Template Syntax

guide, for example, can change several element styles at the same time.

\*\*Only \_declarables\_\*\* — \_**components**\_, \_**directives**\_ and \_**pipes**\_ — belong in the \`declarations\` array. Do

not put any other kind of class in \`declarations\`. Do \_not\_ declare \`NgModule\` classes. Do \_not\_ declare

service classes. Do \_not\_ declare model classes.

Among other things, the **bootstrapping**

process **creates** the component(s) listed in the bootstrap array and **inserts** each one into the browser

DOM.

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543286951928271.png "1543286951928271.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543286993462581.png "1543286993462581.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543287034538857.png "1543287034538857.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543287063383683.png "1543287063383683.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543287104221767.png "1543287104221767.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543287154555290.png "1543287154555290.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543287207849657.png "1543287207849657.png")

![image.png](https://bbs-img.huaweicloud.com/blogs/img/1543287239908080.png "1543287239908080.png")

Component Interaction
---------------------

Pass data from parent to child with input binding

Intercept input property changes with a setter

Intercept input property changes with ngOnChanges()

Parent listens for child event

Parent interacts with child via local variable

Parent calls an @ViewChild()

Parent and children communicate via a service

Component Styles
----------------

Using component styles

Style scope

Special selectors

:host

:host-context

(deprecated) /deep/ , >>> , and ::ng-deep

Loading component styles

By setting styles or styleUrls metadata.

Inline in the template HTML.

With CSS imports.
链接:[Angular 笔记](https://bbs.huaweicloud.com/blogs/6f0bd3daf1f111e8bd5a7ca23e93a891)