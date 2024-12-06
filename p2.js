document.addEventListener("DOMContentLoaded", async () => {
  const soundAuraButton = document.getElementById("soundAuraButton");
  const profileButton = document.getElementById("profileButton");
  const songList = document.getElementById("songList");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }
  const songs = [];

  // Use the axios instance to make a GET request
  const res = await window.axiosInstance.get(
    `/artists/0TnOYISbd1XYRBk9myaseg/top-tracks`
  );

  const data = res.data;
  console.log(data, "data");
  const tracks = data.tracks;
  console.log(tracks, "tracks");
  // get the first from tracks，album，images

  tracks.forEach((track) => {
    const firstImage = track.album.images[0].url;
    const title = track.album.name;
    const artists = track.album.artists[0].name;
    const date = track.album.release_date;

    let duration_ms = track.duration_ms;
    let duration = msToTime(duration_ms); 

    songs.push({
      title: title,
      img: firstImage,
      artist: artists,
      date: date,
      duration,
    });
  });

  soundAuraButton.addEventListener("click", () => {
    console.log("Sound Aura Mode button clicked.");
    window.location.href = "https://.github.io/p/page3.html";
  });



  songs.forEach((song, index) => {
    const row = document.createElement("tr");
    row.classList.add("song-row");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td class="song-title">
          <img src="${song.img}" alt="Song Image">
          <div class="song-info">
            <div class="song-name">${song.title}</div>
            <div class="artist-name">${song.artist}</div>
          </div>
        </td>
        <td class="song-album">${song.date}</td>
        <td class="song-duration">${song.duration}</td>
      `;

    songList.appendChild(row);
  });
});
