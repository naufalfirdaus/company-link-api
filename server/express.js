import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes/IndexRoute'
import models from './models/index'
import SwaggerUI from 'swagger-ui-express'
import SwaggerDocument from './swagger/swagger.json'

const app = express()

// parse body params and attache them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// use helmet spy bisa dikenali SEO
app.use(helmet())
// secure apps by setting various HTTP headers
app.use(compress())
// enable CORS - Cross Origin Resource Sharing
app.use(cors());




const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


app.use("/minpro/", (req, res) => {
    res.send("Hello HR-Fullstack JS")
});

// #middleware
app.use(async (req, res, next) => {
    req.context = {models};
    next();
});

app.use('/api/users/', routes.userRoute);
app.use('/api/manga/', routes.mangaRoute);
app.use('/api/macha/', routes.machaRoute);
app.use('/api/maca/', routes.macaRoute);
app.use('/api/maim/', routes.maimRoute);
app.use('/api/order/', routes.orderRoute);
app.use('/api/lite/', routes.liteRoute);
app.use('/api/shop/', routes.shopRoute);
app.use('/api/docs', SwaggerUI.serve,SwaggerUI.setup(SwaggerDocument))

// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})

export default app