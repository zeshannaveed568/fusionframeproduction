'use client';
import VideoUploadForm from "@/components/VideoUploadForm";

export default function UploadPage() {
  const categories = ['Wedding','Podcast','Real Estate','Food','YouTube','Reels','Music','Other'];
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-accent mb-6">Upload Media</h1>
        <VideoUploadForm categories={categories} dark />
      </div>
    </div>
  );
}