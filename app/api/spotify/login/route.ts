import { NextResponse } from "next/server";
import {
  getSpotifyAuthorizeUrl,
  hasSpotifyRefreshToken,
} from "@/lib/spotify";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  if (hasSpotifyRefreshToken()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const setupKey = process.env.SPOTIFY_SETUP_KEY;
  const requestUrl = new URL(request.url);
  const providedKey = requestUrl.searchParams.get("key");

  if (setupKey && providedKey !== setupKey) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const authUrl = getSpotifyAuthorizeUrl();

  if (!authUrl) {
    return NextResponse.json(
      { error: "Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET" },
      { status: 500 },
    );
  }

  return NextResponse.redirect(authUrl);
}
