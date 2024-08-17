import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationemail";
import { ApiResponse } from "@/types/ApiResponse";
export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({username:username ,otp:verifyCode}),
          });
        return{success:true,message:"verification Emailsend successfully"}
    } catch (emailerror) {
        console.log("error sending verification error",emailerror)
        return{success:false,message:"Failed to get message"}
    }
}