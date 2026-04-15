"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  songUrl: string;
  albumImageUrl?: string | null;
}

interface SpotifyResponse {
  available: boolean;
  track?: SpotifyTrack;
}

export function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyResponse | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadSpotify() {
      try {
        const response = await fetch("/api/spotify", { cache: "no-store" });
        const payload = (await response.json()) as SpotifyResponse;
        if (!cancelled) {
          setData(payload);
        }
      } catch {
        if (!cancelled) {
          setData({ available: false });
        }
      }
    }

    loadSpotify();
    const intervalId = setInterval(loadSpotify, 30000);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, []);

  const hasTrack = Boolean(data?.available && data.track);
  const track = data?.track;

  return (
    <div className="flex justify-end [perspective:900px]">
      <AnimatePresence mode="wait" initial={false}>
        {hasTrack && track ? (
          <motion.a
            key={track.songUrl}
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-[15rem] items-center justify-end gap-2 text-muted-foreground transition-opacity hover:opacity-75"
            title={`${track.title} — ${track.artist}`}
            initial={{ rotateX: -90, opacity: 0, y: -4 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 90, opacity: 0, y: 4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "50% 0%" }}
          >
            <span className="shrink-0">now playing:</span>
            <span className="block truncate text-right">{track.title}</span>
            {track.albumImageUrl ? (
              <img
                src={track.albumImageUrl}
                alt={`${track.title} album art`}
                className="h-5 w-5 shrink-0 rounded-sm border border-border/60 object-cover"
              />
            ) : null}
          </motion.a>
        ) : (
          <motion.p
            key="spotify-fallback"
            className="text-muted-foreground"
            initial={{ rotateX: -90, opacity: 0, y: -4 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 90, opacity: 0, y: 4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "50% 0%" }}
          >
            spotify
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
