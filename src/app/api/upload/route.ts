// import { NextRequest, NextResponse } from "next/server";
// import cloudinary from "../../../lib/cloudinary";

// async function uploadResource(
//   blob: Blob,
//   resourceType: "image" | "video",
//   folder: string
// ) {
//   return new Promise<any>(async (resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { folder, resource_type: resourceType },
//       (err, res) => (err ? reject(err) : resolve(res))
//     );
//     const buffer = Buffer.from(await blob.arrayBuffer());
//     stream.end(buffer);
//   });
// }

// export async function POST(request: NextRequest) {
//   const form = await request.formData();
//   const videoBlob = form.get("video") as Blob | null;
//   const imageBlob = form.get("image") as Blob | null;
//   const category = form.get("category") as string;
//   const folder = `portfolio/${category}`;
//   const result: Record<string, any> = {};
//   try {
//     if (videoBlob)
//       result.video = await uploadResource(videoBlob, "video", folder);
//     if (imageBlob)
//       result.image = await uploadResource(imageBlob, "image", folder);
//     return NextResponse.json(result);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.error();
//   }
// }
