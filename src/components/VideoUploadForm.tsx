// 'use client';
// import { useState } from 'react';

// interface UploadFormProps {
//   categories: string[];
//   dark?: boolean;
// }

// export default function VideoUploadForm({ categories, dark }: UploadFormProps) {
//   const [video, setVideo] = useState<File | null>(null);
//   const [image, setImage] = useState<File | null>(null);
//   const [category, setCategory] = useState(categories[0]);
//   const [error, setError] = useState<string>('');

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!video) {
//       setError('Please select a video file.');
//       return;
//     }
//     const formData = new FormData();
//     formData.append('video', video);
//     if (image) formData.append('image', image);
//     formData.append('category', category);
//     const res = await fetch('/api/upload', { method: 'POST', body: formData });
//     const data = await res.json();
//     alert(`Uploaded: ${Object.keys(data).join(', ')}`);
//   };

//   const baseInputClasses = dark
//     ? 'w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg'
//     : 'w-full p-2 border bg-white text-black rounded-lg';

//   return (
//     <form onSubmit={onSubmit} className="space-y-5">
//       {error && <p className="text-red-500">{error}</p>}
//       <div>
//         <label className={`block mb-2 text-sm font-medium ${dark ? 'text-white' : 'text-black'}`}>Category</label>
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className={
//             dark
//               ? 'w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg'
//               : 'w-full p-2 border rounded'
//           }
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>{cat}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className={`block mb-2 text-sm font-medium ${dark ? 'text-white' : 'text-black'}`}>Video File</label>
//         <input
//           type="file"
//           accept="video/*"
//           className={baseInputClasses}
//           onChange={(e) => {
//             setError('');
//             if (e.target.files) setVideo(e.target.files[0]);
//           }}
//         />
//       </div>

//       <div>
//         <label className={`block mb-2 text-sm font-medium ${dark ? 'text-white' : 'text-black'}`}>Thumbnail Image (optional)</label>
//         <input
//           type="file"
//           accept="image/*"
//           disabled={!video}
//           className={[
//             baseInputClasses,
//             !video && 'opacity-50 cursor-not-allowed'
//           ].join(' ')}
//           onChange={(e) => e.target.files && setImage(e.target.files[0])}
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full py-3 text-center font-semibold rounded-lg bg-accent text-black hover:bg-yellow-400 transition disabled:opacity-50"
//         disabled={!video}
//       >
//         Upload
//       </button>
//     </form>
//   )
// }