const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const systemDateString = new Date().toLocaleString('pl-PL', {timeZone: userTimeZone})
    let ipInfo = `Twój adres IP to: ${ipAddress}`
    let dateInfo = ''
    if(req.headers?.host.includes('localhost')) {
        dateInfo = `
          Twoja strefa czasowa to: ${userTimeZone}<br/>
          Twój czas systemowy to: ${systemDateString}<br/>
        `
    }
  res.send(dateInfo.length > 0 ? `${ipInfo} <br/> ${dateInfo}` : ipInfo)
})

app.listen(3333, '0.0.0.0')

console.log(`Kontener uruchomiony w dniu ${new Date().toLocaleString('pl-PL')}`)
console.log('Autorem serwera jest Daniel Chutkowski')
console.log('Serwer nasłuchuje na porcie 3333')
