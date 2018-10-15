import bodyParser from 'body-parser'

const setGlobalMiddleware = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
}

export default setGlobalMiddleware
