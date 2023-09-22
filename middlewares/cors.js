import cors from 'cors'

//exportar la funcion corsMiddleware
export const corsMiddleware = () => {
  return cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
}