const { app, BrowserWindow } = require('electron')
if(process.env.MESA_GL_VERSION_OVERRIDE!="3.00"){
    process.env.MESA_GL_VERSION_OVERRIDE="3.00";
}
const createWindow = () => {
    const win = new BrowserWindow({
      width: 1280,
      height: 720,
    })
  
    win.loadURL('https://discord.rovelstars.com')
  }

  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  });

  const client = require('./discord.js')('740945348364730519');

client.on('join', (secret) => {
  console.log('we should join with', secret);
});

client.on('spectate', (secret) => {
  console.log('we should spectate with', secret);
});

client.on('joinRequest', (user) => {
  if (user.username) {
    client.reply(user, 'YES');
  } else {
    client.reply(user, 'IGNORE');
  }
});

client.on('connected', () => {
  console.log('connected!');

  client.updatePresence({
    state: 'Viewing Bots',
    details: 'Rovel Bot',
    startTimestamp: new Date(),
    largeImageKey: 'logo-512',
    smallImageKey: 'plus',
    partyId: 'rovelstars',
    partySize: 1,
    partyMax: 100,
    matchSecret: 'sus',
    joinSecret: 'boop',
    spectateSecret: 'sniff',
  });
});

process.on('unhandledRejection', console.error);