 查询记录
=====

[babel-loader jsx SyntaxError: Unexpected token \[duplicate\]](https://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token)

[Babel install does not work through npm](https://stackoverflow.com/questions/36657373/babel-install-does-not-work-through-npm)

[初步认识React](https://www.cnblogs.com/vajoy/p/4591274.html)

[mxGraph](https://jgraph.github.io/mxgraph/docs/js-api/files/view/mxGraph-js.html)

[Need to integrate mxGraph with react js](https://stackoverflow.com/questions/48883403/need-to-integrate-mxgraph-with-react-js)

[Basic Example with Precompiled JSX unexpected token](https://github.com/facebook/react/issues/5578)

[Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https](https://stackoverflow.com/questions/43936500/cross-origin-requests-are-only-supported-for-protocol-schemes-http-data-chrom)

[how to render a react component using ReactDOM Render](https://stackoverflow.com/questions/40407632/how-to-render-a-react-component-using-reactdom-render)

[解决问题SyntaxError: Unexpected token import](https://www.cnblogs.com/weiqinl/p/9152219.html)

[http://www.runoob.com/react/react-components.html](React%20%E7%BB%84%E4%BB%B6)

相关UI控件
======

[TouchstoneJS - React.js powered UI framework for developing beautiful hybrid mobile apps.](https://link.zhihu.com/?target=http%3A//touchstonejs.io/)  
[Elemental UI](https://link.zhihu.com/?target=http%3A//elemental-ui.com/)  
[RSuite | 一个基于 React.js 的 Web 组件库](https://link.zhihu.com/?target=http%3A//rsuite.github.io/%23/%3F_k%3D24qpzd)  
[Ant Design of React - Ant Design](https://link.zhihu.com/?target=http%3A//ant.design/docs/react/introduce)  
[Material-UI](https://link.zhihu.com/?target=http%3A//www.material-ui.com/)  
[React-Bootstrap](https://link.zhihu.com/?target=https%3A//react-bootstrap.github.io/)  
[React + Foundation · Foundation as React components](https://link.zhihu.com/?target=https%3A//react.foundation/)  
[Essence - React Material Design Framework](https://link.zhihu.com/?target=http%3A//getessence.io/home)  
[React-MDL: React Components for Material Design Lite](https://link.zhihu.com/?target=https%3A//tleunen.github.io/react-mdl/)  
[Belle - Configurable React Components with great UX](https://link.zhihu.com/?target=http%3A//nikgraf.github.io/belle/%23/%3F_k%3D2o611w)  
[MUI - Material Design CSS Framework](https://link.zhihu.com/?target=https%3A//www.muicss.com/)  
[Grommet](https://link.zhihu.com/?target=https%3A//grommet.github.io/)  
[React Toolbox](https://link.zhihu.com/?target=http%3A//react-toolbox.com/%23/)  
[react-blazecss 0.4.3 Demo](https://link.zhihu.com/?target=https%3A//appcraft.github.io/react-blazecss/)  
[Pivotal UI: Intro](https://link.zhihu.com/?target=http%3A//styleguide.pivotal.io/)  
[BFD UI](https://link.zhihu.com/?target=http%3A//ui.baifendian.com/)

用例测试记录
======

ReactDOM.render(React组件，目标DOM元素) DOM渲染器

ExampleApplication React组件

运行命令

npm install

npm start

\=>bundle.js

"This is written with JSX in a CommonJS module and precompiled to vanilla JS by running"

预编译成原生的javascript来运行

这个例子和前一个内容一样不过js部分分离出去了，本地直接打开会报跨域错误

启动一个服务器效果正常

http-server ./ -o

npm install babel-preset-react

babel --presets react example.js --out-dir = build

https://github.com/facebook/react/issues/5578

注意这里的预编译后的js和例3不同，这个不是纯粹原生，运行依旧需要react相关js支持

npm install http-server -g

http-server ./ -o

效果很普通bootstrap模式框点击弹出，但调用方式挺有意思的

magic发生在哪 在哪里做的关联了 诶一 仔细看一看

注意到这段代码看起来是bootstrap的css属性

this.refs.root指向className="modal fade"节点

this.refs.modal指向BootstrapModal组件

\### 引入--React Refs

React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。

这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。

\#### 使用方法

绑定一个 ref 属性到 render 的返回值上：

<input ref="myInput" />

在其它代码中，通过 this.refs 获取支撑实例:

var input = this.refs.myInput;

var inputValue = input.value;

var inputRect = input.getBoundingClientRect();

Example是一个React组件被添加到了（DOM元素jqueryexample下面）

Example组件下面包含了一个BootstrapModal组件和一个BootstrapButton组件

\---此刻 我感觉到React组件的是独立的

屏蔽bootstrap的js通过报错可以知道.modal函数是bootstrap的控件函数

className到了运行期的代码里就对应class,而modal类是bootstrap中的控件，关联在这产生了

但是代码里面按钮上并没有 data-tog...属性

也就是这里的按钮组件没有直接和模式框组件产生关联

关联是在Example组件中组织的

目前这个例子就这些理解

需要注意的是onChange={this.handleInputChange.bind(null, 'c')}这种写法

\### 引入-React 事件处理

摘自:[http://www.runoob.com/react/react-event-handle.html](http://www.runoob.com/react/react-event-handle.html)

一个控制样式的组件

需要注意的是React.addons.CSSTransitionGroup

这是个自带的组件功能

This example demonstrates WebComponent/ReactComponent interoperability

by rendering a ReactComponent, which renders a WebComponent, which renders

another ReactComponent in the WebComponent's shadow DOM.

WebComponent/ReactComponent互操作测试

\### 引入 - React 组件

摘自:http://www.runoob.com/react/react-components.html
链接:[Reactjs 实例测试记录](https://bbs.huaweicloud.com/blogs/82fd24dce26711e8bd5a7ca23e93a891)