export default function ProjectVideo({
  src,
  orientation,
}: {
  src: string;
  orientation: "portrait" | "landscape";
}) {
  const fill = orientation === "portrait" ? "object-contain" : "object-cover";

  return (
    <div className="relative aspect-video overflow-hidden border-b border-phosphor/30 bg-black">
      <span className="absolute left-2 top-2 z-10 border border-amber/60 bg-black/70 px-2 py-0.5 text-[10px] text-amber">
        [ VIDEO ]
      </span>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`h-full w-full bg-black ${fill}`}
      />
    </div>
  );
}