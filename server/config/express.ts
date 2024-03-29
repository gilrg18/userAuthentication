import express from "express";
import routes from '../routes';

export function app(): express.Application {

  const app = express() 
  app.use(express.json())
  app.use('/', routes)

  return app
}
