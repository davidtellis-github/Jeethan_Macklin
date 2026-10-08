"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { GalleryCarousel, type GallerySeries } from "@/components/gallery-carousel";

export function GallerySection({ series }: { series: GallerySeries[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Show the heading while most of the carousel is in view, and hide it again
    // when it scrolls away so the fade replays on every pass.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setRevealed(entry.isIntersecting);
      },
      { threshold: 0.6 },
    );
    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="flex min-h-svh scroll-mt-16 flex-col justify-center pb-24 pt-32 md:pb-36 md:pt-44">
      <div className="flex items-end justify-between border-b border-white/25 px-6 pb-6 font-display font-light uppercase leading-none tracking-[-0.045em] md:px-10">
        <span
          className={cn(
            "text-[clamp(3.5rem,9vw,8.5rem)] transition-[opacity,translate] duration-1000 ease-out motion-reduce:transition-none",
            revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          {String(series.length).padStart(2, "0")}
        </span>
        <h2
          className={cn(
            "text-[clamp(3.5rem,9vw,8.5rem)] transition-[opacity,translate] delay-150 duration-1000 ease-out motion-reduce:transition-none",
            revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          Gallery
        </h2>
      </div>

      <div ref={carouselRef} className="mt-16 md:mt-24">
        <GalleryCarousel series={series} />
      </div>
    </section>
  );
}
