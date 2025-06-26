const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const userRoute = require('./app/users/user.route')
const productRoute = require("./app/products/Product.routes")
const categoryRoute = require("./app/category/category.routes")
const dbConnect = require('./db/dbConnect')
const path = require('path')
app.use(cors())
app.use(express.json())

dbConnect();


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// users
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/category', categoryRoute)



app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

