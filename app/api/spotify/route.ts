import { NextResponse } from "next/server";
import {
  getSpotifyNowOrLastPlayed,
  hasSpotifyClientCredentials,
  hasSpotifyRefreshToken,
} from "@/lib/spotify";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    if (!hasSpotifyClientCredentials()) {
      return NextResponse.json({
        available: false,
        reason: "missing_credentials",
      });
    }

    if (!hasSpotifyRefreshToken()) {
      return NextResponse.json({
        available: false,
        reason: "needs_auth",
      });
    }

    const track = await getSpotifyNowOrLastPlayed();

    if (!track) {
      return NextResponse.json({
        available: false,
        reason: "no_recent",
      });
    }

    return NextResponse.json({
      available: true,
      track,
    });
  } catch {
    return NextResponse.json({
      available: false,
      reason: "error",
    });
  }
}
