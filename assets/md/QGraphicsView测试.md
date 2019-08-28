想实现QOpenglWidget或者QGLWidget的透明效果，发现效果达不到预期，可以透明但是渲染顺序总是在其他普通控件之前.

后来只能使用QGraphicView代替

测试代码如下:  

class CEasyGLWidget : public QGLWidget

{

    Q\_OBJECT

public:

    CEasyGLWidget( const QGLFormat& format, QWidget\* parent = 0  );

  

protected:

    virtual void initializeGL();

    virtual void resizeGL( int w, int h );

    virtual void paintGL();

  

    virtual void keyPressEvent( QKeyEvent\* e );

  

private:

    bool prepareShaderProgram( const QString& vertexShaderPath,

                               const QString& geometryShaderPath,

                               const QString& fragmentShaderPath );

  

    QOpenGLShaderProgram m\_shader;

    QOpenGLBuffer m\_vertexBuffer;

    bool inited;

  

};

  

  

class CEasyGraphicsItem : public QGraphicsItem

{

    //Q\_OBJECT

  

public:

    CEasyGraphicsItem(QWidget \*parent = 0);

    ~CEasyGraphicsItem();

  

    virtual QRectF boundingRect() const;

    virtual void paint ( QPainter \* painter, const QStyleOptionGraphicsItem \* option, QWidget \* widget = 0 );

  

private:

    CEasyGLWidget \*m\_OGLItem;

    QPixmap m\_Pixmap;

    QImage m\_Image;

  

};

  

class Md3View:public QGraphicsView,

        protected QOpenGLFunctions

{

public:

    Md3View( QWidget\* pParent = 0 );

    virtual ~Md3View( void );

private:

    QGraphicsScene  \*m\_pMainGraphicsScene;

    //QGraphicsView   \*m\_pMainGraphicsView;

    QGLWidget       \*m\_pMainGLWidget;

  

    CEasyGraphicsItem \*m\_pItem;

  

    CEasyGLWidget \*m\_OGLItem;

};
链接:[QGraphicsView测试](https://bbs.huaweicloud.com/blogs/1c9dffb011ca11e9bd5a7ca23e93a891)