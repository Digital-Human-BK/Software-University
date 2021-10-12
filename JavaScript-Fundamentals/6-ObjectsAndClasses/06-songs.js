function songs(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let songsNumber = array.shift();
  let playList = array.pop();

  for (let i = 0; i < songsNumber; i++) {
    let [listName, songName, songTime] = array[i].split("_")
    let song = new Song(listName, songName, songTime);
    songs.push(song);
  }

  if (playList === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.typeList === playList);
    filtered.forEach((i) => console.log(i.name));
  }
}
songs([3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite']
)
songs([4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater']
)
songs([2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all']
)