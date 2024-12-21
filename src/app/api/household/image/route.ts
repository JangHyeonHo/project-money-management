import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";
import { NextRequest, NextResponse } from "next/server";
import v1p4beta1 from "@google-cloud/vision";
import { google } from "@google-cloud/vision/build/protos/protos";


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
        const api_key = process.env.GOOGLE_VISION_APIKEY;

        const json = await req.json();

        const file = json.image

        // 구글 이미지 API 불러오기
        const { ImageAnnotatorClient } = v1p4beta1;

        // Instantiates a client
        const visionClient = new ImageAnnotatorClient({ apiKey: api_key });

        async function callAsyncBatchAnnotateImages() {

            // Construct request
            const request: google.cloud.vision.v1.IBatchAnnotateImagesRequest = {
                requests: [
                    {
                        image: { content: file },
                        features: [{ type: 'TEXT_DETECTION' }],
                    },
                ],
            };

            // Run request
            const [res] = await visionClient.batchAnnotateImages(request);

            if(res.responses){
                const response = res.responses[0]

                if(response.error !== null){
                    return response.error;
                }

                return response.fullTextAnnotation?.text;
            }
            return undefined;
        }

        const res = await callAsyncBatchAnnotateImages();

        return NextResponse.json({ message: "Household Image Read successfully", res }, { status: 200 });
    } catch (error) {
        console.error("Error deleting household:", error);
        return NextResponse.json({ error: "Failed to delete household" }, { status: 500 });
    }
}