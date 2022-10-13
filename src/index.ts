require('dotenv').config()
import express, { Request, Response } from 'express'

import App from './lib/app.lib'
import S3Route from './routes/s3.route'
import Environment from './lib/environment.lib'

App.get('/', (req: Request, res: Response) => {
  res.send('Backend server is online.')
})

App.listen(Environment.PORT, () => {
  console.log(`Server is running in port ${Environment.PORT}`)
})

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use('/api/s3', S3Route)
