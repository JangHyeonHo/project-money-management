import { getVercelOidcToken } from '@vercel/functions/oidc';
import { GoogleAuth } from 'google-auth-library';
import GetUserCookieFromSession from "@/app/[locale]/_actions/get-user-cookies";

import { NextRequest, NextResponse } from "next/server";
import v1p4beta1 from "@google-cloud/vision";
import { google } from "@google-cloud/vision/build/protos/protos";


const GCP_PROJECT_ID = process.env.GCP_PROJECT_ID;
const GCP_PROJECT_NUMBER = process.env.GCP_PROJECT_NUMBER;
const GCP_SERVICE_ACCOUNT_EMAIL = process.env.GCP_SERVICE_ACCOUNT_EMAIL;
const GCP_WORKLOAD_IDENTITY_POOL_ID = process.env.GCP_WORKLOAD_IDENTITY_POOL_ID;
const GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID =
    process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID;

const auth = new GoogleAuth({
    projectId: GCP_PROJECT_ID,
    credentials: {
        type: 'external_account',
        audience: `//iam.googleapis.com/projects/${GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: 'https://sts.googleapis.com/v1/token',
        service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${GCP_SERVICE_ACCOUNT_EMAIL}:generateAccessToken`,
        subject_token_supplier: {
            // Use the Vercel OIDC token as the subject token
            getSubjectToken: getVercelOidcToken,
        },
    },
})

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

        const json = await req.json();

        const file = json.image

        // 구글 이미지 API 불러오기
        const { ImageAnnotatorClient } = v1p4beta1;

        const visionClient = (process.env.NODE_ENV === 'development') ?
            new ImageAnnotatorClient({ apiKey: process.env.GOOGLE_VISION_APIKEY }) :
            new ImageAnnotatorClient({ auth: auth });

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

            if (res.responses) {
                const response = res.responses[0]

                if (response.error !== null) {
                    return response.error;
                }

                return response.fullTextAnnotation?.text;
            }
            return undefined;
        }

        const res = await callAsyncBatchAnnotateImages();

        return NextResponse.json({ message: "Household Image Read successfully", res }, { status: 200 });
    } catch (error) {
        console.error(`Error Household Image Read : ${error}`);
        return NextResponse.json({ error: "Failed to Household Image Read" }, { status: 500 });
    }
}