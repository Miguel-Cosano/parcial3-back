require('./db/mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const {routerImage} = require('./routes/routerImage')
const {routerPuja} = require('./routes/routerPuja')
const {routerProducto} = require('./routes/routerProducto')
const {routerUsuario} = require('./routes/usuarioRoute')
const {routerCarbono} = require("./routes/routerCarbono");

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));


app.get('/', (req, res, next) => {
    res.send('App working!')
    next()
})

app.use(cors())

app.use('/upload', routerImage)
app.use('/producto', routerProducto)
app.use('/usuario', routerUsuario)

const port = 5001
app.listen(port, () => {
    console.log('Listening on port ' + port)
})