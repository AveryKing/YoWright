# YoWright

<h2>What is this?</h2>
 <p>This tool allows you to interface with the game YoWorld via Node.js. You can use it to automate gameplay or to inject commands into the game client.</p>

<h2> What features are included? </h2>
<p> Included are several features such as automated chat messages, action tweens (gifts/hearts/etc), language translation, and even permanent chat logs! Feel free to modify the project to add your own features.</p>
<h2>Instructions</h2>
<ul>
 <li> Download and install Node.js </li>
 <li> Clone this repository <ul><li><code> git clone https://github.com/AveryKing/YoWright.git </code></li></ul> </li>
 <li> Run <code> npm install </code> in the project directory </li>
 <li> Use Fiddler to replace YoVilleApp.js with the YoVilleApp2.js file included in this project </li>
 <li>In <code>logger.js</code> replace the empty connection string with connection string to your MongoDB database. This is used to keep permanent record of other player's chat messages.</li>
 <li> Run <code>npm start</code> </li>
