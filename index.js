const express = require('express')
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors')
const app = express()
const port = 3000

const { connectDB } = require('./configs/connect_db')
connectDB()

app.use(express.json()).use(morgan('dev'))
app.use(cors({ origin: '*' }))

readdirSync('./routes').map((r) => app.use(require('./routes/' + r)))

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})
