const redirectUri = "https://cmpt-276-fall-2024.github.io/Euterpe/";
const authEndpoint = "https://accounts.spotify.com/authorize";

//const clientId = "7fcfb8b43cfa49c395412083cf51bf27";
const clientId = "a2db107627e644a3b34c1ce7ed8a1ea8";
// replace your clientID to the above, then you can log in Euterpe succcessly. Don't delete other's clientId, make them to comment.

const scopesArray = [
  "user-modify-playback-state",
  "ugc-image-upload",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-top-read",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
];
const scopes = scopesArray.join(" ");
console.log(scopes, "scopes");

const loginUrl = `${authEndpoint}?
client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=${scopes}
&response_type=token
&scope=${scopes}
&show_dialog=true`;
