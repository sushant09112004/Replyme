import { Message } from "@/app/model/user";

export interface ApiResponse{
    success :boolean;
    message:string;
    isAcceptingMessage?:boolean;
    messages?:Array<Message>
}