'use server'

import { sessionOptions, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function LogoutAction(){
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
    session.destroy();
    console.log("로그아웃 완료");
    redirect("/signin");
};
