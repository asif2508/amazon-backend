const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const userRoute = require('./app/users/user.route')
const dbConnect = require('./db/dbConnect')

app.use(cors())
app.use(express.json())

dbConnect();


// users
app.use('/api/users', userRoute)



app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

