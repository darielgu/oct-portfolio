const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const SPOTIFY_SCOPES = [
  "user-read-currently-playing",
  "user-read-recently-played",
];

interface SpotifyArtist {
  name: string;
}

interface SpotifyImage {
  url: string;
}

interface SpotifyAlbum {
  images?: SpotifyImage[];
}

interface SpotifyExternalUrls {
  spotify?: string;
}

interface SpotifyApiTrack {
  name?: string;
  artists?: SpotifyArtist[];
  album?: SpotifyAlbum;
  external_urls?: SpotifyExternalUrls;
}

interface SpotifyNowPlayingResponse {
  is_playing?: boolean;
  item?: SpotifyApiTrack;
}

interface SpotifyRecentItem {
  track?: SpotifyApiTrack;
  played_at?: string;
}

interface SpotifyRecentResponse {
  items?: SpotifyRecentItem[];
}

interface SpotifyTokenResponse {
  access_token?: string;
  refresh_token?: string;
}

export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  songUrl: string;
  albumImageUrl: string | null;
  playedAt: string | null;
}

interface SpotifyEnv {
  clientId: string;
  clientSecret: string;
  refreshToken: string | null;
  redirectUri: string;
}

function getSpotifyEnv(): SpotifyEnv | null {
  const clientId = process.env.SPOTIFY_CLIENT_ID ?? null;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? null;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN ?? null;
  const redirectUri =
    process.env.SPOTIFY_REDIRECT_URI ??
    "http://127.0.0.1:3000/api/spotify/callback";

  if (!clientId || !clientSecret) {
    return null;
  }

  return {
    clientId,
    clientSecret,
    refreshToken,
    redirectUri,
  };
}

export function hasSpotifyClientCredentials() {
  return Boolean(getSpotifyEnv());
}

export function hasSpotifyRefreshToken() {
  const spotifyEnv = getSpotifyEnv();
  return Boolean(spotifyEnv?.refreshToken);
}

export function getSpotifyAuthorizeUrl() {
  const spotifyEnv = getSpotifyEnv();
  if (!spotifyEnv) {
    return null;
  }
  const setupKey = process.env.SPOTIFY_SETUP_KEY ?? null;

  const params = new URLSearchParams({
    response_type: "code",
    client_id: spotifyEnv.clientId,
    scope: SPOTIFY_SCOPES.join(" "),
    redirect_uri: spotifyEnv.redirectUri,
  });
  if (setupKey) {
    params.set("state", setupKey);
  }

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export async function exchangeCodeForRefreshToken(code: string) {
  const spotifyEnv = getSpotifyEnv();
  if (!spotifyEnv) {
    return null;
  }

  const basic = Buffer.from(
    `${spotifyEnv.clientId}:${spotifyEnv.clientSecret}`,
  ).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: spotifyEnv.redirectUri,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as SpotifyTokenResponse;
  return {
    accessToken: data.access_token ?? null,
    refreshToken: data.refresh_token ?? null,
  };
}

async function getAccessTokenFromRefreshToken(refreshToken: string) {
  const spotifyEnv = getSpotifyEnv();
  if (!spotifyEnv) {
    return null;
  }

  const basic = Buffer.from(
    `${spotifyEnv.clientId}:${spotifyEnv.clientSecret}`,
  ).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as SpotifyTokenResponse;
  return data.access_token ?? null;
}

function mapTrack(
  track: SpotifyApiTrack,
  isPlaying: boolean,
  playedAt: string | null,
): SpotifyTrack {
  return {
    isPlaying,
    title: track?.name ?? "Unknown track",
    artist:
      (track?.artists ?? []).map((artist) => artist.name).join(", ") ||
      "Unknown artist",
    songUrl: track?.external_urls?.spotify ?? "https://open.spotify.com",
    albumImageUrl:
      track?.album?.images?.[2]?.url ?? track?.album?.images?.[0]?.url ?? null,
    playedAt,
  };
}

export async function getSpotifyNowOrLastPlayed(): Promise<SpotifyTrack | null> {
  const spotifyEnv = getSpotifyEnv();

  if (!spotifyEnv?.refreshToken) {
    return null;
  }

  const accessToken = await getAccessTokenFromRefreshToken(spotifyEnv.refreshToken);
  if (!accessToken) {
    return null;
  }

  const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (nowPlayingResponse.ok && nowPlayingResponse.status !== 204) {
    const data = (await nowPlayingResponse.json()) as SpotifyNowPlayingResponse;
    if (data.item) {
      return mapTrack(data.item, Boolean(data.is_playing), null);
    }
  }

  const recentlyPlayedResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (!recentlyPlayedResponse.ok) {
    return null;
  }

  const recentData = (await recentlyPlayedResponse.json()) as SpotifyRecentResponse;
  const item = recentData.items?.[0];

  if (!item?.track) {
    return null;
  }

  return mapTrack(item.track, false, item.played_at ?? null);
}
