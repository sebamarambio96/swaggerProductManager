const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      description:
        'A simple CRUD API application made with Express and documented with Swagger',
      version: '1.0.0',
    },
  },
  apis: ['./docs/**/*.yaml'],
}

const specs = swaggerJsdoc(options)

// const { inspect } = require('node:util')
// console.log(inspect(specs, false, 10))

//-------------------------------------------------------------------

const express = require('express')

const app = express()

app.get('/api/products', (req, res, next) => {
  res.json([])
})

//-------------------------------------------------------------------

const swaggerUi = require('swagger-ui-express')
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs))

//-------------------------------------------------------------------

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Documentación disponible en http://localhost:${PORT}/api/docs`)
})
