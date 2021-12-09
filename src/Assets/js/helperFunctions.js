export const formatAlbumReleaseDate = date => date.split("-")[0];

export const formatAlbumTracksCount = count =>
  `${count} song${count > 1 && "s"}`;

export const millisToMinutes = millis => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
