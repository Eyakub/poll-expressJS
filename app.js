const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const pollController = require('./pollController')

const app = express()

app.set('view engine', 'ejs')

// for middleware purpose
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// route handle
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/create', pollController.createPollGetController)
app.post('/create', pollController.createPollPostController)


mongoose.connect('mongodb://localhost:27017/express-cc', {useNewUrlParser: true})
.then(()=> {
  app.listen(4545, ()=> {
    console.log('Application is ready to serve on port 4545')
  })
})
.catch(e => {
  console.log(e)
})
