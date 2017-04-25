import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class AlbumTest {

	protected Song track1, track2, track3, track4, track5;
	protected Album testAlbumObj;

	@Before
	public void setUp() throws Exception {
		//set up 5 new SONGS to add to my SONGLIST inside my test album - I won't be testing the name, time, artist, album name on
		//these since I did already in SongTest.java
		track1 = new Song("Here Comes the Sun", 3.06, "The Beatles", "Abbey Road");
		track2 = new Song("Let it Be", 4.02, "The Beatles", "Let it Be");
		track3 = new Song("Let it Be", 4.02, "The Beatles", "Let it Be: Greatest Hits");
		track4 = new Song("Hey Jude", 7.06, "The Beatles", "1");
		track5 = new Song("In My Life", 2.42, "The Beatles", "Rubber Soul");

		//placing my 5 new tracks inside a Song array
		Song[] testAlbum = { track1, track2, track3, track4, track5 };
		
		//setting the album artist
		String albumArtist = "The Beatles";
		
		//setting the album genre
		String albumGenre = "Rock";
		
		//setting the album name
		String albumName = "Greatest Hits";

		//create ONE new instance of the Album object with the Song array, album artist, album genre, and album name
		//we created above
		testAlbumObj = new Album(testAlbum, albumArtist, albumGenre, albumName);
	}

	/*
	 * @description - testing the instance variables in the Album.java file
	 * TODO: create tests testing the instance variables (album name, album artist, album genre, and album Song list
	 * from the test album created above (testAlbumObj). The first test has been written for you.
	 */
	@Test
	public void instanceVariableTest() {
		//example test cases for the album artist instance variable
		assertTrue(testAlbumObj.getAlbumArtist().equals("The Beatles"));
		assertFalse(testAlbumObj.getAlbumArtist().equals("The Baetles"));
		
		//TODO: Add tests for all Album instance variables - 
	}

	/*
	 * @description - tests the toString() method in Album.java
	 * The toString() method in Album.java should print the album in the following format:
	 * 
	 * 	“Rock music album Room on Fire is by The Strokes and contains the following songs:
			1. ‘What ever Happened?’ - time
			2. ‘Automatic Stop’ - time
			3. ’12:51’” - time
	 *
	 *	“<albumGenre> music album <albumName> is by <albumArtist> and contains the following songs:
			1. ‘<songList[0]>’ - <songList[0] formatted time>
			2. ‘<songList[1]>’ - <songList[1] formatted time>
			3. ‘<songList[2]>’ - <songList[2] formatted time>
	 *
	 */
	@Test
	public void toStringTest() {
		String toStringOutput = "Rock music album 'Greatest Hits' is by The Beatles and contains the following songs:\n\t1. 'Here Comes the Sun' - 3:04\n\t2. 'Let it Be' - 4:01\n\t3. 'Let it Be' - 4:01\n\t4. 'Hey Jude' - 7:04\n\t5. 'In My Life' - 2:25\n";
		System.out.println("This is what I should be seeing:\n" + toStringOutput);
		System.out.println("This is what my toString method in Album.java is showing:\n" + testAlbumObj.toString());
		assertEquals(testAlbumObj.toString(), toStringOutput);
		assertNotEquals(testAlbumObj.toString(), null);
	}
	
	/*
	 * This test is running unit tests against the equals method in our Album.java file
	 */
	@Test
	public void isEqualsTest() {
		//TODO: fill in Song titles, artists, names, song lengths, etc. of new test album
		Song otherTrack1, otherTrack2, otherTrack3, otherTrack4, otherTrack5;
		otherTrack1 = new Song ("", 0.0, "", "");
		otherTrack2 = new Song ("", 0.0, "", "");
		otherTrack3 = new Song ("", 0.0, "", "");
		otherTrack4 = new Song ("", 0.0, "", "");
		otherTrack5 = new Song ("", 0.0, "", "");

		//creating new Song array from tracks created above
		Song[] otherSongList = { otherTrack1, otherTrack2, otherTrack3, otherTrack4, otherTrack5 };
		
		//TODO: fill in Album name, artist, genre, etc for new test album (create your own)
		Album otherTestAlbumObj = new Album(otherSongList, "", "", "");
		
		//our new equals method in Album.java should return true if an album is compared against itself
		assertTrue(testAlbumObj.equals(testAlbumObj));
		
		//our new equals method in Album.java should return false if comparing two different albums
		assertFalse(testAlbumObj.equals(otherTestAlbumObj));

	}

}
