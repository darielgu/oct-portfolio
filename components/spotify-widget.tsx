"use client";

import { useEffect, useState } from "react";

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

  const className = `w-full max-w-[23.5rem] rounded-md  bg-background/80 px-3 py-2 transition-all duration-300 micro-card ${
    dimmed ? "blur-[2px] opacity-40" : ""
  }`;

  if (loading) {
    return (
      <div className={className}>
        <p className="mt-1 text-xs text-muted-foreground">Loading music...</p>
      </div>
    );
  }

  if (!data?.available || !data.track) {
    return (
      <div className={className}>
        {data?.reason === "needs_auth" ? (
          <p className="mt-1 text-xs text-muted-foreground">
            Spotify setup not completed.
          </p>
        ) : data?.reason === "missing_credentials" ? (
          <p className="mt-1 text-xs text-muted-foreground">
            Missing Spotify client credentials.
          </p>
        ) : (
          <p className="mt-1 text-xs text-muted-foreground">
            Nothing recent to show.
          </p>
        )}
      </div>
    );
  }

  return (
    <a
      href={data.track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} group block hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/35`}
    >
      <div className="flex items-start gap-2.5">
        {data.track.albumImageUrl ? (
          <img
            src={data.track.albumImageUrl}
            alt={`${data.track.title} album art`}
            className="mt-0.5 h-9 w-9 rounded-sm object-cover border border-border/70 transition-transform duration-300 "
          />
        ) : null}
        <div className="min-w-0 flex-1 -mt-2">
          <div className="flex items-start justify-end gap-2">
            <div className="flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  data.track.isPlaying ? "bg-foreground" : "bg-muted-foreground"
                }`}
              />
              <span className="text-[10px] text-muted-foreground">
                {data.track.isPlaying ? "Now playing" : "Last played"}
              </span>
            </div>
          </div>
          <p className="truncate text-xs text-foreground">{data.track.title}</p>
          <p className="truncate text-xs text-muted-foreground">
            {data.track.artist}
          </p>
        </div>
      </div>
    </a>
  );
}
