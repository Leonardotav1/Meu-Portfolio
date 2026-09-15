"use client";

import { useEffect, useRef, useState } from "react";

type VideoSize = { width: number; height: number };

export default function ProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [size, setSize] = useState<VideoSize | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const detect = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        setSize({ width: video.videoWidth, height: video.videoHeight });
      }
    };

    video.addEventListener("loadedmetadata", detect);
    video.addEventListener("loadeddata", detect);
    video.addEventListener("canplay", detect);
    const fallback = window.setTimeout(detect, 1500);

    return () => {
      video.removeEventListener("loadedmetadata", detect);
      video.removeEventListener("loadeddata", detect);
      video.removeEventListener("canplay", detect);
      window.clearTimeout(fallback);
    };
  }, [src]);

  const isPortrait = size !== null && size.height > size.width;

  if (isPortrait) {
    return (
      <div className="img-placeholder relative flex aspect-video items-center justify-center overflow-hidden border-b border-phosphor/30">
        <div
          className="relative max-h-52 border border-phosphor/50 bg-black shadow-[0_0_24px_rgba(57,255,110,0.15)]"
          style={{ aspectRatio: `${size!.width} / ${size!.height}` }}
        >
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full max-h-52 bg-black object-contain"
          />
          <span className="absolute left-1.5 top-1.5 border border-amber/60 bg-black/70 px-1.5 py-0.5 text-[9px] text-amber">
            [ VIDEO ]
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden border-b border-phosphor/30 bg-black">
      <span className="absolute left-2 top-2 z-10 border border-amber/60 bg-black/70 px-2 py-0.5 text-[10px] text-amber">
        [ VIDEO ]
      </span>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full bg-black object-cover"
      />
    </div>
  );
}