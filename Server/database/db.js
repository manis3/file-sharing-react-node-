import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection =  async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_DB_CONNECT}/FileUpload`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
       console.log('DB connnected successfully');

    } 
    catch(err){
        console.error("Error while connecting to Database",err.message);
    }
}
export default DBConnection;