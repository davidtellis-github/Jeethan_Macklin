"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export interface GallerySeries {
  title: string;
  count: number;
  image: string;
  alt: string;
  /** Optional clip that plays over the cover while the card is hovered or focused. */
  video?: string;
}

function SeriesCard({ item }: { item: GallerySeries }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    // play() rejects if pause() interrupts it before playback starts; that's expected.
    videoRef.current?.play().catch(() => {});
  };

  const stop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  };

  return (
    <a
      href="#work"
      className="group block"
      onPointerEnter={item.video ? start : undefined}
      onPointerLeave={item.video ? stop : undefined}
      onFocus={item.video ? start : undefined}
      onBlur={item.video ? stop : undefined}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 768px) 22vw, (min-width: 640px) 40vw, 62vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {item.video && (
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            onPlaying={() => setPlaying(true)}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
              playing ? "opacity-100" : "opacity-0",
            )}
          />
        )}
      </div>
      <p className="mt-5 text-center text-[13px] uppercase tracking-wide">{item.title}</p>
      <p className="mt-1 text-center text-[10px] uppercase tracking-wide text-white/70">
        {String(item.count).padStart(2, "0")} images
      </p>
    </a>
  );
}

export function GalleryCarousel({ series }: { series: GallerySeries[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 [scrollbar-width:none] md:scroll-px-10 md:gap-8 md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {series.map((item) => (
          <li key={item.title} className="w-[62vw] shrink-0 snap-start sm:w-[40vw] md:w-[22vw]">
            <SeriesCard item={item} />
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-end gap-3 px-6 md:px-10">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous series"
          className="grid size-11 place-items-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-black"
        >
          <ArrowLeft className="size-4" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next series"
          className="grid size-11 place-items-center rounded-full border border-white/60 transition-colors hover:bg-white hover:text-black"
        >
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
