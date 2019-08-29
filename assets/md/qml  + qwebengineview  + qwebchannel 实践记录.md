### 原始演示代码地址：[https://github.com/retifrav/qml-webchannel-websockets/blob/master/webchannel/webchannel/index.html ](https://github.com/retifrav/qml-webchannel-websockets/blob/master/webchannel/webchannel/index.html)

### 原文地址：[https://retifrav.github.io/blog/2018/07/14/html-from-qml-over-webchannel-websockets/](https://retifrav.github.io/blog/2018/07/14/html-from-qml-over-webchannel-websockets/)

上代码： 
=====

*   aws.h
    

class Aws: public QObject{

Q\_OBJECT

public slots:

void openQMLWindowSlot();

void clearCacheQMLSlot();

};

extern QQmlApplicationEngine\* engine;
void Aws::openQMLWindowSlot()
{
   //QDeclarativeView \*decView= new QDeclarativeView();
   //decView->engine()->rootContext()->setContextProperty("myAws",this);
   //decView->setSource(QUrl("qrc:/inc/firstqml.qml"));
   //decView->show();
}

void Aws::clearCacheQMLSlot()
{
    //engine.clearComponentCache();
//HERE I GOT PROBLEM
    printf("clear");
}

*   aws.cpp
    

QQmlApplicationEngine\* engine;

int main(int argc, char \*argv\[\])

{

#if defined(Q\_OS\_WIN)

    QCoreApplication::setAttribute(Qt::AA\_EnableHighDpiScaling);

#endif

    QGuiApplication app(argc, argv);

    //注册C++类型Hello

    qmlRegisterType<Aws>("Aws.module",1,0,"Aws");

    QQuickWindow::setSceneGraphBackend(QSGRendererInterface::Software);

    //QGuiApplication::setAttribute(Qt::AA\_UseSoftwareOpenGL);

    QGuiApplication::setAttribute(Qt::AA\_UseSoftwareOpenGL);

    //QApplication::setAttribute(Qt::AA\_UseSoftwareOpenGL);

    QCoreApplication::setAttribute(Qt::AA\_UseSoftwareOpenGL);

  

    engine = new QQmlApplicationEngine();

    engine->load(QUrl(QStringLiteral("qrc:/main.qml")));

    if (engine->rootObjects().isEmpty())

        return -1;

  

    return app.exec();

}

  

*   main.qml
    

import QtQuick 2.10

import QtQuick.Window 2.10

import QtQuick.Controls 1.4

import QtQuick.Controls.Styles 1.4

import QtWebEngine 1.1

import QtWebChannel 1.0

//导入注册的C++类

import Aws.module 1.0

  

// an object with properties, signals and methods - just like any normal Qt object

/\*QtObject {

    id: someObject

  

    // ID, under which this object will be known at WebEngineView side

    WebChannel.id: "backend"

  

    property string someProperty: "Break on through to the other side"

  

    signal someSignal(string message);

  

    function changeText(newText) {

        txt.text = newText;

        return "New text length: " + newText.length;

    }

}\*/

Window {

    visible: true

    width: 640

    height: 480

    title: qsTr("Hello World")

    color: "green"

    property alias webview: webview

  

    Button {

        id: openFile

        text: "打开"

        width: 100

        height: 40

        //anchors作为当前控件Button的锚点,可以表示控件的上下边的y左右边的x

        //Button左边边界的值为Window左边边界的值

        anchors.left: parent.left

        //边界相隔距离从0变成了10，相当于Button向左平移了10

        anchors.leftMargin: 32

        anchors.top: parent.top

        anchors.topMargin: 36

    }

  

    Connections {

        target: openFile

        onWindowChanged: print("clicked")

    }

  

    Button {

        id: openFile1

        text: "打开"

        width: 100

        height: 40

        //anchors作为当前控件Button的锚点,可以表示控件的上下边的y左右边的x

        //Button左边边界的值为Window左边边界的值

        anchors.left: parent.left

        //边界相隔距离从0变成了10，相当于Button向左平移了10

        anchors.leftMargin: 32

        anchors.top: parent.top

        anchors.topMargin: 136

    }

    // an object with properties, signals and methods - just like any normal Qt object

    QtObject {

        id: someObject

  

        // ID, under which this object will be known at WebEngineView side

        WebChannel.id: "backend"

  

        property string someProperty: "Break on through to the other side"

  

        signal someSignal(string message);

  

        function changeText(newText) {

            txt.text = newText;

            return "New text length: " + newText.length;

        }

    }

  

    Text {

        id: txt

        text: "Some text"

        onTextChanged: {

            // this signal will trigger a function at WebEngineView side (if connected)

            someObject.someSignal(text)

        }

    }

   WebEngineView {

        id:webview

        //width: 20// https://jgraph.github.io/mxgraph/javascript/examples/grapheditor/www/index.html https://10.121.125.143/trn/

        //height: 40

        anchors.fill: parent

        url: "qrc:/index.html"

        webChannel: channel

        onLoadingChanged: { myAws.clearCacheQMLSlot(); }

    }

   WebChannel {

       id: channel

       registeredObjects: \[someObject\]

   }

  

  

   Aws{

       id:myAws   //Hello类的实例

       //onBegin:myAws.clearCacheQMLSlot()

   }

}

  

  

*   index.html
    

 <script type="text/javascript" src="qrc:///qtwebchannel/qwebchannel.js"></script>

  

        <script type="text/javascript">

            // here will be our QtObject from QML side

            var backend;

            window.onload = function()

            {

                new QWebChannel(qt.webChannelTransport, function(channel) {

                    // all published objects are available in channel.objects under

                    // the identifier set in their attached WebChannel.id property

                    backend = channel.objects.backend;

                    // connect to a signal

                    backend.someSignal.connect(function(someText) {

                        alert("Got signal: " + someText);

                        document.getElementById("lbl").innerHTML = someText;

                    });

                });

            }

            // just to demonstrate you async interaction

            var result = "ololo";

            function changeLabel()

            {

                var textInputValue = document.getElementById("input").value.trim();

                if (textInputValue.length === 0)

                {

                    alert("You haven't entered anything!");

                    return;

                }

                // invoke a method, and receive the return value asynchronously

                backend.changeText(textInputValue, function(callback) {

                    //processThisShit(callback);

                    result = callback;

                    // since it's async, this alert will appear later and show the actual result

                    alert(result);

                    // reset variable back to default value

                    result = "ololo";

                });

                // this alert will appear first and show default "ololo"

                alert(result);

            }

            //function processThisShit(shit) {

            //    //alert("Shit has been processed. " + shit);

            //    result = shit;

            //    alert(result);

            //}

            // you can also read/write properties of QtObject from QML side

            function getPropertyValue()

            {

                var originalValue = backend.someProperty;

                alert(backend.someProperty);

                backend.someProperty = "some another value";

                alert(backend.someProperty);

                backend.someProperty = originalValue;

            }

        </script>
链接:[qml  + qwebengineview  + qwebchannel 实践记录](https://bbs.huaweicloud.com/blogs/0b42c829e35111e8bd5a7ca23e93a891)