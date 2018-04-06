import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CryptographTest {
	
	Cryptograph crypto = new Cryptograph();
	
	String msg1 = "The quick brown fox jumped over the lazy dog";
	String msg2 = "Th!$ $+r!ng !$ 3ncrypt3d!";

	@Test
	void testKeyEncryptionDecription() {
		assertEquals(crypto.keyEncryption("", 3), crypto.keyDecription("", 3));
		assertEquals(crypto.keyEncryption(msg1, 57), crypto.keyDecription(msg1, 57));
		assertEquals(crypto.keyEncryption(msg2, 235622467), crypto.keyDecription(msg2, 235622467));
	}
}
