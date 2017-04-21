public class Album {
	private Song[] songList;
	private String albumArtist;
	private String albumGenre;
	private String albumName;

	public Album(Song[] songList, String albumArtist, String albumGenre, String albumName) {
		setSongList(songList);
		setAlbumArtist(albumArtist);
		setAlbumGenre(albumGenre);
		setAlbumName(albumName);
	}

	public Song[] getSongList() {
		return songList;
	}

	private void setSongList(Song[] songList) {
		this.songList = songList;
	}

	public String getAlbumArtist() {
		return albumArtist;
	}

	private void setAlbumArtist(String albumArtist) {
		this.albumArtist = albumArtist;
	}

	public String getAlbumGenre() {
		return albumGenre;
	}

	private void setAlbumGenre(String albumGenre) {
		this.albumGenre = albumGenre;
	}

	public String getAlbumName() {
		return albumName;
	}

	private void setAlbumName(String albumName) {
		this.albumName = albumName;
	}

	/*
	 * @description - returns a formatted String of the Album
	 * @param none
	 * @returns -
	 * 	“Rock music album Room on Fire is by The Strokes and contains the following songs:
			1. ‘What ever Happened?’ - time
			2. ‘Automatic Stop’ - time
			3. ’12:51’” - time
	 *
	 */
	public String toString() {
		return "";
	}
	
	public boolean equals(Album otherAlbum) {
		return true;
	}
}
