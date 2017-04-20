import songplayer.EndOfSongEvent;
import songplayer.EndOfSongListener;
import songplayer.SongPlayer;

/**
 * Play one audio file from the songfiles directory.
 * There is no listener for the end of song event.
 * 
 */
public class JukeboxPlayer {

	/**
	 * Play one audio file with a listener for the end of song event. A println
	 * is included to indicate the song is playing in a separate Thread.
	 */
	public static void main(String[] args) {
		
		EndOfSongListener waitForSongEnd = new WaitingForSongToEnd();
		
		SongPlayer.playFile(waitForSongEnd, "./songfiles/tada.wav");
		
		System.out.println("Song played in a separate Thread so this appears immediately");
		System.out.println("This program will not terminate until the song finishes...");
	}

	/**
	 * This inner class allows us to have an callback function that receive a
	 * songFinishedPlaying message whenever an audio file has been played.
	 * 
	 * Note: this is a static class because it is being called from main, which
	 * is a static context. If you are using a GUI, you won't need static
	 */
	private static class WaitingForSongToEnd implements EndOfSongListener {

		public void songFinishedPlaying(EndOfSongEvent eosEvent) {
			System.out.println("\nFinished " + eosEvent.fileName() + ", " + eosEvent.finishedDate() + ", "
					+ eosEvent.finishedTime());
		}
	}

}