let express = require('express')
let userRouter = require('./router/userRouter')
let app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// handle routes
app.use('/user', userRouter)

// error handle
app.use((req, res, next) => {
  console.log('page not found')
})

app.listen(5000, () => {
  console.log('server listening port 5000')
})
