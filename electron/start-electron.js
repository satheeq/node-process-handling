const {app, BrowserWindow} = require ('electron');

// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
// const Menu = electron.Menu;

let win;

console.log('starting electron');

console.log(process.version);

app.on('ready', _ => {
    win = new BrowserWindow({
    width: 800,
    height: 600,
    });

    const template = [
        {
            label: 'Help',
            submenu: [{ // adds submenu
                    label: `About US`,
                }, {
                    type: 'separator' // horizontal line between submenu items
                },{
                    label: 'Quit',
                    role: 'quit' // closes app when clicked  

                }]
        },
        {
            label: 'Refresh', // Refreshes or reloads the page when clicked
            role: 'reload'
        },
        {
            label: 'ZoomIn', // zooms the page when clicked
            role : 'ZoomIn'
        }
    ];

    // const menu = Menu.buildFromTemplate (template); // sets the menu
    // Menu.setApplicationMenu (menu);

    win.loadURL('https://www.go237.com');    // loads this URL
});