import { cn } from "@/lib/utils";
import type React from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  children?: React.ReactNode;
  className: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  children,
  className,
}) => {
  return (
    <div
      className={cn("relative w-screen h-screen overflow-hidden", className)}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default VideoBackground;
