

// Assign an object to the variable playlist and
// initialize the object with a key-value pair (artist name, song title)

var playlist = new Object({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'})

// add the song and artist as a key-value pair to the playlist object.
// return the whole playlist.
function updatePlaylist(playlist, name, title) {
  Object.assign(playlist, {[name]: title})
}

function removeFromPlaylist(playlist, name) {

}
