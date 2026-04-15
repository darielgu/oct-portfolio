"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  songUrl: string;
  albumImageUrl: string | null;
  playedAt: string | null;
}

interface SpotifyResponse {
  available: boolean;
  track?: SpotifyTrack;
  reason?: "missing_credentials" | "needs_auth" | "no_recent" | "error";
}

interface SpotifyWidgetProps {
  dimmed?: boolean;
}

export function SpotifyWidget({ dimmed = false }: SpotifyWidgetProps) {
  const [loading, setLoading] = useState(true);
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
      } finally {
        if (!cancelled) {
          setLoading(false);
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

  const className = `w-full max-w-[28rem] border border-border/80 bg-background/50 px-3 py-3 transition-all duration-300 ${
    dimmed ? "blur-[2px] opacity-40" : ""
  }`;

  const feedbackMessage =
    data?.reason === "needs_auth"
      ? "Spotify setup not completed."
      : data?.reason === "missing_credentials"
        ? "Missing Spotify client credentials."
        : "Nothing recent to show.";

  return (
    <AnimatePresence mode="wait" initial={false}>
      {loading ? (
        <motion.div
          key="spotify-loading"
          initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={className}
        >
          <p className="text-muted-foreground">loading music...</p>
        </motion.div>
      ) : !data?.available || !data.track ? (
        <motion.div
          key="spotify-empty"
          initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={className}
        >
          <p className="text-muted-foreground">
            {feedbackMessage}
          </p>
        </motion.div>
      ) : (
        <motion.a
          key={`spotify-track-${data.track.songUrl}`}
          initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          href={data.track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} micro-link micro-item block focus-visible:outline-none`}
        >
          <div className="flex items-start gap-2.5">
            {data.track.albumImageUrl ? (
              <img
                src={data.track.albumImageUrl}
                alt={`${data.track.title} album art`}
                className="mt-0.5 h-9 w-9 rounded-sm object-cover border border-border/70"
              />
            ) : null}
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-start justify-end gap-2">
                <div className="flex items-center gap-1.5 pt-1">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      data.track.isPlaying
                        ? "bg-foreground"
                        : "bg-muted-foreground"
                    }`}
                  />
                  <span className="text-muted-foreground">
                    {data.track.isPlaying ? "Now playing" : "Last played"}
                  </span>
                </div>
              </div>
              <p className="truncate text-foreground">{data.track.title}</p>
              <p className="truncate text-muted-foreground">{data.track.artist}</p>
            </div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
