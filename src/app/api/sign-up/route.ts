import dbConnect from "@/lib/dbConnection";
import UserModel from "@/app/model/user";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POSt(request:Request) {
    await dbConnect()
    try {
        
    } catch (error) {
        console.log("error in the veification of user",error)
        return Response.json(
            {
                success:false,
                message:"error in registration"
        
            }
        )
    }
}