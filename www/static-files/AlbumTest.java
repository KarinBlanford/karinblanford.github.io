import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class AlbumTest {

	protected Song track1, track2, track3, track4, track5;
	protected Album testAlbumObj;

	@Before
	public void setUp() throws Exception {
		track1 = new Song("Here Comes the Sun", 3.06, "The Beatles", "Abbey Road");
		track2 = new Song("Let it Be", 4.02, "The Beatles", "Let it Be");
		track3 = new Song("Let it Be", 4.02, "The Beatles", "Let it Be: Greatest Hits");
		track4 = new Song("Hey Jude", 7.06, "The Beatles", "1");
		track5 = new Song("In My Life", 2.42, "The Beatles", "Rubber Soul");

		Song[] testAlbum = { track1, track2, track3, track4, track5 };
		String albumArtist = track1.getSongArtist();
		String albumGenre = "Rock";
		String albumName = track1.getAlbumName();

		testAlbumObj = new Album(testAlbum, albumArtist, albumGenre, albumName);
	}

	@Test
	public void instanceVariableTest() {
		//TODO: Add tests for all Album instance variables - 
		System.out.println(testAlbumObj.toString());
	}

	@Test
	public void toStringTest() {
		String toStringOutput = "Rock music album 'Abbey Road' is by The Beatles and contains the following songs:\n\t1. 'Here Comes the Sun' - 3:04\n\t2. 'Let it Be' - 4:01\n\t3. 'Let it Be' - 4:01\n\t4. 'Hey Jude' - 7:04\n\t5. 'In My Life' - 2:25\n";
		
		//TODO: add more test cases
		assertEquals(testAlbumObj.toString(), toStringOutput);
	}
	
	@Test
	public void isEqualsTest() {
		//TODO: fill in Song titles, artists, names, song lengths, etc.
		Song otherTrack1, otherTrack2, otherTrack3, otherTrack4, otherTrack5;
		otherTrack1 = new Song ("", 0.0, "", "");
		otherTrack2 = new Song ("", 0.0, "", "");
		otherTrack3 = new Song ("", 0.0, "", "");
		otherTrack4 = new Song ("", 0.0, "", "");
		otherTrack5 = new Song ("", 0.0, "", "");

		Song[] otherSongList = { otherTrack1, otherTrack2, otherTrack3, otherTrack4, otherTrack5 };
		//TODO: fill in Album name, artist, genre, etc
		Album otherTestAlbumObj = new Album(otherSongList, "", "", "");
		
		//TODO: add test cases to compare otherTestAlbumObj with testAlbumObj as well as testAlbumObj against itself (should be equal)
		assertFalse(testAlbumObj.equals(otherTestAlbumObj));

	}

}

