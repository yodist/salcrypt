const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow

function createWindow()
{
	mainWindow = new BrowserWindow({width:400, height: 500,icon: __dirname + '/salcrypt-logo.png'})
	mainWindow.setMenu(null);
	mainWindow.setResizable(false);
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	// mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function() {
		mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function() {
	if (mainWIndow == null) {
		createWindow()
	}
})
