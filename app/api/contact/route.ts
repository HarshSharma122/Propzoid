import dbConnect from "@/lib/db";
import CONTACT from "@/models/contact.model/contact.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req:NextRequest)=>
{
    try {
        await dbConnect();
        const data = await req.json();

        await CONTACT.create(data);

        return NextResponse.json({msg:"SuccessFully saved to DB"}, {status:200});



    } catch (error) {
        
        return NextResponse.json({msg:"Server Error!"}, {status:500});
        
    }
}