欢迎使用 React Native！这篇文档会帮助你搭建基本的 React Native 开发环境。如果你已经搭好了环境，那么可以尝试一下[编写 Hello World](https://reactnative.cn/docs/tutorial)。

*   完整原生环境
    ------
    

Follow these instructions if you need to build native code in your project. For example, if you are integrating React Native into an existing application, or if you "ejected" from[Create React Native App](https://reactnative.cn/docs/getting-started.html), you'll need this section.

根据你所使用的操作系统、针对的目标平台不同，具体步骤有所不同。如果想同时开发 iOS 和 Android 也没问题，你只需要先选一个平台开始，另一个平台的环境搭建只是稍有不同。

如果`阅读完本文档`后还碰到很多环境搭建的问题，我们建议你还可以再看看由本站提供的`环境搭建视频教程`([macOS iOS](https://ke.qq.com/webcourse/index.html#course_id=197101&term_id=100233637&taid=1220865928921581&vid=a1417i5op7k)、[macOS Android](https://ke.qq.com/webcourse/index.html#course_id=197101&term_id=100233637&taid=1220870223888877&vid=z1417kmxask)、[windows Android](https://ke.qq.com/webcourse/index.html#course_id=197101&term_id=100233637&taid=1220874518856173&vid=d1417tgg1ez))、[windows 环境搭建文字教程](http://bbs.reactnative.cn/topic/10)、以及[常见问题](http://bbs.reactnative.cn/topic/130)。注意！视频教程或者其他网络上的博客和文章可能和本文档有所出入，请以最新版本的本文档所述为准！

开发平台：macOSWindowsLinux目标平台：iOSAndroid

[](https://reactnative.cn/docs/getting-started.html#%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96-3)安装依赖
-----------------------------------------------------------------------------------------------

必须安装的依赖有：Node、React Native 命令行工具、Python2 以及 JDK 和 Android Studio。

虽然你可以使用`任何编辑器`来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。

### [](https://reactnative.cn/docs/getting-started.html#node-python2-jdk)Node, Python2, JDK

我们建议直接使用搜索引擎搜索下载 Node 、Python2 和[Java SE Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

注意 Node 的版本必须高于 8.3，Python 的版本必须为 2.x（不支持 3.x），而 JDK 的版本必须是 1.8（目前不支持 1.9 及更高版本）。安装完 Node 后建议设置 npm 镜像以加速后面的过程（或使用科学上网工具）。

注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

npm config set registry https://registry.npm.taobao.org --globalnpm config set disturl https://npm.taobao.org/dist --global

### [](https://reactnative.cn/docs/getting-started.html#yarn-react-native-%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7-react-native-cli-1)Yarn、React Native 的命令行工具（react-native-cli）

[Yarn](http://yarnpkg.com/)是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。React Native 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

npm install -g yarn react-native-cli

安装完 yarn 后同理也要设置镜像源：

yarn config set registry https://registry.npm.taobao.org --globalyarn config set disturl https://npm.taobao.org/dist --global

安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用`yarn`代替`npm install`命令，用`yarn add 某第三方库名`代替`npm install 某第三方库名`。

### [](https://reactnative.cn/docs/getting-started.html#android-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)Android 开发环境

如果你之前没有接触过 Android 的开发环境，那么请做好心理准备，这一过程相当繁琐。请`万分仔细`地阅读下面的说明，严格对照文档进行配置操作。

译注：请注意！！！国内用户`必须必须必须`有稳定的翻墙工具，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作。某些翻墙工具可能只提供浏览器的代理功能，或只针对特定网站代理等等，请自行研究配置或更换其他软件。总之如果报错中出现有网址，那么 99% 就是无法正常翻墙。

#### [](https://reactnative.cn/docs/getting-started.html#1-%E5%AE%89%E8%A3%85-android-studio)1\. 安装 Android Studio

[首先下载和安装 Android Studio](https://developer.android.com/studio/index.html)，国内用户可能无法打开官方链接，请自行使用搜索引擎搜索可用的下载链接。安装界面中选择"Custom"选项，确保选中了以下几项：

*   `Android SDK`
    
*   `Android SDK Platform`
    
*   `Performance (Intel ® HAXM)`
    
*   `Android Virtual Device`
    

然后点击"Next"来安装选中的组件。

如果选择框是灰的，你也可以先跳过，稍后再来安装这些组件。

安装完成后，看到欢迎界面时，就可以进行下面的操作了。

#### [](https://reactnative.cn/docs/getting-started.html#2-%E5%AE%89%E8%A3%85-android-sdk)2\. 安装 Android SDK

Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是`Android 8.1 (Oreo)`版本的 SDK。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。

你可以在 Android Studio 的欢迎界面中找到 SDK Manager。点击"Configure"，然后就能看到"SDK Manager"。

![GettingStartedAndroidStudioWelcomeWindows.png](https://bbs-img.huaweicloud.com/blogs/img/1545715857836580.png "1545715857836580.png")

SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是Appearance & Behavior→System Settings→Android SDK。

在 SDK Manager 中选择"SDK Platforms"选项卡，然后在右下角勾选"Show Package Details"。展开`Android 8.1 (Oreo)`选项，确保勾选了下面这些组件（重申你必须使用稳定的翻墙工具，否则可能都看不到这个界面）：

*   `Android SDK Platform 27`
    
*   `Intel x86 Atom_64 System Image`（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）
    

然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的`27.0.3`版本。你可以同时安装多个其他版本。

最后点击"Apply"来下载和安装这些组件。

#### [](https://reactnative.cn/docs/getting-started.html#3-%E9%85%8D%E7%BD%AE-android-home-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)3\. 配置 ANDROID\_HOME 环境变量

React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。

打开`控制面板`\->`系统和安全`\->`系统`\->`高级系统设置`\->`高级`\->`环境变量`\->`新建`，创建一个名为`ANDROID_HOME`的环境变量（系统或用户变量均可），指向你的 Android SDK 所在的目录（具体的路径可能和下图不一致，请自行确认）：

![GettingStartedAndroidEnvironmentVariableANDROID_HOME.png](https://bbs-img.huaweicloud.com/blogs/img/1545715863934686.png "1545715863934686.png")

SDK 默认是安装在下面的目录：

c:\\Users\\你的用户名\\AppData\\Local\\Android\\Sdk

你可以在 Android Studio 的"Preferences"菜单中查看 SDK 的真实路径，具体是Appearance & Behavior→System Settings→Android SDK。

你需要关闭现有的命令符提示窗口然后重新打开，这样新的环境变量才能生效。

创建新项目
-----

使用 React Native 命令行工具来创建一个名为"AwesomeProject"的新项目：

  

### ![image.png](https://bbs-img.huaweicloud.com/blogs/img/1545716419887966.png "1545716419887966.png")

![GettingStartedAndroidSuccessWindows.png](https://bbs-img.huaweicloud.com/blogs/img/1545715871512223.png "1545715871512223.png")

`react-native run-android`只是运行应用的方式之一。你也可以在 Android Studio 或是[Nuclide](https://nuclide.io/)中直接运行应用。

译注：建议在`run-android`成功后再尝试使用 Android Studio 启动。请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。

如果你无法正常运行，遇到奇奇怪怪的红屏错误，先回头`仔细对照文档检查`，然后可以看看论坛的[求助专区](http://bbs.reactnative.cn/category/4)。不同时期不同版本可能会碰到不同的问题，我们会在论坛中及时解答更新。但请注意_千万不要_执行 bundle 命令，那样会导致代码完全无法刷新。

### [](https://reactnative.cn/docs/getting-started.html#%E4%BF%AE%E6%94%B9%E9%A1%B9%E7%9B%AE-1)修改项目

现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

*   使用你喜欢的文本编辑器打开`App.js`并随便改上几行
    
*   按两下 R 键，或是在开发者菜单中选择_Reload JS_，就可以看到你的最新修改。
    

### [](https://reactnative.cn/docs/getting-started.html#%E5%AE%8C%E6%88%90%E4%BA%86-1)完成了！

恭喜！你已经成功运行并修改了你的第一个 React Native 应用。

![GettingStartedCongratulations.png](https://reactnative.cn/docs/assets/GettingStartedCongratulations.png)

[](https://reactnative.cn/docs/getting-started.html#%E6%8E%A5%E4%B8%8B%E6%9D%A5-1)接下来？
--------------------------------------------------------------------------------------

*   试着在开发者菜单中打开[Live Reload](https://reactnative.cn/docs/debugging#%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0)，现在你只要一保存代码应用就会自动完整刷新。
    
*   如果你想把 React Native 集成到现有的原生项目中，则请参考[集成到现有原生应用](https://reactnative.cn/docs/integration-with-existing-apps)。
    

如果你想从头开始学习 React Native 开发，可以从尝试[编写 Hello World](https://reactnative.cn/docs/tutorial)开始。

*   简易沙盒环境
    ------
    

译注：沙盒环境大量依赖于国外网络环境，也不能直接发布应用，只是用于学习、演示、试验等目的。不建议国内用户使用。

[Create React Native App](https://github.com/react-community/create-react-native-app)is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code - no Xcode or Android Studio installation required (see[Caveats](https://reactnative.cn/docs/getting-started#caveats)).

Assuming that you have[Node](https://nodejs.org/en/download/)installed, you can use npm to install the`create-react-native-app`command line utility:

npm install -g create-react-native-app

Then run the following commands to create a new React Native project called "AwesomeProject":

create-react-native-app AwesomeProjectcd AwesomeProjectnpm start

This will start a development server for you, and print a QR code in your terminal.

[](https://reactnative.cn/docs/getting-started.html#running-your-react-native-application)Running your React Native application
-------------------------------------------------------------------------------------------------------------------------------

Install the[Expo](https://expo.io/)client app on your iOS or Android phone and connect to the same wireless network as your computer. Using the Expo app, scan the QR code from your terminal to open your project.

### [](https://reactnative.cn/docs/getting-started.html#modifying-your-app)Modifying your app

Now that you have successfully run the app, let's modify it. Open`App.js`in your text editor of choice and edit some lines. The application should reload automatically once you save your changes.

### [](https://reactnative.cn/docs/getting-started.html#that-s-it)That's it!

Congratulations! You've successfully run and modified your first React Native app.

![spacer.gif](https://bbs.huaweicloud.com/static/ueditor/themes/default/images/spacer.gif "正在上传...")

[](https://reactnative.cn/docs/getting-started.html#now-what)Now what?
----------------------------------------------------------------------

*   Create React Native App also has a[user guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)you can reference if you have questions specific to the tool.
    
*   If you can't get this to work, see the[Troubleshooting](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#troubleshooting)section in the README for Create React Native App.
    

If you're curious to learn more about React Native, continue on to the[Tutorial](https://reactnative.cn/docs/tutorial).

### [](https://reactnative.cn/docs/getting-started.html#running-your-app-on-a-simulator-or-virtual-device)Running your app on a simulator or virtual device

Create React Native App makes it really easy to run your React Native app on a physical device without setting up a development environment. If you want to run your app on the iOS Simulator or an Android Virtual Device, please refer to the instructions for building projects with native code to learn how to install Xcode and set up your Android development environment.

Once you've set these up, you can launch your app on an Android Virtual Device by running`npm run android`, or on the iOS Simulator by running`npm run ios`(macOS only).

### [](https://reactnative.cn/docs/getting-started.html#caveats)Caveats

Because you don't build any native code when using Create React Native App to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.

If you know that you'll eventually need to include your own native code, Create React Native App is still a good way to get started. In that case you'll just need to "[eject](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md#ejecting-from-create-react-native-app)" eventually to create your own native builds. If you do eject, the "Building Projects with Native Code" instructions will be required to continue working on your project.

Create React Native App configures your project to use the most recent React Native version that is supported by the Expo client app. The Expo client app usually gains support for a given React Native version about a week after the React Native version is released as stable. You can check[this document](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md)to find out what versions are supported.

If you're integrating React Native into an existing project, you'll want to skip Create React Native App and go directly to setting up the native build environment. Select "Building Projects with Native Code" above for instructions on configuring a native build environment for React Native.
链接:[[转]react native环境](https://bbs.huaweicloud.com/blogs/fa6d723f080611e9bd5a7ca23e93a891)