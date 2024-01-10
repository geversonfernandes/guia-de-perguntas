import express from 'express'
import bodyParser from 'body-parser'
import { connection } from './database/database.js'
import { Question } from './database/question.js'

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
    Question.findAll({raw: true}).then((questions) => {
			res.render('index', {
				questions
			})
    })
})

app.get('/ask', (req, res) => {
	res.render('ask')
})

app.post('/save-ask', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    Question.create({
        title,
        description
    }).then(() => {
        res.redirect('/')
    })
})

app.listen(8080, () => {
    console.log('App running...')
})	
