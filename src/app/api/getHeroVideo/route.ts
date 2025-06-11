import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../../lib/cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // resource identifier is folder + public_id (no extension)
  const publicId = "video/hero";

  // generate a secure URL for the video
  const videoUrl = cloudinary.url(publicId, {
    resource_type: "video",
    secure: true,
  });

  res.status(200).json({ url: videoUrl });
}
