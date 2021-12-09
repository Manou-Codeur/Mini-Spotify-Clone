const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

export const getPopularAlbums = async () => {
  const token = await getToken();
  const result = await fetch(`https://api.spotify.com/v1/browse/new-releases`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await result.json();
  return data;
};

export const getAlbum = async id => {
  const token = await getToken();
  const result = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await result.json();
  return data;
};

const getArtistId = async artist => {
  const token = await getToken();
  const result = await fetch(
    `https://api.spotify.com/v1/search?type=artist&q=${artist}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await result.json();
  return data.artists.items[0].id;
};

export const searchAlbums = async artist => {
  const token = await getToken();
  const artistId = await getArtistId(artist);
  const result = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await result.json();
  return data;
};

export const getRecentAlbums = async ids => {
  const token = await getToken();
  const result = await fetch(
    `https://api.spotify.com/v1/albums?ids=${ids.join()}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const data = await result.json();
  return data;
};
