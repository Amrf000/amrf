项目地址:

[https://github.com/cnxy/VISAInstrument](https://github.com/cnxy/VISAInstrument)

附件是NIVISA1700运行时;

[https://www.keysight.com/en/pcx-x2015004/oscilloscopes?cc=HK&lc=eng&cms=x205199%2Cx205195%2Cx205213%2Cx205217%2Cx205212](https://www.keysight.com/en/pcx-x2015004/oscilloscopes?cc=HK&lc=eng&cms=x205199%2Cx205195%2Cx205213%2Cx205217%2Cx205212)

### VISA Example in C

To compile and run this example in Microsoft Visual Studio 2008:

1.  Open Visual Studio.
    
2.  Create a new Visual C++, Win32, Win32 Console Application project.
    
3.  In the Win32 Application Wizard, click Next>. Then, check Empty project, and click Finish.
    
4.  Cut-and-paste the code that follows into a file named "example.c" in the project directory.
    
5.  In Visual Studio 2008, right-click the Source Files folder, choose Add > Add Existing Item..., select the example.c file, and click Add.
    
6.  Edit the program to use the VISA address of your oscilloscope.
    
7.  Choose Project > Properties.... In the Property Pages dialog, update these project settings:
    
    1.  Under Configuration Properties, Linker, Input, add "visa32.lib" to the Additional Dependencies field.
        
    2.  Under Configuration Properties, C/C++, Code Generation, select Multi-threaded DLL for the Runtime Library field.
        
    3.  Click OK to close the Property Pages dialog.
        
8.  Add the include files and library files search paths:
    
    1.  Choose Tools > Options....
        
    2.  In the Options dialog, under Projects and Solutions, select VC++ Directories.
        
    3.  Show directories for Include files, and add the include directory (for example, Program Files (x86)\\IVI Foundation\\VISA\\WinNT\\Include).
        
    4.  Show directories for Library files, and add the library files directory (for example, Program Files (x86)\\IVI Foundation\\VISA\\WinNT\\lib\\msc).
        
    5.  Click OK to close the Options dialog.
        
9.  Build and run the program.
    

/\*
 \* Keysight VISA Example in C
 \* ------------------------------------------------------------------
 \* This program illustrates a few commonly-used programming
 \* features of your Keysight Infiniium Series oscilloscope.
 \*/
#include <stdio.h>            /\* For printf(). \*/
#include <string.h>           /\* For strcpy(), strcat(). \*/
#include <time.h>             /\* For clock(). \*/
#include <visa.h>             /\* Keysight VISA routines. \*/
#define VISA\_ADDRESS "TCPIP0::141.121.237.226::hislip0::INSTR"
#define IEEEBLOCK\_SPACE 5000000
/\* Function prototypes \*/
void initialize(void);          /\* Initialize to known state. \*/
void capture(void);             /\* Capture the waveform. \*/
void analyze(void);             /\* Analyze the captured waveform. \*/
void do\_command(char \*command);        /\* Send command. \*/
int do\_command\_ieeeblock(char \*command); /\* Command w/IEEE block. \*/
void do\_query\_string(char \*query);     /\* Query for string. \*/
void do\_query\_number(char \*query);     /\* Query for number. \*/
void do\_query\_numbers(char \*query);     /\* Query for numbers. \*/
int do\_query\_ieeeblock(char \*query);   /\* Query for IEEE byte block. \*/
int do\_query\_ieeeblock\_words(char \*query);   /\* Query for word block. \*/
void check\_instrument\_errors();        /\* Check for inst errors. \*/
void error\_handler();                  /\* VISA error handler. \*/
/\* Global variables \*/
ViSession defaultRM, vi;        /\* Device session ID. \*/
ViStatus err;                   /\* VISA function return value. \*/
char str\_result\[256\] = {0};     /\* Result from do\_query\_string(). \*/
double num\_result;              /\* Result from do\_query\_number(). \*/
unsigned char ieeeblock\_data\[IEEEBLOCK\_SPACE\];   /\* Result from
                                   do\_query\_ieeeblock(). \*/
signed short ieeeblock\_data\_words\[IEEEBLOCK\_SPACE\];   /\* Result from
                                   do\_query\_ieeeblock\_words(). \*/
double dbl\_results\[10\];         /\* Result from do\_query\_numbers(). \*/
/\* Main Program
 \* --------------------------------------------------------------- \*/
void main(void)
{
  /\* Open the default resource manager session. \*/
  err = viOpenDefaultRM(&defaultRM);
  if (err != VI\_SUCCESS) error\_handler();
  /\* Open the session using the oscilloscope's VISA address. \*/
  err = viOpen(defaultRM, VISA\_ADDRESS, VI\_NULL, VI\_NULL, &vi);
  if (err != VI\_SUCCESS) error\_handler();
  /\* Set the I/O timeout to fifte-en seconds. \*/
  err = viSetAttribute(vi, VI\_ATTR\_TMO\_VALUE, 15000);
  if (err != VI\_SUCCESS) error\_handler();
  /\* Clear the interface. \*/
  err = viClear(vi);
  if (err != VI\_SUCCESS) error\_handler();
  /\* Initialize - start from a known state. \*/
  initialize();
  /\* Capture data. \*/
  capture();
  /\* Analyze the captured waveform. \*/
  analyze();
  /\* Close the vi session and the resource manager session. \*/
  viClose(vi);
  viClose(defaultRM);
}
/\* Initialize the oscilloscope to a known state.
 \* --------------------------------------------------------------- \*/
void initialize (void)
{
  /\* Clear status. \*/
  do\_command("\*CLS");
  /\* Get and display the device's \*IDN? string. \*/
  do\_query\_string("\*IDN?");
  printf("Oscilloscope \*IDN? string: %s\\n", str\_result);
  /\* Load the default setup. \*/
  do\_command("\*RST");
}
/\* Capture the waveform.
 \* --------------------------------------------------------------- \*/
void capture (void)
{
  int num\_values;
  FILE \*fp;
  /\* Set probe attenuation factor. \*/
  do\_command(":CHANnel1:PROBe 1.0");
  do\_query\_string(":CHANnel1:PROBe?");
  printf("Channel 1 probe attenuation factor: %s\\n", str\_result);
  /\* Use auto-scale to automatically configure oscilloscope. \*/
  do\_command(":AUToscale");
  /\* Set trigger mode. \*/
  do\_command(":TRIGger:MODE EDGE");
  do\_query\_string(":TRIGger:MODE?");
  printf("Trigger mode: %s\\n", str\_result);
  /\* Set EDGE trigger parameters. \*/
  do\_command(":TRIGger:EDGE:SOURCe CHANnel1");
  do\_query\_string(":TRIGger:EDGE:SOURce?");
  printf("Trigger edge source: %s\\n", str\_result);
  do\_command(":TRIGger:LEVel CHANnel1,-2E-3");
  do\_query\_string(":TRIGger:LEVel? CHANnel1");
  printf("Trigger level, channel 1: %s\\n", str\_result);
  do\_command(":TRIGger:EDGE:SLOPe POSitive");
  do\_query\_string(":TRIGger:EDGE:SLOPe?");
  printf("Trigger edge slope: %s\\n", str\_result);
  /\* Save oscilloscope setup. \*/
  /\* Read system setup. \*/
  num\_values = do\_query\_ieeeblock(":SYSTem:SETup?");
  printf("Read setup string query (%d bytes).\\n", num\_values);
  /\* Write setup string to file. \*/
  fp = fopen ("c:\\\\scope\\\\config\\\\setup.stp", "wb");
  num\_values = fwrite(ieeeblock\_data, sizeof(unsigned char), num\_values,
    fp);
  fclose (fp);
  printf("Wrote setup string (%d bytes) to ", num\_values);
  printf("c:\\\\scope\\\\config\\\\setup.stp.\\n");
  /\* Change settings with individual commands:
  
  /\* Set vertical scale and offset. \*/
  do\_command(":CHANnel1:SCALe 0.1");
  do\_query\_string(":CHANnel1:SCALe?");
  printf("Channel 1 vertical scale: %s\\n", str\_result);
  do\_command(":CHANnel1:OFFSet 0.0");
  do\_query\_string(":CHANnel1:OFFSet?");
  printf("Channel 1 offset: %s\\n", str\_result);
  /\* Set horizontal scale and offset. \*/
  do\_command(":TIMebase:SCALe 0.0002");
  do\_query\_string(":TIMebase:SCALe?");
  printf("Timebase scale: %s\\n", str\_result);
  do\_command(":TIMebase:POSition 0.0");
  do\_query\_string(":TIMebase:POSition?");
  printf("Timebase position: %s\\n", str\_result);
  /\* Set the acquisition mode. \*/
  do\_command(":ACQuire:MODE RTIMe");
  do\_query\_string(":ACQuire:MODE?");
  printf("Acquire mode: %s\\n", str\_result);
  /\* Or, set up by loading a previously saved setup. \*/
  /\* Read setup string from file. \*/
  fp = fopen ("c:\\\\scope\\\\config\\\\setup.stp", "rb");
  num\_values = fread (ieeeblock\_data, sizeof(unsigned char),
    IEEEBLOCK\_SPACE, fp);
  fclose (fp);
  printf("Read setup string (%d bytes) from file ", num\_values);
  printf("c:\\\\scope\\\\config\\\\setup.stp.\\n");
  /\* Restore setup string. \*/
  num\_values = do\_command\_ieeeblock(":SYSTem:SETup", num\_values);
  printf("Restored setup string (%d bytes).\\n", num\_values);
  /\* Set the desired number of waveform points,
   \* and capture an acquisition. \*/
  do\_command(":ACQuire:POINts 32000");
  do\_command(":DIGitize");
}
/\* Analyze the captured waveform.
 \* --------------------------------------------------------------- \*/
void analyze (void)
{
  double wav\_format;
  double acq\_type;
  double wav\_points;
  double avg\_count;
  double x\_increment;
  double x\_origin;
  double y\_increment;
  double y\_origin;
  FILE \*fp;
  int num\_values;   /\* Number of bytes returned from instrument. \*/
  int i;
  /\* Make measurements.
   \* ------------------------------------------------------------- \*/
  do\_command(":MEASure:SOURce CHANnel1");
  do\_query\_string(":MEASure:SOURce?");
  printf("Measure source: %s\\n", str\_result);
  do\_command(":MEASure:FREQuency");
  do\_query\_number(":MEASure:FREQuency?");
  printf("Frequency: %.4f kHz\\n", num\_result / 1000);
  do\_command(":MEASure:VAMPlitude");
  do\_query\_number(":MEASure:VAMPlitude?");
  printf("Vertical amplitude: %.2f V\\n", num\_result);
  /\* Download the screen image.
   \* ------------------------------------------------------------- \*/
  /\* Read screen image. \*/
  num\_values = do\_query\_ieeeblock(":DISPlay:DATA? PNG");
  printf("Screen image bytes: %d\\n", num\_values);
  /\* Write screen image bytes to file. \*/
  fp = fopen ("c:\\\\scope\\\\data\\\\screen.png", "wb");
  num\_values = fwrite(ieeeblock\_data, sizeof(unsigned char), num\_values,
    fp);
  fclose (fp);
  printf("Wrote screen image (%d bytes) to ", num\_values);
  printf("c:\\\\scope\\\\data\\\\screen.bmp.\\n");
  /\* Download waveform data.
   \* ------------------------------------------------------------- \*/
  /\* Get the waveform type. \*/
  do\_query\_string(":WAVeform:TYPE?");
  printf("Waveform type: %s\\n", str\_result);
  /\* Get the number of waveform points. \*/
  do\_query\_string(":WAVeform:POINts?");
  printf("Waveform points: %s\\n", str\_result);
  /\* Set the waveform source. \*/
  do\_command(":WAVeform:SOURce CHANnel1");
  do\_query\_string(":WAVeform:SOURce?");
  printf("Waveform source: %s\\n", str\_result);
  /\* Choose the format of the data returned: \*/
  do\_command(":WAVeform:FORMat WORD");
  do\_query\_string(":WAVeform:FORMat?");
  printf("Waveform format: %s\\n", str\_result);
  /\* Display the waveform settings: \*/
  do\_query\_number(":WAVeform:XINCrement?");
  x\_increment = num\_result;
  printf("Waveform X increment: %e\\n", x\_increment);
  do\_query\_number(":WAVeform:XORigin?");
  x\_origin = num\_result;
  printf("Waveform X origin: %e\\n", x\_origin);
  do\_query\_number(":WAVeform:YINCrement?");
  y\_increment = num\_result;
  printf("Waveform Y increment: %e\\n", y\_increment);
  do\_query\_number(":WAVeform:YORigin?");
  y\_origin = num\_result;
  printf("Waveform Y origin: %e\\n", y\_origin);
  /\* Read waveform data. \*/
  num\_values = do\_query\_ieeeblock\_words(":WAVeform:DATA?");
  printf("Number of data values: %d\\n", num\_values);
  /\* Open file for output. \*/
  fp = fopen("c:\\\\scope\\\\data\\\\waveform\_data.csv", "wb");
  /\* Output waveform data in CSV format. \*/
  for (i = 0; i < num\_values - 1; i++)
  {
    /\* Write time value, voltage value. \*/
    fprintf(fp, "%9f, %6f\\n",
      x\_origin + ((float)i \* x\_increment),
      ((float)ieeeblock\_data\_words\[i\] \* y\_increment) + y\_origin);
  }
  /\* Close output file. \*/
   fclose(fp);
   printf("Waveform format WORD data written to ");
   printf("c:\\\\scope\\\\data\\\\waveform\_data.csv.\\n");
}
/\* Send a command to the instrument.
 \* --------------------------------------------------------------- \*/
void do\_command(command)
char \*command;
{
  char message\[80\];
  strcpy(message, command);
  strcat(message, "\\n");
  err = viPrintf(vi, message);
  if (err != VI\_SUCCESS) error\_handler();
  check\_instrument\_errors();
}
/\* Command with IEEE definite-length block.
 \* --------------------------------------------------------------- \*/
int do\_command\_ieeeblock(command, num\_bytes)
char \*command;
int num\_bytes;
{
  char message\[80\];
  int data\_length;
  strcpy(message, command);
  strcat(message, " #8%08d");
  err = viPrintf(vi, message, num\_bytes);
  if (err != VI\_SUCCESS) error\_handler();
  err = viBufWrite(vi, ieeeblock\_data, num\_bytes, &data\_length);
  if (err != VI\_SUCCESS) error\_handler();
  check\_instrument\_errors();
  return(data\_length);
}
/\* Query for a string result.
 \* --------------------------------------------------------------- \*/
void do\_query\_string(query)
char \*query;
{
  char message\[80\];
  strcpy(message, query);
  strcat(message, "\\n");
  err = viPrintf(vi, message);
  if (err != VI\_SUCCESS) error\_handler();
  err = viScanf(vi, "%t", str\_result);
  if (err != VI\_SUCCESS) error\_handler();
  check\_instrument\_errors();
}
/\* Query for a number result.
 \* --------------------------------------------------------------- \*/
void do\_query\_number(query)
char \*query;
{
  char message\[80\];
  strcpy(message, query);
  strcat(message, "\\n");
  err = viPrintf(vi, message);
  if (err != VI\_SUCCESS) error\_handler();
  err = viScanf(vi, "%lf", &num\_result);
  if (err != VI\_SUCCESS) error\_handler();
  check\_instrument\_errors();
}
/\* Query for numbers result.
 \* --------------------------------------------------------------- \*/
void do\_query\_numbers(query)
char \*query;
{
  char message\[80\];
  strcpy(message, query);
  strcat(message, "\\n");
  err = viPrintf(vi, message);
  if (err != VI\_SUCCESS) error\_handler();
  err = viScanf(vi, "%,10lf\\n", dbl\_results);
  if (err != VI\_SUCCESS) error\_handler();
  check\_instrument\_errors();
}
/\* Query for an IEEE definite-length byte block result.
 \* --------------------------------------------------------------- \*/
int do\_query\_ieeeblock(query)
char \*query;
{
  char message\[80\];
  int data\_length;
  strcpy(message, query);
  strcat(message, "\\n");
  err = viPrintf(vi, message);
  if (err != VI\_SUCCESS) error\_handler();
  data\_length = IEEEBLOCK\_SPACE;
  err = viScanf(vi, "%#b\\n", &data\_length, ieeeblock\_data);
  if (err != VI\_SUCCESS) error\_handler();
  if (data\_length == IEEEBLOCK\_SPACE )
  {
    printf("IEEE block buffer full: ");
    printf("May not have received all data.\\n");
  }
  check\_instrument\_errors();
  return(data\_length);
}
/\* Query for an IEEE definite-length word block result.
 \* --------------------------------------------------------------- \*/
int do\_query\_ieeeblock\_words(query)
char \*query;
{
  char message\[80\];
  int data\_length;
  strcpy(message, query);
  strcat(message, "\\n");
  err = viPrintf(vi, message);
  if (err != VI\_SUCCESS) error\_handler();
  data\_length = IEEEBLOCK\_SPACE;
  err = viScanf(vi, "%#hb\\n", &data\_length, ieeeblock\_data\_words);
  if (err != VI\_SUCCESS) error\_handler();
  if (data\_length == IEEEBLOCK\_SPACE )
  {
    printf("IEEE block buffer full: ");
    printf("May not have received all data.\\n");
  }
  check\_instrument\_errors();
  return(data\_length);
}
/\* Check for instrument errors.
 \* --------------------------------------------------------------- \*/
void check\_instrument\_errors()
{
  char str\_err\_val\[256\] = {0};
  char str\_out\[800\] = "";
  err = viQueryf(vi, ":SYSTem:ERRor? STRing\\n", "%t", str\_err\_val);
  if (err != VI\_SUCCESS) error\_handler();
  while(strncmp(str\_err\_val, "0,", 2) != 0 )
  {
    strcat(str\_out, ", ");
    strcat(str\_out, str\_err\_val);
    err = viQueryf(vi, ":SYSTem:ERRor? STRing\\n", "%t", str\_err\_val);
    if (err != VI\_SUCCESS) error\_handler();
  }
  if (strcmp(str\_out, "") != 0)
  {
    printf("INST Error%s\\n", str\_out);
    err = viFlush(vi, VI\_READ\_BUF);
    if (err != VI\_SUCCESS) error\_handler();
    err = viFlush(vi, VI\_WRITE\_BUF);
    if (err != VI\_SUCCESS) error\_handler();
  }
}
/\* Handle VISA errors.
 \* --------------------------------------------------------------- \*/
void error\_handler()
{
  char err\_msg\[1024\] = {0};
  viStatusDesc(vi, err, err\_msg);
  printf("VISA Error: %s\\n", err\_msg);
  if (err < VI\_SUCCESS)
  {
    exit(1);
  }
}
链接:[VISAInstrument运行时环境包](https://bbs.huaweicloud.com/blogs/c11d66e63d3811e9bd5a7ca23e93a891)