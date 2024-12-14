import { userModel } from "../models/usersModels";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


interface RegisterParams {
    firstName : string;
    lastName : string;
    email : string ;
    password: string;
};

export const register = async ({firstName , lastName , email , password}: RegisterParams)=>{
    const findUser = await userModel.findOne({email});
    if(findUser){
        return {data:"user is exists!" , statusCode: 400}
    };

const hashedPassword =await bcrypt.hash(password,10)
    const newUser = new userModel({firstName , lastName , email , password : hashedPassword});
    await newUser.save();
    return {data:generateJWT({lastName , firstName}) , statusCode: 200};
};

interface loginUser {
    email: string;
    password : string;
}

export const login = async ({email , password}:loginUser)=>{
const findUser = await userModel.findOne({email});
if(!findUser){
    return {data:"Incorrect email or passord!" , statusCode: 400};
}
const passwordMatc = await bcrypt.compare(password, findUser.password);
if(passwordMatc){
    return {data : generateJWT({email , firstName:findUser.firstName , lastName:findUser.lastName}) , statusCode: 200};
};
return {data:"Incorrect email or passord!" , statusCode: 400};
};

const generateJWT = (data:any)=>{
    return jwt.sign(data,"tF=`&YHh$mF~PEvug}WWxZ0T`<ks>G})V{(xDz-sH.vP@Xi#0x3X8hoeu0wK!pi&xqsNbbeF5ra0IslYrmgxlcMDDfr8HD7" , )
}