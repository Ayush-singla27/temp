const express = require('express')
const app = express()
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

router.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') next('route')
  else next()
}, (req, res, next) => {
  res.render('regular')
})

router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

app.use('/', router)


// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// app.get('/a', (req, res) => {
//     res.send('hello world a')
//   })

// app.get('/b', (req, res) => {
//     res.send('hello world b')
// })

// app.get('/c', (req, res) => {
//     res.send('hello world c')
//  })

app.listen(3000)