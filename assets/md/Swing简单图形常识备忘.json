*   Swing设置窗口图标
    

ImageIcon imageIcon = new ImageIcon(DocMessMainFrame.class.getResource("/icon.png"));
frame.setIconImage(imageIcon.getImage());

*   Swing固定窗口大小
    

frame.setExtendedState(Frame.MAXIMIZED\_BOTH);
frame.setPreferredSize(new Dimension(800, 550));
frame.setResizable(false);

*   Swing设置窗口关闭退出程序
    

frame.setDefaultCloseOperation(JFrame.EXIT\_ON\_CLOSE);

*   Swing窗口居中
    

frame.pack();
frame.setLocationRelativeTo(null);
frame.setVisible(true);

*   Swing窗口线程创建和显示UI
    

javax.swing.SwingUtilities.invokeLater(new Runnable() {
    @Override
	public void run() {
        createAndShowGUI();
    }
});

*   Swing null布局
    

panel.setLayout(null)
xxx.setBounds(10,20,80,25);

*   Swing GridBagLayout布局
    

JPanel panel = new JPanel();
GridBagLayout gridbag = new GridBagLayout();
GridBagConstraints c = new GridBagConstraints();   
panel.setLayout(gridbag);

*   Swing文本框添加滚动
    

  

JTextArea tarea = new JTextArea(20, 30);  
tarea.setEditable(false);  
JScrollPane scroll = new JScrollPane(tarea);  
scroll.setVerticalScrollBarPolicy(JScrollPane.VERTICAL\_SCROLLBAR\_AS\_NEEDED);

*   Swing文本框只读不灰显
    

JTextField outDir = new JTextField(OutDir);
outDir.setEditable(false);
inDir.setBackground(UIManager.getColor("TextField.background"));

*   Swing进度条结合SwingWorker
    

JProgressBar jpb = new JProgressBar();
buttonStart.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
    	if(!OutDir.isEmpty() && !OutDir.isEmpty() && new File(OutDir).exists() && new File(InDir).exists()) {
    		buttonStart.setEnabled(false);
    		tarea.setText("");
    		File inFiles = new File(InDir);
    		int max = 1000;
    		if(inFiles.exists() && inFiles.isDirectory()) {
    			max = inFiles.list().length;
    		}else {
    			max = 1000;
    		}
    		jpb.setMaximum(max);
    		new PWorker(InDir,OutDir,buttonStart,jpb,tarea,isAddCom.isSelected()).execute();            		
    	}
    }
});

*   Swing文件夹选择
    

buttonIn.addActionListener(new ActionListener() {
   @Override
   public void actionPerformed(ActionEvent e) {
      JFileChooser fileChooser = new JFileChooser();
      fileChooser.setFileSelectionMode(JFileChooser.DIRECTORIES\_ONLY);
      int option = fileChooser.showOpenDialog(frame);
      if(option == JFileChooser.APPROVE\_OPTION){
         File file = fileChooser.getSelectedFile();
         String se = file.getAbsolutePath();
         inDir.setText(se);
         InDir = se;
			try {
				if(ini!=null) {
     			ini.put("set", "indir", se);
				ini.store();
				}
		} catch (IOException e1) {
			e1.printStackTrace();
		}
      }
   }
});

*   GridBagLayout布局固定Cell大小
    

jpb.setPreferredSize(new Dimension(700, 40));

*   GridBagLayout布局设置边距
    

c.insets = new Insets(3,3,3,3);

*   GridBagLayout布局设置宽度为当前到行尾
    

c.gridwidth = GridBagConstraints.REMAINDER;
panel.add(buttonOut);
gridbag.setConstraints(buttonOut, c);

*   swing设计工具
    
    [https://stackoverflow.com/questions/1998704/the-best-tool-for-build-swing-ui-visually](https://stackoverflow.com/questions/1998704/the-best-tool-for-build-swing-ui-visually)
链接:[Swing简单图形常识备忘](https://bbs.huaweicloud.com/blogs/4c7d4b71b9ce11e9b759fa163e330718)