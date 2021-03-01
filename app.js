const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hey TEXAS')
})

app.listen(port, () => {
    console.log(`ex app listening at http://localhost:${port}`)
})