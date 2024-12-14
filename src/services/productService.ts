import { productModel } from "../models/productModel";

export const getAllProducts = async ()=>{
    return await productModel.find();
}


export const seenInitialProducts = async ()=>{
    const products = [
        { title :"Dell laptop" , image : "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?uid=R168197637&semt=ais_hybrid" ,price : 15000 , stock : 100 },
    ];

    const existingProducts = await getAllProducts();
    
    if(existingProducts.length === 0) {
        await productModel.insertMany(products)
    } 


}