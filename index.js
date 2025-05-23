const express = require('express')
const app = express()
const port = 3000
const productRoute = require('./routes/productRoute')
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors')
const { connectDB } = require('./configs/connect_db')

connectDB()
app.use(express.json()).use(morgan('dev'))
app.use(cors({origin: '*'}))

//app.use(productRoute)
readdirSync('./routes').map((r)=>app.use(require('./routes/' + r)))

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})
