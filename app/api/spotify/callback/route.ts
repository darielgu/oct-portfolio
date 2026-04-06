import { NextResponse } from "next/server";
import {
  exchangeCodeForRefreshToken,
  hasSpotifyRefreshToken,
} from "@/lib/spotify";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  if (hasSpotifyRefreshToken()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const state = searchParams.get("state");
  const setupKey = process.env.SPOTIFY_SETUP_KEY;

  if (setupKey && state !== setupKey) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (error) {
    return new NextResponse(`Spotify auth failed: ${error}`, {
      status: 400,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  if (!code) {
    return new NextResponse("Missing authorization code from Spotify.", {
      status: 400,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const tokenData = await exchangeCodeForRefreshToken(code);

  if (!tokenData?.refreshToken) {
    return new NextResponse(
      "Could not exchange authorization code for refresh token.",
      {
        status: 400,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      },
    );
  }

  const body = [
    "Spotify auth complete.",
    "",
    "Add this line to your .env:",
    `SPOTIFY_REFRESH_TOKEN=${tokenData.refreshToken}`,
    "",
    "Then restart your Next.js server.",
  ].join("\n");

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
