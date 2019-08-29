原文:[https://blog.csdn.net/songshu5555/article/details/8742652](https://blog.csdn.net/songshu5555/article/details/8742652)

串口流控制DCB结构体解析及设置

一、串口通信结构体意义解析：

typedef struct \_DCB
{ DWORD DCBlength;
DWORD BaudRate; //波特率
DWORD fBinary :1; 
DWORD fParity :1; //是否奇偶校验
DWORD fOutxCtsFlow :1; // CTS output flow control 指定CTS是否用于检测发送控制。当为TRUE时CTS为OFF，发送将被挂起。（发送清除）
DWORD fOutxDsrFlow :1; // DSR output flow control 指定DSR是否用于检测发送控制。（数据装备好） 当为TRUE是DSR为OFF，发送将被挂起。
DWORD fDtrControl :2; // DTR flow control type 
//DTR\_CONTROL\_DISABLE值将DTR置为OFF, 
//DTR\_CONTROL\_ENABLE值将DTR置为ON, 
//DTR\_CONTROL\_HANDSHAKE 允许DTR"握手",
DWORD fDsrSensitivity :1; //若为TRUE，通讯驱动程序对DSR信号状态敏感。驱动程序将忽略任何接收的字节数，除非DSR调制解调器的输入线为高。
DWORD fTXContinueOnXoff :1; //为TRUE，输入缓冲区内字节已经满XoffLim及驱动程序已经发送XoffChar停止接收字节时，仍然继续发送。为FALSE，输入缓冲区内XonLim是空的，及驱动程序已经发送XonChar字符恢复接收的字节传输后，才会继续接收。
DWORD fOutX :1; //发送方的行为定义，为TRUE时，接收到XoffChar之后便停止发送，接收到XonChar之后将重新开始发送；
DWORD fInX :1;  //接收方的行为定义，为TRUE时，接收缓冲区接收到代表缓冲区满的XoffLim之后，XoffChar发送出去；接收缓冲区空的Buffer达到XonLim之后，XonChar发送出去。
DWORD fErrorChar :1; 
DWORD fNull :1; 
DWORD fRtsControl :2; // RTS Control Flow
//RTS\_CONTROL\_DISABLE时,RTS置为OFF
//RTS\_CONTROL\_ENABLE时, RTS置为ON
//RTS\_CONTROL\_HANDSHAKE时,
//当接收缓冲区小于半满时RTS为ON
//当接收缓冲区超过四分之三满时RTS为OFF
//RTS\_CONTROL\_TOGGLE时,
//当接收缓冲区仍有剩余字节时RTS为ON ,否则缺省为OFF
DWORD fAbortreplaceString :1; // abort reads/writes on error，为TRUE时,有错误发生时中止读和写操作
DWORD fDummy2 :17; 
WORD wReserved; 
WORD XonLim; //指定在XON字符发送之前接收缓冲区中空缓冲区可允许的最小字节数
WORD XoffLim; //指定在XOFF字符发送这前接收缓冲区中数据缓冲可允许的最小字节数
BYTE ByteSize; 
BYTE Parity; //奇偶校验方式
BYTE StopBits; //停止位
char XonChar;  //请求发送方继续发送时的字符 0x11
char XoffChar; //请求发送方停止发送时的字符 0x13
char ErrorChar; 
char EofChar; 
char EvtChar; 
WORD wReserved1;
} DCB, \*LPDCB;

二、设置流控制属性：

dcb.fDsrSensitivity = FALSE;          
dcb.fTXContinueOnXoff = FALSE;
dcb.fRtsControl = RTS\_CONTROL\_DISABLE;
dcb.fDtrControl = DTR\_CONTROL\_ENABLE;
switch (g\_lpInst->flowControl)
{
case NoFlowControl:
{
    dcb.fOutxCtsFlow = FALSE;
    dcb.fOutxDsrFlow = FALSE;
    dcb.fOutX = FALSE;
    dcb.fInX = FALSE;
    break;
}
case CtsRtsFlowControl:
{
    dcb.fOutxCtsFlow = TRUE;
    dcb.fOutxDsrFlow = FALSE;
    dcb.fRtsControl = RTS\_CONTROL\_HANDSHAKE;
    dcb.fOutX = FALSE;
    dcb.fInX = FALSE;
    break;
}
case CtsDtrFlowControl:
{
    dcb.fOutxCtsFlow = TRUE;
    dcb.fOutxDsrFlow = FALSE;
    dcb.fDtrControl = DTR\_CONTROL\_HANDSHAKE;
    dcb.fOutX = FALSE;
    dcb.fInX = FALSE;
    break;
}
case DsrRtsFlowControl:
{
    dcb.fOutxCtsFlow = FALSE;
    dcb.fOutxDsrFlow = TRUE;
    dcb.fRtsControl = RTS\_CONTROL\_HANDSHAKE;
    dcb.fOutX = FALSE;
    dcb.fInX = FALSE;
    break;
}
case DsrDtrFlowControl:
{
    dcb.fOutxCtsFlow = FALSE;
    dcb.fOutxDsrFlow = TRUE;
    dcb.fDtrControl = DTR\_CONTROL\_HANDSHAKE;
    dcb.fOutX = FALSE;
    dcb.fInX = FALSE;
    break;
}
case XonXoffFlowControl:
{
    dcb.fOutxCtsFlow = FALSE;
    dcb.fOutxDsrFlow = FALSE;
    dcb.fOutX = TRUE;
    dcb.fInX = TRUE;
    dcb.XonChar = 0x11;
    dcb.XoffChar = 0x13;
    dcb.XoffLim = 100;
    dcb.XonLim = 100;
    break;
}

其他：[http://com0com.sourceforge.net/examples/LSRMST\_INSERT/tstser.cpp](http://com0com.sourceforge.net/examples/LSRMST_INSERT/tstser.cpp)

[https://social.msdn.microsoft.com/Forums/vstudio/en-US/89b88e89-5814-4819-8b50-7caa3faf5f54/xonxoff-values-in-net20-serialport-class?forum=csharpgeneral](https://social.msdn.microsoft.com/Forums/vstudio/en-US/89b88e89-5814-4819-8b50-7caa3faf5f54/xonxoff-values-in-net20-serialport-class?forum=csharpgeneral)

[https://blog.csdn.net/SUKHOI27SMK/article/details/8236548](https://blog.csdn.net/SUKHOI27SMK/article/details/8236548)

[https://www.cnblogs.com/himessage/archive/2012/12/28/2836886.html](https://www.cnblogs.com/himessage/archive/2012/12/28/2836886.html)

[https://github.com/enthought/qt-mobility/blob/master/src/systeminfo/qsysteminfo\_win.cpp](https://github.com/enthought/qt-mobility/blob/master/src/systeminfo/qsysteminfo_win.cpp)

[https://www.cnblogs.com/qq78292959/archive/2012/08/02/2620607.html](https://www.cnblogs.com/qq78292959/archive/2012/08/02/2620607.html)

[https://blog.csdn.net/lujunql/article/details/2532152](https://blog.csdn.net/lujunql/article/details/2532152)

[https://github.com/enthought/qt-mobility](https://github.com/enthought/qt-mobility)

DCB的使用

连接：

CString strCOM;
strCOM.Format(\_T("\\\\\\\\.\\\\"));
strCOM += mComName;
hDevice = INVALID\_HANDLE\_VALUE;
hDevice = CreateFile(strCOM,GENERIC\_READ | GENERIC\_WRITE,0,0,OPEN\_EXISTING,FILE\_FLAG\_OVERLAPPED,NULL);
if (hDevice == INVALID\_HANDLE\_VALUE)
{
return FALSE;
}
DCB dcb;
FillMemory(&dcb, sizeof(dcb), 0);
#if 0
if (!GetCommState(hDevice, &dcb))     // get current DCB
{
// Error in GetCommState
return FALSE;
}
#endif
// Update DCB rate.
dcb.BaudRate = 波特率; //BaudRate\[m\_BaudRate\];
//dcb.ByteSize = 8;
//dcb.Parity = NOPARITY;
//dcb.StopBits = ONESTOPBIT; // (8-N-1)
dcb.ByteSize = 数据位;
dcb.Parity = 校验位;
dcb.StopBits = 停止位;
dcb.fDtrControl=DTR\_CONTROL\_ENABLE ;//this is common for all handshaking methods
switch(流控制方式)
{
case 1:
dcb.fOutxCtsFlow=TRUE;
dcb.fOutX=FALSE;
dcb.fInX=FALSE;
dcb.fOutxDsrFlow=TRUE;
dcb.fRtsControl=RTS\_CONTROL\_HANDSHAKE;
break;
case 2:
dcb.fOutX=TRUE;
dcb.fInX=TRUE;
dcb.XonChar = 0x11;
dcb.XoffChar = 0x13;
dcb.fTXContinueOnXoff=TRUE;
dcb.fOutxCtsFlow=FALSE;
dcb.fOutxDsrFlow=FALSE;
dcb.fRtsControl=RTS\_CONTROL\_ENABLE;
break;
case 0:
default:
dcb.fOutxCtsFlow=FALSE;
dcb.fOutX=FALSE;
dcb.fInX=FALSE;
dcb.fOutxDsrFlow=FALSE;
dcb.fRtsControl=RTS\_CONTROL\_ENABLE;
break;
}
dcb.fBinary=TRUE;//required for proper operation
// Set new state.
if (!SetCommState(hDevice, &dcb))
{
// Error in SetCommState. Possibly a problem with the communications 
// port handle or a problem with the DCB structure itself.
CloseHandle(hDevice);
hDevice = INVALID\_HANDLE\_VALUE;
return FALSE;
}
COMMTIMEOUTS timeouts;
// timeouts are not used
timeouts.ReadIntervalTimeout = MAXDWORD; 
timeouts.ReadTotalTimeoutMultiplier = 0;
timeouts.ReadTotalTimeoutConstant = 0;
timeouts.WriteTotalTimeoutMultiplier = 0;
timeouts.WriteTotalTimeoutConstant = 0;
if (!SetCommTimeouts(hDevice, &timeouts))
{
// Error setting time-outs.
CloseHandle(hDevice);
hDevice = INVALID\_HANDLE\_VALUE;
return FALSE;
}

断开：

SetCommMask(hDevice, 0);
Sleep(100); // sleep for a while for threads to stop
CancelIo(hDevice);
//CancelIoEx(hDevice, NULL);
Sleep(100);
CloseHandle(hDevice);
hDevice = INVALID\_HANDLE\_VALUE;

使用DeviceIoControl写：

设备自定结构体 Data2Driver;
Data2Driver.bReg = bReg;
Data2Driver.wData = wData;
Data2Driver.bURMReg = bURM;      
if(hDevice != INVALID\_HANDLE\_VALUE) // hDevice is the port handle obtanined from CreateFile("\\\\\\\\.\\\\COMx"...
{
    BOOL Status;
    DWORD  cbReturned;
    Status =    DeviceIoControl(hDevice, IOCTL\_XRUSBPORT\_WRITE\_UART\_REG,&Data2Driver,sizeof(设备自定结构体), NULL, 0,&cbReturned,0);
    if (!Status)
    {           
          // you will get a error message box whenever there is an error
          MessageBox(\_T("Error in Writing to USB\_UART Reg!"), \_T("Error"), MB\_OK|MB\_ICreplaceString);
          return;
    }
}

使用DeviceIoControl读：

设备自定结构体 Data2Driver;
USHORT Value; 
Data2Driver.bReg = bReg;
Data2Driver.bURMReg = bURM;
if(hDevice != INVALID\_HANDLE\_VALUE) // hDevice is the port handle obtanined from CreateFile("\\\\\\\\.\\\\COMx"...
{
    BOOL Status;
    DWORD  cbReturned; 
    Status =    DeviceIoControl(hDevice,
                       IOCTL\_XRUSBPORT\_READ\_UART\_REG,
                       &Data2Driver,
                       sizeof(设备自定结构体),
                       &Value,
                       sizeof(USHORT),
                       &cbReturned,
                       0);
    if (!Status)
    {          
          // you will get a error message box whenever there is an error
MessageBox(\_T("Error in Reading from USB\_UART Reg!"), \_T("Error"), MB\_OK|MB\_ICreplaceString);
return 0xFF; // you can also change the return to TRUE and FALSE and use other efficient way for finding the success of the command and thus the data.
}
else
return Value;
}
else
{
  // you will get a error message box whenever there is an error
  MessageBox(\_T("The COM Port is not opened for r/w registers!"), \_T("Error"), MB\_OK|MB\_ICreplaceString);
  return 0xFF; // you can also change the return to TRUE and FALSE and use other efficient way for finding the success of the command and thus the data.
}
链接:[DeviceIoControl &amp;&amp; DCB](https://bbs.huaweicloud.com/blogs/54531fd4f9c211e8bd5a7ca23e93a891)