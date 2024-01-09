import express from 'express'
import bodyParser from 'body-parser'
import { connection } from './database/database.js'

connection
.authenticate()
.then(() => {
    console.log('Conexão realizada com sucesso')
}).catch((err) => {
    console.log(err)
})

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
res.render('index')
})

app.get('/ask', (req, res) => {
	res.render('ask')
})

app.post('/save-ask', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    res.send({title, description})
})

app.listen(8080, () => {
    console.log('App running...')
})	
