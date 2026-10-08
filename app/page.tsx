import Link from "next/link";
import { type GallerySeries } from "@/components/gallery-carousel";
import { GallerySection } from "@/components/gallery-section";
import { FisheyeInfiniteGrid, type FisheyeGridItem } from "@/components/ui/fisheye-infinite-grid";

const PHOTOS: FisheyeGridItem[] = [
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&auto=format&fit=crop",
    alt: "Portrait with warm window light",
    title: "Window Light",
    meta: "Portrait",
  },
  {
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&q=80&auto=format&fit=crop",
    alt: "Long exposure city street",
    title: "City Trails",
    meta: "Urban",
  },
  {
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80&auto=format&fit=crop",
    alt: "Silhouetted figure at dusk",
    title: "Dusk Silhouette",
    meta: "Editorial",
  },
  {
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80&auto=format&fit=crop",
    alt: "Minimal landscape with soft tones",
    title: "Quiet Range",
    meta: "Landscape",
  },
  {
    image: "https://images.unsplash.com/photo-1633382148761-d56d55cee3cd?w=1200&q=80&auto=format&fit=crop",
    alt: "Black and white candid portrait",
    title: "Quiet Frame",
    meta: "Portrait",
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    alt: "Abstract motion color streaks",
    title: "Motion Blur",
    meta: "Experimental",
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
    alt: "Editorial shot with dramatic shadows",
    title: "Shadow Play",
    meta: "Editorial",
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80&auto=format&fit=crop",
    alt: "Soft candid on neutral background",
    title: "Soft Gaze",
    meta: "Portrait",
  },
];

const NAV_LEFT = [
  { label: "Work", href: "#work" },
  { label: "Series", href: "#series" },
  { label: "About", href: "#about" },
];

const NAV_RIGHT = [
  { label: "Prints", href: "#prints" },
  { label: "Journal", href: "#journal" },
];

// Placeholder series — swap in real titles, covers, counts and clips.
// Videos are free Mixkit stock clips.
const SERIES: GallerySeries[] = [
  {
    title: "Window Light",
    count: 12,
    image: PHOTOS[0].image,
    alt: PHOTOS[0].alt,
    video: "https://assets.mixkit.co/videos/4629/4629-720.mp4",
  },
  {
    title: "City Trails",
    count: 9,
    image: PHOTOS[1].image,
    alt: PHOTOS[1].alt,
    video: "https://assets.mixkit.co/videos/4401/4401-720.mp4",
  },
  {
    title: "Dusk",
    count: 20,
    image: PHOTOS[2].image,
    alt: PHOTOS[2].alt,
    video: "https://assets.mixkit.co/videos/4451/4451-720.mp4",
  },
  {
    title: "Quiet Range",
    count: 15,
    image: PHOTOS[3].image,
    alt: PHOTOS[3].alt,
    video: "https://assets.mixkit.co/videos/4075/4075-720.mp4",
  },
  {
    title: "Quiet Frame",
    count: 11,
    image: PHOTOS[4].image,
    alt: PHOTOS[4].alt,
    video: "https://assets.mixkit.co/videos/4348/4348-720.mp4",
  },
  {
    title: "Motion",
    count: 18,
    image: PHOTOS[5].image,
    alt: PHOTOS[5].alt,
    video: "https://assets.mixkit.co/videos/4231/4231-720.mp4",
  },
  {
    title: "Shadow Play",
    count: 14,
    image: PHOTOS[6].image,
    alt: PHOTOS[6].alt,
    video: "https://assets.mixkit.co/videos/3429/3429-720.mp4",
  },
  {
    title: "Soft Gaze",
    count: 10,
    image: PHOTOS[7].image,
    alt: PHOTOS[7].alt,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-[70] bg-black/40 px-6 backdrop-blur-md md:px-10">
        <nav className="flex items-center justify-between border-b border-white/25 py-5 text-[13px] font-medium uppercase tracking-wide">
          <ul className="hidden flex-1 items-center gap-8 md:flex">
            {NAV_LEFT.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-opacity hover:opacity-60">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="font-serif text-xl normal-case leading-none tracking-normal md:text-2xl"
          >
            Jeethan Macklin
          </Link>

          <div className="flex flex-1 items-center justify-end gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {NAV_RIGHT.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-opacity hover:opacity-60">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="hidden h-6 w-px bg-white/25 md:block" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=macklinjeethan505@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="relative h-svh w-full overflow-hidden">
        <FisheyeInfiniteGrid
          items={PHOTOS}
          theme="dark"
          variant="rounded"
          tileWidth={400}
          tileHeight={420}
          tileRadius={0}
          gap={64}
          lensStrength={0.18}
          pageScroll
          className="absolute inset-0"
          aria-label="Photography gallery. Drag to explore."
        />

        <div className="pointer-events-none absolute inset-0 z-[60] flex items-center justify-center px-6">
          <h1 className="font-display text-[clamp(3.25rem,10.5vw,10.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.045em] [text-shadow:0_2px_32px_rgba(0,0,0,0.5)]">
            <span className="block">Hello, I&rsquo;m</span>
            <span className="block pl-[1.25em]">Jeethan</span>
            <span className="block pl-[2.6em]">Macklin</span>
          </h1>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[60] grid grid-cols-3 items-end px-6 pb-5 text-[11px] uppercase leading-tight tracking-wide md:px-10 md:text-[13px]">
          <span>Jeethan Macklin</span>
          <span className="text-center">
            Portrait &amp; editorial
            <br />
            photographer
          </span>
          <span className="text-right">&copy;{new Date().getFullYear()}</span>
        </div>
      </section>

      <GallerySection series={SERIES} />

      <footer className="py-12 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Jeethan Macklin
      </footer>
    </div>
  );
}
