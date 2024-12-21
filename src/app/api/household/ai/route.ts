import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import z from "zod";

// POST 요청 처리
export async function POST(req: NextRequest) {
    try {
        // 세션 정보 확인
        const userInfo = await GetUserCookieFromSession();
        //console.log(userInfo);

        if (!userInfo.isLogin) {
            throw Error("not Signin");
        }

        //API KEY
        const api_key = process.env.OPENAPI_APIKEY;

        const openai = new OpenAI({
            apiKey: api_key,
        });

        const json = await req.json();

        const categories = json.categories;
        const assets = json.assets;
        const text = json.text;
        const locale = json.locale;

        const HouseholdItems = z.object({
            asset: z.string(),
            type: z.string(),
            category: z.number(),
            householdName: z.string(),
            amount: z.number(),
            comment: z.string(),
            issueDate: z.string(),
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [
                {
                    role: "system", content: "I'm going to analyze this image_text and make a household register, " +
                        "so please return the response_format of the analysis to the way I present it. " +
                        "'type' is 'I' for income, 'E' for expenditure, " +
                        "'category' is the 'key' of user category that best matches the category name set by the user, " +
                        "But If a subcategory exists, please mark the category as the 'key' of the subcategory that best matches the subcategory name, "+
                        "'asset' is the 'key' of user asset that best matches the asset name set by the user, " +
                        "'householdName' is 'image_text' title name. Enter the word in 'image_text'. "+
                        "'account' is the total amount of income/expenditure after reading the analyzed text. " + 
                        "'comment' is a summary of 'image_text' in locale language of 400 characters or less. " + 
                        "'issueDate' is If there is a processed date in the 'image_text', please provide that date and if there is no, please provide it as today's date (format 'YYYY-MM-DD')"
                },
                { role: "user", content: `1. user category : [ ${categories} ] 2. user asset : [${assets}] 3. image_text : [${text}] 4. locale : [${locale}]` },
            ],
            response_format: zodResponseFormat(HouseholdItems, "household")
        });

        //console.log(completion);

        const message = completion.choices[0].message;

        let res = {};

        if (message.content !== null) {
            res = JSON.parse(message.content);
            console.log(res);
        }

        return NextResponse.json({ message: "Household Image Read successfully", res }, { status: 200 });
    } catch (error) {
        console.error("Error deleting household:", error);
        return NextResponse.json({ error: "Failed to delete household" }, { status: 500 });
    }
}