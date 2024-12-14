import express from "express" ;
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";


const app = express();
const port = 3001 ;
app.use(express.json());

mongoose
.connect("mongodb://localhost:27017/ecommers")
.then(()=> console.log("mongo connecte!"))
.catch((err)=> console.log("faild to connecte!",err));

app.use('/user',userRoute);


app.listen(port ,()=>{
    console.log(`server is running at http://localhost:${port} `)
})

