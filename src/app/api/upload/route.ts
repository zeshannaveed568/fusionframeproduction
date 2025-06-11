// import { NextRequest, NextResponse } from "next/server";
// import cloudinary from "../../../lib/cloudinary";

// export async function POST(request: NextRequest) {
//   const form = await request.formData();
//   const file = form.get("file") as Blob;
//   const category = form.get("category") as string;
//   try {
//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     const result = await new Promise<any>((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: `portfolio/${category}` },
//         (err, res) => {
//           if (err) reject(err);
//           else resolve(res);
//         }
//       );
//       stream.end(buffer);
//     });
//     return NextResponse.json(result);
//   } catch (error) {
//     return NextResponse.error();
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import cloudinary from "../../../lib/cloudinary";

// export async function POST(request: NextRequest) {
//   const form = await request.formData();
//   const file = form.get("file") as Blob;
//   const category = form.get("category") as string;

//   try {
//     const result = await new Promise<any>(async (resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         {
//           folder: `portfolio/${category}`,
//           resource_type: "video", // specify video upload
//         },
//         (err, res) => {
//           if (err) return reject(err);
//           resolve(res);
//         }
//       );
//       const buffer = Buffer.from(await file.arrayBuffer());
//       stream.end(buffer);
//     });
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Upload error:", error);
//     return NextResponse.error();
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../lib/cloudinary";

async function uploadResource(
  blob: Blob,
  resourceType: "image" | "video",
  folder: string
) {
  return new Promise<any>(async (resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: resourceType },
      (err, res) => (err ? reject(err) : resolve(res))
    );
    const buffer = Buffer.from(await blob.arrayBuffer());
    stream.end(buffer);
  });
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const videoBlob = form.get("video") as Blob | null;
  const imageBlob = form.get("image") as Blob | null;
  const category = form.get("category") as string;
  const folder = `portfolio/${category}`;
  const result: Record<string, any> = {};
  try {
    if (videoBlob)
      result.video = await uploadResource(videoBlob, "video", folder);
    if (imageBlob)
      result.image = await uploadResource(imageBlob, "image", folder);
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
