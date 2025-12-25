import { Video, Mic, PhoneOff } from "lucide-react";

export default function VideoSessionPage() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Video Area */}
      <div className="flex-1 flex items-center justify-center">
        <p>Video Stream</p>
      </div>

      {/* Controls */}
      <div className="p-4 flex justify-center gap-6 bg-gray-900">
        <Mic />
        <Video />
        <PhoneOff className="text-red-500" />
      </div>
    </div>
  );
}