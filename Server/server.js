import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection  from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
////////////////////////cors should be kept before the routing 
// cors means the (cross orign resource sharing) which is an http-header based on machenism that allows a server to indicate any origin (domain,scheme,or port) other than its own from which a browser should permit loading resources.
app.use('/upload',router)



DBConnection();


app.listen(process.env.PORT, () => {console.log(`server listening on ${process.env.PORT}`)});