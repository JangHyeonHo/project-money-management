import prisma from "@/app/_utils/db";
import { compareSync } from "bcrypt";
import { type NextRequest, NextResponse } from "next/server";


//const saltRounds = 10;
/**
 * Login 처리
 * @param req 
 * @returns 
 */
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    //hash는 아이디 생성할 때 사용
    //const hashPwd = hashSync(data.user_password, saltRounds);

    const user = await prisma.user.findFirst({
        select:{
            id:true,
            user_email:true,
            user_first_name:true,
            user_last_name:true,
            user_password:true,
        },
        where:{
            user_email:data.user_email,
        }
    });

    if(user){
        if(compareSync(data.user_password, user.user_password)){
            user.user_password = "";
            return NextResponse.json(user);
        }
    }

    return NextResponse.json(null);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error fetching datas" }, { status: 500 });
  }
}