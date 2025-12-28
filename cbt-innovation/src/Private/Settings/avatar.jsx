import React, { useState } from "react";

export default function AvatarPage() {
  const [avatar, setAvatar] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Avatar</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
          {avatar ? <img src={avatar} alt="Avatar" className="w-full h-full object-cover"/> : null}
        </div>
        <input type="file" onChange={handleUpload} className="block"/>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800">
          Save Avatar
        </button>
      </div>
    </div>
  );
}
