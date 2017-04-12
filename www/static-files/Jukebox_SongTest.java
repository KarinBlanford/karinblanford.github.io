import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class SongTest {
	
	protected Song track1, track2, track3, track4, track5;

	@Before
	public void setUp() throws Exception {
		track1 = new Song("Here Comes the Sun", 3.06, "The Beatles", "Abbey Road");
		track2 = new Song("Let it Be", 4.02, "The Beatles", "Let it Be");
		track3 = new Song("Let it Be", 4.02, "The Beatles", "Let it Be: Greatest Hits");
		track4 = new Song("Hey Jude", 7.06, "The Beatles", "1");
		track5 = new Song("In My Life", 2.42, "The Beatles", "Rubber Soul");
	}

	@Test
	public void instanceVariableTest() {
		assertEquals(track1.getSongTitle(), "Here Comes the Sun");
		assertTrue(track1.getSongLength() == 3.06);
		assertEquals(track1.getSongArtist(), "The Beatles");
		assertEquals(track1.getAlbumName(), "Abbey Road");
		
		//TODO: implement assertions for track2 - track5
	}
	
	@Test
	public void toStringTest() {
		assertEquals(track1.toString(), "Here Comes the Sun is by The Beatles and is 3:04 minutes long");
		assertEquals(track2.toString(), "Let it Be is by The Beatles and is 4:01 minutes long");
		assertEquals(track3.toString(), "Let it Be is by The Beatles and is 4:01 minutes long");
		assertEquals(track4.toString(), "Hey Jude is by The Beatles and is 7:04 minutes long");
		assertEquals(track5.toString(), "In My Life is by The Beatles and is 2:25 minutes long");
	}
	
	@Test
	public void isEqualsTest() {
		assertFalse(track1.equals(track2));
		assertTrue(track2.equals(track3));
	}

}

