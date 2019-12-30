//npm install ws
const WebSocket = require('ws')

const wss = new WebSocket.Server({ 
  // port: 8000 
  port : process.env.WS_PORT || 8000
})

wss.on('connection', ws => {
  ws.on('message', data => {

    console.log('incoming data', data)

    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})

