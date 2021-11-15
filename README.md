# No Limits 2 Control Panel

Control your No Limits 2 or RideSims roller coasters from other devices!

![Control Panel Preview](https://github.com/Disembleergon/NL2_Control-Panel/blob/master/controlPanel_preview.png)

### IMPORTANT

In the settings of No Limits 2, go to controls and look for "dispatch". There you have to add the normal enter key as assigned key.

![peview](https://github.com/Disembleergon/NL2_Control-Panel/blob/master/settings_preview.png)

To use the Control Panel, you have to download the LTS version of NodeJS on your PC:<br>
https://nodejs.org/en/ <br><br>
You probably also have to install Python:<br>
https://www.python.org

### How it works

_[Here](https://youtu.be/coFRsiAlJg4) you can find a tutorial explaining how to install the panel._

1. Download the server [here](https://github.com/Disembleergon/NL2_Control-Panel/releases/latest) (NL2_Control-Panel.zip)<br><br>
2. After you extracted the zip file and downloaded NodeJS, double click the `install.bat ` file to completely install the server (you only have to do this the first time)<br><br>
3. Double click the `launch_server.bat` file to start the server and the website<br><br>
4. The server now tells you the IP-adress and the website-URL. Enter the website-URL (for example 192.168.178.32:5000) into the browser of your device you want to control the coasters with (your mobile phone for example)<br><br>
5. On the website, press connect (you can enter another IP-adress if you want)<br><br>
6. Open No Limits 2 on your PC (don't close the server window)<br><br>
7. Open a park and set the dispatch mode on manual<br><br>
8. Control the roller coaster with the website and enjoy!

### Tip

The server just presses the correct button on the keyboard when you press something on the control panel.
When you press both dispatch buttons for example, the server presses the enter key on the keyboard.
You can edit those keys in the actions.json file.<br/>[Here](http://robotjs.io/docs/syntax#keys) you can find all the keys you can insert.

### Bugs and feedback

If you want to report bugs, you can do this in the issues section of this repository. If you want to give some feedback or you just have some questions, you can dm me on [Twitter](https://twitter.com/disembleergon) or [Instagram](https://www.instagram.com/_Disembleergon/).
