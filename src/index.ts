import express from "express" ;
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seenInitialProducts } from "./services/productService";
import productRoutes from "./routes/productRoutes";


const app = express();
const port = 3001 ;
app.use(express.json());

mongoose
.connect("mongodb://localhost:27017/ecommers")
.then(()=> console.log("mongo connecte!"))
.catch((err)=> console.log("faild to connecte!",err));

seenInitialProducts()
app.use('/user',userRoute);
app.use('/products' , productRoutes )


app.listen(port ,()=>{
    console.log(`server is running at http://localhost:${port} `)
})

